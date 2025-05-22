import Image from "next/image";
import type { Book } from "../model/types";

export function BookCard({ book }: { book: Book }) {
  const { title, author_name, first_publish_year, cover_i } = book;

  return (
    <div className="flex flex-col w-44 border-2 border-slate-200 rounded-md overflow-hidden shadow">
      <div className="w-full aspect-[9/16] relative border-b-2 border-slate-200">
        {cover_i ? (
          <Image
            src={`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}
            alt={title}
            fill={true}
          />
        ) : (
          <div className="size-full bg-slate-300"></div>
        )}
      </div>
      <div className="p-3 bg-white flex-grow">
        <div className="text-sm font-semibold mb-1">{title}</div>
        <div className="text-xs font-normal text-slate-600 mb-2">
          {author_name[0]}
        </div>
        {first_publish_year && (
          <div className="text-sm">
            Опубликовано:{" "}
            <span className="font-semibold">{first_publish_year}</span>
          </div>
        )}
      </div>
    </div>
  );
}
