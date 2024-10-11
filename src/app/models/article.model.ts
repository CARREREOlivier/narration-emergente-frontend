export class Article {
  id: number;
  title: string;
  description: string;
  text: string;
  author_id: number;
  folder_id: number;
  isVisible: boolean;
  created_at: string;
  last_modified: string;
  slug: string;

  constructor(
    id: number,
    title: string,
    description: string,
    text: string,
    author_id: number,
    folder_id: number,
    isVisible: boolean,
    created_at: string,
    last_modified: string,
    slug: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.text = text;
    this.author_id = author_id;
    this.folder_id = folder_id;
    this.isVisible = isVisible;
    this.created_at = created_at;
    this.last_modified = last_modified;
    this.slug = slug;
  }
}
