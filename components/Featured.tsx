import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const Featured = () => {

// Suppose featuredProducts is your full array of products
const allProducts = featuredProducts;

// Take only the first 6 items for Featured section
const featuredProducts6 = allProducts.slice(0, 6);



  return (
    <section className="w-full py-12 hover:shadow-xl">
      {/* Section Header */}
      <div className="mx-auto mb-6 flex max-w-7xl flex-col gap-2 px-4">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Featured Burgers
        </h2>
        <p className="text-sm text-muted-foreground">
          Our most popular picks, freshly grilled and loved by everyone.
        </p>
      </div>

      {/* Horizontal Scroll */}
      <div className="w-screen overflow-x-auto">
        <div className="flex w-max snap-x snap-mandatory gap-6 px-4 py-4">
          {featuredProducts6.map((item) => (
            <div
              key={item.id}
              className="group relative flex h-[60vh] w-[80vw] max-w-sm snap-center flex-col justify-between rounded-2xl border bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:w-[45vw] xl:w-[28vw]"
            >
              {/* IMAGE */}
              {item.img && (
                <div className="relative h-44 w-full overflow-hidden rounded-xl">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}

              {/* TEXT */}
              <div className="mt-4 flex flex-col items-center gap-3 text-center">
                <h3 className="text-lg font-semibold md:text-xl">
                  {item.title}
                </h3>

                <p className="line-clamp-3 text-sm text-muted-foreground">
                  {item.desc}
                </p>

                <span className="text-xl font-bold text-primary">
                  ${item.price}
                </span>

                <Button className="mt-2 w-full">
                  Add to cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
