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
    <section className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex flex-col-reverse lg:flex-row items-stretch">
      {/* LEFT */}
      <div className="w-full max-w-full md:max-w-2xl lg:max-w-xl mx-auto md:mx-8 p-4 sm:p-8 md:p-10 bg-white rounded-2xl shadow-xl lg:m-12 flex flex-col justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-yellow-700 mb-3 sm:mb-4">
          Contactează-ne
        </h1>

        <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
          Pentru comenzi, informații despre miere sau livrare, ne poți contacta rapid prin telefon, WhatsApp sau email.
        </p>

        {/* CONTACT INFO */}
        <ul className="space-y-2 sm:space-y-3 text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base">
          <li>
            <strong>Telefon:</strong>{" "}
            <a href="tel:07XXXXXXXX" className="hover:underline break-all">
              07XXXXXXXX
            </a>
          </li>
          <li>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/407XXXXXXXX?text=Salut!%20Sunt%20interesat%20de%20miere."
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-medium hover:underline break-all"
            >
              Scrie-ne pe WhatsApp
            </a>
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:contact@apicultura.ro"
              className="hover:underline break-all"
            >
              contact@apicultura.ro
            </a>
          </li>
          <li>
            <strong>Zonă de livrare:</strong>{" "}
            <span>România – curier rapid (1–3 zile)</span>
          </li>
          <li>
            <strong>Adresă:</strong>{" "}
            <span>
              Județul Bihor, Loc. Peștiș, Oraș Aleșd, Str. Valea Morii nr. 384
            </span>
          </li>
        </ul>

        {/* FORM */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div>
              <label className="block mb-1 font-medium text-sm sm:text-base">Nume</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 sm:px-4 sm:py-3 focus:ring-2 focus:ring-yellow-400 outline-none text-sm sm:text-base"
                placeholder="Numele tău"
                autoComplete="name"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm sm:text-base">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 sm:px-4 sm:py-3 focus:ring-2 focus:ring-yellow-400 outline-none text-sm sm:text-base"
                placeholder="Email-ul tău"
                autoComplete="email"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm sm:text-base">Mesaj</label>
              <textarea
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 sm:px-4 sm:py-3 focus:ring-2 focus:ring-yellow-400 outline-none resize-none text-sm sm:text-base"
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
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 sm:py-3 rounded-lg font-semibold transition disabled:opacity-60"
            >
              Trimite mesajul
            </button>
          </form>
        ) : (
          <div className="bg-yellow-100 p-4 sm:p-6 rounded-lg text-center font-semibold text-yellow-800 text-base">
            Mulțumim! Te vom contacta în cel mai scurt timp.
          </div>
        )}

        {/* PROGRAM */}
        <div className="border-t mt-6 sm:mt-8 pt-4 sm:pt-6 text-xs sm:text-sm text-gray-600">
          <p className="font-medium mb-1">Program:</p>
          <p>Luni – Sâmbătă: 09:00 – 18:00</p>
          <p>Duminică: Închis</p>
        </div>
      </div>

      {/* RIGHT – MAP */}
      <div className="w-full lg:w-[600px] h-[220px] sm:h-[350px] md:h-[400px] lg:h-[90vh] p-2 xs:p-4 mt-8 lg:mt-0 lg:p-0 flex-grow">
        <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl min-h-[200px]">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43466.99553773521!2d21.87034275682663!3d47.04650065304068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4746477081b7a34f%3A0x191c46db71fa7f5!2sBihor%2C%20Romania!5e0!3m2!1sro!2sro!4v1717924834000"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0, minHeight: '200px' }}
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
