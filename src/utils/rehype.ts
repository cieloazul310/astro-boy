/* eslint import/prefer-default-export: off */
import { rehype } from "rehype";
import addClasses from "rehype-class-names";
import rehypeExternalLinks, {
  type Options as RehypeExternalLinksOptions,
} from "rehype-external-links";
import { rehypeClassNamesOptions } from "@cieloazul310/astro-sarkara/classes";

const rehypeExternalLinksOptions: RehypeExternalLinksOptions = {
  target: "_blank",
  rel: "noopener noreferrer",
};

export async function rehypeIt(input: string) {
  const output = await rehype()
    // @ts-expect-error
    .use(addClasses, rehypeClassNamesOptions)
    .use(rehypeExternalLinks, rehypeExternalLinksOptions)
    .process(input);
  return output;
}
