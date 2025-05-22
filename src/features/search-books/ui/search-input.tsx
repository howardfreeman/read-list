"use client";

import { useSearchActions } from "../model/store";

export function SearchInput({
  searchTerm,
  onSearch,
}: {
  searchTerm: string;
  onSearch: () => void;
}) {
  const { setSearchTerm } = useSearchActions();

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      onSearch();
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
