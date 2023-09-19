"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation'

const NavLink = ({ href, iconOutline, icon, text }) => {
  const pathname = usePathname()
  const isActive = pathname === href;

  return (
    <Link href={href} className={isActive ? "active" : ""}>
      {isActive ? icon : iconOutline} {text}
    </Link>
  );
};


export default NavLink