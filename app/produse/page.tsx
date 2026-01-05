export default function ProdusePage() {
    return (
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">Produsele noastre</h1>
  
        <p className="text-gray-600 mb-10">
          Descoperă gama noastră de produse apicole naturale.
        </p>
  
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border rounded-xl p-6 text-center">
            <h3 className="font-semibold mb-2">Miere de salcâm</h3>
            <p className="text-gray-600 text-sm">În curând</p>
          </div>
  
          <div className="border rounded-xl p-6 text-center">
            <h3 className="font-semibold mb-2">Miere polifloră</h3>
            <p className="text-gray-600 text-sm">În curând</p>
          </div>
  
          <div className="border rounded-xl p-6 text-center">
            <h3 className="font-semibold mb-2">Polen natural</h3>
            <p className="text-gray-600 text-sm">În curând</p>
          </div>
        </div>
      </section>
    );
  }
  