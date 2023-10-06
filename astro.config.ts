import { defineConfig } from "astro/config";
import pandacss from "@pandacss/astro";
import rehypeClassNames from "rehype-class-names";
import rehypeExternalLinks, { type Options as RehypeExternalLinksOptions } from "rehype-external-links";
import mdx from "@astrojs/mdx";
import { rehypeClassNamesOptions, remarkPluginExcerpt } from "./src/utils";

const rehypeExternalLinksOptions: RehypeExternalLinksOptions = {
  target: "_blank",
  rel: "noopener noreferrer",
};

// https://astro.build/config
export default defineConfig({
  integrations: [pandacss(), mdx()],
  markdown: {
    remarkPlugins: [
      // @ts-ignore
      remarkPluginExcerpt,
    ],
    rehypePlugins: [
      // @ts-ignore
      [rehypeClassNames, rehypeClassNamesOptions],
      // @ts-ignore
      [rehypeExternalLinks, rehypeExternalLinksOptions],
    ],
  },
});
