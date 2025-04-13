"use client"
import { Button } from "./ui/button";
import { useCart } from "~/hooks/useCart";

interface AddToCartButtonProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export function AddToCartButton({ id, name, price, imageUrl }: AddToCartButtonProps) {
  const { items, addItem, updateQuantity, removeItem } = useCart();
  const existingItem = items.find((item) => item.id === id);
  const quantity = existingItem?.quantity || 0;

  const handleAddToCart = () => {
    if (!existingItem) {
      addItem({ id, name, price, imageUrl, quantity: 1 });
    }
  };

  const increaseQuantity = () => {
    if (existingItem) {
      updateQuantity(id, existingItem.quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (existingItem) {
      if (existingItem.quantity > 1) {
        updateQuantity(id, existingItem.quantity - 1);
      } else {
        removeItem(id);
      }
    }
  };

  return (
    <div className="w-full bg-gray-700 text-white rounded-[7px]">
      {quantity === 0 ? (
        <Button onClick={handleAddToCart} className="w-full text-sm">
          Add to Cart
        </Button>
      ) : (
        <div className="w-full flex items-center justify-between rounded-[7px]">
          <Button onClick={decreaseQuantity} className="text-xs px-3">
            −
          </Button>
          <span className="text-sm font-medium">{quantity}</span>
          <Button onClick={increaseQuantity} className="text-xs px-3">
            +
          </Button>
        </div>
      )}
    </div>
  );
}
