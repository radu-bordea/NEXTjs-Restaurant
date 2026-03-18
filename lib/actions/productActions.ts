"use server";

import prisma from "@/lib/prisma";
import { ProductType } from "@/types";

export const getProducts = async (): Promise<ProductType[]> => {
  const dbProducts = await prisma.product.findMany({
    orderBy: { createdAt: "asc" },
  });

return dbProducts.map((p) => ({
  ...p,
  price: p.price.toNumber(),
  options: p.options as { title: string; additionalPrice: number }[],
}));
};