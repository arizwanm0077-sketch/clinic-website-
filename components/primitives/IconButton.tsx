import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ivory disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-brand-green-deep text-white hover:bg-brand-sage-dark shadow-sm",
        secondary: "border border-brand-stone bg-white text-brand-green-deep hover:bg-brand-ivory shadow-sm",
        quiet: "text-brand-green-deep hover:bg-brand-stone/50 text-brand-text-muted hover:text-brand-sage-dark",
      },
      size: {
        sm: "h-9 w-9",
        md: "h-11 w-11",
        lg: "h-14 w-14",
      },
    },
    defaultVariants: {
      variant: "quiet",
      size: "md",
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  "aria-label": string; // Require aria-label
  loading?: boolean;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant,
      size,
      loading = false,
      children,
      disabled,
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(iconButtonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        aria-label={ariaLabel}
        {...props}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin text-current" aria-hidden="true" />
        ) : (
          children
        )}
      </button>
    );
  }
);
IconButton.displayName = "IconButton";
