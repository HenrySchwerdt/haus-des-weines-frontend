import { i18nRouter } from 'next-i18n-router'
import i18Config from './i18n.config'
import { NextResponse, type NextRequest } from 'next/server';
export async function middleware(req: NextRequest) {
    if (req.nextUrl.pathname.startsWith('/admin')) {
        return NextResponse.next();
    }
    if (req.nextUrl.pathname.startsWith('/api')) {
        return NextResponse.next();
    }
    const { pathname } = req.nextUrl;
    const { defaultLocale, locales } = i18Config;
    const localePrefix = locales.find((locale) => pathname.startsWith(`/${locale}`));

    if (!localePrefix && pathname === '/') {
        const url = req.nextUrl.clone();
        url.pathname = `/${defaultLocale}${pathname}`;
        return NextResponse.redirect(url);
    }

    return i18nRouter(req, i18Config);


}
export const config = {
    matcher: '/((?!static|.*\\..*|_next).*)'
}
