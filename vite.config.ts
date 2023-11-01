import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "./",
  plugins: [react(), tsconfigPaths(), svgr()],
  server: {
    proxy: {
      "/api": {
        target: "https://openapi.koreainvestment.com:9443",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ""),
        secure: false,
        ws: true,
      },
    },
  },
});
