import type { Locale } from "@/lib/content";
import { content } from "@/lib/content";
import QuoteForm from "./QuoteForm";

export default function Services({ locale }: { locale: Locale }) {
  const c = content[locale];
  const requestLabel = locale === "he" ? "בקשת הצעת מחיר" : "Request a Quote";

  return (
    <section id="services" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-bold tracking-[0.1em] text-[color:var(--color-pink)] uppercase mb-2">
          {c.services.eyebrow}
        </p>
        <h2 className="font-black text-3xl sm:text-5xl mb-4">{c.services.heading}</h2>
        <p className="max-w-[62ch] text-base sm:text-lg leading-relaxed text-[color:var(--color-paper)]/80 mb-10">
          {c.services.intro}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {c.services.items.map((item) => {
            return (
              <article
                key={item.title}
                className={`bg-[color:var(--color-ink-deep-2)] p-7 sm:p-8 flex flex-col gap-3 ${
                  item.featured ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full text-2xl shrink-0"
                    style={{ background: "linear-gradient(135deg,rgba(139,47,209,.25),rgba(255,45,138,.25))" }}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  {item.featured && (
                    <span className="text-[11px] font-bold text-[#ff8fc0] bg-[color:var(--color-pink)]/15 border border-[color:var(--color-pink)]/35 rounded-full px-3 py-1">
                      {locale === "he" ? "הכי מבוקש" : "Most Requested"}
                    </span>
                  )}
                </div>
                <h3 className="font-black text-xl sm:text-2xl leading-snug">{item.title}</h3>
                <p className="text-[15px] sm:text-base text-[color:var(--color-paper)]/75 leading-relaxed mb-1">{item.body}</p>
                <div className="mt-auto">
                  <QuoteForm
                    locale={locale}
                    service={item.title}
                    triggerLabel={`${requestLabel} ${locale === "he" ? "←" : "→"}`}
                    triggerClassName="self-start inline-flex items-center gap-1.5 text-sm font-extrabold text-[color:var(--color-pink)] hover:underline"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
