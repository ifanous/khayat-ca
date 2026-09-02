export interface ArticleMeta {
  author?: string;
  publishedTime?: string;
  tags?: string[];
}

export interface LayoutProps {
  article?: ArticleMeta;
  description: string;
  /**
   * Path or absolute URL of the social-card image for this page.
   * When omitted, falls back to the site-wide `/og-image.png`.
   */
  ogImage?: string;
  ogType?: "article" | "website";
  title: string;
  noIndex?: boolean;
}
