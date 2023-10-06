import { NextRequest, NextResponse, userAgent } from 'next/server';

const getSiteState = async () => {
  const fetchUrl = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GSS_ID_KEY}/values/sheet1?key=${process.env.GSS_API_KEY}`;
  const res = await fetch(fetchUrl);
  const data = await res.json();

  return data.values[1][0];
};

export async function middleware(req: NextRequest) {
  const siteState = await getSiteState();
  const acceptable =
    new Date() >= new Date('2023/10/16 00:00') &&
    new Date() <= new Date('2023/10/19 08:00');

  const { origin, pathname } = req.nextUrl;
  const { device, browser } = userAgent(req);
  const applicationFormURL = ['/information', '/apply'];

  // IE 예외처리
  if (browser.name === 'IE' && pathname !== '/browser') {
    return NextResponse.rewrite(`${origin}/browser`);
  }

  // 점검창 처리
  if (siteState === 'INSPECTION' && pathname !== '/inspection') {
    return NextResponse.rewrite(`${origin}/inspection`);
  }

  // 원서 날짜 이후 처리
  if (applicationFormURL.includes(pathname)) {
    // 원서 접수 가능 기간이 아닐 시
    if (!acceptable) {
      return NextResponse.rewrite(origin);
    }

    if (browser.name === 'Safari') {
      return NextResponse.rewrite(`${origin}/browser`);
    }

    if (device.type === ('mobile' || 'tablet')) {
      // pc가 아닐 시
      return NextResponse.rewrite(origin);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
