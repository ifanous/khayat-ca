// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: [300, 400, 500, 600, 700],
    },
  ],
  integrations: [icon(), sitemap()],
  site: "https://www.khayat.ca",
  vite: {
    plugins: [tailwindcss()],
  },
});
