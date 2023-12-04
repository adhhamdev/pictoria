import { NextResponse } from 'next/server'
export function middleware(req) {
    return NextResponse.redirect('https://unsplash.com/oauth/authorize?client_id=eq_nBtpFvjy3KgmsPIcrmGXEsQ7-g7F1FWlJ2OOz01I&redirect_uri=https://adhham-pictoria.netlify.app/&response_type=code&scope=public+read_user+write_likes');
}