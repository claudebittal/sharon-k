"use client";

import { useState } from "react";
import type { Locale } from "@/lib/content";
import { WHATSAPP_NUMBER, QUOTE_WEBHOOK_URL } from "@/lib/content";

interface Props {
  locale: Locale;
  service: string;
  triggerLabel: string;
  triggerClassName: string;
}

type Status = "idle" | "sending" | "ok" | "error";

export default function QuoteForm({ locale, service, triggerLabel, triggerClassName }: Props) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const t = (he: string, en: string) => (locale === "he" ? he : en);

  const waText =
    locale === "he"
      ? `היי שרון! מתעניין/ת ב: ${service}. אפשר לשמוע עוד?`
      : `Hi Sharon! I'm interested in: ${service}. Can you tell me more?`;
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(QUOTE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          service,
          message,
          locale,
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      if (!res.ok) throw new Error("bad status");
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  function close() {
    setOpen(false);
    setStatus("idle");
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={triggerClassName}>
        {triggerLabel}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t("בקשת הצעת מחיר", "Request a Quote")}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <button
            type="button"
            aria-label={t("סגירה", "Close")}
            onClick={close}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-md rounded-2xl border border-white/15 shadow-2xl overflow-hidden" style={{ background: "#1C0E2A" }}>
            <div className="p-5" style={{ background: "linear-gradient(120deg,#8B2FD1,#FF2D8A)" }}>
              <p className="text-[11px] font-bold uppercase tracking-wide text-white/80 mb-1">{service}</p>
              <h3 className="font-black text-lg text-white">{t("בקשת הצעת מחיר", "Request a Quote")}</h3>
              <p className="text-xs text-white/85 mt-1">
                {t("מלאו כמה פרטים ונחזור אליכם תוך יום עבודה.", "Share a few details and we'll get back to you within one business day.")}
              </p>
            </div>

            {status === "ok" ? (
              <div className="p-6 text-center">
                <p className="text-2xl mb-2">🎤</p>
                <p className="font-bold text-white mb-1">{t("הפנייה נשלחה בהצלחה!", "Your request was sent!")}</p>
                <p className="text-sm text-[color:var(--color-mute)] mb-5">
                  {t("שרון קיבלה את הפרטים ותחזור אליכם בהקדם.", "Sharon has the details and will be in touch soon.")}
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="inline-flex items-center justify-center h-11 rounded-full px-6 text-sm font-bold bg-[color:var(--color-pink)] text-white"
                >
                  {t("סגירה", "Close")}
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="p-5 flex flex-col gap-3">
                <label className="flex flex-col gap-1 text-sm">
                  <span className="text-xs font-semibold text-[color:var(--color-mute)]">{t("שם מלא", "Full name")}</span>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-11 rounded-lg px-3 bg-[color:var(--color-ink-deep)] border border-white/15 text-white text-sm"
                  />
                </label>
                <label className="flex flex-col gap-1 text-sm">
                  <span className="text-xs font-semibold text-[color:var(--color-mute)]">{t("אימייל", "Email")}</span>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 rounded-lg px-3 bg-[color:var(--color-ink-deep)] border border-white/15 text-white text-sm"
                  />
                </label>
                <label className="flex flex-col gap-1 text-sm">
                  <span className="text-xs font-semibold text-[color:var(--color-mute)]">{t("טלפון (לא חובה)", "Phone (optional)")}</span>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-11 rounded-lg px-3 bg-[color:var(--color-ink-deep)] border border-white/15 text-white text-sm"
                  />
                </label>
                <label className="flex flex-col gap-1 text-sm">
                  <span className="text-xs font-semibold text-[color:var(--color-mute)]">
                    {t("ספרו לנו על האירוע / הבקשה", "Tell us about the event / request")}
                  </span>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="rounded-lg px-3 py-2 bg-[color:var(--color-ink-deep)] border border-white/15 text-white text-sm resize-none"
                  />
                </label>

                {status === "error" && (
                  <p className="text-xs text-[#ff8fc0]">
                    {t(
                      "משהו השתבש בשליחה. אפשר לנסות שוב, או לכתוב ישירות בוואטסאפ.",
                      "Something went wrong sending this. Please try again, or message us directly on WhatsApp."
                    )}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-1 inline-flex items-center justify-center h-12 rounded-full px-6 text-sm font-bold bg-[color:var(--color-pink)] text-white disabled:opacity-60"
                >
                  {status === "sending" ? t("שולח...", "Sending...") : t("שליחת הפנייה", "Send Request")}
                </button>

                <div className="flex items-center gap-2 my-1 text-[11px] text-[color:var(--color-mute)]">
                  <span className="flex-1 h-px bg-white/10" />
                  {t("או", "or")}
                  <span className="flex-1 h-px bg-white/10" />
                </div>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center h-11 rounded-full px-6 text-sm font-bold border-2 border-white/25 text-white hover:border-[color:var(--color-pink)] transition-colors"
                >
                  {t("פנייה מהירה בוואטסאפ", "Quick Message on WhatsApp")}
                </a>

                <button
                  type="button"
                  onClick={close}
                  className="text-xs font-semibold text-[color:var(--color-mute)] hover:text-white mt-1"
                >
                  {t("ביטול", "Cancel")}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
