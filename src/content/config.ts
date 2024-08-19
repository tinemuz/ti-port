import { defineCollection, z } from "astro:content";
const postCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        author: z.string(),
        image: z.object({
            path: z.string(),
            alt: z.string()
        }),
        tags: z.array(z.string()),
    })
});

export const collections = {
    posts: postCollection,
}

