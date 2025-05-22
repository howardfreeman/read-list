import { BookListWithSearchInput, ReadBookList } from "@/widgets/book-list";

export default function Home() {
  return (
    <>
      <h1>Read List</h1>
      <BookListWithSearchInput />
      <ReadBookList />
    </>
  );
}
