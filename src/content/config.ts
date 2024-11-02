import { defineCollection, z } from "astro:content";

const PostType = z.enum(["project", "post", "archive"]);

const postsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      author: z.string(),
      images: z
        .array(
          z.object({
            path: image(),
            alt: z.string(),
          }),
        )
        .optional(),
      tags: z.array(z.string()),
      type: PostType.optional().default("post"),
    }),
});

export const collections = {
  posts: postsCollection,
};
