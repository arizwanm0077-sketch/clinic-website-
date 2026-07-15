import { cn } from "@/lib/utils";
import React from "react";

export interface BodyTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "lg" | "md" | "sm" | "xs";
  muted?: boolean;
  balance?: boolean;
}

export function BodyText({
  className,
  size = "md",
  muted = false,
  balance = false,
  ...props
}: BodyTextProps) {
  return (
    <p
      className={cn(
        "font-sans",
        {
          "text-brand-text-muted": muted,
          "text-brand-text-main": !muted,
          "text-balance": balance,
        },
        {
          "text-lg md:text-xl leading-relaxed": size === "lg",
          "text-base md:text-lg leading-relaxed": size === "md",
          "text-sm md:text-base leading-relaxed": size === "sm",
          "text-xs md:text-sm leading-normal": size === "xs",
        },
        className
      )}
      {...props}
    />
  );
}
