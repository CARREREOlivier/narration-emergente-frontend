export interface AarWithArticles {
  id: number;
  title: string;
  description: string;
  text: string;
  slug: string;
  isVisible: boolean;
  created_at: string;
  last_modified: string;
  author_name: string;
  author_id: number;
  articles: {
    id: number;
    title: string;
    description: string;
    created_at: string;
    last_modified: string;
    slug: string;
  }[];
}
