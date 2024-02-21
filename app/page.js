import Gallery from '@/components/Gallery';
import Shimmer from '@/components/Shimmer';
import { redirect } from 'next/navigation';

const clientSecret = process.env.CLIENT_SECRET;
const clientId = process.env.NEXT_PUBLIC_API_KEY;
const redirectUri = process.env.REDIRECT_URI;

export default async function Home({ params, searchParams }) {
  let accessToken;
  if (searchParams.code) {
    try {
      const unsplashCode = searchParams.code;
      const res = await fetch(
        `https://unsplash.com/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUri}&code=${unsplashCode}&grant_type=authorization_code`,
        { method: 'POST' }
      );
      accessToken = res.access_token;
      console.log(accessToken);
    } catch (err) {
      console.log(err);
    }
  } else {
    redirect(
      `https://unsplash.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=public+read_user+write_likes+write_photos`
    );
  }
  return (
    <main>
      <div className='banner'>
        <p>
          Whether you are a professional Photographer, a creative enthusiast, or
          simply someone who loves beautiful images, <span>Pictoria</span> has
          something for you.
        </p>
      </div>
      <Gallery accessToken={accessToken}>
        <Shimmer />
      </Gallery>
    </main>
  );
}
