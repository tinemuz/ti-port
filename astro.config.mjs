import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import compress from "astro-compress";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://tine.muzunza.com",
  integrations: [react(), tailwind(), mdx(), sitemap(), ViteImageOptimizer(), compress()],
  

  
});