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
    // when on / home page redirect to /de
    if (req.nextUrl.pathname === '/') {
        return NextResponse.redirect('/de');
    }
    return i18nRouter(req, i18Config);


}
export const config = {
    matcher: '/((?!static|.*\\..*|_next).*)'
}
