/**
 * Build a single normalized Google reviews cache from Google Takeout exports.
 *
 * What this script does:
 * - reads every JSON file in `reviews/`
 * - merges all review pages into one collection
 * - de-duplicates reviews by their Google resource name
 * - filters out star-only reviews that have no written comment
 * - sorts written reviews by most recent first
 * - writes the result to `src/data/google-reviews.json`
 *
 * This keeps the site fully static while still using real review data.
 * The generated JSON file is what the Astro component reads at build time.
 */

import fs from "node:fs";
import path from "node:path";

interface GoogleTakeoutFile {
  reviews?: GoogleTakeoutReview[];
}

interface GoogleTakeoutReview {
  comment?: string;
  createTime?: string;
  name: string;
  reviewer?: { displayName?: string };
  starRating?: keyof typeof STAR_RATINGS;
  updateTime?: string;
}

interface NormalizedReview {
  authorName: string;
  publishedAt: string;
  rating: number;
  text: string;
}

const rootDir = path.resolve(import.meta.dirname, "..");
const reviewsDir = path.join(rootDir, "reviews");
const outputPath = path.join(rootDir, "src", "data", "google-reviews.json");

const STAR_RATINGS = {
  FIVE: 5,
  FOUR: 4,
  ONE: 1,
  THREE: 3,
  TWO: 2,
} as const;

function byNewestFirst(
  left: { publishedAt: string },
  right: { publishedAt: string },
): number {
  return (
    new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime()
  );
}

function dedupeReviews(reviews: GoogleTakeoutReview[]): GoogleTakeoutReview[] {
  // The Takeout export can be split across multiple files/pages.
  // The Google review resource name is stable, so it is a safe de-dupe key.
  return [...new Map(reviews.map((review) => [review.name, review])).values()];
}

function hasKnownStarRating(
  review: GoogleTakeoutReview,
): review is GoogleTakeoutReview & { starRating: keyof typeof STAR_RATINGS } {
  return Boolean(review.starRating && review.starRating in STAR_RATINGS);
}

function normalizeReview(review: GoogleTakeoutReview): NormalizedReview | null {
  const text = review.comment?.trim() ?? "";

  if (text.length === 0) return null;

  const rating = review.starRating
    ? STAR_RATINGS[review.starRating]
    : undefined;

  if (rating === undefined) return null;

  return {
    authorName: review.reviewer?.displayName?.trim() || "Anonymous",
    publishedAt:
      review.createTime ?? review.updateTime ?? new Date(0).toISOString(),
    rating,
    text,
  };
}

function readTakeoutFiles(directoryPath: string): GoogleTakeoutReview[] {
  const inputFiles = fs
    .readdirSync(directoryPath)
    .filter((fileName) => fileName.endsWith(".json"))
    .sort()
    .map((fileName) => path.join(directoryPath, fileName));

  const reviews: GoogleTakeoutReview[] = [];

  for (const inputFile of inputFiles) {
    const rawFile = JSON.parse(fs.readFileSync(inputFile, "utf8")) as
      | GoogleTakeoutFile
      | GoogleTakeoutReview[];
    const fileReviews = Array.isArray(rawFile)
      ? rawFile
      : (rawFile.reviews ?? []);

    reviews.push(...fileReviews);
  }

  return reviews;
}

const allReviews = readTakeoutFiles(reviewsDir);
const uniqueReviews = dedupeReviews(allReviews);
const normalizedReviews = uniqueReviews
  .map(normalizeReview)
  .filter((review): review is NormalizedReview => review !== null)
  .sort(byNewestFirst);

const ratedReviews = uniqueReviews.filter(hasKnownStarRating);
const averageRating =
  ratedReviews.length > 0
    ? ratedReviews.reduce(
        (sum, ratedReview) => sum + STAR_RATINGS[ratedReview.starRating],
        0,
      ) / ratedReviews.length
    : 0;

const output = {
  reviews: normalizedReviews,
  summary: {
    averageRating: Number(averageRating.toFixed(1)),
    reviewCount: uniqueReviews.length,
  },
};

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`);

process.stdout.write(
  `Wrote ${normalizedReviews.length} text reviews (${uniqueReviews.length} total) to ${path.relative(rootDir, outputPath)}\n`,
);
