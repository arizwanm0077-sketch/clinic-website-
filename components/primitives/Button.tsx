import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ivory disabled:pointer-events-none disabled:opacity-50 group",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-green-deep text-white hover:bg-brand-sage-dark shadow-sm",
        secondary:
          "border border-brand-stone bg-white text-brand-green-deep hover:bg-brand-ivory shadow-sm",
        quiet:
          "text-brand-green-deep hover:bg-brand-stone/50 hover:text-brand-sage-dark",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 shadow-sm",
      },
      size: {
        sm: "h-9 px-4 rounded-sm text-sm",
        md: "h-11 px-6 rounded-sm text-sm",
        lg: "h-14 px-8 rounded-sm text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "leading" | "trailing";
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonBaseProps & { as?: "button" };
export type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & ButtonBaseProps & { as: "link"; href: string };

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps | ButtonLinkProps>(
  (props, ref) => {
    const {
      className,
      variant,
      size,
      loading = false,
      icon,
      iconPosition = "leading",
      children,
      as,
      ...rest
    } = props as any;

    const content = (
      <>
        {loading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin text-current" aria-hidden="true" />
        )}
        {!loading && icon && iconPosition === "leading" && (
          <span className="mr-2 inline-flex group-hover:-translate-x-0.5 transition-transform motion-reduce:transform-none" aria-hidden="true">{icon}</span>
        )}
        <span>{children}</span>
        {!loading && icon && iconPosition === "trailing" && (
          <span className="ml-2 inline-flex group-hover:translate-x-0.5 transition-transform motion-reduce:transform-none" aria-hidden="true">{icon}</span>
        )}
      </>
    );

    if (as === "link") {
      const { href, target, rel, onClick, ...linkProps } = rest;
      return (
        <Link
          href={href}
          target={target}
          rel={rel}
          onClick={onClick}
          className={cn(buttonVariants({ variant, size, className }), loading && "pointer-events-none opacity-50")}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          aria-disabled={loading ? true : undefined}
          {...linkProps}
        >
          {content}
        </Link>
      );
    }

    const { disabled, type = "button", ...buttonProps } = rest;
    return (
      <button
        type={type}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        disabled={disabled || loading}
        aria-busy={loading ? true : undefined}
        {...buttonProps}
      >
        {content}
      </button>
    );
  }
);
Button.displayName = "Button";
