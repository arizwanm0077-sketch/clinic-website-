import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  surface?: "white" | "ivory" | "stone" | "transparent";
  interaction?: "none" | "hover" | "focus-within";
  as?: React.ElementType;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, surface = "white", interaction = "none", as: Component = "div", ...props }, ref) => {
    const isInteractive = interaction !== "none";
    
    return (
      <Component
        ref={ref}
        className={cn(
          "rounded-sm border border-brand-stone overflow-hidden",
          {
            "bg-white": surface === "white",
            "bg-brand-ivory": surface === "ivory",
            "bg-brand-stone": surface === "stone",
            "bg-transparent border-none": surface === "transparent", // border-none for transparent cards (like plain lists)
          },
          {
            "transition-all duration-300": isInteractive,
            "hover:shadow-md hover:border-brand-sand": interaction === "hover",
            "focus-within:ring-2 focus-within:ring-brand-sage focus-within:ring-offset-2": interaction === "focus-within",
            "hover:shadow-md hover:border-brand-sand focus-within:ring-2 focus-within:ring-brand-sage focus-within:ring-offset-2": interaction === "hover" || interaction === "focus-within", // simplified
          },
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 md:p-8", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";
