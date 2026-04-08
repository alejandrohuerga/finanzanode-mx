import React from 'react';

export const metadata = {
  title: "Guía de Interés Compuesto en México 2026 | MxCalc",
  description: "Aprende cómo funciona el interés compuesto, el impacto del ISR en tus inversiones y cómo maximizar tus rendimientos en Cetes, SOFIPOS y más.",
};

export default function GuiaPage() {
  return (
    <main className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12 border-b pb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Guía Definitiva: Interés Compuesto en México
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Entender cómo crece tu dinero es el primer paso para la libertad financiera. 
            En esta guía te explicamos cómo usar nuestra calculadora para proyectar 
            tus inversiones de forma real, considerando impuestos y plazos.
          </p>
        </header>

        <nav className="mb-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
            En esta guía aprenderás:
          </p>
          <ul className="space-y-3">
            <li>
              <a href="#que-es" className="text-blue-600 hover:underline font-medium">
                1. ¿Qué es el Interés Compuesto? y su fórmula mágica.
              </a>
            </li>
            <li>
              <a href="#factor-isr" className="text-blue-600 hover:underline font-medium">
                2. El impacto del ISR en tus rendimientos reales.
              </a>
            </li>
            <li>
              <a href="#donde-invertir" className="text-blue-600 hover:underline font-medium">
                3. Opciones de inversión en México para 2026.
              </a>
            </li>
          </ul>
        </nav>

        <article className="prose prose-blue max-w-none text-gray-800 space-y-8">
          
          <section id="que-es">
            <h2 className="text-2xl font-bold text-gray-900">1. ¿Qué es el Interés Compuesto?</h2>
            <p>
              Albert Einstein lo llamó la "octava maravilla del mundo". El interés compuesto es el proceso donde los intereses que generas se suman al capital original, y en el siguiente periodo, esos nuevos intereses generan más intereses por sí mismos.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-4">
              <p className="text-sm italic">
                <strong>Ejemplo:</strong> Si inviertes $1,000 al 10% anual, el primer año ganas $100. El segundo año, no ganas el 10% sobre $1,000, sino sobre $1,100, dándote $110. A largo plazo, esto crea una curva de crecimiento exponencial.
              </p>
            </div>
          </section>

          <section id='factor-isr'>
            <h2 className="text-2xl font-bold text-gray-900">2. El factor ISR en México</h2>
            <p>
              A diferencia de otras calculadoras internacionales, en <strong>MxCalc</strong> consideramos la retención del Impuesto Sobre la Renta (ISR). En México, las instituciones financieras están obligadas a retener un porcentaje sobre el capital invertido (tasa que varía anualmente según la Ley de Ingresos de la Federación).
            </p>
            <p>
              Es vital proyectar tus ganancias <strong>netas</strong>. Invertir en SOFIPOS (como Nu o Finsus) tiene beneficios fiscales hasta cierto monto (aprox. 5 UMAS anuales), mientras que Cetes tributa de forma distinta. Nuestra herramienta te ayuda a visualizar ese impacto negativo del impuesto en el crecimiento a largo plazo.
            </p>
          </section>

          <section id='donde-invertir'>
            <h2 className="text-2xl font-bold text-gray-900">3. ¿Dónde aplicar el Interés Compuesto en 2026?</h2>
            <p>Actualmente, el mercado mexicano ofrece opciones sólidas para poner a prueba nuestra calculadora:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cetesdirecto:</strong> La opción más segura, respaldada por el Gobierno de México.</li>
              <li><strong>SOFIPOS:</strong> Sociedades Financieras Populares que ofrecen tasas competitivas (10% - 15%) con seguro PROSOFIPO.</li>
              <li><strong>ETFs y Bolsa:</strong> Para estrategias de más de 10 años buscando replicar el S&P 500.</li>
            </ul>
          </section>

          <section className="bg-gray-900 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">¿Listo para ver tu futuro financiero?</h2>
            <p className="mb-6 text-gray-300">Usa nuestra herramienta gratuita y ajusta los valores según tus posibilidades actuales.</p>
            <a href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
              Ir a la Calculadora Gratis
            </a>
          </section>

        </article>

        <footer className="mt-16 pt-8 border-t text-sm text-gray-500">
          <p>MxCalc - Información educativa para inversionistas mexicanos. No representa asesoría financiera personalizada.</p>
        </footer>
      </div>
    </main>
  );
}