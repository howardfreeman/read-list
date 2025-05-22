import { bookApi } from "@/entities/book";
import { useQuery } from "@tanstack/react-query";

export const useBooksQuery = (searchTerm: string, isEnabled = false) =>
  useQuery(bookApi.getBooksQueryOptions(searchTerm, isEnabled));
