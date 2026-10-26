import type { Locale } from "@/lib/content";
import { content } from "@/lib/content";

export default function Footer({ locale }: { locale: Locale }) {
  const c = content[locale];
  return (
    <footer className="py-8 border-t border-white/10 text-center text-sm text-[color:var(--color-mute)]">
      {c.footer}
    </footer>
  );
}
