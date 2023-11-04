import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

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
