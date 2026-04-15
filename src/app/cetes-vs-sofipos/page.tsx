import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Cetes vs SOFIPOS 2026: ¿Cuál es mejor para invertir? | MxCalc",
  description: "Comparativa completa entre Cetesdirecto y SOFIPOS como Nu o Finsus. Seguridad, rendimientos y beneficios fiscales en México.",
};

export default function CetesVsSofipos() {
  return (
    <main className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10">
          <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block font-medium">← Volver al inicio</Link>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Cetes vs. SOFIPOS: ¿Dónde poner tu dinero en 2026?</h1>
          <p className="text-lg text-gray-600">Analizamos las dos opciones de renta fija más populares en México para que elijas la que mejor se adapte a tus metas.</p>
        </header>

        <section className="prose prose-blue max-w-none text-gray-800 space-y-6">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-bold mb-3 text-gray-900">Resumen rápido:</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Cetes:</strong> Más seguridad (Gobierno), rendimiento estable, sin monto exento extra.</li>
              <li><strong>SOFIPOS:</strong> Mayor rendimiento, seguro PROSOFIPO (hasta ~200k), <strong>exento de ISR</strong> hasta 5 UMAs.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">Seguridad: ¿Qué tan seguro es mi dinero?</h2>
          <p>
            Invertir en <strong>Cetes</strong> es técnicamente la inversión más segura en México, ya que le prestas dinero al Gobierno Federal. Por otro lado, las <strong>SOFIPOS</strong> (como Nu, Finsus, Klar) son empresas privadas reguladas por la CNBV. Cuentan con el fondo de protección <strong>PROSOFIPO</strong>, que cubre tu ahorro por hasta 25,000 UDIs (aprox. $200,000 MXN) en caso de que la institución quiebre.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">El Factor Fiscal: La ventaja de las SOFIPOS</h2>
          <p>
            Aquí es donde muchos inversionistas ganan más. Las SOFIPOS tienen un beneficio fiscal (Art. 93 LISR): si tu saldo promedio no supera las 5 UMAs anuales, <strong>no pagas ni un centavo de ISR</strong>. En Cetes, aunque la tasa sea atractiva, siempre habrá una retención sobre el capital.
          </p>
        </section>

        <div className="mt-12 p-8 bg-blue-600 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">¿Quieres ver la diferencia en pesos?</h3>
          <p className="mb-6">Usa nuestra calculadora para comparar cuánto ganarías con una tasa del 11% (Cetes) vs un 14% (SOFIPO).</p>
          <Link href="/" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all">Ir a la Calculadora</Link>
        </div>
      </div>
    </main>
  );
}