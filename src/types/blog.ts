export interface BlogFrontmatter {
  author?: string;
  description: string;
  image?: BlogImage;
  pubDate: Date | string;
  /**
   * Optional last-revised date. When set, drives the BlogPosting
   * `dateModified` JSON-LD field. Bump this when correcting typos or
   * refreshing facts so search engines (and AI search) see the post as
   * actively maintained. Falls back to `pubDate` when omitted.
   */
  updatedDate?: Date | string;
  tags?: string[];
  title: string;
}

export interface BlogImage {
  alt?: string;
  url?: string;
}

export interface BlogPostPreview extends BlogFrontmatter {
  href: string;
  slug: string;
}

export type HeadingLevel = "h2" | "h3";
