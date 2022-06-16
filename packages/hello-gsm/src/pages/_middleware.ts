import { NextRequest } from 'next/server';
import { redirect } from 'next/dist/server/api-utils';
import auth from 'Api/auth';

/**
 * @param req - 요청 req.ua -> 사용자의
 * @returns - 브라우저가 사파리라면 chrome 브라우저 권장 메시지
 */
export async function middleware(req: NextRequest) {
  console.log(req.ua);

  if (req.ua?.browser.name === 'Safari') {
    return new Response('Chrome 사용을 권장합니다.');
  }
}
