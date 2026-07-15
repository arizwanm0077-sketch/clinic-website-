import React from "react";
import { cn } from "@/lib/utils";

export interface LoadingSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "rectangular" | "circular";
}

export function LoadingSkeleton({
  className,
  variant = "rectangular",
  ...props
}: LoadingSkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse bg-brand-stone motion-reduce:animate-none motion-reduce:opacity-70",
        {
          "rounded-sm": variant === "rectangular",
          "rounded-sm h-4 w-full": variant === "text",
          "rounded-full": variant === "circular",
        },
        className
      )}
      aria-hidden="true"
      {...props}
    />
  );
}
