"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Minus, Plus, ShoppingCart } from "lucide-react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div className="flex flex-col gap-6 p-6 rounded-xl border bg-background shadow-sm">
      {/* PRICE */}
      <h2 className="text-3xl font-bold">${total.toFixed(2)}</h2>

      {/* OPTIONS */}
      {options && (
        <div className="flex flex-wrap gap-2">
          {options.map((option, index) => (
            <Button
              key={option.title}
              variant={selected === index ? "default" : "outline"}
              onClick={() => setSelected(index)}
              className="rounded-md"
            >
              {option.title}
            </Button>
          ))}
        </div>
      )}

      {/* QUANTITY */}
      <div className="flex items-center justify-between rounded-lg border px-4 py-3">
        <span className="text-sm font-medium">Quantity</span>
        <div className="flex items-center gap-3">
          <Button
            size="icon"
            variant="outline"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            <Minus size={16} />
          </Button>

          <span className="w-6 text-center font-semibold">{quantity}</span>

          <Button
            size="icon"
            variant="outline"
            onClick={() => setQuantity((q) => Math.min(9, q + 1))}
          >
            <Plus size={16} />
          </Button>
        </div>
      </div>

      {/* ADD TO CART */}
      <Button size="lg" className="w-full gap-2">
        <ShoppingCart size={18} />
        Add to Cart
      </Button>
    </div>
  );
};

export default Price;
