import { JWT_SECRET } from '@/constants/backend';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

function verifyToken() {
  const token = cookies().get('authorization')?.value ?? '';

  const decoded = jwt.verify(token, JWT_SECRET as string);

  const id = decoded.sub as string;

  return id;
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
