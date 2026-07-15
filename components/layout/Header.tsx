"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { brandConfig } from '@/config/brand';
import { clinicConfig } from '@/config/clinic';
import { navigationConfig } from '@/config/navigation';
import { Container, Button, IconButton } from '@/components/primitives';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Focus close button slightly after render
      setTimeout(() => {
        if (menuButtonRef.current) {
          menuButtonRef.current.focus();
        }
      }, 50);

      // Focus trap
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab' && mobileMenuRef.current && menuButtonRef.current) {
          const focusableElements = mobileMenuRef.current.querySelectorAll(
            'a[href], button:not([disabled]), textarea, input, select'
          );
          
          // menuButton is physically in the header, but visually acts as the close button.
          // Add it to the list of focusable elements for the trap.
          const elements = [menuButtonRef.current, ...Array.from(focusableElements)] as HTMLElement[];
          
          const firstElement = elements[0];
          const lastElement = elements[elements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
      // Return focus to trigger, but only on subsequent closes, not on mount
      if (isFirstRender.current) {
        isFirstRender.current = false;
      } else {
        if (menuButtonRef.current) {
          menuButtonRef.current.focus();
        }
      }
    }
  }, [mobileMenuOpen]);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setMegaMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleEscape = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setMegaMenuOpen(false);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled 
            ? "bg-brand-ivory shadow-sm py-3" 
            : (pathname === "/" ? "bg-transparent py-4 lg:py-6" : "bg-brand-ivory/95 py-4 lg:py-6")
        )}
        onKeyDown={handleEscape}
      >
        <Container size="wide" className="flex items-center justify-between">
          <Link 
            href="/" 
            className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-2 rounded-sm z-50 relative"
            aria-label={`${brandConfig.name} Home`}
            onClick={() => {
              setMobileMenuOpen(false);
              setMegaMenuOpen(false);
            }}
          >
            <span className="font-serif text-xl md:text-2xl font-medium tracking-tight text-brand-green-deep">
              Aurevia.
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navigationConfig.mainNav.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              
              if (item.hasMegaMenu) {
                return (
                  <div key={item.label} className="relative" ref={megaMenuRef}>
                    <button
                      type="button"
                      onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-sage-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-2 rounded-sm py-1",
                        isActive ? "text-brand-sage-dark" : "text-brand-green-deep",
                        megaMenuOpen && "text-brand-sage-dark"
                      )}
                      aria-expanded={megaMenuOpen}
                    >
                      {item.label}
                      <ChevronDown className={cn("h-4 w-4 transition-transform duration-200 motion-reduce:transition-none", megaMenuOpen && "rotate-180")} aria-hidden="true" />
                    </button>
                    
                    {megaMenuOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[600px] bg-white border border-brand-stone shadow-lg rounded-sm overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200 motion-reduce:animate-none">
                        <div className="p-8 grid grid-cols-2 gap-8">
                          {navigationConfig.megaMenu.treatments.map((tItem) => (
                            <Link 
                              key={tItem.label} 
                              href={tItem.href}
                              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage rounded-sm"
                              onClick={() => setMegaMenuOpen(false)}
                            >
                              <div className="text-brand-green-deep font-medium group-hover:text-brand-sage-dark transition-colors">{tItem.label}</div>
                              <div className="text-sm text-brand-text-muted mt-1">{tItem.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand-sage-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-2 rounded-sm py-1",
                    isActive ? "text-brand-sage-dark border-b-2 border-brand-sage-dark" : "text-brand-green-deep border-b-2 border-transparent"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button as="link" href="/book" variant="primary" size="sm">
              Book a consultation
            </Button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <Button as="link" href="/book" variant="primary" size="sm" className="hidden sm:flex">
              Book
            </Button>
            <IconButton
              ref={menuButtonRef}
              variant="quiet"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative z-50"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </IconButton>
          </div>
        </Container>
      </header>

      {mobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="fixed inset-0 z-40 bg-brand-ivory lg:hidden overflow-y-auto overscroll-none animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          onKeyDown={handleEscape}
        >
          <div className="pt-24 pb-24 px-6 flex flex-col min-h-full">
            <nav className="flex flex-col gap-6">
              {navigationConfig.mainNav.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                
                if (item.hasMegaMenu) {
                  return (
                    <div key={item.label} className="flex flex-col gap-4">
                      <button
                        className="flex items-center justify-between text-xl font-serif text-brand-green-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage rounded-sm text-left"
                        onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                        aria-expanded={megaMenuOpen}
                      >
                        {item.label}
                        <ChevronDown className={cn("h-5 w-5 transition-transform duration-200 motion-reduce:transition-none", megaMenuOpen && "rotate-180")} aria-hidden="true" />
                      </button>
                      
                      {megaMenuOpen && (
                        <div className="flex flex-col gap-3 pl-4 border-l border-brand-stone animate-in slide-in-from-top-2 fade-in duration-200 motion-reduce:animate-none">
                          {navigationConfig.megaMenu.treatments.map((tItem) => (
                            <Link
                              key={tItem.label}
                              href={tItem.href}
                              className="text-lg text-brand-text-main py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage rounded-sm"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {tItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "text-xl font-serif py-1",
                      isActive ? "text-brand-sage-dark" : "text-brand-green-deep"
                    )}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMegaMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto pt-12 flex flex-col gap-4">
              <Button 
                as="link" 
                href="/book" 
                variant="primary" 
                size="lg" 
                className="w-full justify-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMegaMenuOpen(false);
                }}
              >
                Book a consultation
              </Button>
              <div className="grid grid-cols-2 gap-4">
                 <Button 
                   as="link" 
                   href={`tel:${clinicConfig.contact.phone.replace(/[^0-9+]/g, '')}`} 
                   variant="secondary" 
                   className="w-full justify-center"
                   onClick={() => setMobileMenuOpen(false)}
                 >
                    Call clinic
                 </Button>
                 <Button 
                   as="link" 
                   href={clinicConfig.contact.whatsapp.startsWith('http') ? clinicConfig.contact.whatsapp : `https://wa.me/${clinicConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`} 
                   variant="secondary" 
                   className="w-full justify-center"
                   onClick={() => setMobileMenuOpen(false)}
                 >
                    WhatsApp
                 </Button>
              </div>
              <div className="mt-4 pt-6 border-t border-brand-stone/40 text-center font-sans">
                <p className="text-xs text-brand-text-muted mb-1">Clinic Address</p>
                <a 
                  href={clinicConfig.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-green-deep hover:underline block max-w-[280px] mx-auto leading-relaxed"
                >
                  {clinicConfig.location.address}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
