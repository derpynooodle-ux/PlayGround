import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, resolve, sep } from "node:path";

const root = resolve(process.argv[2] ?? process.env.DIST_DIR ?? "dist");
const port = Number(process.argv[3] ?? process.env.PORT ?? 3000);
const indexFile = join(root, "index.html");

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error(`[serve] invalid port: ${port}`);
  process.exit(1);
}
if (!existsSync(indexFile)) {
  console.error(`[serve] missing index.html in ${root}`);
  process.exit(1);
}

const types = new Map([
  [".css", "text/css; charset=utf-8"],
  [".glb", "model/gltf-binary"],
  [".gltf", "model/gltf+json"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".jpeg", "image/jpeg"],
  [".jpg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".mjs", "text/javascript; charset=utf-8"],
  [".mp3", "audio/mpeg"],
  [".ogg", "audio/ogg"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain; charset=utf-8"],
  [".wasm", "application/wasm"],
  [".webp", "image/webp"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
]);

function sendFile(req, res, file, status = 200) {
  const size = statSync(file).size;
  const extension = extname(file).toLowerCase();
  res.writeHead(status, {
    "Cache-Control": extension === ".html" ? "no-store" : "public, max-age=0, must-revalidate",
    "Content-Length": size,
    "Content-Type": types.get(extension) ?? "application/octet-stream",
    "X-Content-Type-Options": "nosniff",
  });
  if (req.method === "HEAD") {
    res.end();
    return;
  }
  const stream = createReadStream(file);
  stream.on("error", () => {
    if (!res.headersSent) res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Internal server error");
  });
  stream.pipe(res);
}

function sendText(res, status, body) {
  res.writeHead(status, {
    "Cache-Control": "no-store",
    "Content-Length": Buffer.byteLength(body),
    "Content-Type": "text/plain; charset=utf-8",
    "X-Content-Type-Options": "nosniff",
  });
  res.end(body);
}

const server = createServer((req, res) => {
  try {
    if (req.method !== "GET" && req.method !== "HEAD") {
      res.setHeader("Allow", "GET, HEAD");
      sendText(res, 405, "Method not allowed");
      return;
    }

    let pathname;
    try {
      pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    } catch {
      sendText(res, 400, "Bad request");
      return;
    }

    let file = resolve(root, pathname.replace(/^\/+/, ""));
    if (file !== root && !file.startsWith(root + sep)) {
      sendText(res, 403, "Forbidden");
      return;
    }

    if (existsSync(file) && statSync(file).isDirectory()) file = join(file, "index.html");

    if (!existsSync(file) || !statSync(file).isFile()) {
      if (extname(file) !== "") {
        sendText(res, 404, "Not found");
        return;
      }
      file = indexFile;
    }

    sendFile(req, res, file);
  } catch (error) {
    console.error(`[serve] ${req.method} ${req.url}: ${error.message}`);
    if (!res.headersSent) sendText(res, 500, "Internal server error");
    else res.end();
  }
});

server.listen(port, "0.0.0.0", () => {
  console.log(`[serve] serving ${root} at http://0.0.0.0:${port}`);
});

function shutdown() {
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(0), 1000).unref();
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
