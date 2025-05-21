export interface Book {
  author_name: string[];
  first_publish_year: number;
  title: string;
}

export interface BookApiResponse {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  num_found: number;
  documentation_url: string;
  q: string;
  offset: null;
  docs: Book[];
}
