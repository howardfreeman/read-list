import { Book } from "@/entities/book";
import { Button } from "@/shared/ui/button";

export function AddToReadButton({ book }: { book: Book }) {
  const handleClick = () => {
    console.log(book);
  };

  return <Button onClick={handleClick}>Добавить в прочитанное</Button>;
}
