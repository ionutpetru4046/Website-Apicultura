import Image from "next/image";
import Link from "next/link";

export default function DesprePage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 flex items-center justify-center relative overflow-hidden">
      {/* Modern honeycomb SVG decorations */}
      <svg
        className="absolute left-[-80px] top-24 w-64 h-64 opacity-10 z-0 animate-spin-slow"
        viewBox="0 0 180 180"
        fill="none"
      >
        <polygon
          points="90,10 175,55 175,145 90,190 5,145 5,55"
          fill="#fde68a"
        />
      </svg>
      <svg
        className="absolute right-[-50px] bottom-0 w-52 h-52 opacity-20 z-0 rotate-6"
        viewBox="0 0 180 180"
        fill="none"
      >
        <polygon
          points="90,10 175,55 175,145 90,190 5,145 5,55"
          fill="#fef3c7"
        />
      </svg>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-10 py-20">
        {/* Header */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-100 via-white to-yellow-100 rounded-full border border-yellow-200 shadow-lg mb-6 animate-fadeIn">
            <svg width={24} height={24} fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#fde68a"/><path d="M7,15c-0.8,1-2.5,2.1-2.5,2.1C5.8,20,9,22,11,23c-2.3-3.2-2.7-5.4-2.9-5.6Z" fill="#eab308"/></svg>
            <span className="uppercase tracking-widest font-semibold text-xs text-yellow-800">Tradiție & Calitate</span>
          </div>
          <h1 className="relative font-serif text-5xl md:text-7xl font-extrabold text-yellow-700 leading-tight mb-6 drop-shadow-2xl animate-fadeIn">
            Despre <span className="relative inline-block">
              <span className="absolute left-0 bottom-0 w-full h-5 bg-yellow-200/60 rounded-lg -z-10 animate-expandX"></span>
              <span className="relative z-20 px-2">noi</span>
            </span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-700/90 font-medium max-w-2xl mx-auto animate-fadeIn delay-150">
            Povestea unei apiculturi în armonie&nbsp;cu&nbsp;natura,<br className="hidden md:block" />
            din inima Bihorului.
          </p>
        </header>

        {/* Info Cards - Modern Glass design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-20">
          {/* Left Card */}
          <div className="flex flex-col items-center bg-white/80 backdrop-blur-lg shadow-xl border border-yellow-100 rounded-3xl p-8 hover:shadow-2xl transition group">
            <div className="relative mb-6">
              <span className="absolute -top-4 -left-4 bg-yellow-100 rounded-full blur-2xl w-28 h-28 opacity-50 group-hover:scale-110 transition"></span>
              <Image
                src="/images/stupina15.jpg"
                alt="Apicultor"
                width={120}
                height={190}
                className="object-cover rounded-xl shadow-lg border-4 border-white"
                priority
              />
            </div>
            <h2 className="text-2xl font-serif font-bold text-yellow-700 mb-4">Miere autentică din familie</h2>
            <ul className="space-y-3 text-gray-700 text-base font-medium text-left w-full px-2 list-disc">
              <li className="flex items-center gap-3"><span className="text-yellow-500 text-lg">•</span> Fără adaosuri industriale</li>
              <li className="flex items-center gap-3"><span className="text-yellow-500 text-lg">•</span> Recipiente igienice și sustenabile</li>
              <li className="flex items-center gap-3"><span className="text-yellow-500 text-lg">•</span> Garanția originii locale</li>
            </ul>
          </div>

          {/* Center Card */}
          <div className="flex flex-col justify-center items-center bg-opacity-90 border shadow-lg rounded-3xl p-8 bg-gradient-to-tr from-white via-yellow-50 to-yellow-100 border-yellow-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-5 text-center">
              Suntem o <span className="font-semibold text-yellow-700">familie cu stupina</span> din Bihor, crescuți cu respect pentru albine și fascinanta lor lume. Grija, răbdarea și metodele tradiționale ne definesc: recoltăm blând doar când mierea e matură, menținând echilibrul naturii.
            </p>
            <p className="text-gray-700 mb-5 text-center">
              Sortimentul nostru: <span className="font-semibold">miere polifloră</span>, <span className="font-semibold">salcâm</span>, <span className="font-semibold">tei</span>, <span className="font-semibold">floarea-soarelui</span>, <span className="font-semibold">propolis</span>.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-3">
              <div className="rounded-full px-5 py-2 bg-yellow-100/80 text-yellow-800 font-semibold text-sm shadow border border-yellow-200">
                Testată în laborator
              </div>
              <div className="rounded-full px-5 py-2 bg-yellow-50 text-yellow-700 font-semibold text-sm shadow border border-yellow-100">
                Responsabilitate ambientală
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex flex-col items-center bg-white/85 backdrop-blur-lg shadow-xl border border-yellow-100 rounded-3xl p-8 hover:shadow-2xl transition group">
            <div className="relative mb-6">
              <span className="absolute -top-4 -right-4 bg-yellow-200 rounded-full blur-2xl w-28 h-28 opacity-50 group-hover:scale-110 transition"></span>
              <Image
                src="/images/stupina8.jpg"
                alt="Fagure"
                width={130}
                height={130}
                className="object-cover rounded-xl shadow-lg border-4 border-white"
              />
            </div>
            <h2 className="text-2xl font-serif font-bold text-yellow-700 mb-4">Modern, cu rădăcini vechi</h2>
            <p className="text-gray-700 text-base mb-2 text-center">
              Folosim tehnologie pentru monitorizare și grijă, păstrând naturalețea mierii pure.
            </p>
            <span className="text-yellow-600 bg-yellow-50 rounded-full px-5 py-1 mt-3 font-semibold border border-yellow-100 shadow-sm text-sm">
              Tradiție cu inovație
            </span>
          </div>
        </div>

        {/* Our values and Benefits - Modern Cards */}
        <div className="mb-20 w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="rounded-3xl shadow-lg border border-yellow-100 bg-gradient-to-tr from-white via-yellow-50 to-white p-10 flex flex-col justify-start">
            <h3 className="font-bold text-yellow-700 text-2xl mb-6 font-serif flex items-center gap-2">
              <svg width={28} height={28} fill="none" viewBox="0 0 24 24"><path fill="#FDE68A" d="M12 2l2.09 6.26h6.6l-5.34 3.88 2.08 6.26L12 14.52l-5.33 3.88 2.08-6.26-5.34-3.88h6.59z"/></svg>
              Valorile noastre
            </h3>
            <ul className="pl-0 text-gray-700 text-base space-y-4 font-medium">
              <li className="flex items-center gap-3"><span className="p-2 rounded-full bg-yellow-100 text-yellow-700 text-lg">✓</span> Respect pentru albine și natură</li>
              <li className="flex items-center gap-3"><span className="p-2 rounded-full bg-yellow-100 text-yellow-700 text-lg">✓</span> Calitate fără compromis</li>
              <li className="flex items-center gap-3"><span className="p-2 rounded-full bg-yellow-100 text-yellow-700 text-lg">✓</span> Transparență față de clienți</li>
              <li className="flex items-center gap-3"><span className="p-2 rounded-full bg-yellow-100 text-yellow-700 text-lg">✓</span> Educație & informare</li>
              <li className="flex items-center gap-3"><span className="p-2 rounded-full bg-yellow-100 text-yellow-700 text-lg">✓</span> Comunitate și sustenabilitate</li>
            </ul>
          </div>
          <div className="rounded-3xl shadow-lg border border-yellow-100 bg-gradient-to-tr from-yellow-50 via-white to-yellow-100 p-10 flex flex-col justify-start">
            <h3 className="font-bold text-yellow-700 text-2xl mb-6 font-serif flex items-center gap-2">
              <svg width={28} height={28} fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#fde68a" /></svg>
              De ce să alegi mierea noastră?
            </h3>
            <ul className="pl-0 text-gray-700 text-base space-y-4 font-medium">
              <li className="flex items-center gap-3"><span className="p-2 rounded-full bg-yellow-200 text-yellow-700 text-lg">★</span> Miere crudă, 100% naturală</li>
              <li className="flex items-center gap-3"><span className="p-2 rounded-full bg-yellow-200 text-yellow-700 text-lg">★</span> Testată anual în laborator</li>
              <li className="flex items-center gap-3"><span className="p-2 rounded-full bg-yellow-200 text-yellow-700 text-lg">★</span> Ambalare igienică, livrare rapidă</li>
              <li className="flex items-center gap-3"><span className="p-2 rounded-full bg-yellow-200 text-yellow-700 text-lg">★</span> Susții apicultura locală</li>
              <li className="flex items-center gap-3"><span className="p-2 rounded-full bg-yellow-200 text-yellow-700 text-lg">★</span> Etică și respect pentru ecosistem</li>
            </ul>
          </div>
        </div>

        {/* Animated Timeline section */}
        <section className="max-w-3xl mx-auto mb-20">
          <h3 className="text-yellow-800 text-2xl md:text-3xl font-bold mb-10 flex items-center gap-3 font-serif">
            <svg width={26} height={26} fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="12" fill="#fde68a"/></svg>
            Evoluția noastră
          </h3>
          <ol className="relative pl-8 space-y-14">
            <li className="flex items-start gap-6 group">
              <span className="absolute left-1 -ml-8 mt-1 bg-yellow-400 w-5 h-5 rounded-full border-4 border-white z-10 group-hover:scale-110 transition"></span>
              <div className="bg-white/90 rounded-xl shadow border border-yellow-100 px-6 py-4 w-full">
                <h4 className="font-semibold text-yellow-700 mb-1 text-lg">2004 – Primul stup</h4>
                <p className="text-gray-700 text-base">
                  Pasiunea devine realitate: început cu o colibă veche, inspirată din copilărie.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-6 group">
              <span className="absolute left-1 -ml-8 mt-1 bg-yellow-400 w-5 h-5 rounded-full border-4 border-white z-10 group-hover:scale-110 transition"></span>
              <div className="bg-white/90 rounded-xl shadow border border-yellow-100 px-6 py-4 w-full">
                <h4 className="font-semibold text-yellow-700 mb-1 text-lg">2013 – Diversificare & tehnologie</h4>
                <p className="text-gray-700 text-base">
                  Extindem familia stupilor și monitorizăm sustenabil sănătatea albinelor.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-6 group">
              <span className="absolute left-1 -ml-8 mt-1 bg-yellow-400 w-5 h-5 rounded-full border-4 border-white z-10 group-hover:scale-110 transition"></span>
              <div className="bg-white/90 rounded-xl shadow border border-yellow-100 px-6 py-4 w-full">
                <h4 className="font-semibold text-yellow-700 mb-1 text-lg">2021 – Online pentru comunitate</h4>
                <p className="text-gray-700 text-base">
                  Lansăm magazin online pentru a fi aproape de iubitorii mierii naturale.
                </p>
              </div>
            </li>
          </ol>
          {/* Animated vertical line */}
          <div className="absolute left-2.5 top-6 bottom-6 w-2 bg-gradient-to-b from-yellow-200 via-yellow-100 to-transparent rounded-full pointer-events-none"></div>
        </section>

        {/* CTA - Stylish section */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-14 bg-gradient-to-tr from-yellow-100 via-white to-yellow-50 rounded-3xl px-10 py-12 border border-yellow-200 shadow-2xl animate-fadeIn">
          <div className="flex-1">
            <h4 className="text-2xl md:text-3xl font-serif font-bold text-yellow-900 mb-3">
              Vrei să ne cunoști mai bine sau să vizitezi stupina?
            </h4>
            <p className="text-gray-700 text-lg mb-6">
              Suntem deschiși la colaborări, prezentări sau vizite educative –{" "}
              <span className="text-yellow-700 font-semibold">contactează-ne</span> pentru orice întrebare sau curiozitate despre apicultură.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold text-base shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              >
                Contactează-ne
              </Link>
              <Link
                href="/produse"
                className="inline-block bg-white hover:bg-yellow-100 text-yellow-800 px-8 py-3 rounded-full font-semibold text-base border border-yellow-300 shadow transition duration-200"
              >
                Vezi produse
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative group">
              <span className="absolute -top-7 -left-7 w-40 h-32 bg-yellow-200 rounded-bl-3xl blur-2xl opacity-30 group-hover:scale-110 transition"></span>
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
      {/* subtle modern background pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="600" height="600" className="absolute left-1/2 top-1/3 -translate-x-1/2 opacity-10" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="300" fill="#FDE68A" />
        </svg>
      </div>
    </section>
  );
}
