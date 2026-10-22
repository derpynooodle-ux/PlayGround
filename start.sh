#!/usr/bin/env bash
set -euo pipefail

project_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$project_dir"

port="${PORT:-3000}"
if ! [[ "$port" =~ ^[0-9]+$ ]] || (( port < 1 || port > 65535 )); then
  echo "[start] invalid PORT: $port" >&2
  exit 1
fi

web_dir="${OPENCODE_WEB_DIR:-${RUNNER_TEMP:-/home/runner/work/_temp}/omgithub-web}"
deployment_file="$web_dir/deployment-output.json"

now_ms() { date +%s%3N; }

report_timing() {
  local label="$1"
  local started="$2"
  printf '[timing] %s: %d ms\n' "$label" "$(( $(now_ms) - started ))"
}

run_timed() {
  local label="$1"
  shift
  local started status
  started=$(now_ms)
  status=0
  "$@" || status=$?
  report_timing "$label" "$started"
  return "$status"
}

mkdir -p "$web_dir"

dep_hash_started=$(now_ms)
dep_hash=$(node -e '
const fs = require("node:fs");
const crypto = require("node:crypto");
const hash = crypto.createHash("sha256");
for (const file of ["package.json", "package-lock.json"]) {
  if (fs.existsSync(file)) hash.update(fs.readFileSync(file));
}
process.stdout.write(hash.digest("hex"));
')
report_timing "dependency-hash" "$dep_hash_started"

dep_stamp="$web_dir/.dependencies-hash"
needs_install=0
if [[ ! -x node_modules/.bin/vite ]]; then
  needs_install=1
elif [[ ! -f "$dep_stamp" ]] || [[ "$(cat "$dep_stamp" 2>/dev/null || true)" != "$dep_hash" ]]; then
  needs_install=1
fi

if (( needs_install )); then
  if [[ -f package-lock.json ]]; then
    run_timed "npm-ci" npm ci --no-audit --no-fund
  else
    run_timed "npm-install" npm install --no-audit --no-fund
  fi
  printf '%s\n' "$dep_hash" > "$dep_stamp"
else
  echo "[start] dependencies are up to date"
fi

run_timed "build" npm run build

if [[ ! -f dist/index.html ]]; then
  echo "[start] build did not produce dist/index.html" >&2
  exit 1
fi
dist_dir="$(cd dist && pwd)"

deployment_started=$(now_ms)
DEPLOYMENT_FILE="$deployment_file" PROJECT_ROOT="$project_dir" DIST_ROOT="$dist_dir" node <<'NODE'
const fs = require("node:fs");
const path = require("node:path");
const file = process.env.DEPLOYMENT_FILE;
const payload = {
  project: process.env.PROJECT_ROOT,
  directory: process.env.DIST_ROOT,
};
fs.mkdirSync(path.dirname(file), { recursive: true });
fs.writeFileSync(file, `${JSON.stringify(payload)}\n`);
NODE
report_timing "deployment-metadata" "$deployment_started"

run_timed "serve-check" node --check scripts/serve.mjs

echo "[start] project: $project_dir"
echo "[start] static directory: $dist_dir"
echo "[start] deployment metadata: $deployment_file"
echo "[start] listening on 0.0.0.0:$port"
exec node scripts/serve.mjs "$dist_dir" "$port"
