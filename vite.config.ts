import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

function normalizeBasePath(basePath: string | undefined) {
  if (!basePath || basePath === "/") {
    return "/";
  }

  const trimmed = basePath.replace(/^\/+|\/+$/g, "");
  return `/${trimmed}/`;
}

function resolveBasePath() {
  if (process.env.PAGES_BASE_PATH) {
    return normalizeBasePath(process.env.PAGES_BASE_PATH);
  }

  const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];

  if (process.env.GITHUB_ACTIONS === "true" && repositoryName) {
    return normalizeBasePath(repositoryName);
  }

  return "/";
}

// https://vitejs.dev/config/
export default defineConfig({
  base: resolveBasePath(),
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
});
