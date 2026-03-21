"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { OrderType } from "@/types";

const statusStyles: Record<string, string> = {
  Delivered: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Processing: "bg-blue-100 text-blue-700",
};

const OrdersPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  const {
    isLoading,
    error,
    data: orders,
  } = useQuery<OrderType[]>({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("http://localhost:3000/api/orders").then((res) => res.json()),
  });

  if (isLoading || status === "loading") return "Loading...";

  if (error) return "Something went wrong!";

  return (
    <div className="p-4 lg:px-20 xl:px-40 py-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Your Orders</h1>
        <p className="text-sm text-muted-foreground">
          Track and review your recent orders.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
        <div className="relative w-full h-[60vh] overflow-x-auto overflow-y-auto">
          <table className="w-full text-sm md:text-base">
            <thead className="bg-background/80 backdrop-blur sticky top-0 z-10">
              <tr className="border-b">
                <th className="px-4 py-3 text-left font-semibold hidden md:table-cell">
                  Order ID
                </th>
                <th className="px-4 py-3 text-left font-semibold">Date</th>
                <th className="px-4 py-3 text-left font-semibold">Price</th>
                <th className="px-4 py-3 text-left font-semibold hidden md:table-cell">
                  Products
                </th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
              </tr>
            </thead>

            <tbody>
              {orders?.map((order, i) => (
                <tr
                  key={order.id}
                  className={`border-b transition-colors hover:bg-muted/50 ${
                    i % 2 === 1 ? "bg-muted/30" : ""
                  }`}
                >
                  <td className="hidden md:table-cell px-4 py-4 text-muted-foreground">
                    {order.id}
                  </td>
                  <td className="px-4 py-4">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-4 font-medium">${order.price}</td>
                  <td className="hidden md:table-cell px-4 py-4 max-w-md truncate text-muted-foreground">
                    {order.products.map((p) => p.title).join(", ")}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                        statusStyles[order.status] ??
                        "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
