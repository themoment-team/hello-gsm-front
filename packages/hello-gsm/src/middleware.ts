import { NextRequest, NextResponse, userAgent } from 'next/server';

export function middleware(req: NextRequest) {
  const acceptable =
    new Date() >= new Date('2023/10/16 00:00') &&
    new Date() <= new Date('2023/10/19 08:00');

  console.log(new Date());

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

  // if (applicationFormURL.includes(pathname)) {
  //   // 원서 접수 가능 기간이 아닐 시
  //   if (!acceptable) {
  //     return NextResponse.redirect(origin);
  //   }

  //   if (browser.name === 'Safari') {
  //     return NextResponse.redirect(`${origin}/browser`);
  //   }

  //   if (device.type === ('mobile' || 'tablet')) {
  //     // pc가 아닐 시
  //     return NextResponse.redirect(origin);
  //   }
  // }
}
