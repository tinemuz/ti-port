import { defineCollection, z } from "astro:content";
const writingCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      author: z.string(),
      cover: z.object({
          path: image(),
          alt: z.string(),
        }),
      
      tags: z.array(z.string()),
    }),
});

export const collections = {
  writing: writingCollection,
};
