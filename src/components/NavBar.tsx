import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl">📈</span>
          <span className="font-bold text-xl text-gray-900 tracking-tight">MxCalc</span>
        </Link>
        
        <div className="flex space-x-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">Calculadora</Link>
          <Link href="/guia" className="hover:text-blue-600 transition-colors">Guía</Link>
          <Link href="/contacto" className="hover:text-blue-600 transition-colors">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}