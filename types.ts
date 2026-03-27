export type MenuType = {
  id: string;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
};

export type ProductType = {
  id: string;
  createdAt: Date;
  title: string;
  desc: string;
  img?: string | null;
  price: number;
  isFeatured: boolean;
  options: { title: string; additionalPrice: number }[];
  catSlug: string;
};

export type OrderType = {
  id: string;
  createdAt: Date;
  price: number;
  products: CartItemType[];
  status: string;
  intent_id?: string | null;
  userEmail?: string | null;
  userPhone?: string | null;
  address?: string | null;
};

export type CartItemType = {
  id: string;
  title: string;
  img?: string;
  price: number;
  optionTitle?: string;
  quantity: number;
};

// types/next-auth.d.ts
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      isAdmin?: boolean;
    } & DefaultSession["user"];
  }
}