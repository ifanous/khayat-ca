import type { CollectionEntry } from "astro:content";

export type BlogFrontmatter = CollectionEntry<"blog">["data"];

export type BlogPostPreview = BlogFrontmatter & {
  href: string;
  slug: string;
};

export type HeadingLevel = "h2" | "h3";
