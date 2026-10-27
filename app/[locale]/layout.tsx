import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "../globals.css";
import { content, locales, toLocale } from "@/lib/content";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "600", "700", "900"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = toLocale((await params).locale);
  const c = content[locale];
  const canonicalPath = locale === "he" ? "/" : "/en";

  return {
    metadataBase: new URL("https://sharonkmusic.com"),
    title: locale === "he" ? "Sharon K | שרון קניאל" : "Sharon K | Sharon Kaniel",
    description: c.hero.lead,
    alternates: {
      canonical: canonicalPath,
      languages: {
        he: "/",
        en: "/en",
      },
    },
    openGraph: {
      title: locale === "he" ? "Sharon K | שרון קניאל" : "Sharon K | Sharon Kaniel",
      description: c.hero.lead,
      images: ["/img/liveband.jpg"],
      locale: locale === "he" ? "he_IL" : "en_US",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = toLocale((await params).locale);
  const c = content[locale];

  return (
    <html lang={c.htmlLang} dir={c.dir} className={`${rubik.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-display">{children}</body>
    </html>
  );
}
