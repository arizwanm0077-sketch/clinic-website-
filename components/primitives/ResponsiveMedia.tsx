'use client';

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

export interface ResponsiveMediaProps extends Omit<ImageProps, "alt"> {
  alt: string; // Strictly require alt text
  aspectRatio?: "square" | "video" | "portrait" | "landscape" | "auto";
  containerClassName?: string;
  fallbackText?: string;
}

export function ResponsiveMedia({
  className,
  containerClassName,
  aspectRatio = "auto",
  alt,
  fill,
  width,
  height,
  fallbackText,
  priority,
  ...props
}: ResponsiveMediaProps) {
  const [error, setError] = useState(false);
  const needsWrapper = fill || aspectRatio !== "auto";

  const renderFallback = () => (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-stone/30 text-brand-text-muted p-4 text-center">
      <ImageIcon className="w-8 h-8 mb-2 opacity-20" aria-hidden="true" />
      <span className="text-xs font-medium tracking-wide uppercase opacity-40">
        {fallbackText || "Clinical Visual"}
      </span>
    </div>
  );

  if (needsWrapper) {
    return (
      <div
        className={cn(
          "relative overflow-hidden bg-brand-stone/10",
          {
            "aspect-square": aspectRatio === "square",
            "aspect-video": aspectRatio === "video",
            "aspect-[3/4]": aspectRatio === "portrait",
            "aspect-[4/3]": aspectRatio === "landscape",
          },
          containerClassName
        )}
      >
        {!error ? (
          <Image
            alt={alt}
            fill={true}
            priority={priority}
            className={cn("object-cover transition-opacity duration-500", className)}
            onError={() => setError(true)}
            {...props}
          />
        ) : (
          renderFallback()
        )}
      </div>
    );
  }

  if (error) {
    return (
      <div 
        className={cn("bg-brand-stone/30 flex items-center justify-center", className)}
        style={{ width, height: height || 'auto', aspectRatio: width && height ? `${width}/${height}` : undefined }}
      >
        {renderFallback()}
      </div>
    );
  }

  return (
    <Image
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={cn("h-auto w-full transition-opacity duration-500", className)}
      onError={() => setError(true)}
      {...props}
    />
  );
}
