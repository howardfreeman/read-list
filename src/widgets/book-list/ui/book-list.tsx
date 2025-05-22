export function BookList({
  title,
  children,
}: {
  title: string;
  children: Readonly<React.ReactNode>;
}) {
  return (
    <div className="w-fit mx-auto">
      <h2 className="text-lg font-semibold mb-5">{title}</h2>
      <div className="grid grid-cols-4 gap-5">{children}</div>
    </div>
  );
}
