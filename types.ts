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