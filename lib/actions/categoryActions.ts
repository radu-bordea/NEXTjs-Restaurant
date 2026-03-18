"use server";

import prisma from "@/lib/prisma";
import { MenuType } from "@/types";


export const getCategories = async (): Promise<MenuType[]> => {
  const dbCategories = await prisma.category.findMany({
    orderBy: { createdAt: "asc" },
  });

  const all: MenuType = {
    id: "all",
    slug: "all",
    title: "All",
    color: "#B5E0BA",
  };

  return [all, ...dbCategories];
};
