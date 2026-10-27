"use client";

import { useState, useRef, useEffect } from "react";
import type { Locale } from "@/lib/content";
import { WHATSAPP_NUMBER } from "@/lib/content";
import { getTopics, matchTopic, fallbackMessage, introMessage, type BotTopic } from "@/lib/botKnowledge";
import ChatLeadForm from "./ChatLeadForm";

interface Msg {
  from: "bot" | "user";
  text: string;
  topic?: BotTopic;
}

function AssistantBadge({ size = 40 }: { size?: number }) {
  return (
    <span
      className="relative inline-flex shrink-0 items-center justify-center rounded-full"
      style={{ width: size, height: size, background: "linear-gradient(135deg,#ffffff,#f3ecfb)" }}
    >
      <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 1a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z"
          fill="#8B2FD1"
        />
        <path
          d="M5 10v1a7 7 0 0 0 14 0v-1M12 18v4M9 22h6"
          stroke="#FF2D8A"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
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

  function waHrefFor(topic: BotTopic): string {
    const waText =
      locale === "he"
        ? `היי שרון! מתעניין/ת לגבי: ${topic.label}`
        : `Hi Sharon! I'm interested in: ${topic.label}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;
  }

  function respondTo(raw: string) {
    const text = raw.trim();
    if (!text) return;
    setMessages((m) => [...m, { from: "user", text }]);

    const topic = matchTopic(locale, text);
    setTimeout(() => {
      if (topic) {
        setMessages((m) => [...m, { from: "bot", text: topic.respond(locale), topic }]);
      } else {
        setMessages((m) => [...m, { from: "bot", text: fallbackMessage(locale) }]);
      }
    }, 450);
  }

  function handleChip(topic: BotTopic) {
    setMessages((m) => [...m, { from: "user", text: topic.label }]);
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: topic.respond(locale), topic }]);
    }, 400);
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={openBot}
          className="fixed bottom-5 start-5 z-40 inline-flex items-center gap-3 h-16 rounded-full ps-2.5 pe-5 font-bold text-white shadow-2xl animate-pulse-glow"
          style={{ background: "linear-gradient(120deg,#8B2FD1,#FF2D8A)" }}
          aria-haspopup="dialog"
        >
          <AssistantBadge size={44} />
          <span className="flex flex-col items-start leading-tight">
            <span className="text-sm font-black">
              {locale === "he" ? "העוזרת החכמה של שרון" : "Sharon's Smart Assistant"}
            </span>
            <span className="text-[11px] font-semibold text-white/85">
              {locale === "he" ? "ייעוץ ותיאום הופעות" : "Booking & Inquiries"}
            </span>
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#7CF0B0] shadow-[0_0_0_4px_rgba(124,240,176,.25)]" />
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
            <AssistantBadge size={40} />
            <div className="flex-1">
              <b className="block text-sm">{locale === "he" ? "העוזרת החכמה של Sharon K" : "Sharon K's Smart Assistant"}</b>
              <small className="block text-xs text-white/80">
                {locale === "he" ? "ייעוץ ותיאום הופעות · מבוסס מידע מאומת בלבד" : "Booking & inquiries · based on verified information only"}
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
                  {m.topic && (
                    <ChatLeadForm
                      locale={locale}
                      topic={m.topic.label}
                      body={m.text}
                      waHref={waHrefFor(m.topic)}
                    />
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
