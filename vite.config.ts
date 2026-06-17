import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { vitePrerenderPlugin } from "vite-prerender-plugin";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    svgr(),
    vitePrerenderPlugin({
      renderTarget: "#root",
      additionalPrerenderRoutes: ["/about", "/contact", "/experience", "work"],
    }),
  ],
});
