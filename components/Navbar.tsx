"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Hem" },
  { href: "/tjanster", label: "Tjänster" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1B3A2D] shadow-md"
          : "bg-[#1B3A2D]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-[#F7F5F0] font-bold text-xl tracking-tight hover:opacity-90 transition-opacity"
        >
          custom46
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-200 ${
                pathname === link.href
                  ? "text-white font-medium"
                  : "text-[#B8D4C8] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/kontakt"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-md bg-[#F7F5F0] text-[#1B3A2D] text-sm font-semibold hover:bg-white transition-colors duration-200"
        >
          Ta kontakt
        </Link>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#F7F5F0] p-1"
          aria-label="Öppna meny"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#1B3A2D] border-t border-[#2A4D3C] px-6 pb-6 pt-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm py-1 transition-colors ${
                pathname === link.href
                  ? "text-white font-medium"
                  : "text-[#B8D4C8] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="mt-2 inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-[#F7F5F0] text-[#1B3A2D] text-sm font-semibold"
          >
            Ta kontakt
          </Link>
        </div>
      )}
    </header>
  );
}
