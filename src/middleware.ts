import { i18nRouter } from 'next-i18n-router';
import i18Config from '../i18n.config';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;


    // Skip admin and API routes
    if (pathname.startsWith('/admin') || pathname.startsWith('/api')) {
        return NextResponse.next();
    }

    return i18nRouter(req, i18Config);
}

export const config = {
    matcher: '/((?!static|.*\\..*|_next).*)',
}
