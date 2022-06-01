/// <reference types="vitest" />
import { configDefaults } from "vitest/config";
import { defineConfig } from "vite";
const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  mode: isProd ? "production" : "development",
  server: {
    open: true,
    port: 3000,
    host: "localhost",
    https: false,
  },
  
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets/",
    cssCodeSplit: true,
    assetsInlineLimit: 10000,
    sourcemap: !!isProd,
    chunkSizeWarningLimit: 500,
  },
  test: {
    exclude: [...configDefaults.exclude, "packages/template/*"],
  },
});
