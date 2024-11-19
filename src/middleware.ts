import settings from '@/config/settings';
import { MeDocument, MeQuery } from '@/graphql/generated/graphql-types';
import routes from '@/routes';
import { jwtVerify } from 'jose';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { fetchSSRData } from './services/apollo/apollo-server-side-client';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get(settings.tokenKey)?.value;
  const isDashboardRoute = request.nextUrl.pathname.startsWith('/dashboard');

  if (isDashboardRoute) {
    if (token) {
      const decodedToken = await verifyToken(token);
      if (decodedToken) {
        return NextResponse.next();
      } else {
        const queryResult = await fetchSSRData<MeQuery>(MeDocument, request);
        if (queryResult?.unauthorized) return redirectToLogin(request);

        const user = queryResult?.data?.me;
        if (user) return NextResponse.next();
      }
    } else {
      const queryResult = await fetchSSRData<MeQuery>(MeDocument, request);
      if (queryResult?.unauthorized) return redirectToLogin(request);

      const user = queryResult?.data?.me;
      if (user) {
        return NextResponse.next();
      }
    }

    return redirectToLogin(request);
  }
  return NextResponse.next();
}

const redirectToLogin = (request: NextRequest) => {
  return NextResponse.redirect(new URL(routes.auth.login.path, request.url));
};

export const config = {
  matcher: ['/dashboard/:path*'],
};

const verifyToken = async (token: string) => {
  try {
    const secret = new TextEncoder().encode(settings.jwtSecret);
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (err) {
    console.error('Token verification failed:', err);
    return null;
  }
};
