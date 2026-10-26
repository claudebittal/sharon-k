import { NextRequest, NextResponse } from "next/server";

const locales = ["he", "en"] as const;
const defaultLocale = "he";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Canonicalize an explicit /he visit back to the un-prefixed default URL.
  if (pathname === "/he" || pathname.startsWith("/he/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/he/, "") || "/";
    return NextResponse.redirect(url);
  }

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocalePrefix) {
    return NextResponse.next();
  }

  // Default locale (Hebrew) is served un-prefixed; rewrite internally only.
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
