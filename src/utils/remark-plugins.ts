/* eslint import/prefer-default-export: off */
/* eslint no-param-reassign: warn */
import type { RemarkPlugin } from "@astrojs/markdown-remark";
import { visit } from "unist-util-visit";

export type RemarkPluginExcerptOptions = {
  length?: number;
};

export const remarkPluginExcerpt: RemarkPlugin<[RemarkPluginExcerptOptions]> =
  (options = { length: 140 }) =>
  (tree, file) => {
    const text: string[] = [];
    visit(tree, "text", (node, index, parent) => {
      if (parent?.type === "paragraph") {
        text.push(node.value);
      }
    });
    const excerpt = text.join("").slice(0, options.length);

    if (file.data.astro?.frontmatter) {
      file.data.astro.frontmatter.excerpt = excerpt;
    }
  };
