// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import keystatic from "@keystatic/astro";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // Astro dev serves on-demand routes without an adapter; Netlify's middleware needs Deno and is unnecessary locally.
  adapter: process.argv.includes("dev")
    ? undefined
    : netlify({ imageCDN: false }),
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: [300, 400, 500, 600, 700],
    },
  ],
  integrations: [icon(), sitemap(), react(), keystatic()],
  site: "https://www.khayat.ca",
  vite: {
    plugins: [tailwindcss()],
  },
});
