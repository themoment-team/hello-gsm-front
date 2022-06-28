import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
  if (req.ua?.device.type === ('mobile' || 'tablet')) {
    return NextResponse.redirect('https://hellogsm.kr');
  }

  return NextResponse.next();
}
