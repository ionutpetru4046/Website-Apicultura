export default function DesprePage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex items-center">
      <div className="max-w-4xl mx-auto px-6 py-16 w-full">
        <h1 className="text-4xl md:text-5xl font-serif leading-tight font-bold mb-8 text-yellow-700">
          Despre noi
        </h1>

        <div className="mb-10">
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Cu o pasiune autentică pentru apicultură, suntem o stupină de familie situată în inima naturii din Bihor.
            Pasiunea noastră pentru albine și lumea lor minunată ne determină să producem miere pură, direct de la sursă, folosind metode tradiționale și responsabile, fără compromisuri față de calitate.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Credem că apicultura înseamnă grijă față de albine și respect pentru ecosistem. În stupina noastră, fiecare familie de albine este atent îngrijită, iar recoltarea mierii se face doar atunci când aceasta este complet matură și fără a le afecta resursele vitale.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Sortimentul nostru cuprinde: miere polifloră, salcâm, tei, floarea-soarelui și propolis, toate bogate în nutrienți naturali, exact cum le-a creat natura.
          </p>
        </div>

        <div className="bg-yellow-100 rounded-xl p-6 md:flex md:items-center gap-10 shadow-md mb-10">
          <img
            src="/images/beekeeper.png"
            alt="Apicultor"
            className="w-36 h-36 object-contain mx-auto md:mx-0 mb-4 md:mb-0"
          />
          <div>
            <h2 className="text-2xl font-serif font-bold mb-2 text-yellow-700">
              De ce să alegi mierea noastră?
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Miere crudă, 100% naturală, fără adaosuri sau procesări industriale</li>
              <li>Stupină gestionată etic, respectăm ciclul natural al albinelor</li>
              <li>Testată anual în laborator, pentru siguranță și puritate</li>
              <li>Ambalare igienică și livrare rapidă</li>
              <li>Sprijini direct apicultura locală și biodiversitatea</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mt-10">
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-bold text-yellow-700 text-xl mb-2 font-serif">Valorile noastre</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Respect pentru albine şi natură</li>
              <li>Calitate fără compromis</li>
              <li>Transparenţă faţă de clienţi</li>
              <li>Educaţie şi informare despre beneficiile mierii</li>
              <li>Comunitate și sustenabilitate</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <img
              src="/images/honeycomb.png"
              alt="Fagure"
              className="h-20 w-20 mb-4"
            />
            <h3 className="font-bold text-yellow-700 text-xl mb-2 font-serif">Apicultură modernă, cu rădăcini vechi</h3>
            <p className="text-gray-700">
              Folosim tehnologie modernă doar pentru a monitoriza sănătatea stupilor și a reduce intervențiile dăunătoare, păstrând metodele tradiționale pentru calitate maximă.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-6 bg-yellow-50 rounded-xl p-6 border border-yellow-100">
          <div>
            <h4 className="text-lg font-semibold text-yellow-700 mb-2">Vrei să ne cunoști mai bine sau să vizitezi stupina?</h4>
            <p className="text-gray-700">
              Suntem deschiși la colaborări, prezentări sau vizite educative! Contactează-ne pentru orice întrebare sau curiozitate despre apicultură.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium shadow transition"
          >
            Contactează-ne
          </a>
        </div>
      </div>
    </section>
  );
}
