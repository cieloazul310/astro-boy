import { defineConfig } from "@pandacss/dev";
import {
  globalCss,
  patterns,
  recipes,
  semanticTokens,
  textStyles,
  tokens,
  utilities,
} from "./src/styles";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx,astro}"],

  // Files to exclude
  exclude: [],

  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
  },
  globalCss,
  // Useful for theme customization
  theme: {
    extend: {
      textStyles,
      tokens,
      semanticTokens,
      recipes,
    },
  },
  patterns,
  utilities,
  // The output directory for your css system
  outdir: "styled-system",
});
