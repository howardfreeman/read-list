"use client";

import { Button } from "@/shared/ui/button";

export function DeleteFromReadButton({ onClick }: { onClick: () => void }) {
  return (
    <Button variant="destructive" onClick={() => onClick()}>
      Удалить
    </Button>
  );
}
