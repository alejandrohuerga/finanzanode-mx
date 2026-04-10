import Link from 'next/link';

export default function GuiaPPR() {
  return (
    // Añadimos bg-white y dark:bg-gray-900 para controlar el fondo
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link 
          href="/" 
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium mb-8 inline-block"
        >
          ← Volver a la calculadora
        </Link>

        <h1 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
          ¿Cómo evaluar un Plan Personal de Retiro (PPR)?
        </h1>

        <p className="text-xl mb-10 leading-relaxed text-gray-600 dark:text-gray-300">
          No todos los PPR son iguales. Algunos pueden hacerte ganar mucho dinero gracias a los beneficios fiscales, 
          mientras que otros pueden "comérselo" en comisiones. Aquí te decimos en qué fijarte.
        </p>

        <div className="space-y-12">
          {/* Punto 1 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">1. El Beneficio Fiscal (Art. 151 vs 185)</h2>
            <p className="text-gray-600 dark:text-gray-400">
              La razón principal para tener un PPR es deducir impuestos. El <strong>Art. 151</strong> es el más común: 
              te permite deducir hasta el 10% de tus ingresos anuales. El <strong>Art. 185</strong> es útil si ya topaste el anterior, 
              permitiéndote diferir el pago de impuestos.
            </p>
          </section>

          {/* Punto 2 - Caja con contraste especial */}
          <section className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4">2. Cuidado con las Comisiones</h2>
            <p className="text-blue-800 dark:text-blue-200">
              Este es el punto donde la mayoría falla. Un PPR con comisiones del 2% o 3% anual puede reducir tu patrimonio final 
              en más de un 40% a largo plazo. Busca planes que cobren sobre el saldo de forma competitiva o montos fijos.
            </p>
          </section>

          {/* Punto 3 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">3. Seguro de Vida: ¿Lo necesitas?</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Muchos PPR vendidos por aseguradoras incluyen un seguro de vida obligatorio. Si ya tienes uno o no tienes dependientes, 
              ese costo extra está mermando tu inversión.
            </p>
          </section>

          {/* Punto 4 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">4. Flexibilidad y Disponibilidad</h2>
            <p className="text-gray-600 dark:text-gray-400">
              ¿Qué pasa si un mes no puedes aportar? Evita planes con penalizaciones severas por suspender aportaciones.
            </p>
          </section>
        </div>

        {/* Resumen Final con colores fijos para legibilidad */}
        <div className="mt-16 p-8 bg-gray-900 dark:bg-blue-600 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4 text-white">Resumen para tu decisión:</h3>
          <ul className="list-disc list-inside space-y-3 text-gray-100">
            <li>¿Es deducible bajo el Art. 151 LISR?</li>
            <li>¿En qué activos invierte (S&P 500, Cetes, etc.)?</li>
            <li>¿Cuál es la comisión total anual?</li>
            <li>¿Es obligatorio aportar cada mes o es flexible?</li>
          </ul>
        </div>
      </div>
    </main>
  );
}