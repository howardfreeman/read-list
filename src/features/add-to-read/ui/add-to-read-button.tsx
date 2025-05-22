"use client";

// import { Book, useBookActions } from "@/entities/book";
import { Button } from "@/shared/ui/button";

export function AddToReadButton({ onClick }: { onClick: () => void }) {
  return <Button onClick={() => onClick()}>Добавить в прочитанное</Button>;
}
