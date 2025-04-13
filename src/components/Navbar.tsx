"use client";

import { ShoppingCart } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import DropdownMenuNav from "./DropdownMenu";
import { ShimmerButton } from "./magicui/shimmer-button";
import Image from "next/image";
import { useCart } from "~/hooks/useCart";

const Navbar = () => {
  const { status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  const [showNavbar , setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if(currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  } , [])

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`sticky top-0 w-full z-50 my-2 bg-white transition-transform duration-300 ${
      showNavbar ? "translate-y-0" : "-translate-y-full"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-medium flex justify-center items-center">
        <Image priority src="/logo.svg" className="hover:scale-125 transition-transform" alt="Webpage logo" width={40} height={40} />
            Tech Wave
        </Link>

        {/* Desktop Links */}
        {status === "loading" ? null: status === "authenticated" ? (
                  <div className="hidden md:flex gap-6">
                  <button onClick={() => scrollToSection("category")} className="hover:text-blue-500">
                  Category
                  </button>
                  <Link href="/home/orders" className="hover:text-blue-500">
                    Your orders
                  </Link>
                  <button onClick={() => scrollToSection("about")} className="hover:text-blue-500">
                    About
                  </button>
                  <button onClick={() => scrollToSection("contact")} className="hover:text-blue-500">
                    Contact
                  </button>
                </div>
        ) : (
          <div className="hidden md:flex gap-6">
          <button onClick={() => scrollToSection("home")} className="hover:text-blue-500">
            Home
          </button>
          <button onClick={() => scrollToSection("shop")} className="hover:text-blue-500">
            Shop
          </button>
          <button onClick={() => scrollToSection("about")} className="hover:text-blue-500">
            About
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-blue-500">
            Contact
          </button>
        </div>
        )}
        <div className="flex items-center gap-3 md:gap-6">
        {status === "loading" ? null : status === "authenticated" ? (
          <div className="flex justify-between items-center space-x-7">
            <Link  href="/home/cart" className="relative cursor-pointer">
            <ShoppingCart />
              {items.length > 0 && (
                <div className="absolute -top-3 -right-4 w-5 h-5 bg-[#F35C7A] rounded-full text-white text-xs flex items-center justify-center">
                  {items.reduce((count, item) => count + item.quantity, 0)}
                </div>
              )}
            </Link>
            <DropdownMenuNav />
          </div>
        ) : (
          <Link href="/signin">
          <ShimmerButton className="shadow-2xl">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg -my-1">
            Get Started
          </span>
        </ShimmerButton>
        </Link>
        )}

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
        </div>
      </div>

      {isMenuOpen && (
      <div className="md:hidden flex flex-col items-center gap-4 bg-white py-4 shadow-md">
      {status === "authenticated" ? (
        <>
          <button onClick={() => scrollToSection("category")}>Category</button>
          <Link href="/home/orders">Your Orders</Link>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </>
      ) : (
        <>
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("shop")}>Shop</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </>
      )}
      </div>
      )}
    </nav>
  );
};

export default Navbar;
