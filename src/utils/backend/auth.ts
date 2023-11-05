import { JWT_SECRET } from '@/constants/backend';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

function verifyToken(key?: string) {
  const token = cookies().get(key || 'refreshToken')?.value ?? '';

  const decoded = jwt.verify(token, JWT_SECRET as string) as {
    userid: string;
    email: string;
    iat: number;
    exp: number;
  };

  const { userid } = decoded;
  return userid;
}

function isAuthenticated() {
  try {
    verifyToken();
    return true;
  } catch {
    return false;
  }
}

export const auth = {
  isAuthenticated,
  verifyToken,
};
