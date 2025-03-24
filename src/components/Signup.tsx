"use client"

import Image from "next/image"
import { Package, Truck, CreditCard } from "lucide-react"
import { signIn } from "next-auth/react"

export default function Signup() {

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left Column - Signup Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-12 lg:px-16">
          <>
            <h1 className="text-4xl font-medium mb-3">Create your account</h1>
            <p className="text-gray-400 mb-10">Join thousands of shoppers and get access to exclusive deals.</p>

            <div className="space-y-4 max-w-md">
              <button className="w-full bg-white text-black rounded-full py-3 flex items-center justify-center gap-2"
              onClick={async () => {
                await signIn("google" , { redirectTo: "/home"});
              }}
              >
                <img src="/google-icon.svg" alt="Google" width={20} height={20} className="w-5 h-5" />
                Continue with Google
              </button>

              <div className="flex items-center gap-3">
                <div className="h-px bg-gray-800 flex-grow"></div>
                <span className="text-gray-400">Tech Wave</span>
                <div className="h-px bg-gray-800 flex-grow"></div>
              </div>
            </div>
          </>
      </div>

      {/* Right Column - E-commerce Preview */}
      <div className="hidden lg:block w-1/2 bg-zinc-900 p-8 rounded-2xl h-fit">
        <div className="max-w-lg mx-auto">
          {/* Award Badges */}
          <div className="flex justify-between mb-12 ">
            <div className="text-center items-center flex flex-col justify-center space-y-2">
              <div className="text-xs text-gray-400">Best Online Store</div>
              <div className="font-bold">2023</div>
              <div className="flex mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center font-bold text-white">T</div>
            </div>

            <div className="text-center items-center flex flex-col justify-center space-y-2">
              <div className="text-xs text-gray-400">Customer Satisfaction</div>
              <div className="font-bold">4.9/5</div>
              <div className="flex mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
                <img src="/google-icon.svg" alt="Google" width={32} height={32} />
              </div>
            </div>

            <div className="text-center items-center flex flex-col justify-center space-y-2">
              <div className="text-xs text-gray-400">Fast Delivery</div>
              <div className="font-bold">24h</div>              <div className="flex mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i === 4 ? "text-gray-600 text-xl" : "text-red-500 text-xl"}>
                    ★
                  </span>
                ))}
              </div>
              <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
                <img src="/amazon.svg" alt="Google" width={32} height={32} />
              </div>
            </div>
          </div>

          {/* Product Preview */}
          <div className="bg-zinc-800 overflow-hidden border rounded-xl border-zinc-700">
            {/* Product Header */}
            <div className="relative">
              <Image
                src="/store.jpg"
                alt="Website logo"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-500 px-2 py-1 text-xs font-bold rounded">SALE</div>
            </div>

            {/* Product Details */}
            <div className="p-6">
              <p className="text-gray-400 text-sm mb-6">
                Stay warm and stylish this winter with our premium jacket. Features water-resistant material, thermal
                insulation, and a modern design suitable for any occasion.
              </p>

              {/* Shipping Info */}
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Package className="h-5 w-5 text-gray-400 mb-1" />
                  <span className="text-xs text-gray-400">Free Returns</span>
                </div>
                <div className="flex flex-col items-center">
                  <Truck className="h-5 w-5 text-gray-400 mb-1" />
                  <span className="text-xs text-gray-400">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center">
                  <CreditCard className="h-5 w-5 text-gray-400 mb-1" />
                  <span className="text-xs text-gray-400">Secure Payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

