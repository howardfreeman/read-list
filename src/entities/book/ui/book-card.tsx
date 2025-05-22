import Image from "next/image";
import type { Book } from "../model/types";
import clsx from "clsx";

export function BookCard({
  book,
  children,
}: {
  book: Book;
  children?: Readonly<React.ReactNode>;
}) {
  const { title, author_name, first_publish_year, cover_i } = book;

  return (
    <div className="flex flex-col w-52 bg-white border-2 border-slate-200 rounded-md overflow-hidden shadow">
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
      <div className="p-3 flex-grow">
        <div
          className={clsx(
            "text-sm font-semibold mb-1",
            title.includes("War") && "text-red-500",
          )}
        >
          {title}
        </div>

        {author_name && (
          <div className="text-xs font-normal text-slate-600 mb-2">
            {author_name.length > 3 ? (
              <span>{author_name.slice(0, 3).join(", ")} и др.</span>
            ) : (
              author_name.join(", ")
            )}
          </div>
        )}

        {first_publish_year && (
          <div className="text-sm">
            Опубликовано:{" "}
            <span className="font-semibold">{first_publish_year}</span>
          </div>
        )}
      </div>

      {children && <div className="flex justify-center py-3">{children}</div>}
    </div>
  );
}
