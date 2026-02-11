"use client";

import Price from "@/components/Price";
import { singleProduct } from "@/data";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className="min-h-screen px-4 md:pt-20 lg:pt-40 py-10 lg:px-20 xl:px-40">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* IMAGE */}
        {singleProduct.img && (
          <div className="group relative w-full h-75 md:h-112.5 rounded-2xl p-6  transition-all ">
            <div className="relative w-full h-full overflow-hidden rounded-xl transition-all duration-900 group-hover:rotate-6">
              <Image
                src={singleProduct.img}
                alt={singleProduct.title}
                fill
                className="object-contain transition-transform duration-1000 hover:rotate-60 transtition-all"
                priority
              />
            </div>
          </div>
        )}

        {/* INFO */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl xl:text-5xl font-bold tracking-tight">
            {singleProduct.title}
          </h1>

          <p className="text-muted-foreground leading-relaxed">
            {singleProduct.desc}
          </p>

          <Price
            price={singleProduct.price}
            id={singleProduct.id}
            options={singleProduct.options}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
