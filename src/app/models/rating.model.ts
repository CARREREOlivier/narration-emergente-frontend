export class RatingModel {
  id: number;
  article_id: number | null; // Can be null for folder ratings
  folder_id: number | null;  // Can be null for article ratings
  user_id: number;
  rate: number;

  constructor(
    id: number,
    article_id: number | null,
    folder_id: number | null,
    user_id: number,
    rate: number
  ) {
    this.id = id;
    this.article_id = article_id;
    this.folder_id = folder_id;
    this.user_id = user_id;
    this.rate = rate;
  }
}
