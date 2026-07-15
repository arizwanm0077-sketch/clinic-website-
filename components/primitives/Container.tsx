import { cn } from "@/lib/utils";
import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide" | "full";
  asChild?: boolean;
}

export function Container({
  className,
  size = "default",
  asChild, // Destructure to avoid passing it to DOM
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8 w-full",
        {
          "max-w-7xl": size === "default",
          "max-w-3xl": size === "narrow",
          "max-w-[1600px]": size === "wide",
          "max-w-none px-0 sm:px-0 lg:px-0": size === "full",
        },
        className
      )}
      {...props}
    />
  );
}
