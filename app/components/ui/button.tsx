import classNames from "classnames";
import { FC } from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ className, children, disabled }) => {
  return (
    <button
      className={classNames(
        "px-6 py-2  rounded-md shadow-md",
        "hover:bg-hover transition-colors duration-300",
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
