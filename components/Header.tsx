import Link from "next/link";
import type { Locale } from "@/lib/content";
import { content } from "@/lib/content";

export default function Header({ locale }: { locale: Locale }) {
  const c = content[locale];
  const otherHref = locale === "he" ? "/en" : "/";

  return (
    <header className="sticky top-0 z-30 bg-[color:var(--color-ink-deep)]/90 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between gap-4">
        <Link href={locale === "he" ? "/" : "/en"} className="font-black text-lg tracking-tight">
          SHARON K <span className="text-[color:var(--color-pink)]">♪</span>
        </Link>

        <nav aria-label={locale === "he" ? "ניווט" : "Navigation"} className="hidden md:flex items-center gap-6 text-sm font-semibold text-[color:var(--color-mute)]">
          {c.nav.links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <Link
          href={otherHref}
          hrefLang={locale === "he" ? "en" : "he"}
          className="inline-flex items-center justify-center rounded-full border border-white/25 px-4 py-2 text-sm font-bold hover:border-[color:var(--color-pink)] hover:text-[color:var(--color-pink)] transition-colors"
          aria-label={locale === "he" ? "Switch to English" : "החלף לעברית"}
        >
          {c.nav.langSwitchLabel}
        </Link>
      </div>
    </header>
  );
}
