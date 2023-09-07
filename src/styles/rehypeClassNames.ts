import { css } from "../../styled-system/css";
import { paper } from "../../styled-system/patterns";
import type { SystemStyleObject } from "../../styled-system/types";

const common: SystemStyleObject = {
  mt: 4,
  _first: {
    mt: 0,
  },
  _last: {
    mb: 0,
  },
};

const rehypeClassNamesOptions = {
  h1: css({
    fontSize: ["xl", "2xl", "4xl"],
    mb: 6,
    ...common,
  }),
  h2: css({
    fontSize: ["xl", "2xl", "4xl"],
    mb: 6,
    ...common,
  }),
  h3: css({
    fontSize: ["lg", "lg", "xl"],
    mb: 4,
    ...common,
  }),
  h4: css({
    fontSize: ["md", "lg"],
    mb: 4,
    ...common,
  }),
  h5: css({
    fontSize: ["md", "md", "lg"],
    mb: 2,
    ...common,
  }),
  p: css({
    fontSize: ["sm", "md"],
    my: 2,
    ...common,
  }),
  a: css({
    color: { base: "primary.600", _hover: "primary.500" },
    textDecoration: { _hover: "underline" },
    _dark: { color: { base: "primary.400", _hover: "primary.300" } },
  }),
  blockquote: paper({
    my: 4,
  }),
  table: paper({
    my: 4,
  }),
};

export default rehypeClassNamesOptions;
