import { defineSarkaraConfig } from "@cieloazul310/astro-sarkara/preset";

export default defineSarkaraConfig({
  palette: { primary: "sky", secondary: "orange" },
  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx,astro}"],
});
