<<<<<<< HEAD
import React from 'react';
import './globals.css'
=======
>>>>>>> 274c4085547feea9c56e9137a76397009d6e4dbe
import Link from 'next/link';
import NavLink from '@/components/NavLink';
import Image from 'next/image';
import { inter } from '@/utils/fonts';
import DarkModeButton from '@/components/DarkModeButton';
import { HomeIcon, RectangleGroupIcon, HeartIcon, IdentificationIcon } from '@heroicons/react/24/solid';
import { HomeIcon as HomeIconOutline, RectangleGroupIcon as RectangleGroupIconOutline, HeartIcon as HeartIconOutline, IdentificationIcon as IdentificationIconOutline } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Pictoria | Wonder in the world of Photography',
  description: "A place to explore high quality images from the world's most talented photographers.",
  image: '/logo-transparent.png',
  url: 'https://pictoria.vercel.app',
  keywords: 'photography, photos, images, pictures, unsplash, pictoria, pictoria app, pictoria photos, pictoria images, pictoria pictures, pictoria unsplash, pictoria photography, pictoria photos app, pictoria images app, pictoria pictures app, pictoria unsplash app, pictoria photography app, pictoria photos website, pictoria images website, pictoria pictures website, pictoria unsplash website, pictoria photography website, pictoria photos website, pictoria images website, pictoria pictures website, pictoria unsplash website, pictoria photography website, pictoria photos website, pictoria images website, pictoria pictures website, pictoria unsplash website, pictoria photography website, pictoria photos website, pictoria images website, pictoria pictures website, pictoria unsplash website, pictoria photography website, pictoria photos website, pictoria images website, pictoria pictures website, pictoria unsplash website, pictoria photography website',
};

const navLinks = [
  { href: '/', iconOutline: <HomeIconOutline />, icon: <HomeIcon />, text: 'Home' },
  { href: '/browse', iconOutline: <RectangleGroupIconOutline />, icon: <RectangleGroupIcon />, text: 'Browse' },
  { href: '/favorites', iconOutline: <HeartIconOutline />, icon: <HeartIcon />, text: 'Favorites' },
  { href: '/about', iconOutline: <IdentificationIconOutline />, icon: <IdentificationIcon />, text: 'About' },
];

const currentYear = new Date().getFullYear();

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body style={inter.style}>
        <header>
          <div className="logo">
            <Link href="/">
              <Image src='/logo-transparent.png' width={140} height={30} alt="Pictoria Logo" loading="eager" />
            </Link>
          </div>
          <nav>
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} iconOutline={link.iconOutline} icon={link.icon} text={link.text} />
            ))}
            <DarkModeButton />
          </nav>
        </header>
        {children}
        <footer>
          <p>&copy; {currentYear} Pictoria | All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}