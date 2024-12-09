/* eslint-disable-next-line import/no-unresolved */
import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { getBlogs, getCategories } from "@/utils/microcms";

const post = defineCollection({
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

const microCMSPost = defineCollection({
  loader: async () => {
    const allBlogs = await getBlogs({
      fields: ["id", "title", "publishedAt", "category", "eyecatch"],
    });
    return allBlogs.contents.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
  },
  schema: z.object({
    id: z.string(),
    title: z.string(),
    publishedAt: z.string().datetime(),
    category: z
      .object({
        id: z.string(),
        name: z.string(),
      })
      .nullish(),
    eyecatch: z
      .object({
        url: z.string().url(),
        width: z.number().int(),
        height: z.number().int(),
      })
      .nullish(),
  }),
});

const microCMSCategories = defineCollection({
  loader: async () => {
    const categories = await getCategories({ fields: ["id", "name"] });
    return categories.contents;
  },
  schema: z.object({
    id: z.string(),
    name: z.string(),
  }),
});

export const collections = {
  post,
  microCMSPost,
  microCMSCategories,
};
