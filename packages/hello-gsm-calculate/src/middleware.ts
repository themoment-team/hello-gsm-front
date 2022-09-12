import { NextRequest, NextResponse, userAgent } from 'next/server';

export function middleware(req: NextRequest) {
  const { origin, pathname } = req.nextUrl;
  const { browser } = userAgent(req);

  if (browser.name === 'IE' && pathname === '/') {
    return NextResponse.redirect(`${origin}/browser`);
  }
}
