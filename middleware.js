import { NextResponse } from "next/server";

const clientSecret = process.env.CLIENT_SECRET;
const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
const redirectUri = process.env.REDIRECT_URI;

export const middleware = async (req) => {
  let params = req.nextUrl.search;
  const url = new URLSearchParams(params);
  const code = url.get("code");
  req.cookies.set("code", code);
  const res = await fetch(
    `https://unsplash.com/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUri}&code=${code}&grant_type=authorization_code`,
    { method: "POST" }
  );
  // response.cookies.set("token", accessToken);
  // console.log("authentication", code, accessToken)
  // console.log(req.nextUrl);
  // if (code) {
  //   const authData = await res.json();
  //   const accessToken = authData.access_token;
    
  //   const response = NextResponse.next();
  // }
};

export const config = {
  matcher: "/",
};
