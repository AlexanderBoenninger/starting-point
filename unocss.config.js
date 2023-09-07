// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from "unocss";
import transformerDirectives from "@unocss/transformer-directives";

const colors = {
  black: "#000000",

  blue: "#7F9FB8",
};

const themeColors = Object.fromEntries(
  Object.keys(colors).map((key) => [key, `var(--color-${key})`])
);
const cssColors = Object.entries(colors)
  .map(([key, value]) => `--color-${key}: ${value};`)
  .join("\n");

export default defineConfig({
  presets: [
    presetAttributify({
      /* preset options */
    }),
    presetUno(),
    // ...custom presets
  ],

  theme: { colors: themeColors },

  transformers: [transformerDirectives()],

  preflights: [
    {
      getCSS: () => `
  			:root {
          ${cssColors}
        }
  		`,
    },
  ],
});
