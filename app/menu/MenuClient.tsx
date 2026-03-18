"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { MenuType, ProductType } from "@/types";

type Props = {
  categories: MenuType[];
  products: ProductType[];
};

const MenuClient = ({ categories, products }: Props) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.catSlug === activeCategory);

  const getDesktopCols = () => {
    const count = filteredProducts.length;
    if (count === 1) return "lg:grid-cols-1";
    if (count === 2) return "lg:grid-cols-2";
    if (count === 3) return "lg:grid-cols-3";
    return "lg:grid-cols-4";
  };

  return (
    <section className="w-full pt-12 pb-48">
      <div className="mx-auto mb-6 flex max-w-7xl flex-col gap-2 px-4">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Menu</h2>
        <p className="text-sm text-muted-foreground">
          Browse our selection of pizzas, pastas, and burgers.
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-8 px-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.slug)}
            className={`px-4 py-2 rounded-full border font-medium capitalize transition-colors ${
              activeCategory === cat.slug
                ? "bg-amber-600 text-white border-amber-600"
                : "bg-white text-amber-600 border-amber-600 hover:bg-amber-500 hover:text-white"
            }`}
          >
            {cat.slug}
          </button>
        ))}
      </div>

      <div className="w-full px-4">
        <div
          className={`grid gap-6 max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-2 items-start ${getDesktopCols()}`}
        >
          <AnimatePresence>
            {filteredProducts.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col justify-between rounded-2xl p-4 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-neutral-500 bg-card shadow-sm dark:hover:shadow-neutral-700 h-105"
              >
                <div className="relative h-44 w-full overflow-hidden rounded-xl shrink-0">
                  {item.img && (
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-contain transition-transform duration-900 group-hover:scale-103"
                    />
                  )}
                </div>

                <div className="flex flex-col items-center gap-3 text-center flex-1 justify-between pt-4">
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="text-lg font-semibold md:text-xl">
                      {item.title}{" "}
                      <sup className="text-sm text-muted-foreground">
                        {item.catSlug}
                      </sup>
                    </h3>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-2 w-full">
                    <span className="text-xl font-bold text-primary">
                      ${item.price}
                    </span>
                    <Button className="mt-2 w-full cursor-pointer">
                      Add to cart
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MenuClient;