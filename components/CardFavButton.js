"use client"
import { useState, useEffect } from 'react';
import { inter } from '@/utils/fonts';
import { HeartIcon } from '@heroicons/react/24/solid';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';

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
    <button
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={e => e.key === 'Enter' && handleClick()}
      title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    >
      {heartIcon}
      <p style={inter.style}>{likes}</p>
    </button>
  );
};

export default CardFavButton;