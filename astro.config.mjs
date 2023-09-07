import { defineConfig } from "astro/config";
import pandacss from "@pandacss/astro";
import rehypeClassNames from 'rehype-class-names'; 
import rehypeClassNamesOptions from './src/styles/rehypeClassNames';

// https://astro.build/config
export default defineConfig({
  integrations: [pandacss()],
  markdown: {
    syntaxHighlight: "prism",
    rehypePlugins: [[rehypeClassNames, rehypeClassNamesOptions]]
  },
});
