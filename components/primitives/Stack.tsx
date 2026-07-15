import { cn } from "@/lib/utils";
import React from "react";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "col" | "row-responsive" | "col-responsive";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around";
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  as?: React.ElementType;
}

export function Stack({
  className,
  direction = "col",
  align = "stretch",
  justify = "start",
  gap = "md",
  as: Component = "div",
  ...props
}: StackProps) {
  return (
    <Component
      className={cn(
        "flex",
        {
          "flex-col": direction === "col",
          "flex-row": direction === "row",
          "flex-col md:flex-row": direction === "row-responsive",
          "flex-row md:flex-col": direction === "col-responsive",
        },
        {
          "items-start": align === "start",
          "items-center": align === "center",
          "items-end": align === "end",
          "items-stretch": align === "stretch",
        },
        {
          "justify-start": justify === "start",
          "justify-center": justify === "center",
          "justify-end": justify === "end",
          "justify-between": justify === "between",
          "justify-around": justify === "around",
        },
        {
          "gap-0": gap === "none",
          "gap-2": gap === "xs",
          "gap-4": gap === "sm",
          "gap-6 md:gap-8": gap === "md",
          "gap-8 md:gap-12": gap === "lg",
          "gap-12 md:gap-16": gap === "xl",
          "gap-16 md:gap-24": gap === "2xl",
        },
        className
      )}
      {...props}
    />
  );
}
