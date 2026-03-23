"use client";

import { useState } from "react";
import { OrderType } from "@/types";
import { Button } from "@/components/ui/button";
import { ZapIcon } from "lucide-react";
import { updateOrderStatus } from "@/lib/actions/orderActions";
import { toast } from "sonner";

const statusStyles: Record<string, string> = {
  delivered: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
  pending: "bg-yellow-100 text-yellow-700",
  processing: "bg-blue-100 text-blue-700",
};

type Props = {
  orders: OrderType[];
  isAdmin: boolean;
};

const OrdersClient = ({ orders, isAdmin }: Props) => {
  const [statusInputs, setStatusInputs] = useState<Record<string, string>>({});

  const handleUpdate = async (id: string) => {
    const newStatus = statusInputs[id];
    if (!newStatus) {
      toast.error("Please enter a status first.");
      return;
    }

    toast.promise(updateOrderStatus(id, newStatus), {
      loading: "Updating order...",
      success: "Order status updated!",
      error: "Failed to update order.",
    });
  };

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
                <th className="px-4 py-3 text-left font-semibold hidden md:table-cell">Order ID</th>
                <th className="px-4 py-3 text-left font-semibold">Date</th>
                <th className="px-4 py-3 text-left font-semibold">Price</th>
                <th className="px-4 py-3 text-left font-semibold hidden md:table-cell">Products</th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((item, i) => (
                <tr
                  key={item.id}
                  className={`border-b transition-colors hover:bg-muted/50 ${
                    i % 2 === 1 ? "bg-muted/30" : ""
                  }`}
                >
                  <td className="hidden md:table-cell px-4 py-4 text-muted-foreground font-mono text-xs">
                    {item.id}
                  </td>
                  <td className="px-4 py-4">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-4 font-medium">${item.price}</td>
                  <td className="hidden md:table-cell px-4 py-4 max-w-md truncate text-muted-foreground">
                    {item.products.map((p) => p.title).join(", ")}
                  </td>

                  {isAdmin ? (
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <input
                          placeholder={item.status}
                          value={statusInputs[item.id] ?? ""}
                          onChange={(e) =>
                            setStatusInputs((prev) => ({
                              ...prev,
                              [item.id]: e.target.value,
                            }))
                          }
                          className="p-2 border rounded-md text-sm w-32"
                        />
                        <Button
                          size="sm"
                          onClick={() => handleUpdate(item.id)}
                          className="bg-amber-600 hover:bg-amber-700 text-white"
                        >
                          Update <ZapIcon className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </td>
                  ) : (
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                          statusStyles[item.status.toLowerCase()] ??
                          "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersClient;