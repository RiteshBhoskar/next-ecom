"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, ArrowRight, Facebook, Twitter, Instagram, Youtube, Linkedin, ChevronDown } from "lucide-react"
import { Button } from "./ui/button"


export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log(`Subscribing email: ${email}`)
    setEmail("")
  }

  return (
    <footer className="bg-background" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Newsletter section */}
      <div className="border-t border-border bg-muted/50">
        <div className="container py-10">
          <div className="mx-auto max-w-xl text-center">
            <h3 className="text-xl font-semibold tracking-tight">Sign up for our newsletter</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              The latest deals, articles, and resources, sent to your inbox weekly.
            </p>
            <form onSubmit={handleSubscribe} className="mt-5">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-10 flex-1"
                  value={email}
                  onChange={(e:any) => setEmail(e.target.value)}
                  required
                  aria-label="Email address"
                />
                <Button type="submit" className="h-10">
                  Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                By subscribing, you agree to our{" "}
                <Link href="#" className="underline underline-offset-2">
                  Privacy Policy
                </Link>{" "}
                and consent to receive updates from our company.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer links */}
      <div className="border-t border-border">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            {/* Company and brand */}
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-6 w-6" />
                <span className="text-xl font-bold">ShopMart</span>
              </div>
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                Making commerce better for everyone. We help people achieve independence by making it easier to start,
                run, and grow a business.
              </p>
              <div className="mt-6 flex space-x-4">
                <Link
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-sm font-semibold">Products</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Best Sellers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Shop All
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Deals & Promotions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Gift Cards
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-sm font-semibold">Customer Service</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Track Your Order
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Shipping & Delivery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Returns & Exchanges
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold">Company</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Corporate Responsibility
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Affiliate Program
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold">Legal</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Accessibility
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Your Privacy Choices
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* App download and payment methods */}
      <div className="border-t border-border">
        <div className="container py-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            {/* App download */}
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
              <p className="text-sm font-medium">Download our app:</p>
              <div className="flex gap-3">
                <Link href="#" aria-label="Download on the App Store">
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    alt="App Store"
                    width={120}
                    height={40}
                    className="rounded"
                  />
                </Link>
                <Link href="#" aria-label="Get it on Google Play">
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    alt="Google Play"
                    width={120}
                    height={40}
                    className="rounded"
                  />
                </Link>
              </div>
            </div>

            {/* Payment methods */}
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
              <p className="text-sm font-medium">We accept:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Visa", "Mastercard", "American Express", "PayPal", "Apple Pay", "Google Pay"].map((method) => (
                  <div key={method} className="rounded bg-muted p-2">
                    <Image src="/placeholder.svg?height=20&width=32" alt={method} width={32} height={20} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-border bg-muted/30">
        <div className="container py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <p className="text-xs text-muted-foreground">
                &copy; {new Date().getFullYear()} ShopMart, Inc. All rights reserved.
              </p>
              {/* <Separator className="hidden h-4 md:inline-block" orientation="vertical" /> */}
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="h-8 text-xs">
                  <Image
                    src="/placeholder.svg?height=20&width=30"
                    alt="United States"
                    width={30}
                    height={20}
                    className="mr-2"
                  />
                  United States
                  <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 text-xs">
                  English
                  <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              <Link href="#" className="hover:text-foreground hover:underline">
                Sitemap
              </Link>
              <Link href="#" className="hover:text-foreground hover:underline">
                Do Not Sell My Personal Information
              </Link>
              <Link href="#" className="hover:text-foreground hover:underline">
                Cookie Settings
              </Link>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Image src="/placeholder.svg?height=32&width=32" alt="SSL Secure" width={32} height={32} />
              <span className="text-xs text-muted-foreground">SSL Secure Checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/placeholder.svg?height=32&width=32" alt="Satisfaction Guaranteed" width={32} height={32} />
              <span className="text-xs text-muted-foreground">Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/placeholder.svg?height=32&width=32" alt="Free Shipping" width={32} height={32} />
              <span className="text-xs text-muted-foreground">Free Shipping Over $50</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/placeholder.svg?height=32&width=32" alt="24/7 Support" width={32} height={32} />
              <span className="text-xs text-muted-foreground">24/7 Customer Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

