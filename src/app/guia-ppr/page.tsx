import Link from 'next/link';

export default function GuiaPPR() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
        ← Volver a la calculadora
      </Link>

      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
        ¿Cómo evaluar un Plan Personal de Retiro (PPR)?
      </h1>

      <p className="text-xl text-gray-600 mb-10 leading-relaxed">
        No todos los PPR son iguales. Algunos pueden hacerte ganar mucho dinero gracias a los beneficios fiscales, 
        mientras que otros pueden "comérselo" en comisiones. Aquí te decimos en qué fijarte.
      </p>

      <div className="space-y-12">
        {/* Punto 1 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">1. El Beneficio Fiscal (Art. 151 vs 185)</h2>
          <p className="text-gray-600">
            La razón principal para tener un PPR es deducir impuestos. El <strong>Art. 151</strong> es el más común: 
            te permite deducir hasta el 10% de tus ingresos anuales. El <strong>Art. 185</strong> es útil si ya topaste el anterior, 
            permitiéndote diferir el pago de impuestos.
          </p>
        </section>

        {/* Punto 2 */}
        <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">2. Cuidado con las Comisiones</h2>
          <p className="text-blue-800">
            Este es el punto donde la mayoría falla. Un PPR con comisiones del 2% o 3% anual puede reducir tu patrimonio final 
            en más de un 40% a largo plazo. Busca planes que cobren sobre el saldo de forma competitiva o montos fijos.
          </p>
        </section>

        {/* Punto 3 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Seguro de Vida: ¿Lo necesitas?</h2>
          <p className="text-gray-600">
            Muchos PPR vendidos por aseguradoras incluyen un seguro de vida obligatorio. Si ya tienes uno o no tienes dependientes, 
            ese costo extra está mermando tu inversión. Existen PPR "puros" (no vinculados a seguros) que son más eficientes 
            para el crecimiento del capital.
          </p>
        </section>

        {/* Punto 4 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Flexibilidad y Disponibilidad</h2>
          <p className="text-gray-600">
            ¿Qué pasa si un mes no puedes aportar? Evita planes con penalizaciones severas por suspender aportaciones. 
            Recuerda que legalmente el dinero está "bloqueado" hasta los 65 años si quieres mantener los beneficios fiscales.
          </p>
        </section>
      </div>

      <div className="mt-16 p-8 bg-gray-900 rounded-2xl text-white">
        <h3 className="text-2xl font-bold mb-4">Resumen para tu decisión:</h3>
        <ul className="list-disc list-inside space-y-3 text-gray-300">
          <li>¿Es deducible bajo el Art. 151 LISR?</li>
          <li>¿En qué activos invierte (S&P 500, Cetes, etc.)?</li>
          <li>¿Cuál es la comisión total anual (comisión de gestión + custodia)?</li>
          <li>¿Es obligatorio aportar cada mes o es flexible?</li>
        </ul>
      </div>
    </main>
  );
}