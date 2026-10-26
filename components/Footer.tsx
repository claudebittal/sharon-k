import type { Locale } from "@/lib/content";
import { content } from "@/lib/content";

export default function Footer({ locale }: { locale: Locale }) {
  const c = content[locale];
  return (
    <footer className="py-8 border-t border-white/10 text-center text-sm text-[color:var(--color-mute)] space-y-1.5">
      <p>{c.footer}</p>
      <p className="text-xs opacity-60">
        {locale === "he" ? "האתר נבנה ע\"י Claude Bittal" : "Site built by Claude Bittal"}
      </p>
    </footer>
  );
}
