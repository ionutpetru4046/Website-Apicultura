export default function Testimonials() {
    const reviews = [
      { name: "Maria", text: "Mierea este delicioasă și naturală!" },
      { name: "Andrei", text: "Am cumpărat pentru familie, foarte mulțumiți." },
      { name: "Ioana", text: "Livrare rapidă și produse de calitate." },
    ];
  
    return (
      <section className="bg-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-12">
            Ce spun clienții noștri
          </h2>
  
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                <p className="text-gray-600 mb-4">"{r.text}"</p>
                <p className="font-semibold text-yellow-600">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  