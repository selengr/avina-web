import { NextRequest, NextResponse } from 'next/server';


export function middleware(req: NextRequest) {
     const { pathname } = req.nextUrl;

     if (pathname.startsWith('/_next')) return NextResponse.next();

     return NextResponse.next();
}

export const config = {
     matcher: ['/']
};