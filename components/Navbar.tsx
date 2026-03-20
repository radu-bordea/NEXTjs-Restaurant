"use client";

import Link from "next/link";
import { Phone, Menu as MenuIcon, LogOut } from "lucide-react";
import { FiShoppingCart } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import ThemeToggle from "./ThemeToggle";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { status } = useSession();
  const isAuth = status === "authenticated";

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-14 items-center justify-between px-4 md:h-20 lg:px-20 xl:px-40">
        {/* LEFT LINKS (Desktop) */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">Homepage</Link>
          <Link href="/menu" className="hover:text-foreground transition-colors">Menu</Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>

        {/* LOGO */}
        <div className="text-lg font-bold tracking-wide md:text-xl">
          <Link href="/" className="hover:opacity-80 transition-opacity">Hot Buns</Link>
        </div>

        {/* RIGHT SIDE (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <a href="tel:12345678">123 456 78</a>
          </div>

          {isAuth ? (
            <>
              <Button asChild variant="ghost" size="sm">
                <Link href="/orders">Orders</Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </>
          ) : (
            <Button asChild variant="outline" size="sm">
              <Link href="/login">Login</Link>
            </Button>
          )}

          <Button asChild variant="secondary" size="sm" className="flex items-center gap-2">
            <Link href="/cart">
              <FiShoppingCart className="h-4 w-4" />
              <span>Cart (3)</span>
            </Link>
          </Button>

          <ThemeToggle />
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="flex flex-col gap-6 pt-10 px-6">
              <VisuallyHidden>
                <SheetTitle>Hot Buns navigation</SheetTitle>
              </VisuallyHidden>

              <ThemeToggle />

              <Link href="/" className="text-lg font-medium transition-colors hover:text-primary">Homepage</Link>
              <Link href="/menu" className="text-lg font-medium transition-colors hover:text-primary">Menu</Link>
              <Link href="/contact" className="text-lg font-medium transition-colors hover:text-primary">Contact</Link>

              <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>123 456 78</span>
              </div>

              <Button asChild size="sm" variant="secondary" className="flex items-center gap-1">
                <Link href="/cart">
                  <FiShoppingCart className="h-4 w-4" />
                  <span>Cart (3)</span>
                </Link>
              </Button>

              {isAuth ? (
                <>
                  <Button asChild variant="outline">
                    <Link href="/orders">Orders</Link>
                  </Button>
                  <Button
                    variant="destructive"
                    className="flex items-center gap-2"
                    onClick={() => signOut({ callbackUrl: "/" })}
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                </>
              ) : (
                <Button asChild className="mt-4">
                  <Link href="/login">Login</Link>
                </Button>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;