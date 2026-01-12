import Image from "next/image";
import Link from "next/link";

export default function ProdusePage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 w-full">
        <h1 className="text-4xl md:text-5xl font-serif leading-tight font-bold mb-4 text-yellow-700 text-center">
          Produsele noastre
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-10 text-center max-w-2xl mx-auto">
          Descoperă gama noastră de produse apicole naturale, colectate cu grijă direct din stupina noastră. Toate produsele sunt obținute responsabil, fără compromisuri față de calitate și puritate.
        </p>
        
        {/* Carduri produse */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Miere de salcâm */}
          <div className="bg-white/90 border border-yellow-100 rounded-2xl shadow-xl p-7 flex flex-col items-center group transition hover:shadow-2xl">
            <Image
              src="/images/miere-salcam.jpg"
              alt="Miere de salcâm"
              width={100}
              height={100}
              className="object-contain mb-4 drop-shadow"
              loading="lazy"
            />
            <h3 className="font-bold text-yellow-700 text-xl mb-2 font-serif">Miere de salcâm</h3>
            <ul className="text-gray-700 text-base mb-4 list-disc pl-4 text-left space-y-1">
              <li>Gust delicat și aromă subtilă, foarte apreciată</li>
              <li>Ideală pentru copii și diabetici (IG scăzut)</li>
              <li>Rămâne fluidă mult timp, nu cristalizează ușor</li>
            </ul>
            <span className="inline-block mt-auto bg-yellow-100 text-yellow-800 rounded px-4 py-1 text-sm font-medium">
              In Stock si pe Comanda Online
            </span>
          </div>

          {/* Miere polifloră */}
          <div className="bg-white/90 border border-yellow-100 rounded-2xl shadow-xl p-7 flex flex-col items-center group transition hover:shadow-2xl">
            <Image
              src="/images/miere-poliflora.jpg"
              alt="Miere polifloră"
              width={120}
              height={120}
              className="object-contain mb-4 drop-shadow"
              loading="lazy"
            />
            <h3 className="font-bold text-yellow-700 text-xl mb-2 font-serif">Miere polifloră</h3>
            <ul className="text-gray-700 text-base mb-4 list-disc pl-4 text-left space-y-1">
              <li>Obținută din nectarul mai multor flori autohtone</li>
              <li>Bogat în enzime, vitamine și minerale</li>
              <li>Aromă intensă, versatilă în bucătărie</li>
            </ul>
            <span className="inline-block mt-auto bg-yellow-100 text-yellow-800 rounded px-4 py-1 text-sm font-medium">
              In Stock si pe Comanda Online
            </span>
          </div>

          {/* Polen natural crud */}
          <div className="bg-white/90 border border-yellow-100 rounded-2xl shadow-xl p-7 flex flex-col items-center group transition hover:shadow-2xl">
            <Image
              src="/images/polen.jpg"
              alt="Polen natural"
              width={120}
              height={100}
              className="object-contain mb-4 drop-shadow"
              loading="lazy"
            />
            <h3 className="font-bold text-yellow-700 text-xl mb-2 font-serif">Polen natural crud</h3>
            <ul className="text-gray-700 text-base mb-4 list-disc pl-4 text-left space-y-1">
              <li>Super-aliment bogat în proteine, vitamine și aminoacizi</li>
              <li>Recomandat pentru energie și imunitate</li>
              <li>Cules manual, uscat natural</li>
            </ul>
            <span className="inline-block mt-auto bg-yellow-100 text-yellow-800 rounded px-4 py-1 text-sm font-medium">
              In Stock si pe Comanda Online
            </span>
          </div>

          {/* Propolis */}
          <div className="bg-white/90 border border-yellow-100 rounded-2xl shadow-xl p-7 flex flex-col items-center group transition hover:shadow-2xl">
            <Image
              src="/images/propolis.jpg"
              alt="Propolis"
              width={120}
              height={120}
              className="object-contain mb-4 drop-shadow"
              loading="lazy"
            />
            <h3 className="font-bold text-yellow-700 text-xl mb-2 font-serif">Propolis natural</h3>
            <ul className="text-gray-700 text-base mb-4 list-disc pl-4 text-left space-y-1">
              <li>Puternic antioxidant și antibacterian natural</li>
              <li>Utilizat pentru întărirea sistemului imunitar</li>
              <li>Recoltat cu grijă, 100% natural, fără adaosuri</li>
            </ul>
            <span className="inline-block mt-auto bg-yellow-100 text-yellow-800 rounded px-4 py-1 text-sm font-medium">
              In Stock si pe Comanda Online
            </span>
          </div>

          {/* Miere cu lăptișor de matcă */}
          <div className="bg-white/90 border border-yellow-100 rounded-2xl shadow-xl p-7 flex flex-col items-center group transition hover:shadow-2xl">
            <Image
              src="/images/laptisor-de-matca.jpg"
              alt="Miere cu lăptișor de matcă"
              width={120}
              height={60}
              className="object-contain mb-4 drop-shadow"
              loading="lazy"
            />
            <h3 className="font-bold text-yellow-700 text-xl mb-2 font-serif">Miere cu lăptișor de matcă</h3>
            <ul className="text-gray-700 text-base mb-4 list-disc pl-4 text-left space-y-1">
              <li>Combinație unică între miere și lăptișor de matcă pur</li>
              <li>Recomandată pentru vitalitate, refacere și imunitate</li>
              <li>Produs exclusiv apicol, pentru întreaga familie</li>
            </ul>
            <span className="inline-block mt-auto bg-yellow-100 text-yellow-800 rounded px-4 py-1 text-sm font-medium">
              In Stock si pe Comanda Online
            </span>
          </div>

          {/* Fagure la borcan */}
          <div className="bg-white/90 border border-yellow-100 rounded-2xl shadow-xl p-7 flex flex-col items-center group transition hover:shadow-2xl">
            <Image
              src="/images/fagure-borcan.jpg"
              alt="Fagure la borcan"
              width={180}
              height={180}
              className="object-contain mb-4 drop-shadow"
              loading="lazy"
            />
            <h3 className="font-bold text-yellow-700 text-xl mb-2 font-serif">Fagure la borcan</h3>
            <ul className="text-gray-700 text-base mb-4 list-disc pl-4 text-left space-y-1">
              <li>Fagure natural îmbibat cu miere proaspătă</li>
              <li>Textură unică, gust autentic de stup</li>
              <li>Garantat nerafinat, 100% direct din stupul familiei</li>
            </ul>
            <span className="inline-block mt-auto bg-yellow-100 text-yellow-800 rounded px-4 py-1 text-sm font-medium">
              In Stock si pe Comanda Online
            </span>
          </div>
        </div>

        {/* Extra info section */}
        <div className="mt-16 bg-yellow-50 border border-yellow-100 rounded-xl p-7 max-w-3xl mx-auto text-center shadow">
          <h4 className="text-xl font-bold text-yellow-700 mb-2 font-serif">Calitate garantată & origine sigură</h4>
          <p className="text-gray-700 mb-2">
            Produsele noastre sunt testate anual în laborator, ambalate igienic și livrate rapid. Pentru comenzi sau informații suplimentare, nu ezita să ne contactezi!
          </p>
          <Link
            href="/contact"
            className="inline-block mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium shadow transition"
          >
            Contactează-ne pentru detalii sau precomenzi
          </Link>
        </div>
      </div>
    </section>
  );
}