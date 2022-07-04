import { NextRequest } from 'next/server';

/**
 * @param req - 요청 req.ua -> 사용자의 정보
 * @returns - 브라우저가 사파리라면 chrome 브라우저 권장 메시지
 */
export function middleware(req: NextRequest) {
  if (req.ua?.browser.name === 'Safari') {
    return new Response('Chrome 사용을 권장합니다.');
  }
}
