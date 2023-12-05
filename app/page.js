import Gallery from '@/components/Gallery'
import Shimmer from '@/components/Shimmer'
export default async function Home(searchParams) {
  const unsplashCode = searchParams.code;
  console.log(unsplashCode)
  const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
  const clientId = process.env.NEXT_PUBLC_CLIENT_ACCESS_KEY;
  const authorized = await fetch(`https://unsplash.com/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=https://adhham-pictoria.netlify.app/&code=${unsplashCode}&grant_type=authorization_code`, {method: 'POST'})
  console.log(authorized)
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
