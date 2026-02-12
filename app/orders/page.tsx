const orders = [
  {
    id: "1237861238721",
    date: "19.07.2023",
    price: "89.90",
    products: "Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)",
    status: "On the way (approx. 10min)...",
  },
  {
    id: "1237861238722",
    date: "20.07.2023",
    price: "42.50",
    products: "Pepperoni Pizza (1), Fries (1)",
    status: "Delivered",
  },
  {
    id: "1237861238723",
    date: "21.07.2023",
    price: "65.00",
    products: "Veggie Burger (2), Cola (2)",
    status: "Preparing",
  },
];

const statusStyles: Record<string, string> = {
  Delivered: "bg-green-100 text-green-700",
  Preparing: "bg-amber-100 text-amber-700",
};

const OrdersPage = () => {
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
              {orders.map((order, i) => (
                <tr
                  key={order.id}
                  className={`border-b transition-colors hover:bg-muted/50 ${
                    i % 2 === 1 ? "bg-muted/30" : ""
                  }`}
                >
                  <td className="hidden md:table-cell px-4 py-4 text-muted-foreground">
                    {order.id}
                  </td>
                  <td className="px-4 py-4">{order.date}</td>
                  <td className="px-4 py-4 font-medium">${order.price}</td>
                  <td className="hidden md:table-cell px-4 py-4 max-w-md truncate text-muted-foreground">
                    {order.products}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                        statusStyles[order.status] ||
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
