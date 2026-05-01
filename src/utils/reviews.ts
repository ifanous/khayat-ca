import type { Review } from "../types/reviews";

export function byNewestFirst(
  left: Pick<Review, "publishedAt">,
  right: Pick<Review, "publishedAt">,
): number {
  return (
    new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime()
  );
}

export function formatReviewDate(dateString: string): string {
  return new Intl.DateTimeFormat("en-CA", {
    month: "short",
    year: "numeric",
  }).format(new Date(dateString));
}

export function getInitial(name: string): string {
  return name.trim().charAt(0).toUpperCase();
}

export function splitReviewText(
  text: string,
  maxLength: number,
): { excerpt: string; remainder: string } {
  if (text.length <= maxLength) {
    return { excerpt: text, remainder: "" };
  }

  const trimmed = text.slice(0, maxLength).trimEnd();
  const lastSpaceIndex = trimmed.lastIndexOf(" ");
  const splitIndex = lastSpaceIndex > 0 ? lastSpaceIndex : maxLength;

  return {
    excerpt: text.slice(0, splitIndex).trimEnd(),
    remainder: text.slice(splitIndex).trimStart(),
  };
}
