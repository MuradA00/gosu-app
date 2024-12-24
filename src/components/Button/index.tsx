import { HTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { buttonStyles } from "./constants";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
}

export const Button = ({
  children,
  href,
  ...props
}: ButtonProps) => {
  const {className, ...rest } = props;
  const initialProps = [buttonStyles, className && className];

  return href ? (
    <Link
      className={clsx(...initialProps)}
      to={href}
    >
      {children}
    </Link>
  ) : (
    <button
      {...rest}
      className={clsx([...initialProps])}
    >
      {children}
    </button>
  );
};
