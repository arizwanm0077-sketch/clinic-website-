import React from "react";
import { cn } from "@/lib/utils";
import { Heading } from "./Heading";
import { BodyText } from "./BodyText";
import { Stack } from "./Stack";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export function EmptyState({
  className,
  title,
  description,
  icon,
  action,
  ...props
}: EmptyStateProps) {
  return (
    <Stack
      align="center"
      justify="center"
      className={cn(
        "py-16 px-6 text-center rounded-sm border border-brand-stone bg-white/50",
        className
      )}
      {...props}
    >
      {icon && (
        <div className="mb-4 text-brand-text-muted opacity-50" aria-hidden="true">
          {icon}
        </div>
      )}
      <Heading level={3} size="md">{title}</Heading>
      {description && (
        <BodyText muted className="mt-2 max-w-md">
          {description}
        </BodyText>
      )}
      {action && <div className="mt-6">{action}</div>}
    </Stack>
  );
}
