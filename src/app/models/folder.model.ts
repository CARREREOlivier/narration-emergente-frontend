export class Folder {
  id: number;
  title: string;
  description: string;
  text: string;
  user_id: number;
  type: number;
  language: number;
  isVisible: boolean;
  created_at: string;
  last_modified: string;
  slug: string;

  constructor(
    id: number,
    title: string,
    description: string,
    text: string,
    user_id: number,
    type: number,
    language: number,
    isVisible: boolean,
    created_at: string,
    last_modified: string,
    slug: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.text = text;
    this.user_id = user_id;
    this.type = type;
    this.language = language;
    this.isVisible = isVisible;
    this.created_at = created_at;
    this.last_modified = last_modified;
    this.slug = slug;
  }
}
