import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const authToken = request.cookies.get('auth-token');
  const isAuth = authToken?.value === 'true';

  // Protect admin routes
  if (request.nextUrl.pathname.startsWith('/admin') && !isAuth) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Prevent logged-in users from accessing the login page
  if (request.nextUrl.pathname.startsWith('/login') && isAuth) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
};
