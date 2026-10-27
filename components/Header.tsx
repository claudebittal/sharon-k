import Link from "next/link";
import type { Locale } from "@/lib/content";
import { content, LINKEDIN_URL } from "@/lib/content";

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

        <div className="flex items-center gap-2.5">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/25 text-[color:var(--color-mute)] hover:border-[color:var(--color-pink)] hover:text-[#ff8fc0] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </a>

          <Link
            href={otherHref}
            hrefLang={locale === "he" ? "en" : "he"}
            className="inline-flex items-center justify-center rounded-full border border-white/25 px-4 py-2 text-sm font-bold hover:border-[color:var(--color-pink)] hover:text-[color:var(--color-pink)] transition-colors"
            aria-label={locale === "he" ? "Switch to English" : "החלף לעברית"}
          >
            {c.nav.langSwitchLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}
