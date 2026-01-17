'use client';

import { useState, useEffect, useCallback } from "react";

export default function Gallery() {
  // Lista imaginilor (poți pune până la 16)
  const images = Array.from({ length: 16 }, (_, i) => `/images/stupina${i + 1}.jpg`);

  // Starea pentru modal
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Funcții pentru navigare (mouse)
  const showPrevImage = useCallback((e?: React.MouseEvent | KeyboardEvent) => {
    if (e && 'stopPropagation' in e) e.stopPropagation();
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  }, [selectedIndex]);

  const showNextImage = useCallback((e?: React.MouseEvent | KeyboardEvent) => {
    if (e && 'stopPropagation' in e) e.stopPropagation();
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  }, [selectedIndex, images.length]);

  const closeModal = useCallback((e?: React.MouseEvent | KeyboardEvent) => {
    if (e && 'stopPropagation' in e) e.stopPropagation();
    setSelectedIndex(null);
  }, []);

  // Keyboard navigation for modal
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        if (selectedIndex > 0) {
          showPrevImage(e);
        }
      } else if (e.key === "ArrowRight") {
        if (selectedIndex < images.length - 1) {
          showNextImage(e);
        }
      } else if (e.key === "Escape") {
        closeModal(e);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, showPrevImage, showNextImage, closeModal, images.length]);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl text-yellow-700 font-serif font-bold mb-12 text-center">
          Galerie
        </h2>

        {/* Uniform square thumbnail containers */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedIndex(i)}
            >
              <div
                className="w-full aspect-square bg-gray-100"
                style={{ position: 'relative' }}
              >
                <img
                  src={src}
                  alt={`Galerie ${i + 1}`}
                  className="absolute w-full h-full object-cover hover:scale-105 transition"
                  style={{
                    top: 0,
                    left: 0,
                    objectFit: 'cover',
                    aspectRatio: '1/1',
                  }}
                />
              </div>
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
              style={{ maxHeight: '90vh' }}
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
              <img
                src={images[selectedIndex]}
                alt={`Galerie ${selectedIndex + 1}`}
                className="block max-h-[80vh] max-w-full mx-auto"
                style={{
                  objectFit: 'contain',
                  width: 'auto',
                  height: 'auto',
                  maxHeight: '80vh',
                  maxWidth: '100%',
                }}
              />
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
