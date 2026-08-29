import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const PostType = z.enum(["project", "post"]);

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
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
      featured: z.boolean().optional().default(false),
      type: PostType.optional(),
    }),
});

export const collections = {
  posts: postsCollection,
};
