import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://tine.muzunza.com",
  integrations: [react(), mdx(), sitemap(), compress()],

  markdown: {
    shikiConfig: {
      themes: {
        light: "vitesse-light",
        dark: "andromeeda",
      },
      defaultColor: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
