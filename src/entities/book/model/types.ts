export interface Book {
  key: string;
  author_name: string[];
  first_publish_year?: number;
  title: string;
  cover_i?: string;
}

export interface BookApiResponse {
  docs: Book[];
}
