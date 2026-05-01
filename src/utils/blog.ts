import type { BlogFrontmatter, BlogPostPreview } from "../types/blog";

const blogImages = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/blog/*.webp",
  { eager: true },
);

export const getBlogImageSource = (slug: string): ImageMetadata | undefined => {
  const key = `/src/assets/blog/${slug}.webp`;
  return blogImages[key]?.default;
};

export const formatBlogDate = (value: BlogPostPreview["pubDate"]): string =>
  new Date(value).toLocaleDateString("en-CA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

interface MarkdownModule {
  frontmatter: BlogFrontmatter;
}

const blogModules = import.meta.glob<MarkdownModule>("/src/pages/blog/*.md");

const byNewestFirst = (a: BlogPostPreview, b: BlogPostPreview): number =>
  new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();

let cachedPosts: BlogPostPreview[] | null = null;

const loadBlogPosts = async (): Promise<BlogPostPreview[]> => {
  if (cachedPosts) return cachedPosts;

  const entries = await Promise.all(
    Object.entries(blogModules).map(async ([path, loader]) => {
      const module = await loader();
      const slug = path.split("/").pop()?.replace(/\.md$/, "");

      if (!slug) {
        throw new Error(`Could not derive blog slug from path: ${path}`);
      }

      return {
        ...module.frontmatter,
        href: `/blog/${slug}`,
        slug,
      } satisfies BlogPostPreview;
    }),
  );

  cachedPosts = entries.sort(byNewestFirst);
  return cachedPosts;
};

export const getAllBlogPosts = (): Promise<BlogPostPreview[]> =>
  loadBlogPosts();

export const getLatestBlogPosts = async (
  limit: number,
): Promise<BlogPostPreview[]> => {
  const posts = await loadBlogPosts();
  return posts.slice(0, limit);
};
