import Image from "next/image";
import Link from "next/link";
import { inter } from "@/utils/fonts";
import CardFavButton from "./CardFavButton";
import { GlobeAltIcon, CloudArrowDownIcon } from "@heroicons/react/24/solid";
const ImageCard = ({ image }) => {
  const { color, urls, alt_description, width, height, user, links, likes } = image;

  const renderDescription = () => {
    return (
      <p className="desc">
        By {" "}
         <a href={user.links.html} style={{fontFamily: inter.style.fontFamily}}>
          {user.name}
        </a> {" "}
         on <a href="https://unsplash.com" style={{fontFamily: inter.style.fontFamily}}>Unsplash</a>
      </p>
    );
  };

  return (
    <div className="imageCard" style={{ backgroundColor: color }}>
      <Link className="imageCardLink" href={`/image/${image.id}`}>
        <Image src={urls.regular} alt={alt_description ?? "An image"} width={width} height={height} />
      </Link>
      <div className="summary">{renderDescription()}</div>
      <div className="actions">
        <a href={links.download} title="Download">
          <CloudArrowDownIcon />
        </a>
        <Link href={links.html} title="Visit Official Page">
          <GlobeAltIcon />
        </Link>
        <CardFavButton likes={likes} />
      </div>
    </div>
  );
};

export default ImageCard;