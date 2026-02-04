import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-4 px-4 lg:px-20 text-amber-600 border-t bg-background/80 backdrop-blur flex flex-col md:flex-row items-center justify-between gap-4">
      
      {/* Left Section */}
      <div className="flex flex-col gap-1 md:w-1/2">
        <Link href="/" className="font-bold text-xl">
          Hot Buns
        </Link>
        <p className="text-sm">email: wjrkjrere@3kjrkfrfd.com</p>
        <p className="text-sm">phone: 123 456 789</p>
        <p className="text-xs">© ALL RIGHTS RESERVED (2006).</p>
      </div>

      {/* Right Section - Responsive Google Map */}
      <div className="w-full md:w-1/2 rounded overflow-hidden aspect-video shadow-md">
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=City+Nord,Bod%C3%B8,Norway&zoom=15`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="City Nord, Bodø"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
