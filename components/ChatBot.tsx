"use client";

import { useState, useRef, useEffect } from "react";
import type { Locale } from "@/lib/content";
import { WHATSAPP_NUMBER } from "@/lib/content";
import { getTopics, matchTopic, fallbackMessage, introMessage, type BotTopic } from "@/lib/botKnowledge";

interface Msg {
  from: "bot" | "user";
  text: string;
  cta?: { label: string; href: string };
}

export default function ChatBot({ locale }: { locale: Locale }) {
  const topics = getTopics(locale);
  const [open, setOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  function openBot() {
    setOpen(true);
    if (!started) {
      setStarted(true);
      setMessages([{ from: "bot", text: introMessage(locale) }]);
    }
  }

  function ctaFor(topic: BotTopic): { label: string; href: string } {
    const waText =
      locale === "he"
        ? `היי שרון! מתעניין/ת לגבי: ${topic.label}`
        : `Hi Sharon! I'm interested in: ${topic.label}`;
    return {
      label: locale === "he" ? "שליחה לשרון בוואטסאפ" : "Send to Sharon on WhatsApp",
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`,
    };
  }

  function respondTo(raw: string) {
    const text = raw.trim();
    if (!text) return;
    setMessages((m) => [...m, { from: "user", text }]);

    const topic = matchTopic(locale, text);
    setTimeout(() => {
      if (topic) {
        setMessages((m) => [...m, { from: "bot", text: topic.respond(locale), cta: ctaFor(topic) }]);
      } else if (/מחיר|עול|price|cost/i.test(text)) {
        // handled as a topic already, kept here only as a safety net
        setMessages((m) => [...m, { from: "bot", text: fallbackMessage(locale) }]);
      } else {
        setMessages((m) => [...m, { from: "bot", text: fallbackMessage(locale) }]);
      }
    }, 450);
  }

  function handleChip(topic: BotTopic) {
    setMessages((m) => [...m, { from: "user", text: topic.label }]);
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: topic.respond(locale), cta: ctaFor(topic) }]);
    }, 400);
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={openBot}
          className="fixed bottom-5 start-5 z-40 inline-flex items-center gap-2.5 h-14 rounded-full ps-5 pe-4 font-bold text-sm text-white shadow-2xl"
          style={{ background: "linear-gradient(120deg,#8B2FD1,#FF2D8A)" }}
          aria-haspopup="dialog"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#7CF0B0] shadow-[0_0_0_4px_rgba(124,240,176,.25)]" />
          {locale === "he" ? "צ׳אט עם העוזרת של שרון" : "Chat with Sharon's Assistant"}
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-label={locale === "he" ? "צ׳אט עם העוזרת הדיגיטלית" : "Chat with the digital assistant"}
          className="fixed z-50 bottom-5 start-5 w-[min(380px,calc(100vw-32px))] h-[min(620px,calc(100vh-100px))] rounded-[22px] overflow-hidden flex flex-col border border-white/15 shadow-2xl"
          style={{ background: "#1C0E2A" }}
        >
          <div className="flex items-center gap-3 p-4" style={{ background: "linear-gradient(120deg,#8B2FD1,#FF2D8A)" }}>
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg">🎤</div>
            <div className="flex-1">
              <b className="block text-sm">{locale === "he" ? "העוזרת של Sharon K" : "Sharon K's Assistant"}</b>
              <small className="block text-xs text-white/80">
                {locale === "he" ? "מבוססת על מידע מאומת בלבד" : "Based on verified information only"}
              </small>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={locale === "he" ? "סגירה" : "Close"}
              className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-lg"
            >
              ×
            </button>
          </div>

          <div ref={logRef} className="flex-1 overflow-y-auto p-4 flex flex-col gap-2.5" style={{ background: "#140A1F" }}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                    m.from === "user" ? "text-white" : "border border-white/10 text-[color:var(--color-mute)]"
                  }`}
                  style={m.from === "user" ? { background: "#FF2D8A" } : { background: "#1C0E2A" }}
                >
                  {m.text}
                  {m.cta && (
                    <a
                      href={m.cta.href}
                      target="_blank"
                      rel="noopener"
                      className="mt-2 inline-flex items-center justify-center h-9 rounded-full px-4 text-xs font-bold text-white"
                      style={{ background: "#1FA855" }}
                    >
                      {m.cta.label}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 px-3 py-2 border-t border-white/10" style={{ background: "#1C0E2A" }}>
            {topics.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => handleChip(t)}
                className="text-xs font-bold rounded-full border border-[color:var(--color-pink)]/50 text-[#ff8fc0] px-3 py-1.5 hover:bg-[color:var(--color-pink)]/15"
              >
                {t.label}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              respondTo(input);
              setInput("");
            }}
            className="flex gap-2 p-2.5 border-t border-white/10"
            style={{ background: "#1C0E2A" }}
          >
            <label htmlFor="bot-input" className="sr-only">
              {locale === "he" ? "הודעה" : "Message"}
            </label>
            <input
              id="bot-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={locale === "he" ? "כתבו כאן..." : "Type here..."}
              className="flex-1 min-w-0 h-11 rounded-xl px-3 text-sm bg-[color:var(--color-ink-deep)] border border-white/15 text-white"
            />
            <button
              type="submit"
              aria-label={locale === "he" ? "שליחה" : "Send"}
              className="w-11 h-11 rounded-xl font-bold text-white shrink-0"
              style={{ background: "#FF2D8A" }}
            >
              {locale === "he" ? "←" : "→"}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
