"use client";

import { useCart } from "~/hooks/useCart";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Trash } from "lucide-react";

export default function Cart() {
  const { items, getTotal, removeItem, updateQuantity, clearCart } = useCart();
  const router = useRouter();

  return (
    <div className="container mx-auto py-10">
      <Button onClick={() => router.back()} className="rounded-[6px] mb-6" variant="outline">
        Back to Shopping
      </Button>
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {items.length > 0 ? (
        <div className="rounded-md shadow-md overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {items.map((item) => (
              <li key={item.id} className="px-4 py-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative w-20 h-20 rounded-md overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center rounded-md border border-gray-300">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                    >
                      -
                    </button>
                    <span className="px-2 text-center w-8">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                    >
                      +
                    </button>
                  </div>
                  <Button
                    onClick={() => removeItem(item.id)}
                    variant="ghost"
                    className="text-red-500 hover:bg-red-100 focus:outline-none"
                  >
                    <Trash className="h-5 w-5" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="p-4 bg-slate-100 rounded-b-md">
            <div className="flex justify-between items-center font-semibold text-lg">
              <span>Total:</span>
              <span>${getTotal().toFixed(2)}</span>
            </div>
            <div className="mt-4 flex justify-between space-x-2">
              <Button onClick={clearCart} className="bg-white hover:bg-red-400 hover:text-white"  variant="destructive">
                Clear Cart
              </Button>
              <Button onClick={() => router.push("/home/cart/checkout")} className="bg-white hover:bg-black hover:text-white">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">Your cart is currently empty.</h2>
          <Button onClick={() => router.push("/")} variant="outline">
            Continue Shopping
          </Button>
        </div>
      )}
    </div>
  );
}