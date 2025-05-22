import { jsonApiInstance } from "@/shared/api/api-instance";
import { BookApiResponse } from "../model/types";

const DEFAULT_RESPONSE_LIMIT = 10;

export const bookApi = {
  getBooks: (
    searchValue: string,
    signal?: AbortSignal,
    limit: number = DEFAULT_RESPONSE_LIMIT,
  ): Promise<BookApiResponse> =>
    jsonApiInstance(
      `https://openlibrary.org/search.json?q=${searchValue}&limit=${limit}&fields=key,title,author_name,first_publish_year,cover_i`,
      {
        signal,
      },
    ),
};
