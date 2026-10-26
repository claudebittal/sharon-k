import type { Locale } from "@/lib/content";
import { content } from "@/lib/content";

export default function Services({ locale }: { locale: Locale }) {
  const c = content[locale];

  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-bold tracking-[0.1em] text-[color:var(--color-pink)] uppercase mb-2">
          {c.services.eyebrow}
        </p>
        <h2 className="font-black text-3xl sm:text-4xl mb-10">{c.services.heading}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {c.services.items.map((item) => (
            <article
              key={item.title}
              className={`bg-[color:var(--color-ink-deep-2)] p-6 flex flex-col gap-2 ${
                item.featured ? "sm:col-span-2" : ""
              }`}
            >
              {item.featured && (
                <span className="self-start text-[11px] font-bold text-[#ff8fc0] bg-[color:var(--color-pink)]/15 border border-[color:var(--color-pink)]/35 rounded-full px-3 py-1 mb-1">
                  {locale === "he" ? "הכי מבוקש" : "Most Requested"}
                </span>
              )}
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-[color:var(--color-mute)] leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
