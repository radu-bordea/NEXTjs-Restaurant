import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { Phone } from 'lucide-react';

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-amber-600 p-4 flex items-center justify-between border-b-2 border-b-amber-600 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Hot Buns</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer border-r border-r-amber-600 px-1 rounded-md">
          {/* <Image src="/phone.png" alt="" width={20} height={20} /> */}
          <Phone width={20} height={20}/>
          <span>123 456 78</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
        <ThemeToggle/>
      </div>
    </div>
  );
};

export default Navbar;