import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import rehypeClassNames from "rehype-class-names";
import rehypeExternalLinks from "rehype-external-links";
import mdxClasses from "./src/mdx-classes";
import { remarkPluginExcerpt } from "./src/utils";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon(),
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
      [rehypeClassNames, mdxClasses],
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: "noopener noreferrer",
        },
      ],
    ],
  },
});
