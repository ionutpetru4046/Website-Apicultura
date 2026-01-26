'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "/", label: "Acasă" },
    { href: "/despre", label: "Despre" },
    { href: "/produse", label: "Produse" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between relative">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group text-2xl font-extrabold text-yellow-700 tracking-tight cursor-pointer z-40"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-100/70 border border-yellow-200 shadow group-hover:scale-105 transition-transform">
            <Image
              src="/images/littlebee.png"
              alt="Apicultură Naturală Logo"
              width={38}
              height={38}
              className="object-contain"
              priority
            />
          </div>
          <span className="bg-linear-to-r from-yellow-600 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Apicultura<span className="font-black">Naturala</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-2 lg:gap-8 text-base font-medium flex-1 justify-center">
          {navLinks.filter(link => link.href !== "/contact").map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="relative px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-yellow-100/60 hover:text-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Call to Action Button for Desktop */}
        {/* Hide CTA on mobile and also when menuOpen is true */}
        <div className={`ml-2 ${menuOpen ? "hidden" : "hidden md:block"}`}>
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2 rounded-full bg-linear-to-r from-yellow-400 to-amber-500 text-white font-semibold shadow hover:from-yellow-500 hover:to-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-200"
          >
            Contactează-ne
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-50 rounded-lg bg-white/70 hover:bg-yellow-50 shadow transition-all"
          aria-label={menuOpen ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block w-7 h-0.5 rounded bg-yellow-700 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-1" : ""
            }`}
          ></span>
          <span
            className={`block w-7 h-0.5 rounded bg-yellow-700 my-1 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-7 h-0.5 rounded bg-yellow-700 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          ></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          } md:hidden`}
          aria-hidden={!menuOpen}
          onClick={() => setMenuOpen(false)}
        />

        {/* Mobile Sliding Panel */}
        <nav
          className={`
            fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white border-l border-yellow-100 shadow-xl flex flex-col z-50 
            transition-transform duration-300 md:hidden
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
          `}
          aria-hidden={!menuOpen}
          {...(!menuOpen ? { inert: true } : {})}
        >
          <div className="flex flex-col gap-2 items-center justify-center pt-8 pb-2 border-b border-yellow-50">
            <Image
              src="/images/littlebee.png"
              alt="Apicultură Naturală Logo"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
            <span className="text-xl font-extrabold text-yellow-700">ApiculturaNaturala</span>
          </div>
          <ul className="flex flex-col gap-2 text-lg font-medium mt-6">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex w-full px-5 py-3 rounded-lg hover:bg-yellow-100/60 hover:text-yellow-800 transition-colors focus:bg-yellow-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          {/* No CTA Contactează-ne button in mobile menu */}
        </nav>
      </nav>
      {/* Add a subtle shadow below navbar */}
      <div className="absolute left-0 right-0 bottom-[-5px] h-2 bg-gradient-to-t from-yellow-100/40 to-transparent pointer-events-none" />
    </header>
  );
}
