import { jsonApiInstance } from "@/shared/api/api-instance";
import { BookApiResponse } from "../model/types";
import { queryOptions } from "@tanstack/react-query";

const DEFAULT_RESPONSE_LIMIT = 10;

export const bookApi = {
  getBooksQueryOptions: (
    searchTerm: string,
    isEnabled = false,
    limit = DEFAULT_RESPONSE_LIMIT,
  ) => {
    return queryOptions({
      queryKey: ["books", searchTerm, limit],
      queryFn: (meta) =>
        jsonApiInstance<BookApiResponse>(
          `https://openlibrary.org/search.json?q=${searchTerm}&limit=${limit}&fields=key,title,author_name,first_publish_year,cover_i`,
          {
            signal: meta.signal,
          },
        ),
      enabled: isEnabled,
    });
  },
};
