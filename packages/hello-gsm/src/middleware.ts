import { NextRequest, NextResponse, userAgent } from 'next/server';
import acceptable from 'shared/acceptable';

export function middleware(req: NextRequest) {
  const { origin, pathname } = req.nextUrl;
  const { device, browser } = userAgent(req);
  const applicationFormURL = [
    '/information',
    '/apply',
    '/calculator',
    '/calculator/ged',
  ];

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

  if (applicationFormURL.includes(pathname)) {
    // 원서 접수 가능 기간이 아닐 시
    if (!acceptable) {
      console.log(acceptable);
      console.log(new Date());
      return NextResponse.redirect(origin);
    }

    // pc가 아닐 시
    if (device.type === ('mobile' || 'tablet')) {
      return NextResponse.redirect(origin);
    }

    // Safari 브라우저로 접속했을 시
    if (browser.name === 'Safari') {
      return NextResponse.redirect(`${origin}/browser`);
    }
  }
}
