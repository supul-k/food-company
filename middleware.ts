import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';

  // If request comes from Vercel domain
  if (host.includes('vercel.app')) {
    const url = request.nextUrl.clone();

    // Redirect to your main domain
    url.host = 'sustenancelanka.com';

    const response = NextResponse.redirect(url, 301);

    // Tell search engines NOT to index this domain
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');

    return response;
  }

  return NextResponse.next();
}