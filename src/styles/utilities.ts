/* eslint import/prefer-default-export: warn */
import { defineUtility } from "@pandacss/dev";

/**
 * https://play.panda-css.com/huZH-3NCkd
 */
export const backgroundColorTransparentize = defineUtility({
  shorthand: ["bgct", "bgt"],
  property: "backgroundColor",
  className: "transparentize_bgc",
  values: { type: "string" },
  transform: (value: string, { token }) => {
    const lastIndex = value?.lastIndexOf("/");
    if (!lastIndex) {
      return {};
    }
    if (typeof value?.substring !== "function") {
      return {};
    }
    const color = value?.substring(0, lastIndex);
    if (!color) {
      return {};
    }
    const amount = value.split("/").at(-1);
    const colorValue = token(`colors.${color}`);

    const amountValue = token(`opacity.${amount}`)
      ? token(`opacity.${amount}`) * 100
      : `${amount}%`;
    return {
      backgroundColor: `color-mix(in srgb, transparent ${amountValue}, ${colorValue})`,
    };
  },
});
