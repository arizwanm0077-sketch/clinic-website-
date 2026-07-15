import React from "react";
import { cn } from "@/lib/utils";
import { Heading } from "./Heading";
import { Eyebrow } from "./Eyebrow";
import { BodyText } from "./BodyText";
import { Stack } from "./Stack";

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  align?: "left" | "center";
  layout?: "stacked" | "split"; // split = title left, description/action right (on desktop)
  headingLevel?: 2 | 3 | 4;
}

export function SectionHeader({
  className,
  eyebrow,
  title,
  description,
  action,
  align = "left",
  layout = "stacked",
  headingLevel = 2,
  ...props
}: SectionHeaderProps) {
  if (layout === "split") {
    return (
      <div
        className={cn(
          "flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12",
          className
        )}
        {...props}
      >
        <Stack gap="sm" className="max-w-2xl flex-1">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <Heading level={headingLevel}>{title}</Heading>
        </Stack>
        {(description || action) && (
          <Stack gap="md" className="max-w-md flex-1 lg:items-start">
            {description && <BodyText muted className="text-left">{description}</BodyText>}
            {action && <div className="text-left">{action}</div>}
          </Stack>
        )}
      </div>
    );
  }

  return (
    <Stack
      gap="sm"
      className={cn(
        "max-w-3xl",
        {
          "text-left": align === "left",
          "text-center mx-auto items-center": align === "center",
        },
        className
      )}
      {...props}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading level={headingLevel} className="mb-2">{title}</Heading>
      {description && <BodyText muted size="lg">{description}</BodyText>}
      {action && <div className="mt-4">{action}</div>}
    </Stack>
  );
}
