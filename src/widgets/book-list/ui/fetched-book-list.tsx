import { Book, BookCard, useBookActions, useBooks } from "@/entities/book";
import { AddToReadButton } from "@/features/add-to-read";
import { BookList } from "./book-list";
import { DeleteFromReadButton } from "@/features/delete-from-read";

export function FetchedBookList({ books }: { books: Book[] }) {
  const readBooks = useBooks();
  const { addBook, deleteBook } = useBookActions();

  return (
    <BookList title="Результаты поиска:">
      {books.map((book) => {
        const isBookRead = readBooks.some(
          (readBook) => readBook.key === book.key,
        );

        return (
          <BookCard key={book.key} book={book}>
            {isBookRead ? (
              <DeleteFromReadButton onClick={deleteBook.bind(null, book.key)} />
            ) : (
              <AddToReadButton onClick={addBook.bind(null, book)} />
            )}
          </BookCard>
        );
      })}
    </BookList>
  );
}
