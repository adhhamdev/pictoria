import Gallery from '@/components/Gallery'
import Shimmer from '@/components/Shimmer'
import { useSearchParams } from 'next/navigation'
export default async function Home() {
  const router = useSearchParams();
  const unsplashCode = router.get('code');
  console.log(unsplashCode)
  const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET || process.env.CLIENT_SECRET;
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ACCESS_KEY || process.env.CLIENT_ACCESS_KEY;
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
