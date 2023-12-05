import Gallery from '@/components/Gallery'
import Shimmer from '@/components/Shimmer'
import { createApi } from 'unsplash-js';
export default async function Home({params, searchParams}) {
  const unsplashAccessKey = process.env.NEXT_PUBLIC_API_KEY || "eq_nBtpFvjy3KgmsPIcrmGXEsQ7-g7F1FWlJ2OOz01I";
  const unsplashCode = searchParams.code;
  const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ACCESS_KEY;
  let unsplash;
  try {
    const authRes = await fetch(`https://unsplash.com/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=https://adhham-pictoria.netlify.app&code=${unsplashCode}&grant_type=authorization_code`, {method: 'POST'})
    const data = await authRes.json();
    const accessToken = data.access_token;
    unsplash = createApi({ accessKey: unsplashAccessKey, headers: {
      Authorization: `Bearer ${accessToken}`
    } });
  } catch (err) {
    console.log(err);
  }
  return (
    <main>
      <div className="banner">
        <p>Whether you are a professional Photographer, a creative enthusiast, or simply someone who loves beautiful images, <span>Pictoria</span> has something for you.
        </p>
      </div>
      <Gallery unsplash={unsplash}>
        <Shimmer />
      </Gallery>
    </main>
  );
}
