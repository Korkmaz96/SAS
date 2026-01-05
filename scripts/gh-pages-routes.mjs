// scripts/gh-pages-routes.mjs
import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve("dist");
const sourceIndex = path.join(distDir, "index.html");

if (!fs.existsSync(sourceIndex)) {
  console.error(
    `[ERROR] ${sourceIndex} not found. Run "vite build" first (dist/index.html must exist).`
  );
  process.exit(1);
}

/**
 * Routes, die bei Direktaufruf HTTP 200 liefern sollen.
 * (Entspricht deinen 13 erkannten Sitemap-Seiten)
 */
const routes = [
  "/", // optional (Root ist ohnehin dist/index.html)
  "/services",
  "/services/web-engineering",
  "/services/software-solutions",
  "/services/maintenance",
  "/industries",
  "/process",
  "/pricing",
  "/about",
  "/faq",
  "/contact",
  "/privacy",
  "/imprint",
];

const indexHtml = fs.readFileSync(sourceIndex, "utf8");

function writeRouteIndex(route) {
  if (route === "/") return; // Root ist bereits dist/index.html
  const clean = route.replace(/^\/+/, "").replace(/\/+$/, "");
  const targetDir = path.join(distDir, clean);
  const targetIndex = path.join(targetDir, "index.html");

  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(targetIndex, indexHtml, "utf8");
  console.log(`[OK] ${route} -> ${path.relative(distDir, targetIndex)}`);
}

routes.forEach(writeRouteIndex);

console.log("[DONE] Route entrypoints generated for GitHub Pages.");
