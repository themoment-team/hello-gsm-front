import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { origin, pathname } = req.nextUrl;

  if (
    process.env.OPERATIONAL_STATUS === 'inspection' &&
    pathname !== '/inspection'
  ) {
    return NextResponse.redirect(`${origin}/inspection`);
  }

  return NextResponse.next();
}
