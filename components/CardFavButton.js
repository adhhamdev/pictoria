import { useState, useEffect } from 'react';
import { inter } from '@/utils/fonts';
import { HeartIcon } from '@heroicons/react/24/solid';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';

const CardFavButton = ({ accessToken, id, likes, likedByUser }) => {
  const [isFavorite, setIsFavorite] = useState(likedByUser);
  const handleClick = () => {
    setIsFavorite((prev) => !prev);
  };

  useEffect(() => {
    const updateUserLike = async () => {
      const res = await fetch(`https://api.unsplash.com/photos/${id}/like`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.status === 201) {
        console.log('Updated user like');
      }
    };
    updateUserLike();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFavorite]);

  const heartIcon = isFavorite ? (
    <HeartIcon fill='#f24' />
  ) : (
    <HeartIconOutline />
  );

  return (
    <button
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}>
      {heartIcon}
      <p style={inter.style}>{likes}</p>
    </button>
  );
};

export default CardFavButton;
