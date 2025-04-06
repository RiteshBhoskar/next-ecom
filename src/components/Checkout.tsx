"use client";

import { useState } from "react";
import { useCart } from "~/hooks/useCart";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { api } from "~/trpc/react";
import Image from "next/image";

interface AddressInput {
  address: string;
  city: string;
  state: string;
  country: string;
  zip: string;
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_TEST_KEY!);

export default function CheckoutPage() {
  const { items, getTotal } = useCart();
  const router = useRouter();
  const [newAddress, setNewAddress] = useState<AddressInput>({
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  });
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const createPaymentIntentMutation = api.order.createPaymentIntent.useMutation();

  const handleNewAddressInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
  };

  const handleCheckout = async () => {
    setPaymentProcessing(true);
    const stripe = await stripePromise;
    const cartItemsToSend = items.map(item => ({ productId: parseInt(item.id), quantity: item.quantity}))

    if (!stripe) {
      console.error("Stripe failed to load.");
      setPaymentProcessing(false);
      return;
    }

    try {
      const totalAmount = getTotal() * 100;
      const paymentIntentResult = await createPaymentIntentMutation.mutateAsync({
        amount: totalAmount,
        newAddress,
        cartItems: cartItemsToSend,
      });

      if (paymentIntentResult?.sessionId) {
        const result = await stripe.redirectToCheckout({
          sessionId: paymentIntentResult.sessionId,
        });

        if (result.error) {
          console.error(result.error.message);
          setPaymentProcessing(false);
        }
      } else {
        console.error("Failed to get client secret from tRPC mutation.");
        setPaymentProcessing(false);
      }
    } catch (error: any) {
      console.error("Error initiating checkout:", error);
      setPaymentProcessing(false);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <Button onClick={() => router.back()} className="rounded-[6px] mb-6" variant="outline">
        Back to Cart
      </Button>
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {items.length === 0 ? (
        <p>Your cart is empty. Please add items before checking out.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="px-7 sm:px-14 justify-center">
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                <input type="text" id="address" name="address" value={newAddress.address} onChange={handleNewAddressInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div>
                <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City</label>
                <input type="text" id="city" name="city" value={newAddress.city} onChange={handleNewAddressInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div>
                <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">State</label>
                <input type="text" id="state" name="state" value={newAddress.state} onChange={handleNewAddressInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div>
                <label htmlFor="zip" className="block text-gray-700 text-sm font-bold mb-2">Zip</label>
                <input type="text" id="zip" name="zip" value={newAddress.zip} onChange={handleNewAddressInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div>
                <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">Country</label>
                <input type="text" id="country" name="country" value={newAddress.country} onChange={handleNewAddressInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <Button onClick={handleCheckout} className="w-full mt-4 rounded text-white bg-black hover:text-white hover:bg-black" disabled={paymentProcessing}>
                {paymentProcessing ? "Processing Payment..." : "Proceed to Payment"}
              </Button>
            </form>
          </div>
          <div className="px-7 sm:px-0">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <ul className="mb-4">
              {items.map((item) => (
                <li key={item.id} className="py-2 flex items-center justify-between border-b border-gray-200">
                  <div className="flex items-center space-x-4">
                    {item.imageUrl && (
                      <div className="relative w-24 h-24 rounded-xl overflow-hidden">
                        <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                    </div>
                  </div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>

            <div className="py-2 flex justify-between items-center font-semibold border-b border-gray-200">
              <span>Subtotal</span>
              <span>${getTotal().toFixed(2)}</span>
            </div>

            <div className="py-2 flex justify-between items-center border-b border-gray-200">
              <span>Tax (9.875%)</span>
              <span>${(getTotal() * 0.09875).toFixed(2)}</span> 
            </div>

            <div className="py-2 flex justify-between items-center border-b border-gray-200">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="py-2 mt-4 flex justify-between items-center font-bold text-lg">
              <span>Total</span>
              <span>${(getTotal() + (getTotal() * 0.09875)).toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}