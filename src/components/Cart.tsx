"use client";

import { useCart } from "~/hooks/useCart";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function Cart() {
    const { items, getTotal, removeItem, addItem, updateQuantity, clearCart } = useCart();
    const router = useRouter();

    return (
        <div className="h-full">
            {items.length > 0 ? (
                <div>
                    {items.map((item) => (
                        <div key={item.id} className="flex justify-between items-center p-2 border-b">
                            <div>
                                <p className="font-medium">{item.name}</p>
                                <p>${item.price.toFixed(2)} x {item.quantity}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                <button onClick={() => removeItem(item.id)}>🗑</button>
                            </div>
                        </div>
                    ))}
                    <div className="p-4 font-bold">Total: ${getTotal().toFixed(2)}</div>
                    <button onClick={clearCart} className="bg-red-500 text-white p-2 mt-4">
                        Clear Cart
                    </button>
                </div>
            ) : (
                <>
                <Button onClick={() => router.back()} className="rounded-[6px] ml-4 mt-4" variant="outline">Back</Button>
                <div className="h-full flex py-52 items-center justify-center text-2xl w-full">No items in the cart</div>
                </>
            )}
        </div>
    );
}
