"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // aici vei conecta ulterior backend / email
    setSubmitted(true);
  }

  return (
    <section
      className="min-h-screen w-full bg-linear-to-br from-yellow-50 to-white flex items-center justify-center py-8 px-2 md:px-6 relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle,rgba(253,224,71,0.13) 2px,transparent 2px), radial-gradient(circle,rgba(251,191,36,0.10) 1px,transparent 2px)",
        backgroundSize: "30px 30px",
        backgroundPosition: "0 0,15px 15px",
      }}
    >
      <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row gap-10 md:gap-14 relative z-10">
        {/* LEFT (Contact Info & Hours) */}
        <div className="flex-[1.1] flex flex-col gap-8 justify-between bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-5 sm:p-10 md:p-12 min-h-[400px] max-w-full">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-extrabold text-yellow-700 mb-4 text-center md:text-left drop-shadow-sm">
              Ia legătura cu noi
            </h1>
            <p className="text-gray-700 mb-7 text-base md:text-lg text-center md:text-left max-w-2xl">
              Ai întrebări, vrei ofertă pentru miere sau vrei să afli statusul livrării? Suntem aici pentru tine – răspundem rapid pe toate canalele!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-900 mb-6">
              <div className="flex items-start gap-4 bg-yellow-50 border border-yellow-100 rounded-xl px-4 py-3 shadow-sm">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-yellow-200/80 text-yellow-800 rounded-full">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M2 7.6C2 6.16 2 5.44 2.29 4.87a2 2 0 0 1 .84-.82c.58-.31 1.32-.16 2.81.15l2.06.43c.7.15 1.05.22 1.33.41.28.19.49.46.58.78.09.31.01.67-.16 1.39L8.2 9.23c-.17.72-.25 1.08-.12 1.32.13.25.38.41.89.73A16.89 16.89 0 0 0 13.7 14c.48.25.72.37.97.3.25-.07.42-.3.77-.75l1.15-1.48c.49-.62.73-.94 1.13-.98.4-.04.78.19 1.54.65l2.15 1.32c1.05.65 1.58.97 1.7 1.46.12.49-.06 1.01-.49 2.05a3.45 3.45 0 0 1-.41.74C20.08 19.22 16.42 22 12 22S3.92 19.22 2.67 17.04c-.21-.38-.33-.75-.41-.74z" stroke="#D97706" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <div>
                  <div className="mb-1 font-medium">Telefon</div>
                  <a href="tel:07XXXXXXXX" className="text-yellow-700 hover:underline">
                    0748410558
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-yellow-50 border border-yellow-100 rounded-xl px-4 py-3 shadow-sm">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-green-100 text-green-700 rounded-full">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.669.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.762-1.653-2.06-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.297.298-.495.099-.198.05-.372-.025-.52-.075-.148-.669-1.612-.918-2.21-.242-.582-.487-.504-.669-.514-.173-.007-.372-.009-.57-.009-.198 0-.52.075-.792.372-.273.297-1.04 1.016-1.04 2.48 0 1.464 1.065 2.88 1.213 3.078.148.198 2.09 3.198 5.088 4.365.712.294 1.266.47 1.699.599.713.213 1.362.183 1.873.111.572-.08 1.758-.719 2.006-1.411.247-.692.247-1.285.173-1.411-.074-.127-.272-.198-.57-.347z" fill="#22c55e"/></svg>
                </span>
                <div>
                  <div className="mb-1 font-medium">WhatsApp</div>
                  <a
                    href="https://wa.me/407XXXXXXXX?text=Salut!%20Sunt%20interesat%20de%20miere."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 font-medium hover:underline"
                  >
                    Scrie-ne pe WhatsApp
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-yellow-50 border border-yellow-100 rounded-xl px-4 py-3 shadow-sm">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-yellow-100 text-yellow-700 rounded-full">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M3 6l9 7 9-7" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 6v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </span>
                <div>
                  <div className="mb-1 font-medium">Email</div>
                  <a
                    href="mailto:contact@apicultura.ro"
                    className="text-yellow-700 hover:underline"
                  >
                    contact@apicultura.ro
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-yellow-50 border border-yellow-100 rounded-xl px-4 py-3 shadow-sm">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-yellow-100 text-yellow-800 rounded-full">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 22s8.485-6.969 8.485-13.333A6.848 6.848 0 0 0 12 2 6.848 6.848 0 0 0 3.515 8.667C3.515 15.03 12 22 12 22Z" stroke="#D97706" strokeWidth="1.2" strokeLinejoin="round"/></svg>
                </span>
                <div>
                  <div className="mb-1 font-medium">Adresă</div>
                  <span className="text-gray-700">
                    Județul Bihor,<br />
                    Loc. Peștiș, Oraș Aleșd,
                    <br />
                    Str. Valea Morii nr. 384
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-gray-800 mt-5">
              <div>
                <p className="font-bold text-yellow-700 flex items-center gap-2">
                  <svg width={20} height={20} className="inline" fill="none" viewBox="0 0 24 24"><path d="M3 11V7a4 4 0 018 0v4M7 17h10M17 11v2a5 5 0 11-10 0v-2" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  Livrare:
                </p>
                <span className="block mt-0.5 text-gray-700 text-sm">
                  Romania, Jud Bihor &ndash; curier rapid (1–3 zile)
                </span>
              </div>
              <div>
                <p className="font-bold text-yellow-700 flex items-center gap-2">
                  <svg width={20} height={20} fill="none" viewBox="0 0 24 24"><path d="M8 6V2m8 4V2M3 11h18M5 19h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2z" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  Program:
                </p>
                <div className="mt-0.5 ml-0.5 text-sm">
                  <p>Luni – Sâmbătă: <span className="font-medium text-gray-800">09:00 – 20:00</span></p>
                  <p className="text-gray-500">Duminică: <span className="font-normal">Închis</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT (Form) */}
        <div className="flex-[1.15] flex flex-col justify-center min-h-[460px]">
          <div className="bg-white/90 backdrop-blur-xl px-4 py-7 sm:px-7 md:px-12 md:py-10 rounded-3xl shadow-2xl mx-auto w-full max-w-lg flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-yellow-700 mb-3 text-center">Formular de contact</h2>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-1 font-semibold text-sm text-gray-700">Nume</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-yellow-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none text-base transition placeholder:text-gray-400 bg-yellow-50/40"
                    placeholder="Numele tău"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-sm text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-yellow-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none text-base transition placeholder:text-gray-400 bg-yellow-50/40"
                    placeholder="Email-ul tău"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-sm text-gray-700">Mesaj</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-yellow-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none resize-none text-base transition placeholder:text-gray-400 bg-yellow-50/40"
                    placeholder="Ex: Aș dori 3 borcane de miere polifloră"
                  />
                </div>
                <button
                  type="submit"
                  disabled={
                    !form.name.trim() ||
                    !form.email.trim() ||
                    !form.message.trim()
                  }
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl font-semibold text-lg shadow-sm transition disabled:opacity-55 disabled:cursor-not-allowed"
                >
                  Trimite mesajul
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center gap-2 py-8">
                <svg width={52} height={52} fill="none" viewBox="0 0 24 24">
                  <circle cx={12} cy={12} r={11} fill="#fde68a"/>
                  <path d="M7 13.5 11 17l6-7" stroke="#d97706" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="font-bold text-lg text-yellow-700">
                  Mulțumim pentru mesaj!
                </div>
                <div className="text-gray-700 text-base text-center mt-1">
                  Îți vom răspunde în cel mai scurt timp posibil.
                </div>
              </div>
            )}
            <div className="mt-7 border-t pt-5 text-xs text-gray-400 flex flex-col items-center">
              <span>Protejăm datele tale personale – totul se transmite securizat.</span>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative honeycomb SVG - bottom-right */}
      <svg className="hidden md:block absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 pointer-events-none" width="240" height="180" viewBox="0 0 240 180" fill="none">
        <g opacity=".08">
          <path d="M40 50l20-35 20 35H40z" fill="#fde68a"/><path d="M80 50l20-35 20 35H80z" fill="#fde68a"/><path d="M60 85l20-35 20 35H60z" fill="#fde68a"/><path d="M100 85l20-35 20 35h-40z" fill="#fde68a"/>
        </g>
      </svg>
    </section>
  );
}
