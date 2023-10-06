import { NextRequest, NextResponse, userAgent } from 'next/server';

const getSiteState = async () => {
  const fetchUrl = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GSS_ID_KEY}/values/sheet1?key=${process.env.GSS_API_KEY}`;
  const res = await fetch(fetchUrl);
  const data = await res.json();

  return data.values[1][0];
};

let isMiddlewareExecuted = false;

export async function middleware(req: NextRequest) {
  if (isMiddlewareExecuted) {
    return NextResponse.next();
  }

  const siteState = await getSiteState();

  const { origin, pathname } = req.nextUrl;
  const { device, browser } = userAgent(req);
  console.log(siteState, pathname, isMiddlewareExecuted);

  if (siteState === 'INSPECTION' && pathname !== '/inspection') {
    isMiddlewareExecuted = true; // 미들웨어 함수 실행 플래그 설정
    return NextResponse.redirect(`${origin}/inspection`);
  }

  return NextResponse.next();
}
