import { NextRequest, NextResponse, userAgent } from 'next/server';

const getSiteState = async () => {
  const fetchUrl = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GSS_ID_KEY}/values/sheet1?key=${process.env.GSS_API_KEY}`;
  const res = await fetch(fetchUrl);
  const data = await res.json();

  return data.values[1][0];
};

export async function middleware(req: NextRequest) {
  const { origin, pathname } = req.nextUrl;
  const { device, browser } = userAgent(req);

  // 점검창 처리
  try {
    const siteState = await getSiteState();
    if (
      process.env.NODE_ENV === 'production' &&
      siteState === 'INSPECTION' &&
      pathname !== '/inspection'
    ) {
      return NextResponse.rewrite(`${origin}/inspection`);
    }
  } catch (e) {
    return NextResponse.next();
  }

  // IE 예외처리
  if (browser.name === 'IE' && pathname !== '/browser') {
    return NextResponse.rewrite(`${origin}/browser`);
  }

  const today = new Date();
  const acceptable =
    today >= new Date('2023/10/16 00:00') &&
    today <= new Date('2023/10/19 08:00');

  const applicationFormURL = ['/information', '/apply'];

  // 원서 날짜 이후 처리 해당 페이지라면
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

  const isShowResult =
    today >= new Date('2023/10/23 01:00:00') &&
    new Date('2023/10/23 01:00:00') <= new Date('2023/11/14 15:00:00');

  if (pathname === '/auth/signin') {
    if (isShowResult) {
      return NextResponse.rewrite(origin);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
