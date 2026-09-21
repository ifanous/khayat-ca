import { getCollection } from "astro:content";

import type { BlogPostPreview } from "../types/blog";

export const formatBlogDate = (value: BlogPostPreview["pubDate"]): string =>
  value.toLocaleDateString("en-CA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const byNewestFirst = (left: BlogPostPreview, right: BlogPostPreview): number =>
  right.pubDate.getTime() - left.pubDate.getTime();

const loadBlogPosts = async (): Promise<BlogPostPreview[]> => {
  const entries = await getCollection("blog");

  return entries
    .map((post) => ({
      ...post.data,
      href: `/blog/${post.id}`,
      slug: post.id,
    }))
    .sort(byNewestFirst);
};

export const getAllBlogPosts = (): Promise<BlogPostPreview[]> =>
  loadBlogPosts();

export const getLatestBlogPosts = async (
  limit: number,
): Promise<BlogPostPreview[]> => {
  const posts = await loadBlogPosts();

  return posts.slice(0, limit);
};
