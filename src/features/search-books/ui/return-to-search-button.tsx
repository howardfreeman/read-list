import { Button } from "@/shared/ui/button";

export function ReturnToSearchButton({ onClick }: { onClick: () => void }) {
  return (
    <Button variant="secondary" onClick={onClick}>
      Вернуть в поиск
    </Button>
  );
}
