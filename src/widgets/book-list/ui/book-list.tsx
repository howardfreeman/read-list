import { Book, BookCard } from "@/entities/book";
import { AddToReadButton } from "@/features/add-to-read";

export function BookList({ books }: { books: Book[] }) {
  return (
    <div className="grid grid-cols-4 gap-5 w-fit mx-auto">
      {books.map((book) => (
        <BookCard key={book.key} book={book}>
          <AddToReadButton book={book} />
        </BookCard>
      ))}
    </div>
  );
}
