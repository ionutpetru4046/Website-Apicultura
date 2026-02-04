import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Miere de salcâm",
    image: "/images/miere-salcam.jpg",
    imageW: 100,
    imageH: 100,
    highlights: [
      "Gust delicat și aromă subtilă, foarte apreciată",
      "Ideală pentru copii și diabetici (IG scăzut)",
      "Rămâne fluidă mult timp, nu cristalizează ușor",
    ],
  },
  {
    name: "Miere polifloră",
    image: "/images/miere-poliflora.jpg",
    imageW: 120,
    imageH: 120,
    highlights: [
      "Obținută din nectarul mai multor flori autohtone",
      "Bogat în enzime, vitamine și minerale",
      "Aromă intensă, versatilă în bucătărie",
    ],
  },
  {
    name: "Polen natural crud",
    image: "/images/polen.jpg",
    imageW: 120,
    imageH: 100,
    highlights: [
      "Super-aliment bogat în proteine, vitamine și aminoacizi",
      "Recomandat pentru energie și imunitate",
      "Cules manual, uscat natural",
    ],
  },
  {
    name: "Propolis natural",
    image: "/images/propolis.jpg",
    imageW: 120,
    imageH: 120,
    highlights: [
      "Puternic antioxidant și antibacterian natural",
      "Utilizat pentru întărirea sistemului imunitar",
      "Recoltat cu grijă, 100% natural, fără adaosuri",
    ],
  },
  {
    name: "Miere cu lăptișor de matcă",
    image: "/images/laptisor-de-matca.jpg",
    imageW: 120,
    imageH: 60,
    highlights: [
      "Combinație unică între miere și lăptișor de matcă pur",
      "Recomandată pentru vitalitate, refacere și imunitate",
      "Produs exclusiv apicol, pentru întreaga familie",
    ],
  },
  {
    name: "Fagure la borcan",
    image: "/images/fagure-borcan.jpg",
    imageW: 180,
    imageH: 180,
    highlights: [
      "Fagure natural îmbibat cu miere proaspătă",
      "Textură unică, gust autentic de stup",
      "Garantat nerafinat, 100% direct din stupul familiei",
    ],
  },
];

export default function ProdusePage() {
  return (
    <section className="min-h-screen bg-linear-to-br from-yellow-50 to-white mt-12 flex flex-col justify-start items-center pt-4 pb-10 relative">
      {/* BG modern accent */}
      <span className="hidden md:block absolute left-0 top-0 w-[340px] h-[340px] rounded-full bg-yellow-100 blur-[70px] opacity-60 -z-10" />
      <span className="hidden md:block absolute right-0 bottom-0 w-[260px] h-[260px] rounded-full bg-yellow-200 blur-[80px] opacity-50 -z-10" />

      <div className="max-w-7xl w-full px-4 md:px-8 pt-12">
        {/* Header Modernized */}
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-yellow-700 text-center tracking-tight mb-5 drop-shadow-sm">
          Produsele noastre
        </h1>
        <p className="text-center text-lg md:text-2xl max-w-2xl mx-auto mb-12 text-gray-700 bg-white/70 rounded-lg px-6 py-4 shadow-sm">
          Descoperă gama noastră de produse apicole premium, culese responsabil chiar din stupina proprie – 100% autentic, gustos și sigur.
        </p>

        {/* Modern card grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((prod, idx) => (
            <div
              key={prod.name}
              className="relative group overflow-hidden bg-white/90 border border-yellow-100 rounded-3xl shadow-xl transition-transform hover:scale-[1.03] hover:shadow-2xl flex flex-col items-center px-7 pt-8 pb-7"
            >
              <div className="absolute right-0 top-0">
                {/* Shine accent for hover */}
                <span className="group-hover:scale-110 transition-transform absolute -top-8 -right-8 w-24 h-24 bg-yellow-100 opacity-30 rounded-full blur-2xl"></span>
              </div>
              <Image
                src={prod.image}
                alt={prod.name}
                width={prod.imageW}
                height={prod.imageH}
                className="object-contain mb-4 drop-shadow-lg transition-transform group-hover:scale-105"
                loading="lazy"
                style={{ maxHeight: 120 }}
              />
              <h3 className="font-bold text-yellow-700 text-xl mb-2 font-serif text-center group-hover:underline underline-offset-2 transition">
                {prod.name}
              </h3>
              <ul className="text-gray-700 text-base mb-5 list-disc pl-4 text-left space-y-1">
                {prod.highlights.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <button className="mt-auto inline-flex items-center gap-2 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-5 py-2 rounded-full font-semibold text-sm shadow-md transition-all duration-200 border border-yellow-200 group-hover:ring-2 group-hover:ring-yellow-400/50 focus:outline-none group-active:scale-95">
                <svg width={18} height={18} fill="none" viewBox="0 0 24 24"><path d="M7 12h10m0 0l-4-4m4 4l-4 4" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Comandă Online
              </button>
              {/* Modern badge for new/featured */}
              {idx === 0 && (
                <span className="absolute left-5 top-5 bg-yellow-400 text-xs text-white font-bold px-3 py-1 rounded-full shadow-yellow-300/40 shadow">
                  BestSeller
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Call to action modern section */}
        <div className="mt-20 flex flex-col md:flex-row items-center md:justify-between gap-8 bg-white/80 border border-yellow-100 rounded-2xl p-8 shadow-xl transition-all">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-yellow-700 mb-2">
              Calitate garantată &amp; origine autentica
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-2 max-w-xl">
              Fiecare produs apicol livrat de noi este testat anual în laborator, ambalat igienic și expediat rapid. Pentru mai multe informații sau precomenzi, ne poți contacta oricând.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-7 py-3 rounded-full font-semibold text-base shadow-lg transition shadow-yellow-200/40 focus:outline-none ring-2 ring-yellow-300 ring-offset-2"
            >
              <svg width={22} height={22} fill="none" viewBox="0 0 24 24"><path d="M7 17l5-5 5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Contactează-ne pentru detalii sau precomenzi
            </Link>
          </div>
          <div className="shrink-0 mx-auto">
            <Image
              src="/images/miere-poliflora.jpg"
              alt="Calitate Apicultura"
              width={180}
              height={120}
              className="object-cover rounded-xl shadow-xl border-4 border-yellow-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}