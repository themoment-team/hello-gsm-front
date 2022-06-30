import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { origin } = req.nextUrl;

  if (process.env.OPERATIONAL_STATUS !== 'inspection') {
    return NextResponse.redirect(origin);
  }
}
