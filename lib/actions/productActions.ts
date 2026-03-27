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

export const getProductById = async (
  id: string,
): Promise<ProductType | null> => {
  const dbProductById = await prisma.product.findUnique({
    where: {
      id, // ✅ no parseInt needed
    },
  });

  if (!dbProductById) return null;

  return {
    ...dbProductById,
    price: dbProductById.price.toNumber(),
    options: dbProductById.options as {
      title: string;
      additionalPrice: number;
    }[],
  };
};
