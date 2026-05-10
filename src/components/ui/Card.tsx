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
        "border border-white/10 bg-graphite shadow-panel transition-colors duration-200",
        className
      )}
    >
      {children}
    </div>
  );
}
