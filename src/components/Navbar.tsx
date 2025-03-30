"use client";

import { ShoppingCart } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import DropdownMenuNav from "./DropdownMenu";
import { ShimmerButton } from "./magicui/shimmer-button";
import Image from "next/image";

const Navbar = () => {
  const {data: session , status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 w-full z-50 my-2 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-medium flex justify-center items-center">
        <Image priority src="/logo.svg" className="hover:scale-125 transition-transform" alt="Webpage logo" width={40} height={40} />
            Tech Wave
        </Link>

        {/* Desktop Links */}
        {status === "loading" ? null: status === "authenticated" ? (
                  <div className="hidden md:flex gap-6">
                  <Link href="/categories" className="hover:text-blue-500">
                  Category
                  </Link>
                  <button onClick={() => scrollToSection("shop")} className="hover:text-blue-500">
                    Your Orders
                  </button>
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

        {status === "loading" ? null : status === "authenticated" ? (
          <div className="flex justify-between items-center space-x-4">
            <ShoppingCart />
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 bg-white py-4 shadow-md">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("shop")}>Shop</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
