export type Locale = "he" | "en";
export const locales: Locale[] = ["he", "en"];
export const defaultLocale: Locale = "he";

export function toLocale(value: string): Locale {
  return (locales as string[]).includes(value) ? (value as Locale) : defaultLocale;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteContent {
  dir: "rtl" | "ltr";
  htmlLang: string;
  nav: {
    links: NavLink[];
    langSwitchLabel: string;
  };
  hero: {
    tag: string;
    name: string;
    tagline: string;
    lead: string;
    roles: string[];
    ctaPrimaryLabel: string;
    ctaSecondaryLabel: string;
    facts: { value: string; label: string }[];
  };
  services: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: { title: string; body: string; icon: string; featured?: boolean }[];
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    quote: string;
    photoCaption: string;
  };
  stages: {
    eyebrow: string;
    heading: string;
    venues: string[];
    videos: { title: string; subtitle: string; href: string }[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    lead: string;
    email: string;
    whatsappNote: string;
    linksLabel: { youtube: string; spotify: string; instagram: string; facebook: string; linkedin: string };
  };
  footer: string;
}

// Real WhatsApp number, supplied by the site owner. Used only inside wa.me
// links — never render these digits as visible text on the page.
export const WHATSAPP_NUMBER = "972547264411";
export const REAL_EMAIL = "sharonkaniel@gmail.com"; // verified via her Facebook page contact info
export const YOUTUBE_URL = "https://www.youtube.com/c/SharonK";
export const SPOTIFY_URL = "https://open.spotify.com/artist/5LgsUcaI7HLfsfAbbhIEEI";
export const INSTAGRAM_URL = "https://www.instagram.com/sharonkthatsme/";
export const FACEBOOK_URL = "https://www.facebook.com/SharonKLive";
export const LINKEDIN_URL = "https://www.linkedin.com/in/sharon-kaniel-960175447/";
export const QUOTE_WEBHOOK_URL = "https://claudeb.app.n8n.cloud/webhook/sharon-k-quote-request";
export const DEBUT_SINGLE_VIDEO = "https://www.youtube.com/watch?v=1P-2zfB96V0";

export const content: Record<Locale, SiteContent> = {
  he: {
    dir: "rtl",
    htmlLang: "he",
    nav: {
      links: [
        { label: "מה אני עושה", href: "#services" },
        { label: "במות וסרטונים", href: "#stages" },
        { label: "עליי", href: "#about" },
        { label: "יצירת קשר", href: "#contact" },
      ],
      langSwitchLabel: "English",
    },
    hero: {
      tag: "סינגל בכורה · No Junkfood Boys",
      name: "שרון קניאל",
      tagline: "קול סול שמביא את כולם לשיר",
      lead: "זמרת סול ו-R&B מתל אביב, בוגרת בית הספר רימון, שהופיעה מתל אביב ועד ניו יורק ולוס אנג׳לס. מופעים, הדרכה והפקה שמשאירים את הקהל עם חיוך ועם שיר בראש.",
      roles: ["זמרת ויוצרת", "מדריכת הרכבים", "מפיקה מוזיקלית", "מופעים לארגונים"],
      ctaPrimaryLabel: "לתיאום הופעה בוואטסאפ",
      ctaSecondaryLabel: "צפייה בקליפ",
      facts: [
        { value: "58K+", label: "צפיות בקליפ הבכורה" },
        { value: "40", label: "סרטונים בערוץ היוטיוב" },
        { value: "3", label: "מדינות שהופעתי בהן" },
        { value: "5", label: "תחומי פעילות" },
      ],
    },
    services: {
      eyebrow: "מה אני עושה",
      heading: "חמישה תחומים. סטנדרט אחד.",
      intro: "מבמה בינלאומית ועד אולפן הקלטות — בכל תחום אני מביאה את אותה מקצועיות, אנרגיה חיה ותשומת לב לפרטים, מהשיחה הראשונה ועד הרגע שאחרי המופע.",
      items: [
        {
          title: "מופעי חוויה לארגונים וחברות הייטק",
          body: "ערבי חברה, ימי גיבוש ואירועי חג. מופע אינטראקטיבי שבו העובדים לא רק מקשיבים — הם שרים, מופיעים ויוצאים מגובשים ומחוברים יותר.",
          icon: "🏢",
          featured: true,
        },
        {
          title: "הדרכת הרכבים",
          body: "להקות ומקהלות לנוער ולמבוגרים במתנ״סים, בבתי ספר ובארגונים — ליווי מלא מהחזרה הראשונה ועד ההופעה על הבמה.",
          icon: "🎶",
        },
        {
          title: "הפקה מוזיקלית",
          body: "הפקת שירים ועיבודים, ליווי זמרים, והפקה מוזיקלית של מופעים וטקסים — עם הניסיון מהפקת הסינגל שלי לשירותכם.",
          icon: "🎚️",
        },
        {
          title: "הופעות ואירועים פרטיים",
          body: "שירה חיה עם להקה מלאה או בהרכב קטן: סול, R&B, פופ ושירים עבריים — לחתונות, ימי הולדת וטקסים.",
          icon: "💍",
        },
        {
          title: "המוזיקה המקורית שלי",
          body: "שירים מקוריים, קאברים וראיונות. ההופעות והיצירה הן הלב של כל השאר, והן מה שמביא את הקול האישי לכל עבודה.",
          icon: "🎤",
        },
      ],
    },
    about: {
      eyebrow: "נעים להכיר",
      heading: "שרון קניאל",
      paragraphs: [
        "אני זמרת ויוצרת מתל אביב, בוגרת בית הספר למוזיקה רימון. גדלתי על סול, R&B ופופ, ושרתי על במות בישראל, בניו יורק, בלוס אנג׳לס ובתאילנד.",
        "ב-2021 הוצאתי את הסינגל והקליפ הראשון שלי, No Junkfood Boys, שכתבתי, הלחנתי והפקתי יחד עם עידו מימון. היום אני מביאה את אותה אנרגיה לאירועים, להרכבים ולארגונים.",
      ],
      quote: "כל מופע, כל חזרה וכל שיר מתחילים מאותו מקום: לתת לאנשים לצאת עם חיוך.",
      photoCaption: "על הבמה עם הלהקה",
    },
    stages: {
      eyebrow: "במות וסרטונים",
      heading: "לשמוע לפני שמזמינים",
      venues: [
        "Blue Room, לוס אנג׳לס",
        "Cafe Wha, ניו יורק",
        "Mike's Place, תל אביב",
        "צ׳יאנג מאי, תאילנד",
        "תל אביב",
        "בוגרת רימון",
      ],
      videos: [
        { title: "No Junkfood Boys", subtitle: "קליפ רשמי · סינגל בכורה מקורי", href: "https://www.youtube.com/watch?v=1P-2zfB96V0" },
        { title: "All I Do | Stevie Wonder", subtitle: "הופעה חיה ב-Blue Room, לוס אנג׳לס", href: "https://www.youtube.com/watch?v=d9GhGvDYdz4" },
        { title: "Through the Fire | Chaka Khan", subtitle: "הופעה חיה ב-Cafe Wha, ניו יורק", href: "https://www.youtube.com/watch?v=aWfMZZ5E_7Y" },
        { title: "להקה חיה לאירועים", subtitle: "טעימה מהופעות באירועים", href: "https://www.youtube.com/watch?v=ciwM8QWrs0w" },
        { title: "חורף | גידי גוב", subtitle: "קאבר בעברית", href: "https://www.youtube.com/watch?v=1rrTHI-LLEk" },
        { title: "משאפ סוכות", subtitle: "מושלם לאירועי חג בארגונים", href: "https://www.youtube.com/watch?v=_AkjF8vIpf4" },
      ],
    },
    contact: {
      eyebrow: "יצירת קשר",
      heading: "בואו נדבר",
      lead: "ספרו לנו קצת על הפרויקט — מופע לארגון, הדרכת הרכב, הפקה מוזיקלית, אירוע פרטי או שיתוף פעולה יצירתי — ונחזור אליכם עם הצעה מותאמת אישית תוך יום עבודה.",
      email: REAL_EMAIL,
      whatsappNote: "פתיחת וואטסאפ עם הצוות של שרון",
      linksLabel: { youtube: "יוטיוב", spotify: "ספוטיפיי", instagram: "אינסטגרם", facebook: "פייסבוק", linkedin: "לינקדאין" },
    },
    footer: "Sharon K | שרון קניאל | זמרת, מדריכת הרכבים ומפיקה מוזיקלית | תל אביב",
  },
  en: {
    dir: "ltr",
    htmlLang: "en",
    nav: {
      links: [
        { label: "What I Do", href: "#services" },
        { label: "Stages & Videos", href: "#stages" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
      ],
      langSwitchLabel: "עברית",
    },
    hero: {
      tag: "Debut Single · No Junkfood Boys",
      name: "Sharon Kaniel",
      tagline: "A Soul Voice That Gets Everyone Singing",
      lead: "A Tel Aviv-based soul and R&B singer-songwriter, Rimon School of Music graduate, who has performed from Tel Aviv to New York and Los Angeles. Performances, coaching, and production that leave audiences smiling, with a song stuck in their heads.",
      roles: ["Singer-Songwriter", "Ensemble Coach", "Music Producer", "Corporate Performances"],
      ctaPrimaryLabel: "Book a Show — WhatsApp",
      ctaSecondaryLabel: "Watch the Video",
      facts: [
        { value: "58K+", label: "views on the debut video" },
        { value: "40", label: "videos on the YouTube channel" },
        { value: "3", label: "countries performed in" },
        { value: "5", label: "service areas" },
      ],
    },
    services: {
      eyebrow: "What I Do",
      heading: "Five Fields. One Standard.",
      intro: "From international stages to the recording studio — every field gets the same professionalism, live energy, and attention to detail, from the first conversation to the moment after the show.",
      items: [
        {
          title: "Experience Shows for Companies & Tech Teams",
          body: "Company nights, team-building days, and holiday events. An interactive show where employees don't just listen — they sing, perform, and leave more connected and energized.",
          icon: "🏢",
          featured: true,
        },
        {
          title: "Ensemble & Choir Coaching",
          body: "Bands and choirs for teens and adults at community centers, schools, and companies — full support from the first rehearsal to the final show.",
          icon: "🎶",
        },
        {
          title: "Music Production",
          body: "Song production and arrangements, vocal coaching, and musical production for shows and ceremonies — backed by the experience of producing my own single.",
          icon: "🎚️",
        },
        {
          title: "Private Events & Performances",
          body: "Live singing with a full band or a small lineup: soul, R&B, pop, and Hebrew songs — for weddings, birthdays, and ceremonies.",
          icon: "💍",
        },
        {
          title: "My Original Music",
          body: "Original songs, covers, and interviews. The performances and the songwriting are the heart of everything else — and what brings a personal voice to every job.",
          icon: "🎤",
        },
      ],
    },
    about: {
      eyebrow: "Nice to meet you",
      heading: "Sharon Kaniel",
      paragraphs: [
        "I'm a singer-songwriter from Tel Aviv, a graduate of the Rimon School of Music. I grew up on soul, R&B, and pop, and I've sung on stages in Israel, New York, Los Angeles, and Thailand.",
        "In 2021 I released my debut single and music video, No Junkfood Boys, which I wrote, composed, and produced together with Ido Maimon. Today I bring that same energy to events, ensembles, and companies.",
      ],
      quote: "Every show, every rehearsal, every song starts from the same place: sending people home with a smile.",
      photoCaption: "On stage with the band",
    },
    stages: {
      eyebrow: "Stages & Videos",
      heading: "Listen Before You Book",
      venues: [
        "Blue Room, Los Angeles",
        "Cafe Wha, New York",
        "Mike's Place, Tel Aviv",
        "Chiang Mai, Thailand",
        "Tel Aviv",
        "Rimon Graduate",
      ],
      videos: [
        { title: "No Junkfood Boys", subtitle: "Official video · original debut single", href: "https://www.youtube.com/watch?v=1P-2zfB96V0" },
        { title: "All I Do | Stevie Wonder", subtitle: "Live at Blue Room, Los Angeles", href: "https://www.youtube.com/watch?v=d9GhGvDYdz4" },
        { title: "Through the Fire | Chaka Khan", subtitle: "Live at Cafe Wha, New York", href: "https://www.youtube.com/watch?v=aWfMZZ5E_7Y" },
        { title: "Live Band for Events", subtitle: "A taste of live event performances", href: "https://www.youtube.com/watch?v=ciwM8QWrs0w" },
        { title: "Choref | Gidi Gov", subtitle: "Hebrew cover", href: "https://www.youtube.com/watch?v=1rrTHI-LLEk" },
        { title: "Sukkot Mashup", subtitle: "Perfect for corporate holiday events", href: "https://www.youtube.com/watch?v=_AkjF8vIpf4" },
      ],
    },
    contact: {
      eyebrow: "Get in Touch",
      heading: "Let's Talk",
      lead: "Tell us about the project — a corporate show, ensemble coaching, music production, a private event, or a creative collaboration — and we'll get back to you with a tailored proposal within one business day.",
      email: REAL_EMAIL,
      whatsappNote: "Open WhatsApp with Sharon's team",
      linksLabel: { youtube: "YouTube", spotify: "Spotify", instagram: "Instagram", facebook: "Facebook", linkedin: "LinkedIn" },
    },
    footer: "Sharon K | Sharon Kaniel | Singer, Ensemble Coach & Music Producer | Tel Aviv",
  },
};
