"use client";

import {
  SearchInput,
  useBooksQuery,
  useSearchTerm,
} from "@/features/search-books";
import { FetchedBookList } from "./fetched-book-list";
import { useState } from "react";

export function BookListWithSearchInput() {
  const searchTerm = useSearchTerm();
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState("");
  const { data, isLoading, isError } = useBooksQuery(
    submittedSearchTerm,
    !!submittedSearchTerm,
  );

  const books = data?.docs;

  return (
    <div className="flex flex-col gap-10 mb-12">
      <SearchInput
        searchTerm={searchTerm}
        onSearch={() => setSubmittedSearchTerm(searchTerm.trim())}
      />

      {isLoading && <div className="text-center">Загрузка...</div>}

      {isError && <div className="text-center">Ошибка</div>}

      {!books ? null : books.length ? (
        <FetchedBookList books={books} />
      ) : (
        <div className="text-center text-sm text-slate-600">Не найдено</div>
      )}
    </div>
  );
}
