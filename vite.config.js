import { resolve } from "path";
import UnoCSS from "unocss/vite";
import kirby from "vite-plugin-kirby";
import { globSync } from "glob";

const input = globSync("site/templates/*.js");
input.push("site/scripts/index.js");

export default ({ mode }) => ({
  root: "site",
  base: mode === "development" ? "/" : "/dist/",

  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "site") }],
  },

  css: { devSourcemap: true },

  build: {
    outDir: resolve(process.cwd(), "public/dist"),
    emptyOutDir: true,
    rollupOptions: { input },
  },

  plugins: [UnoCSS(), kirby()],
});
