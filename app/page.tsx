import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";
import ProdusePage from "./produse/page";
import ContactPage from "./contact/page";
import DesprePage from "./despre/page";

export default function Home() {
  return (
    <main className="bg-yellow-50">
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-serif font-bold text-yellow-700 leading-tight mb-6">
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
              className="border border-yellow-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md font-medium"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="w-full h-80 bg-yellow-100 rounded-xl flex items-center justify-center overflow-hidden">
          <img
            src="/images/stupina1.jpg"
            alt="Stupina"
            className="object-cover w-full h-full"
          />
        </div>
      </section>
      <Benefits />
      <DesprePage />
      <ProdusePage />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Newsletter />
      <ContactPage />
    </main>
  );
}
