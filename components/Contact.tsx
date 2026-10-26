import type { Locale } from "@/lib/content";
import { content, WHATSAPP_NUMBER, YOUTUBE_URL, SPOTIFY_URL, INSTAGRAM_URL, FACEBOOK_URL } from "@/lib/content";

export default function Contact({ locale }: { locale: Locale }) {
  const c = content[locale];
  const links = [
    { label: c.contact.linksLabel.youtube, href: YOUTUBE_URL },
    { label: c.contact.linksLabel.spotify, href: SPOTIFY_URL },
    { label: c.contact.linksLabel.instagram, href: INSTAGRAM_URL },
    { label: c.contact.linksLabel.facebook, href: FACEBOOK_URL },
  ];

  return (
    <section id="contact" className="py-20 bg-[color:var(--color-ink-deep-2)]">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="text-xs font-bold tracking-[0.1em] text-[color:var(--color-pink)] uppercase mb-2">
          {c.contact.eyebrow}
        </p>
        <h2 className="font-black text-3xl sm:text-4xl mb-4">{c.contact.heading}</h2>
        <p className="text-[color:var(--color-mute)] mb-8">{c.contact.lead}</p>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <a
            href={`mailto:${c.contact.email}`}
            className="inline-flex items-center justify-center h-12 rounded-full px-6 text-sm font-bold bg-[color:var(--color-pink)] text-white"
          >
            {c.contact.email}
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center h-12 rounded-full px-6 text-sm font-bold border-2 border-white/40"
            title={c.contact.whatsappNote}
          >
            WhatsApp
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener"
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-[color:var(--color-mute)] hover:text-white hover:border-white/40 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
