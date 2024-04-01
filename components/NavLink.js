"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { inter } from "@/lib/fonts";

const NavLink = ({ href, iconOutline, icon, text }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={isActive ? "active" : ""} style={inter.style}>
      {isActive ? icon : iconOutline} {text}
    </Link>
  );
};


export default NavLink