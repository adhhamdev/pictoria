import Gallery from '@/components/Gallery'
import Shimmer from '@/components/Shimmer'
export default async function Home({params, searchParams}) {
  const unsplashCode = searchParams.code;
  console.log(unsplashCode)
  const clientSecret = "pTpi0sTLDCMlvxrJ8am2H_Z6x7Dg28Ie2FLjaPK5qQM";
  const clientId = "eq_nBtpFvjy3KgmsPIcrmGXEsQ7-g7F1FWlJ2OOz01I";
  const authRes = await fetch(`https://unsplash.com/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=https://adhham-pictoria.netlify.app&code=${unsplashCode}&grant_type=authorization_code`, {method: 'POST'})
  const data = await authRes.json();
  const accessToken = data.access_token;
  return (
    <main>
      <div className="banner">
        <p>Whether you are a professional Photographer, a creative enthusiast, or simply someone who loves beautiful images, <span>Pictoria</span> has something for you.
        </p>
      </div>
      <Gallery>
        <Shimmer />
      </Gallery>
    </main>
  );
}
