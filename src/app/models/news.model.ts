export class News {
  id: number;
  title: string;
  text: string;
  isVisible: boolean;
  created_at: string;
  modified_at: string;
  slug: string;

  constructor(
    id: number,
    title: string,
    text: string,
    isVisible: boolean,
    created_at: string,
    modified_at: string,
    slug: string
  ) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.isVisible = isVisible;
    this.created_at = created_at;
    this.modified_at = modified_at;
    this.slug = slug;
  }
}
