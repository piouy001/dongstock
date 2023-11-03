import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "./",
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
    tsconfigPaths(),
    svgr(),
  ],
  server: {
    proxy: {
      "/api": {
        target: "https://api.github.com/",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ""),
        secure: false,
        ws: true,
      },
    },
  },
});
