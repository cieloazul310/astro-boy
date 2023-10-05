import { defineSemanticTokens } from "@pandacss/dev";
import type { PropertyTypes } from "../../styled-system/types/prop-type";

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

function definePalette(props: Record<string, PropertyTypes["colorPalette"]>) {
  return Object.entries(props).reduce<{
    [key: string]: {
      [key: string]: { value: string };
    };
  }>(
    (accum, [key, color]) => ({
      ...accum,
      [key]: shades.reduce<{
        [key: string]: { value: string };
      }>(
        (previousValue, curr) => ({
          ...previousValue,
          [curr]: { value: `{colors.${color}.${curr}}` },
        }),
        {},
      ),
    }),
    {},
  );
}

export const fontWeights = {
  heading: { value: "{fontWeights.bold}" },
};

export const bg = {
  DEFAULT: { value: "white" },
  dark: { value: "{colors.slate.950}" },
};

export const colors = {
  bg,
  ...definePalette({ primary: "sky", secondary: "orange" }),
};

export default defineSemanticTokens({
  fontWeights,
  colors,
});
