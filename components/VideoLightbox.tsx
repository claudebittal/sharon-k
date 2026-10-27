"use client";

import { useState } from "react";
import type { Locale } from "@/lib/content";

function youtubeId(href: string): string | null {
  const match = href.match(/[?&]v=([^&]+)/);
  return match ? match[1] : null;
}

export default function VideoLightbox({
  locale,
  title,
  href,
  className,
  children,
}: {
  locale: Locale;
  title: string;
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const id = youtubeId(href);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      {open && id && (
        <div role="dialog" aria-modal="true" aria-label={title} className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <button
            type="button"
            aria-label={locale === "he" ? "סגירה" : "Close"}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-3xl">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-3 mx-auto flex items-center justify-center h-10 rounded-full px-5 text-sm font-bold bg-white/10 text-white hover:bg-white/15"
            >
              {locale === "he" ? "סגירה" : "Close"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
