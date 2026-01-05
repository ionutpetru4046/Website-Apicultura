export default function Gallery() {
    const images = [
      "/images/stupina1.jpg",
      "/images/stupina2.jpg",
      "/images/stupina3.jpg",
      "/images/stupina4.jpg",
    ];
  
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">
            Galerie
          </h2>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {images.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-xl">
                <img
                  src={src}
                  alt={`Galerie ${i + 1}`}
                  className="w-full h-48 object-cover hover:scale-105 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  