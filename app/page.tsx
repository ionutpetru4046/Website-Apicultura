'use client';

import Link from "next/link";
import Image from "next/image";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";

import DespreSection from "../app/despre/page";
import ProduseSection from "../app/produse/page";
import ContactSection from "../app/contact/page";

export default function Home() {
  return (
    <main className="bg-yellow-50 min-h-screen antialiased">
      {/* Hero Section - Modernized */}
      <section className="bg-gradient-to-br from-yellow-100 via-yellow-50 to-white py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-200/80 text-yellow-800 text-sm rounded-full font-semibold animate-pulse shadow">
                <Image src="/images/littlebee.png" alt="Bee" width={22} height={22} />
                Nou în 2024 – Recoltă locală bio!
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-serif font-extrabold text-yellow-800 leading-tight mb-6 drop-shadow-sm tracking-tight">
              Mierea noastră, <br className="hidden sm:inline" />
              sănătatea ta.
            </h1>
            <p className="text-xl text-yellow-900/90 mb-10 font-medium max-w-prose">
              Gustă autenticitatea dulce a stupinei: <span className="font-semibold text-yellow-700">miere 100% naturală</span> și produse apicole local recoltate cu grijă. Tradiție, puritate și grijă pentru sănătatea ta!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/produse"
                className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              >
                Vezi produsele
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-yellow-500 text-yellow-700 bg-white/70 hover:bg-yellow-100 px-7 py-3 rounded-full font-semibold transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
              >
                Contactează-ne
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center relative">
            {/* Decorative honeycomb SVG background */}
            <div className="absolute -inset-4 -z-1">
              <svg className="opacity-20" width="360" height="330" viewBox="0 0 360 330" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="honeycomb" patternUnits="userSpaceOnUse" width="50" height="43">
                    <polygon points="25,0 50,12.5 50,37.5 25,50 0,37.5 0,12.5" fill="#fde68a" />
                  </pattern>
                </defs>
                <rect width="360" height="330" fill="url(#honeycomb)" />
              </svg>
            </div>
            <div className="relative w-full max-w-lg h-80 rounded-3xl shadow-2xl overflow-hidden border-4 border-yellow-100">
              <Image
                src="/images/stupina1.jpg"
                alt="Stupina cu miere naturală"
                fill
                style={{ objectFit: "cover" }}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-3xl scale-105 hover:scale-110 transition-transform duration-500 ease-out"
              />
              {/* Floating honey jar */}
              <Image
                src="/images/miere_jar.png"
                alt="Borcane cu miere"
                width={110}
                height={110}
                className="absolute -bottom-7 -left-7 drop-shadow-2xl bg-white/70 rounded-full ring-2 ring-yellow-200 hover:scale-105 transition-transform"
                style={{ boxShadow: "0 8px 32px 0 rgba(247, 191, 59, 0.25)" }}
              />
            </div>
          </div>
        </div>
        {/* Subtle floating honeybee */}
        <Image
          src="/images/littlebee.png"
          alt="Albina decorativă"
          width={55}
          height={55}
          className="absolute top-8 right-16 animate-float"
          style={{ filter: "drop-shadow(0 2px 18px #fff7  )" }}
        />
      </section>

      {/* Section divider - subtle wave */}
      <div className="w-full overflow-hidden -mb-2">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-8">
          <path
            fill="#fef3c7"
            d="M0,48 C480,68 960,8 1440,48 L1440,60 L0,60 Z"
          />
        </svg>
      </div>

      {/* Beneficii */}
      <Benefits />

      {/* Despre noi */}
      <section className="bg-yellow-50/90 py-24">
        <DespreSection />
      </section>

      {/* Produse */}
      <section className="bg-white py-24">
        <ProduseSection />
      </section>

      {/* Section divider */}
      <div className="w-full overflow-hidden -mb-2">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-8">
          <path
            fill="#fef9c3"
            d="M0,24 Q720,80 1440,24 L1440,60 L0,60 Z"
          />
        </svg>
      </div>

      {/* Testimoniale */}
      <section className="bg-yellow-50/90 py-24">
        <Testimonials />
      </section>

      {/* Galerie imagini */}
      <section className="bg-white py-24">
        <Gallery />
      </section>

      {/* FAQ */}
      <section className="bg-yellow-50/80 py-24">
        <FAQ />
      </section>

      {/* Newsletter */}
      <section className="bg-white py-16">
        <Newsletter />
      </section>

      {/* Contact */}
      <section className="bg-gradient-to-br from-yellow-100 via-yellow-50 to-white py-24">
        <ContactSection />
      </section>

      {/* Floating call-to-action button for quick contact (mobile only) */}
      <div className="fixed bottom-7 right-5 md:hidden z-50">
        <Link
          href="/contact"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold shadow-lg shadow-yellow-200/70 transition-all text-lg ring-2 ring-yellow-200 focus:outline-none"
          aria-label="Contact rapid"
        >
          <svg width="22" height="22" fill="currentColor" className="inline -ml-1">
            <path d="M6 3a2 2 0 012-2h6a2 2 0 012 2v2a1 1 0 01-1 1h-1.2a4.6 4.6 0 01-1.384-.235l-2.667-.8A2 2 0 008 3zm10 6v7a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h8a2 2 0 012 2zm-6 2a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1z" />
          </svg>
          Contact rapid
        </Link>
      </div>
      {/* Custom CSS for animation */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px);}
          50% { transform: translateY(-16px);}
          100% { transform: translateY(0px);}
        }
        .animate-float {
          animation: float 4.5s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
