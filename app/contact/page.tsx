export default function ContactPage() {
  return (
    <main className="bg-white text-[#2A2A2A]">
      <section className="max-w-5xl mx-auto px-4 pt-12 pb-10">
        <h1 className="text-3xl font-semibold mb-4">Contact</h1>
        <p className="text-gray-600 mb-4">
          Pentru întrebări sau programări, mă poți contacta folosind datele de mai jos.
        </p>
        <div className="space-y-2 text-gray-700">
          <p><span className="font-medium">Email:</span> adresa-ta@email.ro</p>
          <p><span className="font-medium">Telefon:</span> numărul tău de telefon</p>
          <p><span className="font-medium">Locație:</span> adresa cabinetului (dacă vrei să o afișezi)</p>
        </div>
      </section>
    </main>
  );
}