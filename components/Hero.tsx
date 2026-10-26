import Image from "next/image";
import type { Locale } from "@/lib/content";
import { content, WHATSAPP_NUMBER, DEBUT_SINGLE_VIDEO } from "@/lib/content";

export default function Hero({ locale }: { locale: Locale }) {
  const c = content[locale];

  return (
    <section className="relative overflow-hidden" id="top">
      <div className="relative min-h-[640px] flex flex-col">
        <Image
          src="/img/blueroom.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale-[35%] contrast-[1.1] saturate-[1.2] brightness-[0.55]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(95deg, rgba(20,10,31,.97) 35%, rgba(20,10,31,.5) 68%, rgba(20,10,31,.15) 100%)",
          }}
        />
        <div className="glow-blob bg-[color:var(--color-pink)] opacity-60 w-[440px] h-[440px] -top-32 -start-28" />
        <div className="glow-blob bg-[color:var(--color-violet)] opacity-50 w-[380px] h-[380px] -bottom-36 start-1/4" />

        <div className="relative z-10 flex-1 flex flex-col justify-center mx-auto max-w-6xl w-full px-5 py-16">
          <span className="self-start inline-flex items-center gap-2 rounded-full border border-[color:var(--color-pink)]/40 bg-[color:var(--color-pink)]/10 px-4 py-1.5 text-xs font-bold text-[#ff8fc0] mb-5">
            🎤 {c.hero.tag}
          </span>

          <h1 className="name-gradient font-black leading-[0.95] text-[clamp(44px,9vw,96px)] tracking-tight mb-2">
            {c.hero.name}
          </h1>
          <p className="text-[color:var(--color-mute)] font-semibold text-xl sm:text-2xl mb-5">{c.hero.tagline}</p>

          <ul className="flex flex-wrap gap-2 mb-6 list-none p-0" aria-label={locale === "he" ? "תחומים" : "Roles"}>
            {c.hero.roles.map((role) => (
              <li key={role} className="rounded border border-white/25 px-3 py-1.5 text-xs font-bold tracking-wide">
                {role}
              </li>
            ))}
          </ul>

          <p className="max-w-[46ch] text-[15px] sm:text-base leading-relaxed text-[color:var(--color-mute)]/90 mb-8">
            {c.hero.lead}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center h-12 rounded-full px-6 text-sm font-bold bg-[color:var(--color-pink)] text-white"
            >
              {c.hero.ctaPrimaryLabel}
            </a>
            <a
              href={DEBUT_SINGLE_VIDEO}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center h-12 rounded-full px-6 text-sm font-bold border-2 border-white/40"
            >
              {c.hero.ctaSecondaryLabel}
            </a>
          </div>

          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden mt-10 max-w-xl">
            {c.hero.facts.map((f) => (
              <div key={f.label} className="bg-[#1C0E2A]/70 p-4">
                <dt className="sr-only">{f.label}</dt>
                <dd className="font-black text-2xl text-[color:var(--color-pink)]">{f.value}</dd>
                <dd className="text-xs text-[color:var(--color-mute)] mt-0.5">{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
