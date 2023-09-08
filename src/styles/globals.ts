import { defineGlobalStyles } from "@pandacss/dev";

const body = {
  backgroundColor: "bg",
  color: "black",
  _dark: {
    backgroundColor: "bg.dark",
    color: "white",
  },
};

const headingStyle = {
  textStyle: "heading",
};

const heading = {
  h1: {
    ...headingStyle,
  },
  h2: {
    ...headingStyle,
  },
  h3: {
    ...headingStyle,
  },
  h4: {
    ...headingStyle,
  },
  h5: {
    ...headingStyle,
  },
  h6: {
    ...headingStyle,
  },
};

const globalCss = defineGlobalStyles({
  body,
  ...heading,
  ".astro-code": {
    p: 4,
    my: 4,
    rounded: "xl",
  },
});

export default globalCss;
