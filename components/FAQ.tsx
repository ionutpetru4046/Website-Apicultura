'use client';

import { useState } from "react";

const faqs = [
  {
    q: "Cum se păstrează mierea naturală?",
    a: "La temperatura camerei, ferit de lumina directă."
  },
  {
    q: "Care este diferența între polifloră și salcâm?",
    a: "Polifloră are gust mai complex, salcâm e mai delicată."
  },
  {
    q: "Pot comanda online fără cont?",
    a: "Da, checkout-ul nu necesită înregistrare."
  },
  {
    q: "Ce pot găsi pe acest site de apicultură?",
    a: "Poți explora galeria noastră cu imagini din stupină, afla informații despre produse apicole și comanda miere naturală direct de la producător."
  },
  {
    q: "De unde provine mierea vândută aici?",
    a: "Mierea este recoltată din stupina noastră proprie, situată într-o zonă rurală, ferită de poluare, pentru a garanta calitatea și puritatea produselor."
  },
  {
    q: "Cum pot intra în contact cu apicultorul sau pot cere detalii suplimentare?",
    a: "Pe pagina de contact găsești formularul de mesaj și datele noastre. Ne bucurăm să răspundem la întrebări sau să oferim consultanță despre produsele apicole."
  }
];

function HoneyIcon() {
  // Yellow stylized honey drop
  return (
    <svg width={28} height={28} fill="none" viewBox="0 0 28 28">
      <ellipse cx="14" cy="20" rx="10" ry="7" fill="#fde68a" />
      <path d="M14 2c-2.2 5.2-8 11.7-8 16a8 8 0 1016 0c0-4.3-5.8-10.8-8-16z" fill="#fbbf24"/>
      <ellipse cx="18" cy="17" rx="2" ry="1" fill="#fef3c7" opacity={0.9}/>
    </svg>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpen(open === idx ? null : idx);
  };

  return (
    <section className="relative bg-gradient-to-br from-yellow-50 via-yellow-100 to-white py-24 px-2">
      <div className="absolute left-5 top-16 w-36 h-36 bg-yellow-200 rounded-full blur-2xl opacity-30 pointer-events-none" />
      <div className="absolute right-10 bottom-10 w-32 h-32 bg-yellow-100 rounded-full blur-2xl opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <div className="flex flex-col items-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 border border-yellow-200 px-5 py-2 shadow animate-fadeIn mb-4">
            <HoneyIcon />
            <span className="font-semibold text-xs tracking-widest uppercase text-yellow-900">
              FAQ Apicultură
            </span>
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-yellow-800 font-extrabold mb-3 text-center drop-shadow-sm">
            Întrebări frecvente
          </h2>
          <p className="text-lg text-gray-700 max-w-xl text-center mb-2">
            Nu găsești răspunsul dorit? <a href="/contact" className="text-yellow-600 underline hover:text-yellow-800 transition">Contactează-ne!</a>
          </p>
        </div>
        <div className="divide-y divide-yellow-100 rounded-2xl shadow-md bg-white/80 backdrop-blur-md overflow-hidden">
          {faqs.map((faq, i) => (
            <div key={i} className="group transition duration-250 hover:bg-yellow-50">
              <button
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
                className={
                  "flex items-center w-full justify-between gap-4 px-6 py-5 focus:outline-none transition-font duration-200"
                  + (open === i ? " font-bold text-yellow-800" : " font-semibold text-yellow-700")
                }
                onClick={() => handleToggle(i)}
              >
                <span className="flex items-center gap-3">
                  <HoneyIcon />
                  {faq.q}
                </span>
                <span className={
                  "transform transition-transform duration-300 " +
                  (open === i ? "rotate-180 text-yellow-600" : "rotate-0 text-yellow-400")
                }>
                  <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              <div
                id={`faq-panel-${i}`}
                className={
                  "px-14 pb-5 text-gray-700 text-base transition-all duration-300 will-change-transform " +
                  (open === i
                    ? "max-h-48 opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-2 overflow-hidden"
                  )
                }
                style={{ transitionProperty: 'max-height, opacity, transform' }}
              >
                <p className="leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}