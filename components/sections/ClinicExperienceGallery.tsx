'use client';

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { clinicGalleryData, type ClinicGalleryItem } from "@/config/clinicGallery";
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const aspectClass: Record<string, string> = {
  "4:3": "aspect-[4/3]",
  "3:2": "aspect-[3/2]",
  "16:10": "aspect-[16/10]",
  "4:5": "aspect-[4/5]",
  "3:4": "aspect-[3/4]",
};

const focalObject: Record<string, string> = {
  center: "object-center",
  left: "object-left",
  right: "object-right",
  top: "object-top",
  bottom: "object-bottom",
};

function GalleryImage({
  item,
  sizes,
  className,
  containerClassName,
  eager = false,
}: {
  item: ClinicGalleryItem;
  sizes: string;
  className?: string;
  containerClassName?: string;
  eager?: boolean;
}) {
  const [errored, setErrored] = useState(false);
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-brand-stone/20",
        aspectClass[item.aspectRatio],
        containerClassName
      )}
    >
      {errored ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-stone/30 text-brand-text-muted p-4 text-center">
          <span className="text-[10px] font-mono uppercase tracking-widest opacity-50">
            Demonstration visual
          </span>
        </div>
      ) : (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes={sizes}
          priority={eager}
          loading={eager ? undefined : "lazy"}
          className={cn(
            "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]",
            focalObject[item.focalPoint],
            className
          )}
          onError={() => setErrored(true)}
        />
      )}
    </div>
  );
}

export function ClinicExperienceGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const lightboxRef = useRef<HTMLDivElement | null>(null);

  const items = clinicGalleryData;
  const isOpen = lightboxIndex !== null;

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
  }, [items.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i + 1) % items.length));
  }, [items.length]);

  // Body scroll lock + focus management + keyboard
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // focus close button
    const t = setTimeout(() => closeBtnRef.current?.focus(), 30);
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        showNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        showPrev();
      } else if (e.key === "Tab" && lightboxRef.current) {
        const focusable = lightboxRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          last.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", handleKey);
      clearTimeout(t);
      // return focus to trigger
      triggerRef.current?.focus();
    };
  }, [isOpen, closeLightbox, showNext, showPrev]);

  const openLightbox = (i: number) => setLightboxIndex(i);

  // Layout: editorial composition
  // Row 1: lead (3 cols of 6) + two stacked (3 cols of 6)
  // Row 2: three varied images
  const lead = items[0];
  const stackA = { ...items[1], aspectRatio: "4:5" as const };
  const stackB = { ...items[2], aspectRatio: "4:5" as const };
  const row2 = [items[3], items[4], items[5]];

  return (
    <div className="select-none">
      {/* Desktop / tablet editorial grid */}
      <div className="hidden md:grid grid-cols-6 gap-4 lg:gap-6">
        {/* Lead image */}
        <figure className="col-span-6 lg:col-span-4 group">
          <button
            ref={(el) => {
              if (lightboxIndex === 0) triggerRef.current = el;
            }}
            type="button"
            onClick={() => openLightbox(0)}
            className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-4 focus-visible:ring-offset-brand-green-deep rounded-sm"
            aria-label={`View larger: ${lead.title}`}
          >
            <GalleryImage
              item={lead}
              sizes="(max-width: 1024px) 100vw, 66vw"
              eager
              containerClassName="rounded-sm"
            />
          </button>
          <figcaption className="mt-3 flex items-baseline justify-between gap-4">
            <div>
              <span className="block text-[10px] font-mono uppercase tracking-widest text-brand-sand/80">
                Clinic Tour · 01
              </span>
              <h3 className="font-serif text-lg text-white mt-0.5">{lead.title}</h3>
            </div>
            <p className="hidden lg:block text-xs text-brand-stone/70 max-w-xs text-right leading-relaxed">
              {lead.shortDescription}
            </p>
          </figcaption>
        </figure>

        {/* Two stacked portraits */}
        <div className="col-span-6 lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
          <figure className="group">
            <button
              type="button"
              onClick={() => openLightbox(1)}
              className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-4 focus-visible:ring-offset-brand-green-deep rounded-sm"
              aria-label={`View larger: ${stackA.title}`}
            >
              <GalleryImage
                item={stackA}
                sizes="(max-width: 1024px) 50vw, 33vw"
                containerClassName="rounded-sm"
              />
            </button>
            <figcaption className="mt-3">
              <span className="block text-[10px] font-mono uppercase tracking-widest text-brand-sand/80">
                Clinic Tour · 02
              </span>
              <h3 className="font-serif text-base text-white mt-0.5">{stackA.title}</h3>
            </figcaption>
          </figure>

          <figure className="group">
            <button
              type="button"
              onClick={() => openLightbox(2)}
              className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-4 focus-visible:ring-offset-brand-green-deep rounded-sm"
              aria-label={`View larger: ${stackB.title}`}
            >
              <GalleryImage
                item={stackB}
                sizes="(max-width: 1024px) 50vw, 33vw"
                containerClassName="rounded-sm"
              />
            </button>
            <figcaption className="mt-3">
              <span className="block text-[10px] font-mono uppercase tracking-widest text-brand-sand/80">
                Clinic Tour · 03
              </span>
              <h3 className="font-serif text-base text-white mt-0.5">{stackB.title}</h3>
            </figcaption>
          </figure>
        </div>

        {/* Row 2: three varied images */}
        {row2.map((it, idx) => (
          <figure key={it.id} className="col-span-2 group">
            <button
              type="button"
              onClick={() => openLightbox(idx + 3)}
              className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-4 focus-visible:ring-offset-brand-green-deep rounded-sm"
              aria-label={`View larger: ${it.title}`}
            >
              <GalleryImage
                item={it}
                sizes="(max-width: 1024px) 33vw, 33vw"
                containerClassName="rounded-sm"
              />
            </button>
            <figcaption className="mt-3">
              <span className="block text-[10px] font-mono uppercase tracking-widest text-brand-sand/80">
                Clinic Tour · 0{idx + 4}
              </span>
              <h3 className="font-serif text-base text-white mt-0.5">{it.title}</h3>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Mobile: single lead + two-column sequence */}
      <div className="md:hidden">
        <figure className="group">
          <button
            type="button"
            onClick={() => openLightbox(0)}
            className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-4 focus-visible:ring-offset-brand-green-deep rounded-sm"
            aria-label={`View larger: ${lead.title}`}
          >
            <GalleryImage
              item={lead}
              sizes="100vw"
              eager
              containerClassName="rounded-sm"
            />
          </button>
          <figcaption className="mt-3">
            <span className="block text-[10px] font-mono uppercase tracking-widest text-brand-sand/80">
              Clinic Tour · 01
            </span>
            <h3 className="font-serif text-base text-white mt-0.5">{lead.title}</h3>
            <p className="text-xs text-brand-stone/70 mt-1 leading-relaxed">
              {lead.shortDescription}
            </p>
          </figcaption>
        </figure>

        <div className="grid grid-cols-2 gap-3 mt-6">
          {items.slice(1).map((it, idx) => (
            <figure key={it.id} className={cn("group", idx === 4 && "col-span-2")}>
              <button
                type="button"
                onClick={() => openLightbox(idx + 1)}
                className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-4 focus-visible:ring-offset-brand-green-deep rounded-sm"
                aria-label={`View larger: ${it.title}`}
              >
                <GalleryImage
                  item={it}
                  sizes="50vw"
                  containerClassName="rounded-sm"
                />
              </button>
              <figcaption className="mt-2">
                <span className="block text-[9px] font-mono uppercase tracking-widest text-brand-sand/80">
                  Clinic Tour · 0{idx + 2}
                </span>
                <h3 className="font-serif text-sm text-white mt-0.5">{it.title}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && lightboxIndex !== null && (
          <motion.div
            ref={lightboxRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-brand-green-deep/95 backdrop-blur-sm flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Clinic gallery viewer"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 text-brand-ivory">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-sand">
                {String(lightboxIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </span>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={closeLightbox}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-ivory hover:text-brand-sand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green-deep rounded-sm px-2 py-1"
                aria-label="Close gallery viewer"
              >
                Close <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            {/* Image stage */}
            <div className="flex-1 flex items-center justify-center px-4 sm:px-6 pb-4 min-h-0">
              <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.figure
                    key={lightboxIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="relative max-h-full w-full flex flex-col items-center"
                  >
                    <div className={cn("relative w-full max-h-[70vh]", aspectClass[items[lightboxIndex].aspectRatio])}>
                      <Image
                        src={items[lightboxIndex].src}
                        alt={items[lightboxIndex].alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 80vw"
                        className={cn("object-contain", focalObject[items[lightboxIndex].focalPoint])}
                        priority
                      />
                    </div>
                    <figcaption className="mt-4 text-center max-w-xl">
                      <h3 className="font-serif text-lg text-brand-ivory">
                        {items[lightboxIndex].title}
                      </h3>
                      <p className="text-xs text-brand-stone/70 mt-1 leading-relaxed">
                        {items[lightboxIndex].shortDescription}
                      </p>
                    </figcaption>
                  </motion.figure>
                </AnimatePresence>
              </div>
            </div>

            {/* Prev / Next */}
            <div className="flex items-center justify-between px-4 sm:px-6 pb-6 sm:pb-8">
              <button
                type="button"
                onClick={showPrev}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-ivory hover:text-brand-sand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green-deep rounded-sm px-2 py-2"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" /> Prev
              </button>
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-stone/50 hidden sm:block">
                Demonstration content · subject to client approval
              </span>
              <button
                type="button"
                onClick={showNext}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-ivory hover:text-brand-sand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green-deep rounded-sm px-2 py-2"
                aria-label="Next image"
              >
                Next <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
