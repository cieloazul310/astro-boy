import { cva } from "../../styled-system/css";

export const buttonBase = cva({
  base: {
    rounded: "md",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    shadow: "sm",
    cursor: "pointer",
  },
  variants: {
    visual: {
      solid: {
        bg: { base: "colorPalette.600", _hover: "colorPalette.700" },
        color: "white",
        _dark: { bg: { base: "colorPalette.700", _hover: "colorPalette.600" } },
      },
      outline: {
        borderWidth: "1px",
        borderColor: { base: "colorPalette.700", _dark: "colorPalette.200" },
        color: { base: "colorPalette.700", _dark: "colorPalette.200" },
        _hover: {
          color: { base: "colorPalette.500", _dark: "colorPalette.50" },
        },
      },
    },
    size: {
      sm: { fontSize: "xs", gap: 1 },
      md: { fontSize: "md", gap: 1 },
      lg: { fontSize: "xl", gap: 1 },
      xl: { fontSize: "4xl", gap: 2 },
    },
  },
  defaultVariants: {
    visual: "solid",
    size: "md",
  },
});

export const badge = cva({
  base: {
    rounded: "md",
    px: 2,
    py: 1,
    fontWeight: "bolder",
    color: { base: "colorPalette.800", _dark: "colorPalette.100" },
    bg: { base: "colorPalette.100", _dark: "colorPalette.900" },
  },
  variants: {
    size: {
      xs: { fontSize: "xs" },
      sm: { fontSize: "sm" },
      md: { fontSize: "md" },
      lg: { fontSize: "lg" },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});
