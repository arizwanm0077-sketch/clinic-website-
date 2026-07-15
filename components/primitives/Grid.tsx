import { cn } from "@/lib/utils";
import React from "react";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | "asymmetric-left" | "asymmetric-right";
  gap?: "none" | "sm" | "md" | "lg" | "xl";
  as?: React.ElementType;
}

export function Grid({
  className,
  cols = 1,
  gap = "md",
  as: Component = "div",
  ...props
}: GridProps) {
  return (
    <Component
      className={cn(
        "grid",
        {
          "grid-cols-1": cols === 1,
          "grid-cols-1 md:grid-cols-2": cols === 2,
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3": cols === 3,
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-4": cols === 4,
          "grid-cols-1 md:grid-cols-[1fr_2fr]": cols === "asymmetric-right",
          "grid-cols-1 md:grid-cols-[2fr_1fr]": cols === "asymmetric-left",
        },
        {
          "gap-0": gap === "none",
          "gap-4": gap === "sm",
          "gap-6 md:gap-8": gap === "md",
          "gap-8 md:gap-12": gap === "lg",
          "gap-12 md:gap-16": gap === "xl",
        },
        className
      )}
      {...props}
    />
  );
}
