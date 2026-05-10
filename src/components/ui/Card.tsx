import { ReactNode } from "react";
import clsx from "clsx";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "technical-panel transition-colors duration-200 hover:border-accent/70",
        className
      )}
    >
      {children}
    </div>
  );
}
