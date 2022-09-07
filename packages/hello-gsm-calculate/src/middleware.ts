import { NextRequest, NextResponse, userAgent } from 'next/server';

export function middleware(req: NextRequest) {
  const { origin } = req.nextUrl;
  const { browser } = userAgent(req);

  if (browser.name === 'IE') {
    return NextResponse.redirect(`${origin}/browser`);
  }
}
