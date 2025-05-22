import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { Book } from "./types";

interface BookActions {
  addBook: (book: Book) => void;
  deleteBook: (bookKey: string) => void;
}

interface BookState {
  books: Book[];
  actions: BookActions;
}

const useBookStore = create<BookState>()(
  devtools(
    immer(
      persist(
        (set) => ({
          books: [],
          actions: {
            addBook: (book: Book) =>
              set((state) => {
                state.books.push(book);
              }),

            deleteBook: (bookKey: string) =>
              set((state) => {
                state.books = state.books.filter(
                  (book) => book.key !== bookKey,
                );
              }),
          },
        }),
        {
          name: "book-storage",
          partialize: (state) => ({ books: state.books }),
        },
      ),
    ),
  ),
);

export const useBooks = () => useBookStore((state) => state.books);
export const useBookActions = () => useBookStore((state) => state.actions);
