"use client";

import { BookCard, useBookActions, useBooks } from "@/entities/book";
import { BookList } from "./book-list";
import { DeleteFromReadButton } from "@/features/delete-from-read";

export function ReadBookList() {
  const readBooks = useBooks();
  const { deleteBook } = useBookActions();

  return readBooks.length ? (
    <BookList title="Список прочитанного:">
      {readBooks.map((book) => (
        <BookCard key={book.key} book={book}>
          <DeleteFromReadButton onClick={deleteBook.bind(null, book.key)} />
        </BookCard>
      ))}
    </BookList>
  ) : (
    <div className="text-sm text-slate-600 text-center">
      Список прочитанного пуст.
    </div>
  );
}
