export interface Review {
  authorName: string;
  publishedAt: string;
  rating: number;
  text: string;
}

export interface ReviewsData {
  reviews: Review[];
  summary: ReviewsSummary;
}

export interface ReviewsSummary {
  averageRating: number;
  reviewCount: number;
}
