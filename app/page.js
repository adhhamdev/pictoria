import Gallery from '@/components/Gallery'
import Shimmer from '@/components/Shimmer'
import { useSearchParams } from 'next/navigation'
export default async function Home() {
  const router = useSearchParams();
  const unsplashCode = router.get('code');
  console.log(unsplashCode)
  const clientSecret = process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_SECRET || 'pTpi0sTLDCMlvxrJ8am2H_Z6x7Dg28Ie2FLjaPK5qQM';
  const authorized = await fetch(`https://unsplash.com/oauth/token?client_id=eq_nBtpFvjy3KgmsPIcrmGXEsQ7-g7F1FWlJ2OOz01I&client_secret=${clientSecret}&redirect_uri=https://adhham-pictoria.netlify.app/&code=${unsplashCode}&grant_type=authorization_code`, {method: 'POST'})
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
