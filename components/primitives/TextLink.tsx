import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  showArrow?: boolean;
  underline?: boolean;
}

export const TextLink = React.forwardRef<HTMLAnchorElement, TextLinkProps>(
  ({ className, children, href, showArrow = false, underline = true, ...props }, ref) => {
    return (
      <Link
        href={href}
        ref={ref}
        className={cn(
          "inline-flex items-center font-medium text-brand-green-deep hover:text-brand-sage-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ivory group",
          {
            "border-b border-brand-sand hover:border-brand-sage-dark pb-0.5": underline,
          },
          className
        )}
        {...props}
      >
        <span>{children}</span>
        {showArrow && (
          <ArrowRight className="ml-1.5 h-4 w-4 transform transition-transform group-hover:translate-x-1 motion-reduce:transform-none" aria-hidden="true" />
        )}
      </Link>
    );
  }
);
TextLink.displayName = "TextLink";
