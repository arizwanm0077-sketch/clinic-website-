"use client";

import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import Link from 'next/link';
import { navigationConfig } from '@/config/navigation';

export function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-brand-stone shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-30 pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center h-16">
        {navigationConfig.mobileActions.map((action, i) => {
          const Icon = action.icon === 'phone' ? Phone : action.icon === 'message' ? MessageCircle : Calendar;
          const isBook = action.label === 'Book';
          
          return (
            <Link
              key={action.label}
              href={action.href}
              className={`flex flex-col items-center justify-center w-full h-full text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-sage
                ${isBook ? 'bg-brand-green-deep text-white hover:bg-brand-sage-dark' : 'text-brand-green-deep hover:bg-brand-ivory'}
                ${i !== 0 && !isBook ? 'border-l border-brand-stone' : ''}
              `}
              aria-label={action.label}
            >
              <Icon className={`w-5 h-5 mb-1 ${isBook ? 'text-white' : 'text-brand-sage'}`} aria-hidden="true" />
              {action.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
