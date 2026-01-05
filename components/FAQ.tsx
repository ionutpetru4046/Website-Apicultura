export default function FAQ() {
    const faqs = [
      { q: "Cum se păstrează mierea naturală?", a: "La temperatura camerei, ferit de lumina directă." },
      { q: "Care este diferența între polifloră și salcâm?", a: "Polifloră are gust mai complex, salcâm e mai delicată." },
      { q: "Pot comanda online fără cont?", a: "Da, checkout-ul nu necesită înregistrare." },
    ];
  
    return (
      <section className="bg-yellow-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-yellow-700 font-bold mb-12 text-center">Întrebări frecvente</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border p-4 rounded-xl bg-white">
                <p className="font-semibold mb-2">{faq.q}</p>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  