"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = "" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glassmorphic" : "bg-transparent"
        } ${className}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 relative">
                <Image
                  src="/gamepad-logo.svg"
                  alt="Team Kuroizana Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </div>
              <span className="text-xl font-bold neon-glow">
                Team Kuroizana
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <a href="/#home" className="hover:text-red-500 transition">
                Accueil
              </a>
              <a href="/#about" className="hover:text-red-500 transition">
                À propos
              </a>
              <a href="/article" className="hover:text-red-500 transition">
                Articles
              </a>
              <a href="/video" className="hover:text-red-500 transition">
                Vidéos
              </a>
              <a href="/#contact" className="hover:text-red-500 transition">
                Contact
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-16 left-4 right-4 z-50 md:hidden animate-slide-down">
          <div className="bg-black/95 backdrop-blur-xl border border-red-600/30 rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-6 space-y-1">
              <a
                href="/#home"
                className="flex items-center justify-center py-4 px-6 rounded-xl text-lg font-semibold hover:bg-red-600/20 hover:text-red-400 transition-all duration-300 border border-transparent hover:border-red-600/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accueil
              </a>
              <a
                href="/#about"
                className="flex items-center justify-center py-4 px-6 rounded-xl text-lg font-semibold hover:bg-red-600/20 hover:text-red-400 transition-all duration-300 border border-transparent hover:border-red-600/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                À propos
              </a>
              <a
                href="/article"
                className="flex items-center justify-center py-4 px-6 rounded-xl text-lg font-semibold hover:bg-purple-600/20 hover:text-purple-400 transition-all duration-300 border border-transparent hover:border-purple-600/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Articles
              </a>
              <a
                href="/video"
                className="flex items-center justify-center py-4 px-6 rounded-xl text-lg font-semibold hover:bg-cyan-600/20 hover:text-cyan-400 transition-all duration-300 border border-transparent hover:border-cyan-600/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Vidéos
              </a>
              <a
                href="/#contact"
                className="flex items-center justify-center py-4 px-6 rounded-xl text-lg font-semibold hover:bg-red-600/20 hover:text-red-400 transition-all duration-300 border border-transparent hover:border-red-600/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
