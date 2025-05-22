import { Book, BookCard } from "@/entities/book";

export function BookList({ books }: { books: Book[] }) {
  return (
    <div className="grid grid-cols-4 gap-5 w-fit mx-auto">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
}
