import { NextRequest, NextResponse, userAgent } from 'next/server';

const getSiteState = async () => {
  const fetchUrl = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GSS_ID_KEY}/values/sheet1?key=${process.env.GSS_API_KEY}`;
  const res = await fetch(fetchUrl);
  const data = await res.json();

  return data.values[1][0];
};

export async function middleware(req: NextRequest) {
  const siteState = await getSiteState();

  const { origin, pathname } = req.nextUrl;
  const { device, browser } = userAgent(req);
  console.log(siteState, pathname);

  if (siteState === 'INSPECTION' && pathname !== '/inspection') {
    return NextResponse.rewrite(`${origin}/inspection`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
