#!/usr/bin/env bash
set -euo pipefail

project_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

: "${CAPTURE_URL:?CAPTURE_URL is required}"
: "${CAPTURE_DIR:?CAPTURE_DIR is required}"

mkdir -p "$CAPTURE_DIR"
capture_dir="$(cd "$CAPTURE_DIR" && pwd)"

case "$capture_dir/" in
  "$project_dir"/*)
    echo "capture: CAPTURE_DIR must be outside the project source tree" >&2
    exit 1
    ;;
esac

log_file="$capture_dir/capture.log"
curl_log="$capture_dir/curl.log"
: > "$log_file"
: > "$curl_log"

session="capture-$(date +%s)-$$"
browser_open=0

now_ms() { date +%s%3N; }

report_timing() {
  local label="$1"
  local started="$2"
  printf '[timing] %s: %d ms\n' "$label" "$(( $(now_ms) - started ))"
}

is_transient() {
  grep -Eqi 'net::ERR_|ECONN|ETIMEDOUT|socket hang up|Target page, context or browser has been closed|Daemon process exited|Timeout [0-9]+ms exceeded|TimeoutError|browser .* is not open|Navigation failed' "$log_file"
}

fail_capture() {
  local label="$1"
  if is_transient; then
    echo "capture: $label failed for a temporary infrastructure reason" >&2
    exit 75
  fi
  echo "capture: $label failed" >&2
  exit 1
}

close_browser() {
  if (( browser_open == 0 )); then
    return 0
  fi

  local started status
  started=$(now_ms)
  status=0
  playwright-cli -s="$session" close >> "$log_file" 2>&1 || status=$?
  report_timing "close" "$started"
  browser_open=0
  return "$status"
}

cleanup() {
  local status=$?
  if ! close_browser && (( status == 0 )); then
    status=75
  fi
  exit "$status"
}
trap cleanup EXIT

preflight_started=$(now_ms)
curl_status=0
http_code=$(curl --silent --show-error --location --max-time 25 \
  --output /dev/null --write-out '%{http_code}' "$CAPTURE_URL" 2> "$curl_log") || curl_status=$?
report_timing "curl" "$preflight_started"

if (( curl_status != 0 )); then
  echo "capture: preview did not respond (curl exit $curl_status)" >&2
  cat "$curl_log" >&2 || true
  exit 75
fi

case "$http_code" in
  2*|3*)
    echo "capture: preview responded with HTTP $http_code"
    ;;
  408|425|429|5*)
    echo "capture: preview returned temporary HTTP $http_code" >&2
    exit 75
    ;;
  *)
    echo "capture: preview returned HTTP $http_code" >&2
    exit 1
    ;;
esac

open_started=$(now_ms)
browser_open=1
open_status=0
playwright-cli -s="$session" open "$CAPTURE_URL" --browser chrome >> "$log_file" 2>&1 || open_status=$?
report_timing "open" "$open_started"
if (( open_status != 0 )); then
  fail_capture "open"
fi

wait_script='() => new Promise((resolve) => {
  const started = Date.now();
  const tick = () => {
    const canvas = document.querySelector("canvas");
    const app = window.__STORMFALL__;
    if (document.readyState === "complete" && canvas && canvas.width > 100 && canvas.height > 100 && app) {
      requestAnimationFrame(() => setTimeout(() => resolve({
        ok: true,
        title: document.title,
        canvas: [canvas.width, canvas.height],
        readyState: document.readyState,
      }), 900));
      return;
    }
    if (Date.now() - started > 30000) {
      resolve({
        ok: false,
        reason: "rendered-content timeout",
        readyState: document.readyState,
        canvas: Boolean(canvas),
        app: Boolean(app),
      });
      return;
    }
    setTimeout(tick, 100);
  };
  tick();
})'

wait_started=$(now_ms)
wait_status=0
rendered=$(playwright-cli -s="$session" eval "$wait_script" --raw 2>> "$log_file") || wait_status=$?
report_timing "wait-rendered" "$wait_started"
if (( wait_status != 0 )); then
  fail_capture "wait-rendered"
fi
if ! grep -q '"ok": true' <<< "$rendered"; then
  echo "capture: page did not finish rendering: $rendered" >&2
  exit 1
fi
echo "capture: rendered $rendered"

if [[ "${CAPTURE_AUTO_START:-true}" == "true" ]]; then
  start_selector="${CAPTURE_START_SELECTOR:-#play-button}"
  start_clicked=$(now_ms)
  click_status=0
  playwright-cli -s="$session" click "$start_selector" >> "$log_file" 2>&1 || click_status=$?
  report_timing "auto-start" "$start_clicked"
  if (( click_status == 0 )); then
    sleep 1.2
  else
    echo "capture: start selector $start_selector was not clickable; capturing landing view" >&2
  fi
fi

capture_view() {
  local name="$1"
  local width="$2"
  local height="$3"
  local target="$capture_dir/final-$name.png"
  local started status size

  started=$(now_ms)
  status=0
  playwright-cli -s="$session" resize "$width" "$height" >> "$log_file" 2>&1 || status=$?
  report_timing "resize-$name" "$started"
  if (( status != 0 )); then
    fail_capture "resize-$name"
  fi

  sleep 0.8

  started=$(now_ms)
  status=0
  playwright-cli -s="$session" screenshot --filename="$target" >> "$log_file" 2>&1 || status=$?
  report_timing "screenshot-$name" "$started"
  if (( status != 0 )); then
    fail_capture "screenshot-$name"
  fi

  if [[ ! -s "$target" ]]; then
    echo "capture: screenshot was not written: $target" >&2
    exit 1
  fi

  size=$(stat -c '%s' "$target")
  if (( size < 5000 )); then
    echo "capture: screenshot looks blank or truncated ($size bytes): $target" >&2
    exit 1
  fi

  echo "capture: wrote $target ($size bytes)"
}

capture_view "desktop" 1440 900
capture_view "mobile" 390 844

if ! close_browser; then
  echo "capture: failed to close its browser session" >&2
  exit 75
fi

echo "capture: desktop and mobile screenshots are ready in $capture_dir"
