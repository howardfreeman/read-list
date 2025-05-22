"use client";

import { useEffect, useRef } from "react";
import { getBooks } from "../api/get-books";
import { Book } from "@/entities/book";
import { useSearchActions, useSearchTerm } from "../model/store";

export function SearchInput({
  setBooks,
}: {
  setBooks: React.Dispatch<React.SetStateAction<Book[] | null>>;
}) {
  const searchTerm = useSearchTerm();
  const { setSearchTerm } = useSearchActions();

  const controllerRef = useRef<AbortController | null>(null);

  // Cancel request when unmounting
  useEffect(() => {
    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  });

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    const validatedValue = searchTerm.trim();

    if (!validatedValue) {
      return;
    }

    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    controllerRef.current = new AbortController();
    const { signal } = controllerRef.current;

    if (e.key === "Enter") {
      try {
        const books = await getBooks(validatedValue, signal);
        setBooks(books);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") {
          console.log("Request was aborted");
        }
      }
    }
  };

  return (
    <div className="flex justify-center">
      <input
        className="w-80 h-10 px-2 rounded-lg focus:shadow focus:outline-none sm:w-96"
        type="text"
        placeholder="Найти книгу"
        autoFocus
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
