import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          Cojonel Ioana
        </Link>

        <nav className="flex gap-4 text-sm text-gray-700">
          <Link href="/">Acasă</Link>
          <Link href="/despre">Despre</Link>
          <Link href="/servicii">Servicii</Link>
          <Link href="/studii-de-caz">Studii de caz</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
