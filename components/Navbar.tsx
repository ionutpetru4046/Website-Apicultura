'use client';

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Acasă" },
    { href: "/despre", label: "Despre" },
    { href: "/produse", label: "Produse" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full border-b border-yellow-200 bg-white z-30 relative">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        <Link href="/" className="text-2xl font-bold text-yellow-600 z-40">
          Apicultură
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="hover:text-yellow-600 transition"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-40"
          aria-label={menuOpen ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block w-6 h-0.5 rounded bg-yellow-600 transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 rounded bg-yellow-600 my-1 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 rounded bg-yellow-600 transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 ${
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          } md:hidden`}
          onClick={() => setMenuOpen(false)}
        ></div>
        <nav
          className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-amber-50 shadow-lg z-40 pt-24 px-7 transition-transform duration-300 md:hidden
            ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
          aria-hidden={!menuOpen}
        >
          <ul className="flex flex-col gap-7 text-lg font-medium">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-yellow-600 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </nav>
    </header>
  );
}
