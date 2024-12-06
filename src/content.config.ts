import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const postCollection = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "**/*.mdx"],
    base: "./src/content/post",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      author: z.string().optional(),
      featuredImg: image()
        .optional()
        .catch((ctx) => {
          /* eslint-disable-next-line @typescript-eslint/no-unused-expressions */
          ctx.error;
          return undefined;
        }),
      featuredImgAlt: z.string().optional(),
    }),
});

export const collections = {
  post: postCollection,
};
