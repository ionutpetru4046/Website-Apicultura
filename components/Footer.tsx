export default function Footer() {
    return (
      <footer className="bg-yellow-50 border-t border-yellow-200">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-gray-600 flex flex-col md:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} Apicultură Naturală</p>
          <p>Miere 100% naturală, direct de la apicultor</p>
        </div>
      </footer>
    );
  }
  