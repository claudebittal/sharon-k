import type { Locale } from "@/lib/content";
import { content, WHATSAPP_NUMBER, YOUTUBE_URL, SPOTIFY_URL, INSTAGRAM_URL, FACEBOOK_URL, LINKEDIN_URL } from "@/lib/content";
import QuoteForm from "./QuoteForm";
import { MailIcon, WhatsAppIcon, LinkedInIcon, YouTubeIcon, SpotifyIcon, InstagramIcon, FacebookIcon } from "./SocialIcons";

export default function Contact({ locale }: { locale: Locale }) {
  const c = content[locale];
  const links = [
    { label: c.contact.linksLabel.linkedin, href: LINKEDIN_URL, Icon: LinkedInIcon, emphasis: true },
    { label: c.contact.linksLabel.youtube, href: YOUTUBE_URL, Icon: YouTubeIcon },
    { label: c.contact.linksLabel.spotify, href: SPOTIFY_URL, Icon: SpotifyIcon },
    { label: c.contact.linksLabel.instagram, href: INSTAGRAM_URL, Icon: InstagramIcon },
    { label: c.contact.linksLabel.facebook, href: FACEBOOK_URL, Icon: FacebookIcon },
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
          <QuoteForm
            locale={locale}
            service={locale === "he" ? "פנייה כללית" : "General Inquiry"}
            triggerLabel={locale === "he" ? "בקשת הצעת מחיר" : "Request a Quote"}
            triggerClassName="inline-flex items-center justify-center h-12 rounded-full px-6 text-sm font-bold bg-[color:var(--color-pink)] text-white"
          />
          <a
            href={`mailto:${c.contact.email}`}
            className="inline-flex items-center gap-2 justify-center h-12 rounded-full px-6 text-sm font-bold border-2 border-white/40"
          >
            <MailIcon /> {c.contact.email}
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 justify-center h-12 rounded-full px-6 text-sm font-bold border-2 border-white/40"
            title={c.contact.whatsappNote}
          >
            <WhatsAppIcon /> WhatsApp
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener"
              className={
                l.emphasis
                  ? "inline-flex items-center gap-2 rounded-full border border-[color:var(--color-pink)]/50 bg-[color:var(--color-pink)]/10 px-4 py-2 text-sm font-bold text-[#ff8fc0] hover:bg-[color:var(--color-pink)]/20 transition-colors"
                  : "inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-[color:var(--color-mute)] hover:text-white hover:border-white/40 transition-colors"
              }
            >
              <l.Icon /> {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
