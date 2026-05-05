"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
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
          ? "bg-[#F2EBE0]/95 backdrop-blur-sm shadow-sm border-b border-[#D9CEBC]"
          : "bg-[#F2EBE0] border-b border-[#D9CEBC]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-[#1C1410] text-xl hover:opacity-80 transition-opacity"
          style={{ fontFamily: "var(--font-display), serif" }}
        >
          custom<span style={{ color: "#A84B28" }}>46</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-5 h-16 flex items-center text-sm border-l border-[#D9CEBC] transition-colors duration-200 ${
                pathname === link.href
                  ? "text-[#1C1410] font-medium bg-[#E8DDD0]"
                  : "text-[#8A7A70] hover:text-[#1C1410] hover:bg-[#EDE5D5]"
              }`}
              style={{ fontWeight: pathname === link.href ? 500 : 400 }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/kontakt"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-[#A84B28] text-white text-sm hover:bg-[#C96444] transition-colors duration-200"
          style={{ fontWeight: 500 }}
        >
          Boka samtal
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#1C1410] p-1"
          aria-label="Öppna meny"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#F2EBE0] border-t border-[#D9CEBC] px-6 pb-6 pt-4 flex flex-col gap-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-3 text-sm border-b border-[#D9CEBC] transition-colors ${
                pathname === link.href
                  ? "text-[#A84B28] font-medium"
                  : "text-[#8A7A70] hover:text-[#1C1410]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="mt-4 inline-flex items-center justify-center px-5 py-3 bg-[#A84B28] text-white text-sm font-medium"
          >
            Boka samtal
          </Link>
        </div>
      )}
    </header>
  );
}
