import Image from "next/image";
import type { Locale } from "@/lib/content";
import { content } from "@/lib/content";

export default function About({ locale }: { locale: Locale }) {
  const c = content[locale];

  return (
    <section id="about" className="py-20 bg-[color:var(--color-ink-deep-2)]">
      <div className="mx-auto max-w-6xl px-5 grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
        <figure className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl m-0">
          <Image
            src="/img/portrait.jpg"
            alt={locale === "he" ? "שרון קניאל שרה על הבמה עם להקה" : "Sharon Kaniel singing on stage with a band"}
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover"
          />
          <figcaption className="absolute bottom-3 inset-x-3 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2 text-xs font-semibold">
            {c.about.photoCaption}
          </figcaption>
        </figure>

        <div>
          <p className="text-xs font-bold tracking-[0.1em] text-[color:var(--color-pink)] uppercase mb-2">
            {c.about.eyebrow}
          </p>
          <h2 className="font-black text-3xl sm:text-4xl mb-4">{c.about.heading}</h2>
          <div className="space-y-3 text-[color:var(--color-mute)] leading-relaxed">
            {c.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-5 text-xl font-bold text-[color:var(--color-pink)] leading-snug">{c.about.quote}</p>
        </div>
      </div>
    </section>
  );
}
