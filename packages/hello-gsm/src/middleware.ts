import { NextRequest, NextResponse, userAgent } from 'next/server';

export function middleware(req: NextRequest) {
  const { origin, pathname } = req.nextUrl;
  const { device, browser } = userAgent(req);
  if (
    process.env.OPERATIONAL_STATUS === 'inspection' &&
    pathname !== '/inspection'
  ) {
    return NextResponse.redirect(`${origin}/inspection`);
  }

  if (pathname.startsWith('/inspection')) {
    if (process.env.OPERATIONAL_STATUS !== 'inspection') {
      return NextResponse.redirect(origin);
    }
  }

  if (pathname.startsWith('/information')) {
    console.log(device.type);
    if (device.type === ('mobile' || 'tablet')) {
      return NextResponse.redirect('https://hellogsm.kr');
    }
  }

  if (pathname.startsWith('/calculator')) {
    console.log(device.type);
    if (device.type === ('mobile' || 'tablet')) {
      return NextResponse.redirect('https://hellogsm.kr');
    }
  }

  if (pathname.startsWith('/calculator')) {
    console.log(device.type);
    if (device.type === ('mobile' || 'tablet')) {
      return NextResponse.redirect('https://hellogsm.kr');
    }
  }

  if (pathname.startsWith('/apply')) {
    console.log(device.type);
    if (device.type === ('mobile' || 'tablet')) {
      return NextResponse.redirect('https://hellogsm.kr');
    }
  }

  if (pathname.startsWith('/application')) {
    if (browser.name === 'Safari') {
      return new Response('Chrome 사용을 권장합니다.');
    }
  }
}
