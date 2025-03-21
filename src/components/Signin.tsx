"use client"

import Image from "next/image"
import Link from "next/link"
import { Eye, Lock } from "lucide-react"
import { useState } from "react"

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center mb-6">
        <div className="text-xl font-semibold mb-2">Tech Wave</div>
        <h1 className="text-4xl font-normal">Welcome back</h1>
      </div>

      <div className="w-full max-w-md bg-zinc-900 rounded-xl p-8">
        <div className="space-y-4">
          {/* Google Sign In */}
          <button className="w-full bg-white text-black rounded-xl py-3 flex items-center justify-center gap-2">
            <Image src="/google-icon.svg" alt="Google" width={20} height={20} className="w-5 h-5" />
            Sign in with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 py-2">
            <div className="h-px bg-zinc-800 flex-grow"></div>
            <span className="text-zinc-500 text-sm">or</span>
            <div className="h-px bg-zinc-800 flex-grow"></div>
          </div>

          {/* Email Form */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="john.doe@example.com"
                className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="block text-sm font-medium text-zinc-300">
                  Password
                </label>
                <label className="text-sm text-zinc-300 hover:text-white">
                  Forgot?
                </label>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="••••••••••••"
                  className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <Eye size={16} className="text-zinc-500" />
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-xl py-2.5 transition-colors"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 text-zinc-400">
        Don't have an account?{" "}
        <Link href="/signup" className="text-zinc-300 hover:text-white underline">
          Create an account
        </Link>
      </div>
    </div>
  )
}

