/* eslint import/prefer-default-export: off */
/* eslint no-param-reassign: warn */
import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Root as MdastRoot } from "mdast";

export const remarkPluginExcerpt: Plugin<[], MdastRoot> =
  () => (tree, file) => {
    const text: string[] = [];
    visit(tree, "text", (node, index, parent) => {
      if (parent?.type === "paragraph") {
        text.push(node.value);
      }
    });
    const excerpt = text.join("").slice(0, 140);
    // @ts-ignore
    file.data.astro.frontmatter.excerpt = excerpt;
  };
