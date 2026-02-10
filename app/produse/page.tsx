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
    <section className="relative min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 flex flex-col items-center pt-16 pb-24">
      {/* Animated background honeycombs */}
      <svg
        className="absolute left-0 top-[5rem] w-80 h-80 opacity-10 z-0 animate-spin-slower pointer-events-none hidden md:block"
        viewBox="0 0 180 180"
        fill="none"
      >
        <polygon points="90,10 175,55 175,145 90,190 5,145 5,55" fill="#fde68a" />
      </svg>
      <svg
        className="absolute right-0 bottom-0 w-60 h-60 opacity-10 z-0 rotate-12 pointer-events-none hidden md:block"
        viewBox="0 0 180 180"
        fill="none"
      >
        <polygon points="90,10 175,55 175,145 90,190 5,145 5,55" fill="#fef3c7" />
      </svg>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pt-6">
        {/* Header */}
        <header className="flex flex-col items-center gap-4 text-center mb-16">
          <div className="flex items-center gap-3 px-8 py-2 bg-white/70 border border-yellow-200 rounded-full backdrop-blur-lg shadow-lg animate-fadeIn">
            <svg width={28} height={28} fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#fde68a" />
              <path d="M7,15c-0.8,1-2.5,2.1-2.5,2.1C5.8,20,9,22,11,23c-2.3-3.2-2.7-5.4-2.9-5.6Z" fill="#eab308" />
            </svg>
            <span className="uppercase text-[0.8rem] tracking-wide font-semibold text-yellow-700">
              Select Apicol
            </span>
          </div>
          <h1 className="relative text-4xl md:text-7xl font-serif font-extrabold text-yellow-700 tracking-tight leading-tight drop-shadow-2xl">
            Produsele <span className="relative inline-block">
              <span className="absolute left-0 bottom-1 w-full h-7 bg-yellow-200/80 rounded-lg blur-sm -z-10 animate-expandX"></span>
              <span className="relative z-20 px-2">noastre</span>
            </span>
          </h1>
          <p className="text-center text-lg md:text-2xl max-w-2xl mx-auto mb-6 text-gray-800/90 font-medium bg-white/70 rounded-lg px-6 py-4 shadow animate-fadeIn delay-150">
            Descoperă gama apicolă premium, culeasă responsabil chiar din stupina proprie. 100% autentic, gustos și garantat sigur.
          </p>
        </header>

        {/* Product Card Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((prod, idx) => (
            <div
              key={prod.name}
              className="relative group bg-white/80 border border-yellow-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center py-8 px-6 md:px-8 hover:-translate-y-2 hover:bg-white"
            >
              {/* Modern radial shine */}
              <span className="absolute -top-8 -right-8 w-28 h-28 bg-yellow-100 opacity-30 rounded-full blur-2xl group-hover:scale-110 transition-transform" />
              <Image
                src={prod.image}
                alt={prod.name}
                width={prod.imageW}
                height={prod.imageH}
                className="object-contain mb-6 rounded-2xl shadow-lg border-2 border-yellow-50 bg-yellow-50/30 group-hover:scale-105 transition-transform"
                loading="lazy"
                style={{ maxHeight: 120 }}
              />
              <h3 className="font-bold text-yellow-700 text-2xl mb-2 font-serif text-center hover:underline underline-offset-2 transition">
                {prod.name}
              </h3>
              <ul className="text-gray-800 text-base mb-6 list-none px-0 w-full space-y-2 font-medium">
                {prod.highlights.map((f) => (
                  <li key={f} className="flex items-center gap-2"><span className="text-yellow-400 text-lg">●</span>{f}</li>
                ))}
              </ul>
              <button className="mt-auto inline-flex items-center gap-2 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-6 py-2.5 rounded-full font-semibold text-[1rem] shadow-lg transition-all border border-yellow-200 group-hover:ring-2 group-hover:ring-yellow-400/50 focus:outline-none group-active:scale-95">
                <svg width={19} height={19} fill="none" viewBox="0 0 24 24"><path d="M7 12h10m0 0l-4-4m4 4l-4 4" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Comandă Online
              </button>
              {/* Featured badge */}
              {idx === 0 && (
                <span className="absolute left-4 top-4 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-400 text-xs text-white font-bold px-4 py-1 rounded-full shadow-yellow-200/70 shadow-lg tracking-wide z-10 animate-fadeBadge">
                  BestSeller
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-24 flex flex-col md:flex-row items-center md:justify-between gap-8 bg-white/85 border border-yellow-100 rounded-2xl p-8 md:p-12 shadow-xl animate-fadeIn transition-all">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-yellow-700 mb-3">
              Calitate garantată &amp; origine autentică
            </h2>
            <p className="text-gray-800 text-base md:text-lg mb-3 max-w-2xl mx-auto md:mx-0 font-medium">
              Fiecare produs este testat anual în laborator, ambalat igienic și expediat rapid. Pentru detalii sau precomenzi, contactează-ne cu încredere.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-7 py-3 rounded-full font-semibold text-base shadow-lg transition-all shadow-yellow-200/40 focus:outline-none ring-2 ring-yellow-300 ring-offset-2"
            >
              <svg width={22} height={22} fill="none" viewBox="0 0 24 24"><path d="M7 17l5-5 5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Contactează-ne pentru detalii sau precomenzi
            </Link>
          </div>
          <div className="shrink-0 mx-auto">
            <Image
              src="/images/miere-poliflora.jpg"
              alt="Calitate Apicultura"
              width={200}
              height={130}
              className="object-cover rounded-2xl shadow-xl border-4 border-yellow-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}