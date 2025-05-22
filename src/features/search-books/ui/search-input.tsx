"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { getBooks } from "../api/get-books";
import { Book } from "@/entities/book";

export function SearchInput({
  setBooks,
}: {
  setBooks: React.Dispatch<React.SetStateAction<Book[] | null>>;
}) {
  const [inputValue, setInputValue] = useState("");
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value === "") {
      setBooks(null);
    }
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    const validatedValue = inputValue.trim();

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
        const books = await getBooks(inputValue, signal);
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
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
