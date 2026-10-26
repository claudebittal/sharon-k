import type { Locale } from "./content";
import { content } from "./content";

export interface BotTopic {
  id: string;
  label: string;
  keywords: RegExp;
  respond: (locale: Locale) => string;
  chips?: string[];
}

const topics: Record<Locale, BotTopic[]> = {
  he: [
    {
      id: "corporate",
      label: "מופע לחברה",
      keywords: /חבר[הת]|ארגון|הייטק|גיבוש|עובדים|ועד/,
      respond: () =>
        `${content.he.services.items[0].title}\n${content.he.services.items[0].body}`,
    },
    {
      id: "ensemble",
      label: "הדרכת הרכב",
      keywords: /להק|מקהל|הרכב|נוער|הדרכ/,
      respond: () =>
        `${content.he.services.items[1].title}\n${content.he.services.items[1].body}`,
    },
    {
      id: "production",
      label: "הפקה מוזיקלית",
      keywords: /הפק|עיבוד|אולפן|הקלט/,
      respond: () =>
        `${content.he.services.items[2].title}\n${content.he.services.items[2].body}`,
    },
    {
      id: "private",
      label: "הופעה באירוע פרטי",
      keywords: /חתונ|יום הולדת|מצו|אירוע פרטי|הופע/,
      respond: () =>
        `${content.he.services.items[3].title}\n${content.he.services.items[3].body}`,
    },
    {
      id: "about",
      label: "קצת עליה",
      keywords: /מי (את|היא)|רקע|ביוגרפי|סיפור|רימון|למד/,
      respond: () => content.he.about.paragraphs.join("\n\n"),
    },
    {
      id: "videos",
      label: "לשמוע אותה",
      keywords: /סרטון|לשמוע|קליפ|יוטיוב|דוגמ|מוזיקה/,
      respond: () =>
        `הנה כמה טעימות:\n${content.he.stages.videos
          .slice(0, 3)
          .map((v) => `• ${v.title} — ${v.subtitle}`)
          .join("\n")}\n\nכל הסרטונים נגישים בעמוד "במות וסרטונים" באתר.`,
    },
    {
      id: "price",
      label: "כמה זה עולה?",
      keywords: /מחיר|עול|עלות|כמה זה|תקציב/,
      respond: () =>
        "אין לי מחיר קבוע לתת — זה תלוי בסוג האירוע, במספר המשתתפים ובמשך. שרון שולחת הצעה מותאמת אישית תוך יום עבודה, בלי התחייבות. הכי מדויק יהיה לכתוב לה ישירות.",
    },
    {
      id: "contact",
      label: "יצירת קשר",
      keywords: /יצירת קשר|ליצור קשר|מייל|אימייל|וואטסאפ|טלפון/,
      respond: () => `אפשר לכתוב ישירות למייל: ${content.he.contact.email}, או דרך הוואטסאפ באתר.`,
    },
  ],
  en: [
    {
      id: "corporate",
      label: "Corporate shows",
      keywords: /compan|corporate|tech team|team.?building|offsite/i,
      respond: () =>
        `${content.en.services.items[0].title}\n${content.en.services.items[0].body}`,
    },
    {
      id: "ensemble",
      label: "Ensemble coaching",
      keywords: /ensemble|choir|band coach|teen|youth/i,
      respond: () =>
        `${content.en.services.items[1].title}\n${content.en.services.items[1].body}`,
    },
    {
      id: "production",
      label: "Music production",
      keywords: /produc|arrange|studio|record/i,
      respond: () =>
        `${content.en.services.items[2].title}\n${content.en.services.items[2].body}`,
    },
    {
      id: "private",
      label: "Private events",
      keywords: /wedding|birthday|private event|bar mitzvah|ceremony/i,
      respond: () =>
        `${content.en.services.items[3].title}\n${content.en.services.items[3].body}`,
    },
    {
      id: "about",
      label: "About her",
      keywords: /who is|background|biography|story|rimon|study/i,
      respond: () => content.en.about.paragraphs.join("\n\n"),
    },
    {
      id: "videos",
      label: "Hear her sing",
      keywords: /video|listen|song|youtube|clip|music/i,
      respond: () =>
        `Here's a taste:\n${content.en.stages.videos
          .slice(0, 3)
          .map((v) => `• ${v.title} — ${v.subtitle}`)
          .join("\n")}\n\nAll videos are on the "Stages & Videos" section of the site.`,
    },
    {
      id: "price",
      label: "How much does it cost?",
      keywords: /price|cost|how much|budget/i,
      respond: () =>
        "I don't have a fixed price to give — it depends on the event type, number of people, and length. Sharon sends a tailored quote within one business day, no commitment. For anything precise, it's best to message her directly.",
    },
    {
      id: "contact",
      label: "Get in touch",
      keywords: /contact|email|whatsapp|phone|reach/i,
      respond: () => `You can email her directly at ${content.en.contact.email}, or use WhatsApp on the site.`,
    },
  ],
};

export function getTopics(locale: Locale): BotTopic[] {
  return topics[locale];
}

export function matchTopic(locale: Locale, text: string): BotTopic | null {
  for (const topic of topics[locale]) {
    if (topic.keywords.test(text)) return topic;
  }
  return null;
}

// Shown when nothing matches — the explicit anti-hallucination guardrail:
// the bot never invents an answer, it always names the gap and redirects
// to a real, verified contact channel instead.
export function fallbackMessage(locale: Locale): string {
  return locale === "he"
    ? "אין לי מידע מאומת על זה כרגע. אני יכולה לעזור עם מופעים, הדרכת הרכבים, הפקה מוזיקלית, אירועים פרטיים, הביוגרפיה של שרון או יצירת קשר — ולכל שאלה אחרת, הכי טוב לכתוב לשרון ישירות."
    : "I don't have verified information about that right now. I can help with corporate shows, ensemble coaching, music production, private events, Sharon's background, or getting in touch — for anything else, it's best to message Sharon directly.";
}

export function introMessage(locale: Locale): string {
  return locale === "he"
    ? "היי! אני העוזרת הדיגיטלית של שרון קניאל 🎤 אני עונה רק על סמך מידע מאומת מהאתר — על מה תרצו לדעת?"
    : "Hi! I'm Sharon Kaniel's digital assistant 🎤 I only answer from verified information on this site — what would you like to know?";
}
