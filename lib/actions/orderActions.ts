// lib/actions/orderActions.ts
"use server";

import prisma from "@/lib/prisma";
import { OrderType } from "@/types";
import { getAuthSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export const getOrders = async (): Promise<OrderType[]> => {
  const session = await getAuthSession();

  if (!session?.user) throw new Error("Unauthorized");

  const dbOrders = await prisma.order.findMany({
    where: session.user.isAdmin
      ? undefined
      : { userEmail: session.user.email! },
    orderBy: { createdAt: "desc" },
  });

  return dbOrders.map((o) => ({
    ...o,
    price: o.price.toNumber(),
    products: o.products as OrderType["products"],
  }));
};

export const updateOrderStatus = async (id: string, status: string) => {
  const session = await getAuthSession();

  if (!session?.user.isAdmin) throw new Error("Unauthorized");

  await prisma.order.update({
    where: { id },
    data: { status },
  });

  revalidatePath("/orders");
};