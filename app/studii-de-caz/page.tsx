export default function CaseStudiesPage() {
  return (
    <main className="bg-white text-[#2A2A2A]">
      <section className="max-w-5xl mx-auto px-4 pt-12 pb-10">
        <h1 className="text-3xl font-semibold mb-4">Studii de caz</h1>
        <p className="text-gray-600 mb-6">
          Exemple anonimizate din practica mea, pentru a ilustra procesul terapeutic.
        </p>
        <div className="space-y-6">
          <article className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-medium mb-2">Studiu de caz 1: Gestionarea anxietății</h2>
            <p className="text-gray-600 mb-4">
              O adolescentă de 16 ani care se confrunta cu atacuri de panică și anxietate socială...
            </p>
            <p className="text-sm text-gray-500">
              *Detaliile au fost anonimizate pentru a proteja confidențialitatea clientului.
            </p>
          </article>
          <article className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-medium mb-2">Studiu de caz 2: Depresie postpartum</h2>
            <p className="text-gray-600 mb-4">
              O mamă recentă care se lupta cu sentimente de inadecvare și epuizare emoțională...
            </p>
            <p className="text-sm text-gray-500">
              *Detaliile au fost anonimizate pentru a proteja confidențialitatea clientului.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
