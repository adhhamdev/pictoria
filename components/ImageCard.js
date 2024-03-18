import Image from 'next/image';
import Link from 'next/link';
import { inter } from '@/utils/fonts';
import CardFavButton from './CardFavButton';
import { GlobeAltIcon, CloudArrowDownIcon } from '@heroicons/react/24/solid';
const ImageCard = ({ accessToken, image }) => {

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
    likedByUser,
  } = image;

  const renderDescription = () => {
    return (
      <p className='desc'>
        By{' '}
        <a href={user.links.html} style={inter.style}>
          {user.name}
        </a>{' '}
        on{' '}
        <a href='https://unsplash.com' style={inter.style}>
          Unsplash
        </a>
      </p>
    );
  };

  const handleDownload = () => {
    unsplash.photos.trackDownload({ downloadLocation: links.download });
  };

  return (
    <div className='imageCard' style={{ backgroundColor: color }}>
      <Link className='imageCardLink' href={`/image/${image.id}`}>
        <Image
          src={urls.regular}
          alt={alt_description ?? 'An image'}
          width={width}
          height={height}
        />
      </Link>
      <div className='summary'>{renderDescription()}</div>
      <div className='actions'>
        <a href={links.download} title='Download' onClick={handleDownload}>
          <CloudArrowDownIcon />
        </a>
        <Link href={links.html} title='Visit Official Page'>
          <GlobeAltIcon />
        </Link>
        <CardFavButton
          accessToken={accessToken}
          likes={likes}
          likedByUser={likedByUser}
          id={id}
        />
      </div>
    </div>
  );
};

export default ImageCard;
