"use client";

import { Book } from "@/entities/book";
import { SearchInput } from "@/features/search-books";
import { useState } from "react";
import { FetchedBookList } from "./fetched-book-list";

export function BookListWithSearchInput() {
  const [books, setBooks] = useState<Book[] | null>(null);

  return (
    <div className="flex flex-col gap-10 mb-12">
      <SearchInput setBooks={setBooks} />

      {books === null ? null : books.length ? (
        <FetchedBookList books={books} />
      ) : (
        <div className="text-center text-sm text-slate-600">Не найдено</div>
      )}
    </div>
  );
}
