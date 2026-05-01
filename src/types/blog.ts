export interface BlogImage {
  alt?: string;
  url?: string;
}

export interface BlogFrontmatter {
  author?: string;
  description: string;
  image?: BlogImage;
  pubDate: Date | string;
  tags?: string[];
  title: string;
}

export interface BlogPostPreview extends BlogFrontmatter {
  href: string;
  slug: string;
}

export type HeadingLevel = "h2" | "h3";
