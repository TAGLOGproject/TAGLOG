import jwt from 'jsonwebtoken';

import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';
import { JWT_SECRET } from '@/constants/backend';
import { IUserInfo } from '@/types/auth';

function isPublicPath(req: NextRequest) {
  // public routes that don't require authentication
  const publicPaths = ['POST:/api/post', 'DELETE:/api/post', 'PATCH:/api/post'];
  return publicPaths.includes(`${req.method}:${req.nextUrl.pathname}`);
}

export default async function jwtMiddleware(req: NextRequest) {
  try {
    if (!isPublicPath(req)) return;

    const token = cookies().get('refreshToken')?.value ?? '';
    const decoded = jwt.verify(token, JWT_SECRET as string) as IUserInfo;

    const { userid } = decoded;

    req.headers.set('userid', userid.toString());
  } catch (error) {
    /* empty */
  }
}
