import clsx from "clsx";

type ButtonVariants = "primary" | "secondary" | "destructive";

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: ButtonVariants;
};

const buttonVariants: Record<ButtonVariants, string> = {
  primary: "bg-blue-700 hover:bg-blue-600 active:bg-blue-800",
  secondary: "bg-green-700 hover:bg-green-600 active:bg-green-800",
  destructive: "bg-red-700 hover:bg-red-600 active:bg-red-800",
};

export const Button: React.FC<ButtonProps> = ({ variant, ...props }) => {
  return (
    <button
      className={clsx(
        "w-28 h-10 rounded-full text-xs text-white",
        variant ? buttonVariants[variant] : buttonVariants["primary"],
      )}
      {...props}
    />
  );
};
