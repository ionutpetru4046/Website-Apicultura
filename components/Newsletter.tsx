export default function Newsletter() {
    return (
      <section className="py-20 bg-yellow-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-yellow-700 font-bold mb-4">Abonează-te la newsletter</h2>
          <p className="text-gray-700 mb-6">
            Fii la curent cu oferte și noutăți despre produsele noastre.
          </p>
  
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Email-ul tău"
              className="px-4 py-3 rounded-md flex-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium">
              Abonează-te
            </button>
          </form>
        </div>
      </section>
    );
  }
  