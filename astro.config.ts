import { defineConfig } from "astro/config";
import pandacss from "@pandacss/astro";
import rehypeClassNames from "rehype-class-names";
import { rehypeClassNamesOptions, remarkPluginExcerpt } from "./src/utils";

// https://astro.build/config
export default defineConfig({
  integrations: [pandacss()],
  markdown: {
    remarkPlugins: [
      // @ts-ignore
      remarkPluginExcerpt,
    ],
    rehypePlugins: [
      // @ts-ignore
      [rehypeClassNames, rehypeClassNamesOptions],
    ],
  },
});
