'use client';

import { useState } from "react";

export default function Gallery() {
  // Lista imaginilor (poți pune până la 16)
  const images = Array.from({ length: 16 }, (_, i) => `/images/stupina${i + 1}.jpg`);

  // Starea pentru modal
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Funcții pentru navigare
  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const closeModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex(null);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl text-yellow-700 font-serif font-bold mb-12 text-center">
          Galerie
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedIndex(i)}
            >
              <img
                src={src}
                alt={`Galerie ${i + 1}`}
                className="w-full h-48 object-cover hover:scale-105 transition"
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          >
            <div
              className="bg-white rounded-xl overflow-hidden max-w-3xl w-full relative flex items-center"
              onClick={e => e.stopPropagation()}
            >
              {/* Left arrow */}
              <button
                className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-yellow-100 transition text-2xl font-bold ${selectedIndex === 0 ? "opacity-30 cursor-default" : ""}`}
                style={{ zIndex: 1 }}
                onClick={selectedIndex === 0 ? undefined : showPrevImage}
                tabIndex={selectedIndex === 0 ? -1 : 0}
                aria-label="Imaginea anterioară"
                disabled={selectedIndex === 0}
              >
                &#8592;
              </button>
              {/* Imaginea */}
              <img src={images[selectedIndex]} alt={`Galerie ${selectedIndex + 1}`} className="w-full h-auto" />
              {/* Right arrow */}
              <button
                className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-yellow-100 transition text-2xl font-bold ${selectedIndex === images.length - 1 ? "opacity-30 cursor-default" : ""}`}
                style={{ zIndex: 1 }}
                onClick={selectedIndex === images.length - 1 ? undefined : showNextImage}
                tabIndex={selectedIndex === images.length - 1 ? -1 : 0}
                aria-label="Imaginea următoare"
                disabled={selectedIndex === images.length - 1}
              >
                &#8594;
              </button>
              {/* Close modal */}
              <button
                className="absolute top-3 right-3 text-gray-700 text-2xl font-bold bg-white bg-opacity-90 rounded-full w-10 h-10 flex items-center justify-center hover:bg-yellow-100 transition"
                onClick={closeModal}
                aria-label="Închide"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
