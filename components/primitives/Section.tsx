import { cn } from "@/lib/utils";
import React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "default" | "compact" | "spacious" | "hero";
  surface?: "default" | "stone" | "ivory" | "sand" | "sage" | "dark";
  as?: React.ElementType;
}

export function Section({
  className,
  spacing = "default",
  surface = "default",
  as: Component = "section",
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        "w-full scroll-mt-24", // scroll-mt-24 accounts for a future sticky header
        {
          "py-16 md:py-24": spacing === "default",
          "py-8 md:py-12": spacing === "compact",
          "py-24 md:py-32": spacing === "spacious",
          "pt-24 pb-16 md:pt-32 md:pb-24": spacing === "hero",
        },
        {
          "bg-transparent": surface === "default",
          "bg-brand-stone": surface === "stone",
          "bg-brand-ivory": surface === "ivory",
          "bg-brand-sand": surface === "sand",
          "bg-brand-sage text-white": surface === "sage",
          "bg-brand-green-deep text-white": surface === "dark",
        },
        className
      )}
      {...props}
    />
  );
}
