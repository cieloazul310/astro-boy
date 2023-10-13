import { defineConfig } from "astro/config";
import type { RehypePlugin } from "@astrojs/markdown-remark";
import pandacss from "@pandacss/astro";
import rehypeClassNames, { type Options as RehypeClassNamesOptions } from "rehype-class-names";
import rehypeExternalLinks, {
  type Options as RehypeExternalLinksOptions,
} from "rehype-external-links";
import mdx from "@astrojs/mdx";
import { rehypeClassNamesOptions } from "@cieloazul310/astro-sarkara/classes";
import { remarkPluginExcerpt } from "./src/utils";

const rehypeExternalLinksOptions: RehypeExternalLinksOptions = {
  target: "_blank",
  rel: "noopener noreferrer",
};

// https://astro.build/config
export default defineConfig({
  integrations: [pandacss(), mdx()],
  markdown: {
    remarkPlugins: [remarkPluginExcerpt],
    rehypePlugins: [
      [
        rehypeClassNames as RehypePlugin<[RehypeClassNamesOptions]>,
        rehypeClassNamesOptions,
      ],
      [
        rehypeExternalLinks as RehypePlugin<[RehypeExternalLinksOptions]>,
        rehypeExternalLinksOptions,
      ],
    ],
  },
});
