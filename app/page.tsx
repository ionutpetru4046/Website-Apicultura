import Link from "next/link";
import Image from "next/image";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";

// Transformăm paginile în secțiuni simple
import DespreSection from "../app/despre/page";
import ProduseSection from "../app/produse/page";
import ContactSection from "../app/contact/page";

export default function Home() {
  return (
    <main className="bg-yellow-50">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-serif font-bold text-yellow-700 leading-tight mb-6">
            Miere naturală <br /> direct de la apicultor
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Produse apicole 100% naturale, recoltate cu grijă din stupina noastră locală.
          </p>
          <div className="flex gap-4">
            <Link
              href="/produse"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium transition"
            >
              Vezi produsele
            </Link>
            <Link
              href="/contact"
              className="border border-yellow-500 hover:bg-yellow-100 text-yellow-700 px-6 py-3 rounded-md font-medium transition"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="w-full h-80 bg-yellow-100 rounded-xl flex items-center justify-center overflow-hidden">
          <Image
            src="/images/stupina1.jpg"
            alt="Stupina cu miere naturală"
            width={600}
            height={400}
            className="object-cover w-full h-full rounded-xl"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Beneficii */}
      <Benefits />

      {/* Despre noi */}
      <DespreSection />

      {/* Produse */}
      <ProduseSection />

      {/* Testimoniale */}
      <Testimonials />

      {/* Galerie imagini */}
      <Gallery />

      {/* FAQ */}
      <FAQ />

      {/* Newsletter */}
      <Newsletter />

      {/* Contact */}
      <ContactSection />
    </main>
  );
}
