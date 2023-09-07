import { css } from "../../styled-system/css";
import { paper, divider } from "../../styled-system/patterns";
import type { SystemStyleObject } from "../../styled-system/types";

const common: SystemStyleObject = {
  mt: 8,
  _first: {
    mt: 0,
  },
  _last: {
    mb: 0,
  },
};

const rehypeClassNamesOptions = {
  h1: css({
    ...common,
    fontSize: ["xl", "2xl", "4xl"],
    mb: 6,
  }),
  h2: css({
    ...common,
    fontSize: ["xl", "2xl", "4xl"],
    mb: 6,
  }),
  h3: css({
    ...common,
    fontSize: ["lg", "lg", "xl"],
    mb: 4,
  }),
  h4: css({
    ...common,
    fontSize: ["md", "lg"],
    mb: 4,
  }),
  h5: css({
    ...common,
    fontSize: ["md", "md", "lg"],
    mb: 2,
  }),
  p: css({
    ...common,
    fontSize: ["sm", "md"],
    my: 2,
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
    width: "100%",
    borderWidth: "1px",
    borderColor: { base: "primary.50", _dark: "primary.950" },
    my: 4,
    fontSize: ["sm", "md"],
  }),
  thead: paper(),
  tr: css({
    borderColor: { base: "primary.50", _dark: "primary.950" },
    borderBottomWidth: "1px",
    _last: {
      borderBottomWidth: 0,
    },
  }),
  th: css({
    p: 4,
  }),
  td: css({
    p: 4,
  }),
  hr: divider({
    orientation: "horizontal",
    color: { base: "primary.50", _dark: "primary.950" },
    my: 8,
  }),
  ul: css({
    my: 4,
    listStyleType: "disc",
    paddingInlineStart: 4,
  }),
  ol: css({
    my: 4,
    listStyleType: "decimal",
    paddingInlineStart: 4,
  }),
};

export default rehypeClassNamesOptions;
