import Image from "next/image";

const benefits = [
  {
    title: "100% Naturală",
    desc: "Fără adaosuri, fără procesare industrială.",
    icon: (
      // Honey drop
      <svg width="52" height="52" className="mx-auto mb-4" viewBox="0 0 52 52" fill="none">
        <ellipse cx="26" cy="30" rx="14" ry="18" fill="#fde68a"/>
        <path d="M26 6L34.97 20.84C36.47 23.33 34.62 26.5 31.7 26.5H20.3C17.38 26.5 15.53 23.33 17.03 20.84L26 6Z" fill="#fbbf24"/>
      </svg>
    ),
    accent: "from-yellow-200 to-yellow-100",
  },
  {
    title: "Producție Locală",
    desc: "Recoltată din stupina noastră, cu grijă și responsabilitate.",
    icon: (
      // Hive icon
      <svg width="52" height="52" className="mx-auto mb-4" viewBox="0 0 52 52" fill="none">
        <rect x="14" y="16" width="24" height="20" rx="6" fill="#fef08a"/>
        <rect x="21" y="23" width="10" height="10" rx="2" fill="#fbbf24"/>
        <rect x="18" y="36" width="16" height="5" rx="2.5" fill="#fde68a"/>
        <rect x="18" y="11" width="16" height="5" rx="2.5" fill="#fde68a"/>
      </svg>
    ),
    accent: "from-yellow-100 to-amber-100",
  },
  {
    title: "Calitate Garantată",
    desc: "Gust autentic, păstrat prin metode tradiționale.",
    icon: (
      // Medallion/quality badge
      <svg width="52" height="52" className="mx-auto mb-4" viewBox="0 0 52 52" fill="none">
        <circle cx="26" cy="26" r="14" fill="#fbbf24"/>
        <circle cx="26" cy="26" r="10" fill="#fde68a"/>
        <path d="M26 36v12M26 36l-5 5M26 36l5 5" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "from-amber-50 via-yellow-100 to-yellow-200",
  },
];

export default function Benefits() {
  return (
    <section className="relative py-20 px-2 bg-yellow-50">
      {/* Decorative honeycomb SVG accents (top left & bottom right) */}
      <svg
        className="absolute left-[-50px] top-0 w-52 h-52 opacity-10 z-0 hidden lg:block"
        viewBox="0 0 180 180"
        fill="none"
      >
        <polygon points="90,10 175,55 175,145 90,190 5,145 5,55" fill="#fde68a" />
      </svg>
      <svg
        className="absolute right-[-45px] bottom-0 w-44 h-44 opacity-20 z-0"
        viewBox="0 0 180 180"
        fill="none"
      >
        <polygon points="90,10 175,55 175,145 90,190 5,145 5,55" fill="#fef3c7" />
      </svg>
      <div className="max-w-7xl mx-auto relative z-10 px-2 sm:px-6">
        <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-yellow-700 text-center mb-12 tracking-tight drop-shadow-sm">
          De ce să alegi mierea noastră?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((ben, idx) => (
            <div
              key={idx}
              className={`
                group relative flex flex-col items-center text-center transition-all duration-250 
                rounded-3xl shadow-[0_2px_8px_0_rgba(251,191,36,0.07)] overflow-hidden 
                border border-yellow-100 
                bg-gradient-to-br ${ben.accent}
                px-7 py-10
                hover:shadow-2xl hover:border-yellow-300
                hover:-translate-y-1
                focus-within:ring-2 focus-within:ring-yellow-400
              `}
              tabIndex={0}
            >
              <span className="transition-transform group-hover:scale-110">{ben.icon}</span>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-yellow-800">{ben.title}</h3>
              <p className="text-base md:text-lg text-gray-700/90 font-medium">{ben.desc}</p>
              {/* animated gradient accent */}
              <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 opacity-60 group-hover:opacity-100 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
