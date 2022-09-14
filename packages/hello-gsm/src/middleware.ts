import { NextRequest, NextResponse, userAgent } from 'next/server';

export function middleware(req: NextRequest) {
  const { origin, pathname } = req.nextUrl;
  const { device, browser } = userAgent(req);

  if (browser.name === 'IE' && pathname !== '/browser') {
    return NextResponse.redirect(`${origin}/browser`);
  }

  if (
    process.env.OPERATIONAL_STATUS === 'inspection' &&
    pathname !== '/inspection'
  ) {
    return NextResponse.redirect(`${origin}/inspection`);
  }

  if (pathname === '/inspection') {
    if (process.env.OPERATIONAL_STATUS !== 'inspection') {
      return NextResponse.redirect(origin);
    }
  }

  if (
    pathname === '/information' ||
    pathname === '/apply' ||
    pathname === '/calculator'
  ) {
    if (device.type === ('mobile' || 'tablet')) {
      return NextResponse.redirect('https://hellogsm.kr');
    }
  }

  if (pathname === '/apply') {
    if (browser.name === 'Safari') {
      return NextResponse.redirect(`${origin}/browser`);
    }
  }
}
