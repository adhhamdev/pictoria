import './globals.css'
import Link from 'next/link'
import NavLink from '@/components/NavLink'
import Image from 'next/image'
import DarkModeButton from '@/components/DarkModeButton'
import { Inter } from 'next/font/google'
import { HomeIcon, RectangleGroupIcon, HeartIcon, IdentificationIcon } from '@heroicons/react/24/solid'
import { HomeIcon as HomeIconOutline, RectangleGroupIcon as RectangleGroupIconOutline, HeartIcon as HeartIconOutline, IdentificationIcon as IdentificationIconOutline } from '@heroicons/react/24/outline'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pictoria | Wonder in the world of Photography',
  description: "A place to explore high quality images from the world's most talented photographers.",
  image: '/logo-transparent.png',
  url: 'https://pictoria.vercel.app',
  keywords: 'photography, photos, images, pictures, unsplash, pictoria, pictoria app, pictoria photos, pictoria images, pictoria pictures, pictoria unsplash, pictoria photography, pictoria photos app, pictoria images app, pictoria pictures app, pictoria unsplash app, pictoria photography app, pictoria photos website, pictoria images website, pictoria pictures website, pictoria unsplash website, pictoria photography website, pictoria photos website, pictoria images website, pictoria pictures website, pictoria unsplash website, pictoria photography website, pictoria photos website, pictoria images website, pictoria pictures website, pictoria unsplash website, pictoria photography website, pictoria photos website, pictoria images website, pictoria pictures website, pictoria unsplash website, pictoria photography website, pictoria photos website, pictoria images website, pictoria pictures website, pictoria unsplash website, pictoria photography website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <div className="logo">
            <Link href="/">
              <Image src='/logo-transparent.png' width={140} height={30} alt="Pictoria Logo" />
            </Link>
          </div>
          <nav>
            {renderNavLink('/', <HomeIconOutline />, <HomeIcon />, 'Home')}
            {renderNavLink('/browse', <RectangleGroupIconOutline />, <RectangleGroupIcon />, 'Browse')}
            {renderNavLink('/favorites', <HeartIconOutline />, <HeartIcon />, 'Favorites')}
            {renderNavLink('/about', <IdentificationIconOutline />, <IdentificationIcon />, 'About')}
            <DarkModeButton />
          </nav>
        </header>
        {children}
        <footer>
          <p>&copy; Copyright 2023 Pictoria | All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}

function renderNavLink(href, iconOutline, icon, text) {
  return <NavLink href={href} iconOutline={iconOutline} icon={icon} text={text} />
}
