"use client"
import { format } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";

export default function Orders() {
  const { data: orders , isLoading , isError } = api.order.getAllOrders.useQuery();
  const router = useRouter();

  if (isLoading) {
    return <div className="w-full flex justify-center items-center py-8">Loading orders...</div>;
  }

  if (isError) {
    return <div className="w-full flex justify-center items-center py-8">Error loading orders.</div>;
  }

  return (
    <div className="w-full flex flex-col justify-center items-center mx-auto py-8">
        <div className="w-full pl-4 pt-4">
        <Button onClick={() => router.back()} variant="outline" className="rounded-[7px]">
            Back
        </Button>
        </div>
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>
      {orders?.length === 0 ? (
        <p>You haven't placed any orders yet.</p>
      ) : (
        <ul className="space-y-6">
          {orders?.map((order) => (
            <li key={order.id} className="bg-white rounded-md shadow-md p-4">
              <h2 className="text-lg font-semibold mb-2">Order ID: {order.id}</h2>
              <p className="text-gray-600 mb-2">
                Order Date: {format(order.createdAt, "MMM dd, yyyy hh:mm a")}
              </p>
              <h3 className="font-semibold mb-1">Order Items:</h3>
              <ul className="space-y-2">
                {order.orderItems.map((item) => (
                  <li key={item.id} className="flex items-center space-x-4">
                    <div className="relative w-16 h-16">
                      <Image
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{item.product.name}</p>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      <p className="text-sm text-gray-500">
                        Price: ${item.product.price.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-700 font-semibold">
                        Total: ${(item.quantity * item.product.price).toFixed(2)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-3">
                <p className="font-semibold">
                  Total Order Amount: $
                  {order.orderItems
                    .reduce((total, item) => total + item.quantity * item.product.price, 0)
                    .toFixed(2)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}