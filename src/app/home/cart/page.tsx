"use client"
import { useCart } from "~/hooks/useCart"


export default function Cart(){
    const { items } = useCart();
    return (
        <div>
            {items.map((item) => (
                <div key={item.id}>
                    {item.imageUrl}
                    {item.name}
                    {item.price}
                    <div>
                    {item.quantity}
                    </div>
                </div>
            ))}
        </div>
    )
}