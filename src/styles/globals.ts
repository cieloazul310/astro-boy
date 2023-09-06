/* eslint import/prefer-default-export: warn */

const headingStyle = {
  fontWeight: "heading",
  mb: 2,
};

export const heading = {
  h1: {
    fontSize: "4xl",
    ...headingStyle,
  },
  h2: {
    fontSize: "2xl",
    ...headingStyle,
  },
  h3: {
    fontSize: "xl",
    ...headingStyle,
  },
  h4: {
    fontSize: "lg",
    ...headingStyle,
  },
  h5: {
    fontSize: "lg",
    ...headingStyle,
  },
  h6: {
    ...headingStyle,
  },
};
