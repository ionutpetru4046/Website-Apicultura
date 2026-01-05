import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-yellow-200 bg-white">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-yellow-600">
          Apicultură
        </Link>

        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <Link href="/">Acasă</Link>
          </li>
          <li>
            <Link href="/despre">Despre</Link>
          </li>
          <li>
            <Link href="/produse">Produse</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
