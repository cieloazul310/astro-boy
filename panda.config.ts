import { defineSarkaraConfig } from "@cieloazul310/astro-sarkara/preset";

// https://panda-css.com/docs/references/config
export default defineSarkaraConfig({
  // primary and secondary colors is required
  // https://panda-css.com/docs/customization/theme#colors
  palette: { primary: "sky", secondary: "orange" },

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,ts,astro,mdx}",
    "./node_modules/@cieloazul310/**/*.{js,ts,astro}",
  ],

  // customizing theme
  theme: {
    extend: {},
  },
});
