export default function BlogPage() {
  return (
    <main className="bg-white text-[#2A2A2A]">
      <section className="max-w-5xl mx-auto px-4 pt-12 pb-10">
        <h1 className="text-3xl font-semibold mb-4">Blog</h1>
        <p className="text-gray-600 mb-6">
          Articole și resurse despre psihoterapie, sănătate mentală și dezvoltare personală.
        </p>
        <div className="space-y-6">
          <article className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-medium mb-2">Articol de blog 1</h2>
            <p className="text-gray-600 mb-2">
              Descriere scurtă a articolului...
            </p>
            <a href="#" className="text-[#4A6F6A] hover:underline">Citește mai mult</a>
          </article>
          <article className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-medium mb-2">Articol de blog 2</h2>
            <p className="text-gray-600 mb-2">
              Descriere scurtă a articolului...
            </p>
            <a href="#" className="text-[#4A6F6A] hover:underline">Citește mai mult</a>
          </article>
        </div>
      </section>
    </main>
  );
}
