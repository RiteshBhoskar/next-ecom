"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="top-0 w-full my-2 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-medium flex justify-center items-center">
        <img src="/logo.svg" className="hover:scale-110 transition-transform" alt="Webpage logo" width={40} height={40} />
            Tech Wave
        </Link>

        {/* Desktop Links */}
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

        <Link href="/signin" className="border-2 rounded-full border-gray-200 px-4 py-1 hover:text-blue-500">
            Get Started
        </Link>

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
