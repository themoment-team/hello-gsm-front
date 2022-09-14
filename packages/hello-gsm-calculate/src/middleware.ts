import { NextRequest, NextResponse, userAgent } from 'next/server';

export function middleware(req: NextRequest) {
  const { origin, pathname } = req.nextUrl;
  const { browser } = userAgent(req);

  if (browser.name === 'IE' && pathname !== '/browser') {
    return NextResponse.redirect(`${origin}/browser`);
  }
}
