import { bookApi } from "@/entities/book";

export async function getBooks(searchValue: string, signal?: AbortSignal) {
  const data = await bookApi.getBooks(searchValue, signal);
  return data.docs;
}
