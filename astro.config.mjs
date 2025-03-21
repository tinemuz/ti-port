import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://tine.muzunza.com",
  integrations: [react(), tailwind(), mdx(), sitemap(), compress()],
  markdown: {
    shikiConfig: {
      themes: {
        light: "vitesse-light",
        dark: "andromeeda",
      },
      defaultColor: false,
    },
  },
});
