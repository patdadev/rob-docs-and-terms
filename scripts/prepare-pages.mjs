import { copyFileSync, existsSync, writeFileSync } from "fs";
import { resolve } from "path";

const distDir = resolve("dist");
const indexPath = resolve(distDir, "index.html");
const notFoundPath = resolve(distDir, "404.html");
const noJekyllPath = resolve(distDir, ".nojekyll");

if (!existsSync(indexPath)) {
  throw new Error(`Cannot prepare GitHub Pages output because ${indexPath} does not exist.`);
}

copyFileSync(indexPath, notFoundPath);
writeFileSync(noJekyllPath, "");

console.log("GitHub Pages artifacts prepared");
