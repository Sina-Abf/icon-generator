import classNames from "classnames";
import { FC } from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ className, children }) => {
  return (
    <button
      className={classNames(
        "px-6 py-2 bg-zinc-500 rounded-md shadow-md",
        "hover:bg-zinc-700 transition-colors duration-300",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
