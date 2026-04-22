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
    <main className="bg-yellow-50 overflow-x-hidden">
      {/* Hero */}
      <section className="relative isolate max-w-7xl mx-auto px-3 sm:px-6 py-16 xs:py-20 sm:py-24 md:py-28 flex flex-col md:grid md:grid-cols-2 gap-10 sm:gap-14 md:gap-16 items-center">
        {/* Decorative shapes/background */}
        <div aria-hidden className="pointer-events-none absolute z-0 inset-0 overflow-hidden">
          <div className="hidden md:block absolute -top-12 -left-14 bg-yellow-200/70 rounded-full blur-3xl w-80 h-80 animate-pulse" />
          <div className="hidden md:block absolute bottom-0 right-0 bg-yellow-100/70 rounded-full blur-2xl w-56 h-56 animate-fadeIn" />
          <svg
            className="absolute left-6 top-2 h-12 w-12 opacity-60 text-yellow-400"
            fill="none"
            viewBox="0 0 48 48"
          >
            <polygon
              points="24,4 28,18 44,18 31,28 36,42 24,33 12,42 17,28 4,18 20,18"
              fill="#fde68a"
            />
          </svg>
        </div>
        {/* Hero content */}
        <div className="relative z-10 flex flex-col gap-7 w-full max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 rounded-full w-max text-yellow-700 font-medium text-xs shadow-sm border border-yellow-200 tracking-widest uppercase mb-3">
            <svg
              width={18}
              height={18}
              className="mr-1"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M5.2,15.7c-1,1.1-2.9,2-2.9,2C3.6,19.5,6.7,21,8.6,22c-2.8-3.5-3.1-6-3.4-6.4z"
                fill="#eab308"
              />
              <circle cx="12" cy="10" r="6" fill="#fde68a" />
            </svg>
            Miere locală, naturală
          </span>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-yellow-700 leading-tight drop-shadow-xl">
            Miere naturală
            <br />
            <span className="relative whitespace-nowrap inline-block">
              <span className="bg-yellow-200/70 absolute -bottom-1 left-0 w-full h-2 xs:h-2.5 md:h-3 z-0 rounded-md"></span>
              <span className="relative z-10">direct de la apicultor</span>
            </span>
          </h1>
          <p className="text-base xs:text-lg sm:text-xl text-gray-600/90 max-w-xl leading-relaxed font-medium">
            Produse apicole 100% naturale, recoltate cu grijă din stupina
            noastră locală. Gust proaspăt și autentic de la natura din Bihor
            direct la tine acasă.
          </p>
          <div className="flex flex-wrap gap-3 xs:gap-4 mt-2">
            <Link
              href="/produse"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 xs:px-7 py-2.5 xs:py-3 rounded-full font-semibold shadow-lg shadow-yellow-300/30 hover:shadow-yellow-400/50 duration-200 transition focus:outline-none ring-2 ring-yellow-300 text-sm xs:text-base"
            >
              <svg width={22} height={22} fill="none" viewBox="0 0 24 24">
                <path
                  d="M7 17l5-5 5 5"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Vezi produsele
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-yellow-400 hover:bg-yellow-100 text-yellow-700 px-6 xs:px-7 py-2.5 xs:py-3 rounded-full font-semibold transition focus:outline-none ring-2 ring-yellow-100 text-sm xs:text-base"
            >
              <svg width={20} height={20} fill="none" viewBox="0 0 24 24">
                <path
                  d="M21 10V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4M3 9l9 7 9-7"
                  stroke="#eab308"
                  strokeWidth="2"
                />
              </svg>
              Contact
            </Link>
          </div>
        </div>
        {/* Hero image with modern card styling */}
        <div className="relative z-10 flex items-center justify-center w-full md:w-auto min-h-[220px] xs:min-h-[300px] sm:min-h-[320px] max-w-full">
          <div className="relative w-full xs:w-[350px] sm:w-[420px] md:w-full h-full min-h-[200px] xs:min-h-[260px] sm:min-h-[320px] bg-yellow-100/60 rounded-3xl shadow-2xl shadow-yellow-200/50 border border-yellow-200 p-1.5 xs:p-2 md:p-3 flex items-center justify-center before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:bg-linear-to-b before:from-yellow-50/90 before:to-transparent before:backdrop-blur-sm">
            <Image
              src="/images/stupina1.jpg"
              alt="Stupina cu miere naturală"
              width={600}
              height={400}
              className="object-cover w-full h-full rounded-2xl relative z-10 transition-transform duration-300 hover:scale-105"
              priority
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 55vw, 40vw"
              style={{ maxWidth: "100%", maxHeight: "400px" }}
            />
            {/* floating badge */}
            <div className="absolute top-3 xs:top-5 left-3 xs:left-5 bg-white/90 backdrop-blur-md shadow px-3 xs:px-4 py-1 rounded-full flex items-center gap-2 text-yellow-600 text-xs xs:text-sm font-medium">
              <svg fill="#eab308" height={16} width={16} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="12" />
              </svg>
              100% natural
            </div>
            <div className="absolute bottom-3 xs:bottom-5 right-3 xs:right-5 bg-yellow-500/80 text-white px-2.5 xs:px-3 py-1 rounded-full text-xs font-bold shadow-md tracking-wide">
              Recoltă Nouă
            </div>
          </div>
        </div>
      </section>

      {/* Beneficii */}
      <Benefits />

      {/* Despre noi */}
      <DespreSection />

      {/* Produse */}
      <ProduseSection />

      {/* Testimoniale */}
      <Testimonials />

      {/* Galerie imagini */}
      <Gallery />

      {/* FAQ */}
      <FAQ />

      {/* Newsletter */}
      <Newsletter />

      {/* Contact */}
      <ContactSection />
    </main>
  );
}
