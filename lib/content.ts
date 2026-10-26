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
  };
  services: {
    eyebrow: string;
    heading: string;
    items: { title: string; body: string; featured?: boolean }[];
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
    whatsappPlaceholderNote: string;
    linksLabel: { youtube: string; spotify: string; instagram: string; facebook: string };
  };
  footer: string;
}

// WhatsApp number is still a placeholder from the original site — real number
// has not been supplied yet. Do not treat this as a real, working contact.
export const WHATSAPP_PLACEHOLDER = "972000000000";
export const REAL_EMAIL = "sharonkaniel@gmail.com"; // verified via her Facebook page contact info
export const YOUTUBE_URL = "https://www.youtube.com/c/SharonK";
export const SPOTIFY_URL = "https://open.spotify.com/artist/5LgsUcaI7HLfsfAbbhIEEI";
export const INSTAGRAM_URL = "https://www.instagram.com/sharon177/";
export const FACEBOOK_URL = "https://www.facebook.com/SharonKLive";
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
      ctaPrimaryLabel: "דברו איתי בוואטסאפ",
      ctaSecondaryLabel: "צפייה בקליפ",
    },
    services: {
      eyebrow: "מה אני עושה",
      heading: "חמש דרכים לעבוד איתי",
      items: [
        {
          title: "מופעי חוויה לארגונים וחברות הייטק",
          body: "ערבי חברה, ימי גיבוש ואירועי חג. מופע אינטראקטיבי שבו העובדים לא רק מקשיבים, הם שרים, מופיעים ויוצאים מחוברים יותר.",
          featured: true,
        },
        {
          title: "הדרכת הרכבים",
          body: "להקות ומקהלות לנוער ולמבוגרים במתנ״סים, בבתי ספר ובארגונים. מהחזרה הראשונה ועד ההופעה על הבמה.",
        },
        {
          title: "הפקה מוזיקלית",
          body: "הפקת שירים ועיבודים, ליווי זמרים, הפקה מוזיקלית של מופעים וטקסים. הניסיון מהפקת הסינגל שלי לשירותכם.",
        },
        {
          title: "הופעות ואירועים פרטיים",
          body: "שירה חיה עם להקה או בהרכב קטן: סול, R&B, פופ ושירים עבריים. לחתונות, ימי הולדת וטקסים.",
        },
        {
          title: "המוזיקה המקורית שלי",
          body: "שירים מקוריים, קאברים וראיונות. ההופעות והיצירה הן הלב של כל השאר.",
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
      lead: "ספרו לי על האירוע או ההרכב, ואחזור אליכם תוך יום עבודה.",
      email: REAL_EMAIL,
      whatsappPlaceholderNote: "מספר הוואטסאפ עדיין לא עודכן — זהו placeholder.",
      linksLabel: { youtube: "יוטיוב", spotify: "ספוטיפיי", instagram: "אינסטגרם", facebook: "פייסבוק" },
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
      ctaPrimaryLabel: "Message on WhatsApp",
      ctaSecondaryLabel: "Watch the Video",
    },
    services: {
      eyebrow: "What I Do",
      heading: "Five Ways to Work Together",
      items: [
        {
          title: "Experience Shows for Companies & Tech Teams",
          body: "Company nights, team-building days, and holiday events. An interactive show where employees don't just listen — they sing, perform, and leave more connected.",
          featured: true,
        },
        {
          title: "Ensemble & Choir Coaching",
          body: "Bands and choirs for teens and adults at community centers, schools, and companies — from the first rehearsal to the final show.",
        },
        {
          title: "Music Production",
          body: "Song production and arrangements, vocal coaching, and musical production for shows and ceremonies — backed by the experience of producing my own single.",
        },
        {
          title: "Private Events & Performances",
          body: "Live singing with a full band or a small lineup: soul, R&B, pop, and Hebrew songs — for weddings, birthdays, and ceremonies.",
        },
        {
          title: "My Original Music",
          body: "Original songs, covers, and interviews. The performances and the songwriting are the heart of everything else.",
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
      lead: "Tell me about your event or ensemble, and I'll get back to you within one business day.",
      email: REAL_EMAIL,
      whatsappPlaceholderNote: "The WhatsApp number hasn't been updated yet — this is a placeholder.",
      linksLabel: { youtube: "YouTube", spotify: "Spotify", instagram: "Instagram", facebook: "Facebook" },
    },
    footer: "Sharon K | Sharon Kaniel | Singer, Ensemble Coach & Music Producer | Tel Aviv",
  },
};
