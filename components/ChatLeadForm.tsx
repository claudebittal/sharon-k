"use client";

import { useState } from "react";
import type { Locale } from "@/lib/content";
import { QUOTE_WEBHOOK_URL } from "@/lib/content";

type Status = "idle" | "open" | "sending" | "sent" | "error";

export default function ChatLeadForm({
  locale,
  topic,
  body,
  waHref,
}: {
  locale: Locale;
  topic: string;
  body: string;
  waHref: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const t = (he: string, en: string) => (locale === "he" ? he : en);

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
          phone: "",
          service: `${t("צ'אט האתר", "Site chatbot")} — ${topic}`,
          message: body,
          locale,
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      if (!res.ok) throw new Error("bad status");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="mt-2 text-xs font-bold text-[#7CF0B0]">
        ✓ {t("נשלח! שרון קיבלה את הפנייה ותחזור אליך בקרוב.", "Sent! Sharon has your inquiry and will get back to you soon.")}
      </p>
    );
  }

  if (status === "idle") {
    return (
      <div className="mt-2 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setStatus("open")}
          className="inline-flex items-center justify-center h-9 rounded-full px-4 text-xs font-bold text-white"
          style={{ background: "#1FA855" }}
        >
          {t("שליחת הפנייה במייל לשרון", "Send Inquiry to Sharon's Email")}
        </button>
        <a
          href={waHref}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center h-9 rounded-full px-4 text-xs font-bold border border-white/25 text-white"
        >
          {t("או בוואטסאפ", "or on WhatsApp")}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="mt-2 flex flex-col gap-1.5">
      <input
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={t("שם מלא", "Full name")}
        className="h-8 rounded-lg px-2.5 text-xs bg-[color:var(--color-ink-deep)] border border-white/15 text-white"
      />
      <input
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t("אימייל ליצירת קשר", "Your email")}
        className="h-8 rounded-lg px-2.5 text-xs bg-[color:var(--color-ink-deep)] border border-white/15 text-white"
      />
      {status === "error" && (
        <p className="text-[11px] text-[#ff8fc0]">{t("השליחה נכשלה, נסו שוב או בוואטסאפ.", "Send failed, try again or use WhatsApp.")}</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="h-8 rounded-lg text-xs font-bold text-white disabled:opacity-60"
        style={{ background: "#1FA855" }}
      >
        {status === "sending" ? t("שולח...", "Sending...") : t("שליחה", "Send")}
      </button>
    </form>
  );
}
