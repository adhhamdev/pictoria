"use client"
import { useState, useEffect } from 'react';
import { Inter } from 'next/font/google'
import { HeartIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'

const inter = Inter({ subsets: ['latin'] })


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
    <button onClick={handleClick} title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}>
      {heartIcon}
      <p className={inter.className}>{likes}</p>
    </button>
  );
};

export default CardFavButton
;