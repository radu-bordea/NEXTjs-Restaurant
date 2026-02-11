import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const cartItems = [
  { id: 1, title: "Sicilian", size: "Large", price: 79.9, img: "/temporary/p1.png" },
  { id: 2, title: "Sicilian", size: "Large", price: 79.9, img: "/temporary/p1.png" },
  { id: 3, title: "Sicilian", size: "La rge", price: 79.9, img: "/temporary/p1.png" },
  { id: 4, title: "Sicilian", size: "La rge", price: 79.9, img: "/temporary/p1.png" },
  { id: 5, title: "Sicilian", size: "La rge", price: 79.9, img: "/temporary/p1.png" },
  { id: 6, title: "Sicilian", size: "La rge", price: 79.9, img: "/temporary/p1.png" },
  { id: 7, title: "Sicilian", size: "La rge", price: 79.9, img: "/temporary/p1.png" },
  { id: 8, title: "Sicilian", size: "La rge", price: 79.9, img: "/temporary/p1.png" },
];

const CartPage = () => {
  const hasItems = cartItems.length > 0;

  return (
    <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-9rem)] px-4 lg:px-20 xl:px-40 py-10">
      <div className="grid lg:grid-cols-3 gap-10">
        {/* PRODUCTS */}
        <div className="lg:col-span-2">
          <h1 className="mb-6 text-2xl font-bold">Your Cart</h1>

          {!hasItems ? (
            <div className="flex h-[300px] flex-col items-center justify-center rounded-xl border border-dashed text-center text-muted-foreground">
              <p className="text-lg font-medium">Your cart is empty</p>
              <p className="text-sm">Looks like you haven’t added anything yet.</p>
              <Button className="mt-4">Browse menu</Button>
            </div>
          ) : (
            <div
              className={`flex flex-col gap-4 ${
                cartItems.length > 3
                  ? "max-h-[60vh] overflow-y-auto pr-2"
                  : ""
              }`}
            >
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 rounded-xl border bg-card p-4 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="rounded-lg object-contain"
                    />
                    <div>
                      <h2 className="font-semibold">{item.title}</h2>
                      <span className="text-sm text-muted-foreground">
                        {item.size}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-semibold">${item.price.toFixed(2)}</span>
                    <button className="text-sm text-red-500 hover:underline">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SUMMARY */}
        <div className="lg:sticky lg:top-56 h-fit rounded-xl border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>

          <div className="flex justify-between text-sm">
            <span>Subtotal ({cartItems.length} items)</span>
            <span>$81.70</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Service Cost</span>
            <span>$0.00</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Delivery</span>
            <span className="text-green-500">FREE</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-semibold">
            <span>Total (incl. VAT)</span>
            <span>$81.70</span>
          </div>

          <Button className="mt-6 w-full">Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
