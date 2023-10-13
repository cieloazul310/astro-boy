import { defineConfig } from "astro/config";
import type { RehypePlugin } from "@astrojs/markdown-remark";
import pandacss from "@pandacss/astro";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import rehypeClassNames, { type Options as RehypeClassNamesOptions } from "rehype-class-names";
import { rehypeClassNamesOptions } from "@cieloazul310/astro-sarkara/classes";
import rehypeExternalLinks, {
  type Options as RehypeExternalLinksOptions,
} from "rehype-external-links";
import { remarkPluginExcerpt } from "./src/utils";

const rehypeExternalLinksOptions: RehypeExternalLinksOptions = {
  target: "_blank",
  rel: "noopener noreferrer",
};

// https://astro.build/config
export default defineConfig({
  integrations: [
    pandacss(),
    mdx(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
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
