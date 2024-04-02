import Gallery from '@/components/Gallery';
import Shimmer from '@/components/Shimmer';
import { authenticate } from '@/lib/actions';

export default async function Home({ params, searchParams }) {
  const accessToken = await authenticate(searchParams.code);
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
