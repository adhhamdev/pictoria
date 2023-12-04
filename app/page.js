import Gallery from '@/components/Gallery'
import Shimmer from '@/components/Shimmer'
import Image from 'next/image';
export default function Home() {
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
