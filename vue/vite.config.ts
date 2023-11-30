import { fileURLToPath, URL } from "node:url";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'node:path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [nodeResolve(), vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  server: {
    host: "0.0.0.0"
  },
  build: {
    rollupOptions: {
      external: []
    }
  }
});
