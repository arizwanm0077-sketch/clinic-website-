import React from 'react';

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-sage focus:text-white focus:rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-green-deep"
    >
      Skip to main content
    </a>
  );
}
