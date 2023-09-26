import { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import { HeartIcon } from '@heroicons/react/24/solid';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';

const inter = Inter({ subsets: ['latin'] });

const CardFavButton = ({ likes }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(prev => !prev);
  };

  useEffect(() => {
    // set/fetch the favorite state of the image online
  }, [isFavorite]);

  const heartIcon = isFavorite ? <HeartIcon /> : <HeartIconOutline />;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={e => e.key === 'Enter' && handleClick()}
      title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    >
      {heartIcon}
      <p style={inter.style}>{likes}</p>
    </div>
  );
};

export default CardFavButton;