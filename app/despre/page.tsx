import Image from "next/image";
import Link from "next/link";

export default function DesprePage() {
  return (
    <section className="min-h-screen bg-linear-to-br from-yellow-50 via-white to-yellow-100 flex py-0 relative overflow-hidden">
      {/* Decorative abstract honeycomb SVGs */}
      <svg
        className="absolute left-0 top-20 opacity-20 z-0"
        width="180"
        height="180"
        viewBox="0 0 180 180"
        fill="none"
      >
        <polygon
          points="90,10 175,55 175,145 90,190 5,145 5,55"
          fill="#fde68a"
        />
      </svg>
      <svg
        className="absolute right-0 bottom-[-70px] opacity-20 z-0 rotate-12"
        width="180"
        height="180"
        viewBox="0 0 180 180"
        fill="none"
      >
        <polygon
          points="90,10 175,55 175,145 90,190 5,145 5,55"
          fill="#fef3c7"
        />
      </svg>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-14">
          <div className="inline-block bg-yellow-100 rounded-full px-5 py-2 mb-4 animate-fadeIn shadow-lg border-2 border-yellow-200">
            <span className="text-yellow-800 font-semibold text-xs tracking-widest uppercase flex items-center gap-2">
              <svg width={20} height={20} fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#fde68a"/><path d="M5.8,13.1c-0.8,0.9-2.2,1.6-2.2,1.6C4.6,16.2,7,17.7,8.4,18.5c-2.1-2.7-2.4-4.5-2.6-4.7z" fill="#eab308"/></svg>
              Tradiție & Calitate
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-yellow-700 leading-tight drop-shadow-xl animate-fadeIn">
            Despre <span className="relative">
              <span className="absolute -bottom-1 left-0 w-full h-3 bg-yellow-200/70 rounded-md z-0"></span>
              <span className="relative z-10">noi</span>
            </span>
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-gray-700/90 font-medium max-w-2xl mx-auto animate-fadeIn delay-150">
            Povestea unei apiculturi în armonie cu natura, din inima Bihorului.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Left: Apicultor & benefit */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative mb-6 transition-transform hover:scale-105">
              <span className="absolute -top-3 -left-3 z-0 bg-yellow-100 rounded-full blur-lg w-28 h-28 opacity-40"></span>
              <Image
                src="/images/stupina15.jpg"
                alt="Apicultor"
                width={120}
                height={190}
                className="object-cover rounded-xl shadow-xl border-4 border-white"
                priority
              />
            </div>
            <h2 className="text-2xl font-serif font-bold text-yellow-700 mb-3">Miere autentică din familie</h2>
            <ul className="text-gray-700 text-sm space-y-2 text-left list-none px-3 mx-auto">
              <li className="flex items-center gap-2"><span className="text-yellow-500 text-lg">•</span> Fără adaosuri industriale</li>
              <li className="flex items-center gap-2"><span className="text-yellow-500 text-lg">•</span> Recipiente igienice și sustenabile</li>
              <li className="flex items-center gap-2"><span className="text-yellow-500 text-lg">•</span> Garanția originii locale</li>
            </ul>
          </div>

          {/* Center: Poveste & principii */}
          <div className="md:col-span-1 flex flex-col justify-center">
            <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-8 border border-yellow-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Suntem o <span className="font-semibold text-yellow-700">familie cu stupina</span> din Bihor, crescuți cu respect pentru albine și fascinanta lor lume. Grija, răbdarea și metodele tradiționale ne definesc: recoltăm blând doar când mierea e matură, menținând echilibrul naturii.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Sortimentul nostru include: <span className="font-semibold">miere polifloră</span>, <span className="font-semibold">salcâm</span>, <span className="font-semibold">tei</span>, <span className="font-semibold">floarea-soarelui</span> și <span className="font-semibold">propolis</span>, toate cu gust autentic.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-3">
                <div className="rounded-full inline-flex items-center bg-yellow-100/60 px-4 py-2 text-yellow-700 font-medium text-sm shadow border border-yellow-200">
                  Testată & analizată în laborator
                </div>
                <div className="rounded-full inline-flex items-center bg-yellow-50 px-4 py-2 text-yellow-800 font-medium text-sm shadow-sm border border-yellow-100">
                  Responsabilitate față de ecosistem
                </div>
              </div>
            </div>
          </div>

          {/* Right: Fagure & modernitate */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative mb-6 transition-transform hover:scale-105">
              <span className="absolute -top-3 -right-3 z-0 bg-yellow-200 rounded-full blur-lg w-28 h-28 opacity-40"></span>
              <Image
                src="/images/stupina8.jpg"
                alt="Fagure"
                width={130}
                height={130}
                className="object-cover rounded-xl shadow-xl border-4 border-white"
              />
            </div>
            <h2 className="text-2xl font-serif font-bold text-yellow-700 mb-3">Modern, cu rădăcini vechi</h2>
            <p className="text-gray-700 text-sm mb-1">
              Adoptăm tehnologie doar pentru monitorizare și grijă sporită, fără a schimba naturalețea mierii.
            </p>
            <span className="text-yellow-600 text-sm bg-yellow-50 rounded-full px-4 py-1 mt-2 font-semibold border border-yellow-100 shadow-sm">Tradiție cu inovație</span>
          </div>
        </div>

        {/* Valorile grid */}
        <div className="mb-14 w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="rounded-2xl shadow-lg border border-yellow-100 bg-linear-to-tr from-white via-yellow-50 to-white p-8">
            <h3 className="font-bold text-yellow-700 text-2xl mb-5 font-serif flex items-center gap-2">
              <svg width={26} height={26} fill="none" viewBox="0 0 24 24"><path fill="#FDE68A" d="M12 2l2.09 6.26h6.6l-5.34 3.88 2.08 6.26L12 14.52l-5.33 3.88 2.08-6.26-5.34-3.88h6.59z"/></svg>
              Valorile noastre
            </h3>
            <ul className="pl-0 text-gray-700 text-base space-y-3 font-medium">
              <li className="flex items-center gap-2"><span className="p-1 rounded-full bg-yellow-100 text-yellow-600">✔</span> Respect pentru albine și natură</li>
              <li className="flex items-center gap-2"><span className="p-1 rounded-full bg-yellow-100 text-yellow-600">✔</span> Calitate fără compromis</li>
              <li className="flex items-center gap-2"><span className="p-1 rounded-full bg-yellow-100 text-yellow-600">✔</span> Transparență față de clienți</li>
              <li className="flex items-center gap-2"><span className="p-1 rounded-full bg-yellow-100 text-yellow-600">✔</span> Educație & informare</li>
              <li className="flex items-center gap-2"><span className="p-1 rounded-full bg-yellow-100 text-yellow-600">✔</span> Comunitate și sustenabilitate</li>
            </ul>
          </div>
          <div className="rounded-2xl shadow-lg border border-yellow-100 bg-linear-to-tr from-yellow-50 via-white to-yellow-100 p-8 flex flex-col">
            <h3 className="font-bold text-yellow-700 text-2xl mb-3 font-serif flex items-center gap-2">
              <svg width={26} height={26} fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#fde68a" /></svg>
              De ce să alegi mierea noastră?
            </h3>
            <ul className="pl-0 text-gray-700 text-base space-y-3 font-medium">
              <li className="flex items-center gap-2"><span className="p-1 rounded-full bg-yellow-200 text-yellow-700">★</span> Miere crudă, 100% naturală</li>
              <li className="flex items-center gap-2"><span className="p-1 rounded-full bg-yellow-200 text-yellow-700">★</span> Testată anual în laborator</li>
              <li className="flex items-center gap-2"><span className="p-1 rounded-full bg-yellow-200 text-yellow-700">★</span> Ambalare igienică, livrare rapidă</li>
              <li className="flex items-center gap-2"><span className="p-1 rounded-full bg-yellow-200 text-yellow-700">★</span> Susții apicultura locală</li>
              <li className="flex items-center gap-2"><span className="p-1 rounded-full bg-yellow-200 text-yellow-700">★</span> Etică și respect pentru ecosistem</li>
            </ul>
          </div>
        </div>

        {/* Timeline - Pasiune & evoluție */}
        <div className="max-w-3xl mx-auto mb-14">
          <h3 className="text-yellow-800 text-xl md:text-2xl font-semibold mb-8 flex items-center gap-3 font-serif">
            <svg width={22} height={22} fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="12" fill="#fde68a"/></svg>
            Evoluția noastră în câteva repere:
          </h3>
          <ol className="relative border-l-4 border-yellow-200 pl-8 space-y-10">
            <li>
              <span className="absolute -left-2 top-0 bg-yellow-400 w-4 h-4 rounded-full border-2 border-white z-10"></span>
              <div>
                <h4 className="font-bold text-yellow-700 mb-1">2004 – Primul stup</h4>
                <p className="text-gray-700 text-base">
                  Pasiunea devine realitate: începem cu o colibă veche, inspirată de copilărie.
                </p>
              </div>
            </li>
            <li>
              <span className="absolute -left-2 top-0 bg-yellow-400 w-4 h-4 rounded-full border-2 border-white z-10"></span>
              <div>
                <h4 className="font-bold text-yellow-700 mb-1">2013 – Diversificare & tehnologie</h4>
                <p className="text-gray-700 text-base">
                  Extindem familia stupilor și adăugăm monitorizare sustenabilă pentru sănătatea albinelor.
                </p>
              </div>
            </li>
            <li>
              <span className="absolute -left-2 top-0 bg-yellow-400 w-4 h-4 rounded-full border-2 border-white z-10"></span>
              <div>
                <h4 className="font-bold text-yellow-700 mb-1">2021 – Online pentru comunitate</h4>
                <p className="text-gray-700 text-base">
                  Lansăm magazinul online pentru a fi aproape de iubitorii mierii naturale.
                </p>
              </div>
            </li>
          </ol>
        </div>

        {/* Call to action */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-8 bg-linear-to-tr from-yellow-50 via-yellow-100 to-white rounded-2xl px-8 py-8 border border-yellow-200 shadow-lg blur-none animate-fadeIn">
          <div>
            <h4 className="text-xl font-serif font-bold text-yellow-800 mb-1">
              Vrei să ne cunoști mai bine sau să vizitezi stupina?
            </h4>
            <p className="text-gray-700 text-base">
              Suntem deschiși la colaborări, prezentări sau vizite educative – <span className="text-yellow-700 font-semibold">contactează-ne</span> pentru orice întrebare sau curiozitate despre apicultură.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link
                href="/contact"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold text-base shadow-lg transition shadow-yellow-200/40 focus:outline-none ring-2 ring-yellow-300"
              >
                Contactează-ne
              </Link>
              <Link
                href="/produse"
                className="inline-block bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-8 py-3 rounded-full font-semibold text-base border border-yellow-300 shadow-md transition"
              >
                Vezi produse
              </Link>
            </div>
          </div>
          <Image
            src="/images/stupina15.jpg"
            alt="Familia apicultorilor"
            width={190}
            height={120}
            className="object-cover rounded-xl shadow-xl border-4 border-yellow-100 mt-8 md:mt-0"
          />
        </div>
      </div>
    </section>
  );
}
