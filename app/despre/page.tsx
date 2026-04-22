import Image from "next/image";
import Link from "next/link";

export default function DesprePage() {
  return (
    // Removed 'overflow-x-hidden' to fix scroll effect
    <section className="relative min-h-screen bg-linear-to-br from-yellow-50 via-white to-yellow-100 flex items-center mt-16 pb-24">
      {/* Decorative SVG honeycomb patterns */}
      <svg
        className="absolute left-0 top-24 w-64 h-64 opacity-10 z-0 animate-spin-slower pointer-events-none hidden md:block"
        viewBox="0 0 180 180"
        fill="none"
      >
        <polygon
          points="90,10 175,55 175,145 90,190 5,145 5,55"
          fill="#fde68a"
        />
      </svg>
      <svg
        className="absolute right-0 bottom-0 w-52 h-52 opacity-10 z-0 rotate-12 pointer-events-none hidden md:block"
        viewBox="0 0 180 180"
        fill="none"
      >
        <polygon
          points="90,10 175,55 175,145 90,190 5,145 5,55"
          fill="#fef3c7"
        />
      </svg>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-20">
        {/* Header Section */}
        <header className="flex flex-col items-center gap-5 text-center mb-24">
          {/* Modern badge */}
          <div className="flex items-center gap-2 px-6 py-2 bg-white/80 backdrop-blur-md border border-yellow-200 rounded-full shadow-lg animate-fadeIn">
            <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#fde68a" />
              <path d="M7,15c-0.8,1-2.5,2.1-2.5,2.1C5.8,20,9,22,11,23c-2.3-3.2-2.7-5.4-2.9-5.6Z" fill="#eab308" />
            </svg>
            <span className="uppercase tracking-wider font-bold text-xs text-yellow-900">Tradiție & Calitate</span>
          </div>
          <h1 className="relative font-serif sm:text-5xl text-3xl md:text-7xl font-extrabold text-yellow-700 drop-shadow-2xl leading-tight">
            Despre <span className="relative inline-block">
              <span className="absolute left-0 bottom-1 w-full h-6 bg-yellow-200/70 rounded-md blur-[2px] -z-10 animate-expandX"></span>
              <span className="relative z-20 px-2">noi</span>
            </span>
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-2xl text-gray-800/90 font-medium max-w-2xl mx-auto animate-fadeIn delay-150">
            Povestea unei apiculturi în armonie cu natura,
            <br className="hidden sm:block" />
            din inima Bihorului.
          </p>
        </header>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Left Card */}
          <div className="relative bg-linear-to-br from-white via-yellow-50 to-white rounded-2xl shadow-md border border-yellow-100 group hover:-translate-y-2 transition-transform p-7 flex flex-col items-center text-center">
            <span className="absolute -top-8 left-6 w-28 h-28 bg-yellow-100 rounded-full blur-2xl opacity-40 group-hover:scale-105 transition-transform"></span>
            <Image
              src="/images/stupina15.jpg"
              alt="Apicultor"
              width={110}
              height={170}
              className="object-cover rounded-xl shadow-lg border-4 border-white mb-4"
              priority
            />
            <h3 className="text-xl font-serif font-semibold text-yellow-700 mb-2">Miere autentică din familie</h3>
            <ul className="space-y-2 text-base text-gray-700 font-medium list-none px-0 w-full">
              <li className="flex items-center gap-2"><span className="text-yellow-500 text-xl">●</span>Fără adaosuri industriale</li>
              <li className="flex items-center gap-2"><span className="text-yellow-500 text-xl">●</span>Recipiente igienice și sustenabile</li>
              <li className="flex items-center gap-2"><span className="text-yellow-500 text-xl">●</span>Garanția originii locale</li>
            </ul>
          </div>

          {/* Center Card */}
          <div className="relative bg-linear-to-bl from-yellow-50 via-white to-yellow-100 border border-yellow-100 shadow-md rounded-2xl p-7 flex flex-col items-center justify-between gap-6">
            <p className="text-lg text-gray-800 leading-relaxed mb-2 text-center">
              Suntem o <span className="font-semibold text-yellow-700">familie cu stupina</span> din Bihor, crescuți cu respect pentru albine și fascinanta lor lume. Grija, răbdarea și metodele tradiționale ne definesc: recoltăm blând doar când mierea e matură, menținând echilibrul naturii.
            </p>
            <p className="text-gray-700 text-center text-base">
              Sortiment: <span className="font-semibold">miere polifloră</span>, <span className="font-semibold">salcâm</span>, <span className="font-semibold">tei</span>, <span className="font-semibold">floarea-soarelui</span>, <span className="font-semibold">propolis</span>.
            </p>
            <div className="flex flex-row flex-wrap gap-3 justify-center">
              <span className="rounded-full px-5 py-2 bg-yellow-100/70 text-yellow-800 font-semibold text-xs shadow border border-yellow-200">
                Testată în laborator
              </span>
              <span className="rounded-full px-5 py-2 bg-yellow-50 text-yellow-700 font-semibold text-xs shadow border border-yellow-100">
                Responsabilitate ambientală
              </span>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative bg-linear-to-br from-white via-yellow-100 to-yellow-50 rounded-2xl shadow-md border border-yellow-100 group hover:-translate-y-2 transition-transform p-7 flex flex-col items-center text-center">
            <span className="absolute -top-8 right-4 w-24 h-24 bg-yellow-200 rounded-full blur-2xl opacity-40 group-hover:scale-105 transition-transform"></span>
            <Image
              src="/images/stupina8.jpg"
              alt="Fagure"
              width={115}
              height={115}
              className="object-cover rounded-xl shadow-lg border-4 border-white mb-4"
            />
            <h3 className="text-xl font-serif font-semibold text-yellow-700 mb-2">Modern cu rădăcini vechi</h3>
            <p className="text-gray-700 text-base mb-2">
              Integram tehnologia pentru monitorizare și grijă, păstrând naturalețea mierii pure.
            </p>
            <span className="mt-3 text-yellow-700 bg-yellow-50 rounded-full px-5 py-1 font-semibold border border-yellow-100 shadow-sm text-xs">
              Tradiție & inovație
            </span>
          </div>
        </div>

        {/* Values and Benefits - Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="rounded-2xl shadow-md border border-yellow-100 bg-linear-to-tr from-white via-yellow-50 to-white p-8 flex flex-col gap-6 min-h-[320px]">
            <div className="flex items-center gap-2">
              <svg width={28} height={28} fill="none" viewBox="0 0 24 24"><path fill="#FDE68A" d="M12 2l2.09 6.26h6.6l-5.34 3.88 2.08 6.26L12 14.52l-5.33 3.88 2.08-6.26-5.34-3.88h6.59z"/></svg>
              <h3 className="font-bold text-yellow-800 text-xl font-serif">Valorile noastre</h3>
            </div>
            <ul className="text-gray-800 text-base space-y-4 font-medium pl-0 flex flex-col gap-2">
              {[
                "Respect pentru albine și natură",
                "Calitate fără compromis",
                "Transparență față de clienți",
                "Educație & informare",
                "Comunitate și sustenabilitate"
              ].map((val, idx) => (
                <li className="flex items-center gap-2" key={val}>
                  <span className="p-2 rounded-full bg-yellow-100 text-yellow-700 text-lg">✓</span>
                  <span>{val}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl shadow-md border border-yellow-100 bg-linear-to-tr from-yellow-50 via-white to-yellow-100 p-8 flex flex-col gap-6 min-h-[320px]">
            <div className="flex items-center gap-2">
              <svg width={28} height={28} fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#fde68a" /></svg>
              <h3 className="font-bold text-yellow-800 text-xl font-serif">De ce să alegi mierea noastră?</h3>
            </div>
            <ul className="text-gray-800 text-base space-y-4 font-medium pl-0 flex flex-col gap-2">
              {[
                "Miere crudă, 100% naturală",
                "Testată anual în laborator",
                "Ambalare igienică, livrare rapidă",
                "Susții apicultura locală",
                "Etică și respect pentru ecosistem"
              ].map((val, idx) => (
                <li className="flex items-center gap-2" key={val}>
                  <span className="p-2 rounded-full bg-yellow-200 text-yellow-800 text-lg">★</span>
                  <span>{val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Timeline / Evolution Section */}
        <section className="relative max-w-3xl mx-auto mb-20">
          <h3 className="text-yellow-800 text-2xl md:text-3xl font-bold mb-10 flex items-center gap-2 font-serif">
            <svg width={26} height={26} fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="12" fill="#fde68a"/></svg>
            Evoluția noastră
          </h3>
          <ol className="relative border-l-4 border-yellow-200/70 pl-10 ml-0 space-y-14">
            {[
              {
                year: "2004",
                title: "Primul stup",
                desc: "Pasiunea devine realitate: început cu o colibă veche, inspirată din copilărie.",
              },
              {
                year: "2013",
                title: "Diversificare & tehnologie",
                desc: "Extindem familia stupilor și monitorizăm sustenabil sănătatea albinelor.",
              },
              {
                year: "2021",
                title: "Online pentru comunitate",
                desc: "Lansăm magazin online pentru a fi aproape de iubitorii mierii naturale.",
              },
            ].map((event, idx) => (
              <li key={event.year + event.title} className="flex items-start gap-6 group relative">
                <span className="absolute left-[-56px] mt-1 bg-yellow-400 w-6 h-6 rounded-full border-4 border-white z-20 group-hover:scale-110 transition-transform shadow-md"></span>
                <div className="bg-white/90 rounded-xl shadow border border-yellow-100 px-6 py-4 w-full flex flex-col">
                  <span className="text-xs text-yellow-600 font-bold tracking-widest mb-1">{event.year}</span>
                  <h4 className="font-semibold text-yellow-700 mb-1 text-lg">{event.title}</h4>
                  <p className="text-gray-700 text-base">{event.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Call-to-Action Section */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-10 bg-linear-to-tr from-yellow-100 via-white to-yellow-50 rounded-3xl px-8 py-10 border border-yellow-200 shadow-xl animate-fadeIn">
          <div className="flex-1 flex flex-col gap-5">
            <h4 className="text-2xl md:text-3xl font-serif font-extrabold text-yellow-900 mb-1">
              Vrei să ne cunoști mai bine sau să vizitezi stupina?
            </h4>
            <p className="text-gray-700 text-lg mb-4">
              Suntem deschiși la colaborări, prezentări sau vizite educative –{" "}
              <span className="text-yellow-800 font-semibold">contactează-ne</span> pentru orice întrebare sau curiozitate despre apicultură.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold text-base shadow-lg transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              >
                Contactează-ne
              </Link>
              <Link
                href="/produse"
                className="inline-block bg-white hover:bg-yellow-100 text-yellow-800 px-8 py-3 rounded-full font-semibold text-base border border-yellow-300 shadow transition hover:-translate-y-1"
              >
                Vezi produsele
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center mt-5 md:mt-0">
            <div className="relative group">
              <span className="absolute -top-7 -left-7 w-40 h-32 bg-yellow-200 rounded-bl-3xl blur-2xl opacity-30 group-hover:scale-105 transition-transform"></span>
              <Image
                src="/images/stupina15.jpg"
                alt="Familia apicultorilor"
                width={240}
                height={160}
                className="object-cover rounded-2xl shadow-2xl border-4 border-yellow-100"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Subtle central background accent */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="600" height="600" className="absolute left-1/2 top-1/3 -translate-x-1/2 opacity-10" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="300" fill="#FDE68A" />
        </svg>
      </div>
    </section>
  );
}
