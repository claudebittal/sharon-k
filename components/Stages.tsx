import Image from "next/image";
import type { Locale } from "@/lib/content";
import { content } from "@/lib/content";

export default function Stages({ locale }: { locale: Locale }) {
  const c = content[locale];
  const doubled = [...c.stages.venues, ...c.stages.venues];

  return (
    <section id="stages" className="py-12 sm:py-16">
      <div className="overflow-hidden border-y border-white/10 py-3 mb-10 bg-black/20">
        <div className="flex gap-10 w-max animate-[marquee_28s_linear_infinite] motion-reduce:animate-none whitespace-nowrap font-black text-lg text-[color:var(--color-mute)]">
          {doubled.map((v, i) => (
            <span key={`${v}-${i}`}>
              {v} <span className="text-[color:var(--color-pink)] mx-2">♪</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-bold tracking-[0.1em] text-[color:var(--color-pink)] uppercase mb-2">
          {c.stages.eyebrow}
        </p>
        <h2 className="font-black text-3xl sm:text-4xl mb-10">{c.stages.heading}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { img: "/img/liveband.jpg", alt: locale === "he" ? "שרון שרה עם להקה חיה באירוע" : "Sharon singing with a live band at an event" },
            { img: "/img/clip.jpg", alt: locale === "he" ? "קליפ No Junkfood Boys" : "No Junkfood Boys video" },
          ].map((shot) => (
            <div key={shot.img} className="relative aspect-video rounded-2xl overflow-hidden">
              <Image src={shot.img} alt={shot.alt} fill sizes="(min-width: 640px) 45vw, 90vw" className="object-cover" />
            </div>
          ))}
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0">
          {c.stages.videos.map((v) => (
            <li key={v.href}>
              <a
                href={v.href}
                target="_blank"
                rel="noopener"
                className="flex items-center justify-between gap-4 rounded-xl border border-white/15 px-4 py-3 hover:border-[color:var(--color-pink)] transition-colors"
              >
                <span>
                  <b className="block font-bold">{v.title}</b>
                  <small className="block text-[color:var(--color-mute)] text-sm">{v.subtitle}</small>
                </span>
                <span className="text-[color:var(--color-pink)] font-bold text-sm whitespace-nowrap">
                  {locale === "he" ? "לצפייה" : "Watch"}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
