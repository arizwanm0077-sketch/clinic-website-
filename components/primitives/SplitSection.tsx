import React from "react";
import { cn } from "@/lib/utils";

export interface SplitSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  mediaContent: React.ReactNode;
  textContent: React.ReactNode;
  mediaPosition?: "left" | "right";
  proportions?: "equal" | "media-large" | "text-large";
  align?: "start" | "center";
}

export function SplitSection({
  className,
  mediaContent,
  textContent,
  mediaPosition = "left",
  proportions = "equal",
  align = "center",
  ...props
}: SplitSectionProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        {
          "md:flex-row": mediaPosition === "left",
          "md:flex-row-reverse": mediaPosition === "right",
        },
        {
          "items-start": align === "start",
          "items-center": align === "center",
        },
        "gap-8 md:gap-12 lg:gap-16",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "w-full",
          {
            "md:w-1/2": proportions === "equal",
            "md:w-[55%] lg:w-[60%]": proportions === "media-large",
            "md:w-[45%] lg:w-[40%]": proportions === "text-large",
          }
        )}
      >
        {mediaContent}
      </div>
      <div
        className={cn(
          "w-full",
          {
            "md:w-1/2": proportions === "equal",
            "md:w-[45%] lg:w-[40%]": proportions === "media-large",
            "md:w-[55%] lg:w-[60%]": proportions === "text-large",
          }
        )}
      >
        {textContent}
      </div>
    </div>
  );
}
