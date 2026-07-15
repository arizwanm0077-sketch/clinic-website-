import { cn } from "@/lib/utils";
import React from "react";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: "display" | "xl" | "lg" | "md" | "sm" | "xs";
  balance?: boolean;
}

export function Heading({
  className,
  level = 2,
  size,
  balance = true,
  ...props
}: HeadingProps) {
  const Component = `h${level}` as const;
  
  // Default size mapping based on heading level
  const computedSize = size || (
    level === 1 ? "display" : 
    level === 2 ? "xl" : 
    level === 3 ? "lg" : 
    level === 4 ? "md" : 
    level === 5 ? "sm" : "xs"
  );

  return (
    <Component
      className={cn(
        "font-serif tracking-tight",
        {
          "text-brand-green-deep": true, // Default to deep green, can be overridden via className
          "text-balance": balance,
        },
        {
          "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]": computedSize === "display",
          "text-3xl sm:text-4xl lg:text-5xl leading-tight": computedSize === "xl",
          "text-2xl sm:text-3xl lg:text-4xl leading-tight": computedSize === "lg",
          "text-xl sm:text-2xl lg:text-3xl leading-snug": computedSize === "md",
          "text-lg sm:text-xl lg:text-2xl leading-snug": computedSize === "sm",
          "text-base sm:text-lg lg:text-xl leading-normal": computedSize === "xs",
        },
        className
      )}
      {...props}
    />
  );
}
