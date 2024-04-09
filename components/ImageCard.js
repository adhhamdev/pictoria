import Image from "next/image";
import Link from "next/link";
import { inter } from "@/lib/fonts";
import CardFavButton from "./CardFavButton";
import { GlobeAltIcon, CloudArrowDownIcon } from "@heroicons/react/24/solid";
const ImageCard = ({ unsplash, accessToken, image }) => {
  const {
    id,
    color,
    urls,
    alt_description,
    width,
    height,
    user,
    links,
    likes,
    liked_by_user,
  } = image;

  const renderDescription = () => {
    return (
      <p className="desc">
        By{" "}
        <a href={user.links.html} style={inter.style}>
          {user.name}
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com" style={inter.style}>
          Unsplash
        </a>
      </p>
    );
  };

  const handleDownload = async () => {
    await fetch(`https://api.unsplash.com/photos/${image.id}/download`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  };

  return (
    <div className="imageCard" style={{ backgroundColor: color }}>
      <Link className="imageCardLink" href={`/image/${image.id}`}>
        <Image
          src={urls.regular}
          alt={alt_description ?? "An image"}
          width={width}
          height={height}
        />
      </Link>
      <div className="summary">{renderDescription()}</div>
      <div className="actions">
        <a
          target="_blank"
          href={links.download}
          title="Download"
          onClick={handleDownload}
        >
          <CloudArrowDownIcon />
        </a>
        <a target="_blank" href={links.html} title="Visit Official Page">
          <GlobeAltIcon />
        </a>
        <CardFavButton
          accessToken={accessToken}
          likes={likes}
          likedByUser={liked_by_user}
          id={id}
        />
      </div>
    </div>
  );
};

export default ImageCard;
