import { definePattern } from "@pandacss/dev";

export const gradientBox = definePattern({
  description: "props for short-hand bgGradient",
  transform(props) {
    return {
      color: "white",
      bgGradient: "to-r",
      gradientFrom: { base: "primary.600", _dark: "primary.800" },
      gradientTo: { base: "secondary.100", _dark: "bg.dark" },
      ...props,
    };
  },
});

export const paper = definePattern({
  description: "Paper component with background and border-radius",
  properties: {
    hover: { type: "boolean" },
  },
  transform({ hover, ...props }) {
    return {
      bgct: {
        base: "primary.600/92",
        _hover: hover ? "primary.600/84" : undefined,
      },
      p: [4, 8],
      rounded: "xl",
      transition: "background .25s",
      ...props,
    };
  },
});
