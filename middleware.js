import { NextResponse } from "next/server"

export const middleware = (req) => {
  let params = req.nextUrl.search
  const url = new URLSearchParams(params);
  const code = url.get('code');
  const response = NextResponse.next();
  response.cookies.set('code', code)
  return response
}

export const config = {
  matcher: '/'
}