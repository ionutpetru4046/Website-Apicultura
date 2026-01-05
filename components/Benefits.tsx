export default function Benefits() {
  return (
    <section className="bg-yellow-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-yellow-700 text-center mb-12">
          De ce să alegi mierea noastră?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl text-center bg-yellow-100 hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">
              100% Naturală
            </h3>
            <p className="text-gray-600">
              Fără adaosuri, fără procesare industrială.
            </p>
          </div>

          <div className="p-6 border rounded-xl text-center bg-yellow-100 hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">
              Producție Locală
            </h3>
            <p className="text-gray-600">
              Recoltată din stupina noastră, cu grijă și responsabilitate.
            </p>
          </div>

          <div className="p-6 border rounded-xl text-center bg-yellow-100 hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">
              Calitate Garantată
            </h3>
            <p className="text-gray-600">
              Gust autentic, păstrat prin metode tradiționale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
