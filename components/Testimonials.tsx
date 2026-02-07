"use client";

import { useState, useEffect } from "react";

interface Review {
  name: string;
  text: string;
  location?: string;
  // Optional: Add avatar, stars, date if needed
  avatar?: string;
  stars?: number;
}

const STAR_COLOR = "text-yellow-400";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex mb-2 justify-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < (count || 0) ? STAR_COLOR : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.955L10 0l2.95 5.955 6.562.955-4.756 4.635 1.122 6.545z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  // Expanded testimonials with more detail and avatars
  const reviews: Review[] = [
    {
      name: "Maria Popescu",
      text: "Mierea este delicioasă și naturală! Gust autentic, a devenit preferata familiei.",
      location: "Oradea",
      avatar: "/images/testimonials/maria.jpg",
      stars: 5,
    },
    {
      name: "Andrei Ionescu",
      text: "Comand pentru familie de câteva luni și calitatea mierei este întotdeauna excepțională. Recomand cu drag!",
      location: "Cluj-Napoca",
      avatar: "/images/testimonials/andrei.jpg",
      stars: 5,
    },
    {
      name: "Ioana Munteanu",
      text: "Livrare rapidă, ambalaj elegant și miere foarte aromată. Îmi place grija pentru detalii!",
      location: "Timișoara",
      avatar: "/images/testimonials/ioana.jpg",
      stars: 5,
    },
    {
      name: "Alex Dumitru",
      text: "Serviciu clienți amabil și produse de top. Cu siguranță voi comanda din nou!",
      location: "Pitești",
      avatar: "/images/testimonials/alex.jpg",
      stars: 5,
    },
    {
      name: "Gabriela Roman",
      text: "Mierea de salcâm este preferata mea! Pură, gustoasă și livrată rapid.",
      location: "Brașov",
      avatar: "/images/testimonials/gabriela.jpg",
      stars: 5,
    },
    {
      name: "Cristian B.",
      text: "Am primit recomandarea de la un prieten și nu regret! Multumesc pentru calitate.",
      location: "Iași",
      avatar: "/images/testimonials/cristian.jpg",
      stars: 5,
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide la fiecare 7 secunde, pause on hover
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  // Modern layout: glassmorphism, bg pattern, avatars, stars
  return (
    <section
      className="relative py-24 bg-yellow-50"
      style={{
        backgroundImage:
          "radial-gradient(circle,rgba(253,224,71,0.1) 2px,transparent 2px), radial-gradient(circle,rgba(251,191,36,0.08) 1px,transparent 2px)",
        backgroundSize: "30px 30px",
        backgroundPosition: "0 0,15px 15px",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-5xl text-center font-serif text-yellow-700 font-bold mb-14 drop-shadow-sm">
          Ce spun clienții noștri
        </h2>

        <div className="relative flex justify-center items-center">
          {/* Glass-effect Card */}
          <div
            className="w-full max-w-xl p-10 
            bg-white/80 
            backdrop-blur-xl 
            border border-yellow-100 
            rounded-2xl 
            shadow-2xl 
            transition-all duration-500 ease-in-out 
            flex flex-col items-center 
            ring-4 ring-yellow-100/30"
          >
            {reviews[current].avatar ? (
              <img
                src={reviews[current].avatar}
                alt={reviews[current].name}
                className="w-16 h-16 rounded-full ring-4 ring-yellow-200 object-cover mb-4 shadow-md"
                loading="lazy"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-yellow-200 mb-4 flex items-center justify-center text-2xl text-white font-bold shadow-md">
                {reviews[current].name.charAt(0)}
              </div>
            )}

            <Stars count={reviews[current].stars || 5} />

            <blockquote className="italic text-gray-700 text-lg md:text-xl font-light mb-4 relative">
              <svg
                className="w-6 h-6 inline mr-1 text-yellow-300 align-top"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9.17 6A5 5 0 004 11v7a1 1 0 001 1h6a1 1 0 001-1v-7A5 5 0 009.17 6zm-1.15 2.46A3 3 0 017 11v6h4v-6a3 3 0 00-2.02-2.54zM19 6a5 5 0 00-5 5v7a1 1 0 001 1h6a1 1 0 001-1v-7a5 5 0 00-3-4.54zM17.85 8.46A3 3 0 0119 11v6h4v-6a3 3 0 00-2.02-2.54z" />
              </svg>
              <span>{reviews[current].text}</span>
            </blockquote>
            <div className="flex flex-col items-center space-y-0.5">
              <span className="font-bold text-yellow-700 text-lg">{reviews[current].name}</span>
              <span className="text-yellow-500 text-sm">
                {reviews[current].location}
              </span>
            </div>
          </div>

          {/* Navigation buttons: floating, modern, circular */}
          <button
            aria-label="Precedent testimonial"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 border border-yellow-100 shadow-lg rounded-full w-11 h-11 flex items-center justify-center text-yellow-500 hover:bg-yellow-200/80 hover:scale-110 active:scale-95 transition z-20"
          >
            <svg width={22} height={22} fill="none" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            aria-label="Următorul testimonial"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 border border-yellow-100 shadow-lg rounded-full w-11 h-11 flex items-center justify-center text-yellow-500 hover:bg-yellow-200/80 hover:scale-110 active:scale-95 transition z-20"
          >
            <svg width={22} height={22} fill="none" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator: pill style and modern */}
        <div className="flex justify-center mt-8 gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              aria-label={`Select testimonial ${i + 1}`}
              className={`transition-all duration-300 h-3 rounded-full
                ${i === current ? "bg-yellow-500 w-8 shadow-md" : "bg-gray-300 w-3"}
                focus:outline-none ring-2 ring-yellow-300/40`}
              onClick={() => setCurrent(i)}
              style={{ border: "none" }}
            ></button>
          ))}
        </div>

        {/* Review trust mark at bottom right */}
        <div className="absolute bottom-2 right-8 flex items-center gap-2 bg-white/80 border border-yellow-100 rounded-full px-3 py-1 shadow-md text-yellow-700 text-xs font-semibold select-none">
          <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24">
            <path d="M12 2l2.31 6.48L21 9.27l-5 4.87L17.3 21 12 17.77 6.7 21l1.3-6.86-5-4.87 6.69-.79z" fill="#fde047"/>
          </svg>
          100% recenzii reale &amp; verificabile
        </div>
      </div>
    </section>
  );
}
