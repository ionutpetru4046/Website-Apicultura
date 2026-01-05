"use client";

import { useState, useEffect } from "react";

interface Review {
  name: string;
  text: string;
}

export default function Testimonials() {
  const reviews: Review[] = [
    { name: "Maria", text: "Mierea este delicioasă și naturală!" },
    { name: "Andrei", text: "Am cumpărat pentru familie, foarte mulțumiți." },
    { name: "Ioana", text: "Livrare rapidă și produse de calitate." },
    { name: "Alex", text: "Serviciu excelent și recomand cu încredere!" },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide la fiecare 5 secunde
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 5000); // 5000ms = 5 secunde

    return () => clearInterval(interval); // curățare interval la demontare
  }, [reviews.length]);

  return (
    <section className="bg-yellow-50 py-20">
      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <h2 className="text-3xl font-serif text-yellow-700 font-bold mb-12">
          Ce spun clienții noștri
        </h2>

        {/* Card testimonial */}
        <div className="p-8 bg-white rounded-xl shadow-lg transition-transform duration-500 ease-in-out">
          <p className="text-gray-600 mb-4">"{reviews[current].text}"</p>
          <p className="font-semibold text-yellow-600">{reviews[current].name}</p>
        </div>

        {/* Navigare */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevSlide}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
          >
            &#8594;
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {reviews.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === current ? "bg-yellow-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
