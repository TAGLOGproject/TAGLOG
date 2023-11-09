import { NextResponse } from 'next/server';

/**
 *
 * @param error - Error | string Unauthorized
 * @returns NextResponse
 */
export default function errorHandler(error: Error | string) {
  if (typeof error === 'string') {
    // custom application error
    const is404 = error.toLowerCase().endsWith('not found');
    let status = is404 ? 404 : 400;

    // error 처리를 따로 해줘야 하는 경우에 사용
    if (error === 'Unauthorized') {
      status = 401;
      return NextResponse.json({ message: error }, { status });
    }
    return NextResponse.json({ message: error }, { status });
  }

  if (error.name === 'JsonWebTokenError') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  // default to 500 server error
  return NextResponse.json({ message: error.message }, { status: 500 });
}
