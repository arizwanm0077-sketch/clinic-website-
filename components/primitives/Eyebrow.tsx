import { cn } from "@/lib/utils";
import React from "react";

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: React.ElementType;
}

export function Eyebrow({
  className,
  as: Component = "span",
  ...props
}: EyebrowProps) {
  return (
    <Component
      className={cn(
        "inline-block text-xs md:text-sm font-medium tracking-[0.1em] uppercase text-brand-sage-dark",
        className
      )}
      {...props}
    />
  );
}
