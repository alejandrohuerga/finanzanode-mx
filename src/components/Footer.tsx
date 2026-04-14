import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Columna 1: Brand & Bio */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-gray-900 mb-4">MxCalc</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Herramientas financieras gratuitas diseñadas para el contexto fiscal y económico de México. Proyecta tu futuro con datos reales.
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Herramientas</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Calculadora de Interés</Link>
              </li>
              <li>
                <Link href="/guia-ppr" className="text-gray-600 hover:text-blue-600 transition-colors">Guía de PPR</Link>
              </li>
              <li>
                <Link href="/guia" className="text-gray-600 hover:text-blue-600 transition-colors">Guía Interés Compuesto</Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Legal/Contacto */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Soporte</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacidad" className="text-gray-600 hover:text-blue-600">Aviso de Privacidad</Link></li>
              <li><Link href="/contacto" className="text-gray-600 hover:text-blue-600">Contacto / Sugerencias</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Vital (E-A-T de Google) */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-[11px] text-gray-400 leading-normal text-justify">
            <strong>DESCARGO DE RESPONSABILIDAD:</strong> Los cálculos mostrados en MxCalc son estimaciones basadas en modelos matemáticos y proyecciones de tasas históricas. Los rendimientos pasados no garantizan resultados futuros. Esta herramienta tiene fines estrictamente educativos e informativos y no constituye asesoría financiera, legal o fiscal personalizada. Se recomienda consultar con un asesor profesional certificado antes de tomar cualquier decisión de inversión.
          </p>
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} MxCalc. Hecho con 🇲🇽 para inversionistas.
            </p>
            <div className="flex gap-4">
              {/* Aquí podrías poner iconos de redes sociales si tienes */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}