import { defineConfig } from "@pandacss/dev";
import { gradientBox, paper, backgroundColorTransparentize, definePalette, bg, heading } from './src/styles';

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

  globalCss: {
    body: {
      backgroundColor: "bg",
      color: "black",
      _dark: {
        backgroundColor: "bg.dark",
        color: "white",
      },
    },
    ...heading,
    p: {
      lineHeight: 1.6,
    },
  },
  // Useful for theme customization
  theme: {
    extend: {
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
        },
      },
      semanticTokens: {
        fontWeights: {
          heading: { value: "{fontWeights.bold}"}
        },
        colors: {
          bg,
          ...definePalette({ primary: "sky", secondary: "orange" }),
        },
      },
    },
  },
  patterns: {
    extend: {
      /* @ts-ignore */
      paper,
      gradientBox,
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
