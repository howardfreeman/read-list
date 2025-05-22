"use client";

import { Book } from "@/entities/book";
import { SearchInput } from "@/features/search-books";
import { useState } from "react";
import { BookList } from "./book-list";

export function BookListWithSearchInput() {
  const [books, setBooks] = useState<Book[]>([]);

  return (
    <div className="flex flex-col gap-10">
      <SearchInput onFetch={setBooks} />
      {books.length ? (
        <BookList books={books} />
      ) : (
        <div className="text-center text-sm text-slate-600">Не найдено</div>
      )}
    </div>
  );
}
