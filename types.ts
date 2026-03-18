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
  products: { title: string; price: number; quantity: number; options?: { title: string; additionalPrice: number } }[];
  status: string;
  intent_id?: string | null;
  userEmail?: string | null;
  userPhone?: string | null;
  address?: string | null;
};