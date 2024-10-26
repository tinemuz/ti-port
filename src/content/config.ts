import { defineCollection, z } from "astro:content";

const wordsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      author: z.string(),
      cover: z
        .object({
          path: image(),
          alt: z.string(),
        })
        .optional(),

      tags: z.array(z.string()),
    }),
});

export const collections = {
  words: wordsCollection,
};
