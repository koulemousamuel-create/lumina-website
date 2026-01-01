export default function ServicesPage() {
  return (
    <main className="bg-white text-[#2A2A2A]">
      <section className="max-w-5xl mx-auto px-4 pt-12 pb-10">
        <h1 className="text-3xl font-semibold mb-4">Servicii</h1>
        <p className="text-gray-600 mb-6">
          Ofer o gamă largă de servicii de psihoterapie adaptate nevoilor tale.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-2">Psihoterapie individuală</h3>
            <p className="text-gray-600">
              Ședințe individuale pentru adulți și adolescenți, într-un cadru sigur și confidențial.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-2">Consiliere psihologică</h3>
            <p className="text-gray-600">
              Suport pentru gestionarea stresului, anxietății și altor dificultăți emoționale.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-2">Dezvoltare personală</h3>
            <p className="text-gray-600">
              Explorarea potențialului personal și creșterea încrederii în sine.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-2">Terapie de cuplu</h3>
            <p className="text-gray-600">
              Îmbunătățirea comunicării și rezolvarea conflictelor în relații.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
