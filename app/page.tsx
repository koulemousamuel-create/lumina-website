export default function HomePage() {
  return (
    <main className="bg-white text-[#2A2A2A]">
      <section className="max-w-5xl mx-auto px-4 pt-12 pb-10">
        <p className="text-sm uppercase tracking-[0.2em] text-[#C8A27E] mb-3">
          Psihoterapie experiențialistă
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Cojonel Ioana – Psihoterapeut pentru adulți și adolescenți
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-6">
          Psihoterapeut avizat din 2021, cu peste 600 de ședințe desfășurate cu adulți și adolescenți. 
          Ofer un cadru sigur, empatic și confidențial în care poți explora emoțiile, dificultățile și 
          nevoile tale, în ritmul tău.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#4A6F6A] px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-[#3b5a56] transition-colors"
          >
            Programează o ședință
          </a>
          <a
            href="/despre"
            className="inline-flex items-center justify-center rounded-full border border-[#4A6F6A] px-5 py-2.5 text-sm font-medium text-[#4A6F6A] hover:bg-[#F2EDE7] transition-colors"
          >
            Află mai multe
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-semibold mb-3">Despre Ioana</h2>
        <p className="text-gray-600">
          Cojonel Ioana este psihoterapeut avizat din 2021 și, de atunci, a desfășurat peste 600 de 
          ședințe de psihoterapie, lucrând atât cu adulți, cât și cu adolescenți peste 12 ani, în sesiuni 
          individuale și de grup. Abordarea ei integrativă este adaptată nevoilor fiecărei persoane, 
          oferind un cadru sigur și confidențial pentru explorarea și vindecarea emoțională.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-semibold mb-4">Servicii principale</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-100 rounded-xl p-4 shadow-sm">
            <h3 className="font-medium mb-2">Terapie pentru anxietate</h3>
            <p className="text-gray-600 text-sm">
              Sprijin pentru îngrijorare constantă, neliniște, atacuri de panică și tensiune interioară.
            </p>
          </div>
          <div className="border border-gray-100 rounded-xl p-4 shadow-sm">
            <h3 className="font-medium mb-2">Tulburări de dispoziție</h3>
            <p className="text-gray-600 text-sm">
              Spațiu de explorare pentru tristețe profundă, lipsă de energie, pierderea interesului și blocaje emoționale.
            </p>
          </div>
          <div className="border border-gray-100 rounded-xl p-4 shadow-sm">
            <h3 className="font-medium mb-2">Tulburări alimentare</h3>
            <p className="text-gray-600 text-sm">
              Înțelegerea relației cu mâncarea, cu corpul și cu emoțiile din spatele comportamentelor alimentare.
            </p>
          </div>
          <div className="border border-gray-100 rounded-xl p-4 shadow-sm">
            <h3 className="font-medium mb-2">Terapie pentru adolescenți</h3>
            <p className="text-gray-600 text-sm">
              Sprijin pentru adolescenți peste 12 ani în fața schimbărilor, presiunilor și întrebărilor legate de identitate.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}