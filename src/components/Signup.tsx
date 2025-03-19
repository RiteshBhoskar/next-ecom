"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Package, Truck, CreditCard } from "lucide-react"
import { useState } from "react"
import { signIn } from "next-auth/react"

export default function Signup() {
  const [showEmailForm, setShowEmailForm] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left Column - Signup Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-12 lg:px-16">
        {!showEmailForm ? (
          <>
            <h1 className="text-4xl font-bold mb-3">Create your account</h1>
            <p className="text-gray-400 mb-10">Join thousands of shoppers and get access to exclusive deals.</p>

            <div className="space-y-4 max-w-md">
              <button className="w-full bg-white text-black rounded-full py-3 flex items-center justify-center gap-2"
              onClick={async () => {
                await signIn("google");
              }}
              >
                <img src="/google-icon.svg" alt="Google" width={20} height={20} className="w-5 h-5" />
                Continue with Google
              </button>

              <div className="flex items-center gap-3">
                <div className="h-px bg-gray-800 flex-grow"></div>
                <span className="text-gray-400">or</span>
                <div className="h-px bg-gray-800 flex-grow"></div>
              </div>

              <button
                className="w-full bg-transparent border border-gray-700 rounded-full py-3 text-white"
                onClick={() => setShowEmailForm(true)}
              >
                Continue with email
              </button>

              <div className="flex items-center gap-3">
                <div className="h-px bg-gray-800 flex-grow"></div>
                <span className="text-gray-400">or SAML</span>
                <div className="h-px bg-gray-800 flex-grow"></div>
              </div>
            </div>
          </>
        ) : (
          <div className="max-w-md">
            <button
              onClick={() => setShowEmailForm(false)}
              className="flex items-center text-gray-400 mb-6 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back
            </button>

            <h1 className="text-3xl font-bold mb-6">Create your account</h1>

            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john.doe@example.com"
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                  Username
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="username"
                    placeholder="johndoe"
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  required
                />
              </div>

              <button type="submit" className="w-full bg-white text-black font-medium rounded-xl py-2.5 mt-6">
                Create Account
              </button>
            </form>
            <div className="flex items-center justify-center flex-col pt-5">
              <p className="text-gray-500 text-xs  text-center mt-4">Already have an account?{" "}
                <Link href="/login" className="text-gray-400 hover:text-white underline">
                  Sign in
                </Link>
              </p>
            <p className="text-xs text-gray-500 text-center mt-4">
                    By creating an account, you agree to our{" "}
                    <Link href="#" className="text-gray-400 hover:text-white underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-gray-400 hover:text-white underline">
                      Privacy Policy
                    </Link>
            </p>
            </div>
          </div>
        )}
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
                src="/placeholder.svg?height=300&width=500"
                alt="Premium Jacket"
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

