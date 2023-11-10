import jwt from 'jsonwebtoken';

// payload 타입을 직접 명시합니다.
interface TokenOptions {
  payload: string | object | Buffer;
  secret: string;
  expiresIn?: string | number;
}

/**
 * @param payload - string | object | Buffer
 * @param secret - JWT를 서명할 비밀키 또는 공개키/비밀키
 * @param expiresIn - default: 1h ex) 60, "2 days", "10h", "7d"
 */
export function generateToken(options: TokenOptions): string {
  // 옵션 객체의 속성을 사용해서 토큰을 생성합니다
  return jwt.sign(options.payload, options.secret, { expiresIn: options.expiresIn || '1h' });
}
