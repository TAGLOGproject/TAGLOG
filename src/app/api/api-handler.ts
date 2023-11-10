import errorHandler from '@/handler/errorHandler';
import jwtMiddleware from '@/middleware/jwtMiddleware';
import { NextRequest, NextResponse } from 'next/server';

export default function apiHandler(handler: any) {
  const wrappedHandler: any = {};
  const httpMethods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

  httpMethods.forEach((method) => {
    if (typeof handler[method] !== 'function') return;

    wrappedHandler[method] = async (req: NextRequest, ...args: any) => {
      // 본문을 단 한 번만 읽고 결과를 저장할 변수 선언
      let reqBodyParsed = false;
      let reqBody: any = {};

      try {
        if (req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH') {
          // 요청 본문을 파싱합니다. 본문이 소비됩니다.
          reqBody = await req.json();
          reqBodyParsed = true; // 파싱이 성공했음을 표시
        }
      } catch (e) {
        // JSON 파싱 오류에 대한 응답
        return new NextResponse(null, { status: 400, statusText: 'Bad Request - Invalid JSON' });
      }

      try {
        // 전역 미들웨어 실행
        await jwtMiddleware(req);
        // 핸들러 함수 실행, 파싱된 본문을 인자로 전달
        const responseBody = await handler[method](
          req,
          ...args,
          reqBodyParsed ? reqBody : undefined
        );
        return NextResponse.json(responseBody || {});
      } catch (err: any) {
        // 글로벌 에러 핸들러 실행
        return errorHandler(err);
      }
    };
  });

  return wrappedHandler;
}
