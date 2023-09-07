import { defineConfig } from "@pandacss/dev";
import { patterns, backgroundColorTransparentize, definePalette, bg, globalCss, textStyles } from './src/styles';

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
      tokens: {
        sizes: {
          headerHeight: { value: "56px" },
          contentMaxWidth: { value: "1280px" },
          sidebarWidth: { value: "320px" },
        },
        zIndex: {
          fab: { value: 100 },
          drawer: { value: 200 },
          drawerBackdrop: { value: 199 },
          header: { value: 10 },
        },
      },
      semanticTokens: {
        fontWeights: {
          heading: { value: "{fontWeights.bold}" },
        },
        colors: {
          bg,
          ...definePalette({ primary: "sky", secondary: "orange" }),
        },
      },
    },
  },
  patterns: {
    /* @ts-ignore */
    extend: {
      ...patterns,
    },
  },

  utilities: {
    extend: {
      backgroundColorTransparentize,
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
