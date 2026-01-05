import Benefits from "@/components/Benefits";

export default function Home() {
  return (
    <main>
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-serif font-bold leading-tight mb-6">
            Miere naturală <br /> direct de la apicultor
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Produse apicole 100% naturale, recoltate cu grijă din stupina
            noastră locală.
          </p>

          <div className="flex gap-4">
            <a
              href="/produse"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium"
            >
              Vezi produsele
            </a>

            <a
              href="/contact"
              className="border border-yellow-500 text-yellow-600 px-6 py-3 rounded-md font-medium"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="w-full h-80 bg-yellow-100 rounded-xl flex items-center justify-center">
          <span className="text-yellow-700 font-semibold">
            Imagine stupină
          </span>
        </div>
      </section>
      <Benefits />
    </main>
  );
}
