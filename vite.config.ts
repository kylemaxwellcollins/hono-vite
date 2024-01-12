import { defineConfig } from "vite";
import devServer from "@hono/vite-dev-server";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000, // change to a custom port
  },
  build: {
    outDir: "build",
    emptyOutDir: true, // remove all files in outDir before each build

    rollupOptions: {
      output: {
        dir: "build",
        entryFileNames: "assets/scripts.js",
        assetFileNames: "assets/styles.css",
      },
    },
  },

  css: {
    devSourcemap: true, // this one
  },

  publicDir: "www/public",

  plugins: [
    devServer({
      entry: "server.tsx",
      exclude: [
        // We need to override this option since the default setting doesn't fit
        /.*\.tsx?($|\?)/,
        /.*\.(s?css|less)($|\?)/,
        /.*\.(svg|png)($|\?)/,
        /^\/@.+$/,
        /^\/favicon\.ico$/,
        /^\/(public|assets|static)\/.+/,
        /^\/node_modules\/.*/,
      ],
      injectClientScript: false, // This option is buggy, disable it and inject the code manually
    }),
  ],
});
