'use client';

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // aici ai putea apela un API sau trimite email
    setSubmitted(true);
  }

  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-yellow-50 to-white px-0 py-0">
      {/* Left: Contact Info + Form */}
      <div className="w-full max-w-xl p-8 bg-white rounded-2xl shadow-xl mx-4 mb-12 lg:m-12">
        <h1 className="text-4xl font-serif leading-tight font-bold mb-4 text-yellow-700">Contactează-ne</h1>
        <p className="text-gray-600 mb-6">
          Suntem bucuroși să răspundem rapid la orice solicitare sau comandă. Completează formularul sau folosește datele de contact de mai jos.
        </p>
        <ul className="space-y-2 text-gray-700 mb-8">
          <li>
            <strong>Telefon:</strong>{" "}
            <a className="hover:underline" href="tel:07XXXXXXXX">
              07XXXXXXXX
            </a>
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a className="hover:underline" href="mailto:contact@apicultura.ro">
              contact@apicultura.ro
            </a>
          </li>
          <li>
            <strong>Locație:</strong> România, Județul Iași, Str. Stupinei nr. 15
          </li>
        </ul>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium text-gray-700" htmlFor="name">
                Nume
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-yellow-400 outline-none transition"
                placeholder="Numele tău"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-yellow-400 outline-none transition"
                placeholder="Email-ul tău"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700" htmlFor="message">
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-yellow-400 outline-none transition resize-none"
                placeholder="Scrie mesajul tău aici..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition shadow"
            >
              Trimite mesajul
            </button>
          </form>
        ) : (
          <div className="bg-yellow-100 rounded-lg p-6 text-center text-yellow-800 font-semibold mt-6">
            Mulțumim pentru mesaj! Te vom contacta în cel mai scurt timp.
          </div>
        )}

        <div className="border-t border-gray-200 mt-8 pt-6 text-gray-500 text-sm">
          <span className="block mb-2">Program:</span>
          <span>Luni - Sâmbătă: 09:00 - 18:00</span>
          <br />
          <span>Duminică: Închis</span>
        </div>
      </div>

      {/* Right: Google Map */}
      <div className="flex-1 w-full h-[450px] lg:h-[90vh] relative lg:mr-8">
        <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.96708507532!2d27.57675841559216!3d47.15845497915845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ff59e839b168f%3A0xa497ed13c84ad8eb!2sIa%C8%99i!5e0!3m2!1sro!2sro!4v1683126860491!5m2!1sro!2sro"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}