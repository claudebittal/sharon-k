import { locales, toLocale } from "@/lib/content";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Stages from "@/components/Stages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = toLocale((await params).locale);

  return (
    <>
      <Header locale={locale} />
      <main className="flex-1">
        <Hero locale={locale} />
        <Services locale={locale} />
        <Stages locale={locale} />
        <About locale={locale} />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
