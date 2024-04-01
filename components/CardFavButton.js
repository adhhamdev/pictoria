import { useState } from "react";
import { inter } from "@/lib/fonts";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { updateUserLike } from "@/lib/utils";

const CardFavButton = ({ accessToken, id, likes, likedByUser }) => {
  const [isFavorite, setIsFavorite] = useState(likedByUser);
  const [likeCount, setLikeCount] = useState(likes);
  const handleClick = async () => {
    setIsFavorite((prev) => !prev);
    await updateUserLike(id, accessToken, isFavorite);
    setLikeCount((prev) => (isFavorite ? prev - 1 : prev + 1));
  };

  const heartIcon = isFavorite ? (
    <HeartIcon fill="#f24" />
  ) : (
    <HeartIconOutline />
  );

  return (
    <button
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    >
      {heartIcon}
      <p style={inter.style}>{likeCount}</p>
    </button>
  );
};

export default CardFavButton;
