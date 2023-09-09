/* eslint import/prefer-default-export: off */
import { rehype } from "rehype";
import addClasses from "rehype-class-names";
import rehypeClassNamesOptions from "../styles/rehypeClassNames";

export async function rehypeIt(input: string) {
  const output = await rehype()
    // @ts-expect-error
    .use(addClasses, rehypeClassNamesOptions)
    .process(input);
  return output;
}
