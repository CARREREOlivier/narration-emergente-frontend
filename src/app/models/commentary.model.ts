export class Commentary {
  id: number;
  article_id: number | null; // Can be null for folder commentaries
  folder_id: number | null;  // Can be null for article commentaries
  user_id: number;
  text: string;

  constructor(
    id: number,
    article_id: number | null,
    folder_id: number | null,
    user_id: number,
    text: string
  ) {
    this.id = id;
    this.article_id = article_id;
    this.folder_id = folder_id;
    this.user_id = user_id;
    this.text = text;
  }
}
