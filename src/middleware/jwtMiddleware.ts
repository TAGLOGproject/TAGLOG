import { auth } from '@/utils/backend/auth';
import { NextRequest } from 'next/server';

function isPublicPath(req: NextRequest) {
  // public routes that don't require authentication
  const publicPaths = ['POST:/api/post', 'DELETE:/api/post', 'PATCH:/api/post'];
  return publicPaths.includes(`${req.method}:${req.nextUrl.pathname}`);
}

export default async function jwtMiddleware(req: NextRequest) {
  if (!isPublicPath(req)) return;
  const id = auth.verifyToken();
  req.headers.set('userId', id);
}
