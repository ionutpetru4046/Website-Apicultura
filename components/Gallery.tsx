'use client';

import { useState } from "react";

export default function Gallery() {
  // Lista imaginilor (poți pune până la 16)
  const images = Array.from({ length: 16 }, (_, i) => `/images/stupina${i + 1}.jpg`);

  // Starea pentru modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold mb-12 text-center">
          Galerie
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedImage(src)}
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
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="bg-white rounded-xl overflow-hidden max-w-3xl w-full relative">
              <img src={selectedImage} alt="Modal" className="w-full h-auto" />
              <button
                className="absolute top-3 right-3 text-gray-700 text-xl font-bold"
                onClick={() => setSelectedImage(null)}
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
