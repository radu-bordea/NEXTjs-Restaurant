// app/orders/page.tsx  ← Server Component
import { getOrders } from "@/lib/actions/orderActions";
import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import OrdersClient from "./OrdersClient";

const OrdersPage = async () => {
  const session = await getAuthSession();

  if (!session?.user) redirect("/login");

  const orders = await getOrders();

  return <OrdersClient orders={orders} isAdmin={session.user.isAdmin ?? false} />;
};

export default OrdersPage;