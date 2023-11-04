import errorHandler from '@/handler/errorHandler';
import jwtMiddleware from '@/middleware/jwtMiddleware';
import { NextRequest, NextResponse } from 'next/server';

export default function apiHandler(handler: any) {
  const wrappedHandler: any = {};
  const httpMethods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

  // wrap handler methods to add middleware and global error handler
  httpMethods.forEach((method) => {
    if (typeof handler[method] !== 'function') return;

    wrappedHandler[method] = async (req: NextRequest, ...args: any) => {
      let json: object;
      try {
        // JSON 파싱이 한번만 가능하기 때문에 req.bodyUsed를 통해 body가 사용되었는지 확인
        if (req.bodyUsed) {
          json = await req.json();
        } else {
          // body 값이 없는 경우 빈 객체를 할당
          json = {};
        }
      } catch (e) {
        console.error('Failed to parse JSON:', e);
        json = {};
      }

      req.json = async () => json;

      try {
        // 전역 미들 웨어
        await jwtMiddleware(req);
        // 그외 미들 웨

        // route handler
        const responseBody = await handler[method](req, ...args);
        return NextResponse.json(responseBody || {});
      } catch (err: any) {
        // global error handler
        return errorHandler(err);
      }
    };
  });

  return wrappedHandler;
}
