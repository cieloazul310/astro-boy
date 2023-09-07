/* eslint import/prefer-default-export: off */
import { defineRecipe } from "@pandacss/dev";
import { css } from "../../styled-system/css";
import type { SystemStyleObject } from "../../styled-system/types";

export const article = defineRecipe({
  className: "article",
  description: "The styles for the article component",
});

const common: SystemStyleObject = {
  mt: 2,
  _first: {
    mt: 0,
  },
  _last: {
    mb: 0,
  },
};

export const articleStyle = css({
  "& h1": {
    fontSize: ["xl", "2xl", "4xl"],
    mb: 6,
    ...common,
  },
  "& h2": {
    fontSize: ["xl", "2xl", "4xl"],
    mb: 6,
    ...common,
  },
  "& h3": {
    fontSize: ["lg", "lg", "xl"],
    mb: 4,
    ...common,
  },
  "& h4": {
    fontSize: ["md", "lg"],
    mb: 4,
    ...common,
  },
  "& h5": {
    fontSize: ["md", "md", "lg"],
    mb: 2,
    ...common,
  },
  "& h6": {
    fontSize: "md",
    mb: 2,
    ...common,
  },
  "& p": {
    fontSize: ["sm", "md"],
    my: 2,
  },
});
