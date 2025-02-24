import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token'); 

  if (!token) {
    // If no token found, redirect to login page
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next(); 
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*'], 
};
