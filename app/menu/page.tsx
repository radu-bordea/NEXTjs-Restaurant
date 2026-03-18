// app/menu/page.tsx
import { getCategories } from "@/lib/actions/categoryActions";
import { getProducts } from "@/lib/actions/productActions";
import MenuClient from "./MenuClient";

const MenuPage = async () => {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);

  return <MenuClient categories={categories} products={products} />;
};

export default MenuPage;