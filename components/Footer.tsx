import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-yellow-50 border-t border-yellow-200 pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:justify-between gap-10">
        {/* FOOTER LINKS */}
        <nav
          className="
            flex-1 
            grid 
            grid-cols-1 
            md:grid-cols-3 
            gap-8
            max-w-full
          "
          aria-label="Footer navigation"
        >
          <div className="min-w-0">
            <h4 className="font-semibold text-yellow-800 mb-2 text-base truncate">Navigare</h4>
            <ul className="space-y-1 text-gray-700 wrap-break-word">
              <li>
                <Link href="/" className="hover:underline transition block truncate">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/produse" className="hover:underline transition block truncate">
                  Produse
                </Link>
              </li>
              <li>
                <Link href="/despre" className="hover:underline transition block truncate">
                  Despre
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline transition block truncate">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="min-w-0">
            <h4 className="font-semibold text-yellow-800 mb-2 text-base truncate">Informații</h4>
            <ul className="space-y-1 text-gray-700 wrap-break-word">
              <li>
                <a href="/produse#faq" className="hover:underline transition block truncate">
                  Întrebări frecvente
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@apicultura.ro"
                  className="hover:underline transition block break-all"
                >
                  Email: apiculturaNaturala@yahoo.com
                </a>
              </li>
              <li>
                <a
                  href="tel:0748410558"
                  className="hover:underline transition block truncate"
                >
                  Telefon: 0748410558
                </a>
              </li>
              <li className="truncate">Bihor, Alesd, Pestis</li>
            </ul>
          </div>
          <div className="min-w-0">
            <h4 className="font-semibold text-yellow-800 mb-2 text-base truncate">Social</h4>
            <ul className="space-y-1 text-gray-700 wrap-break-word" aria-label="Social media links">
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition block truncate"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition block truncate"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:miereNaturala@yahoo.com"
                  className="hover:underline transition block break-all"
                >
                  Trimite-ne un email
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* DESCRIPTION */}
        <section className="flex-1 flex flex-col items-start md:items-end justify-between gap-4 mt-10 md:mt-0">
          <div>
            <h5 className="text-yellow-700 font-serif font-bold text-lg">Apicultură Naturală</h5>
            <p className="text-gray-700 mt-2 mb-1 max-w-sm">
              Miere 100% naturală, produse apicole pure, direct din stupina din Bihor.
              Gust autentic. Calitate superioara.
            </p>
          </div>
          <p className="text-gray-500 mt-6 text-xs">
            © {new Date().getFullYear()} Apicultură Naturală. Toate drepturile rezervate.
          </p>
        </section>
      </div>

      {/* CREATOR */}
      <div className="text-center mt-8 text-xs text-gray-400">
        Made by <a href="mailto:costewebdev@gmail.com" className="hover:underline transition font-medium text-gray-500">costewebdev@gmail.com</a>
      </div>
    </footer>
  );
}
