import Gallery from '@/components/Gallery'
import Shimmer from '@/components/Shimmer'
import { inter } from '@/utils/fonts';
export default function Home() {
  return (
    <main>
      <div className="banner" style={inter.style}>
        <p>Whether you are a professional photographer, a creative enthusiast, or simply someone who loves beautiful images, Pictoria has something for you.</p>
      </div>
      <Gallery>
        <Shimmer />
      </Gallery>
    </main>
  );
}
