export default function SEOContent() {
  return (
    <section className="mt-16 prose prose-blue max-w-none border-t pt-10 text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">
        ¿Cómo funciona el Interés Compuesto en México?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            El <strong>interés compuesto</strong> es la octava maravilla del mundo financiero. A diferencia del interés simple, aquí los rendimientos que generas se reinvierten para generar nuevos intereses, creando un efecto de "bola de nieve".
          </p>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">El impacto del ISR (Impuestos)</h3>
          <p>
            En México, las inversiones en renta fija (como CETES o SOFIPOS) están sujetas a una retención de <strong>ISR</strong> sobre el capital invertido. Nuestra calculadora descuenta automáticamente un estimado para que tu proyección sea lo más cercana a la realidad neta.
          </p>
        </div>
        
        <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-inner">
          <h3 className="text-lg font-bold mb-3">Tips para maximizar tu inversión</h3>
          <ul className="space-y-3 text-sm">
            <li>✅ <strong>Empieza hoy:</strong> El tiempo es más importante que el monto inicial.</li>
            <li>✅ <strong>Automatiza:</strong> Configura una transferencia mensual para no olvidar tu aportación.</li>
            <li>✅ <strong>Reinvierte:</strong> No retires tus ganancias; deja que sigan trabajando.</li>
            <li>✅ <strong>Usa Beneficios Fiscales:</strong> Considera un PPR (Plan Personal de Retiro) para deducir impuestos en el SAT.</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4">Preguntas Frecuentes (FAQ)</h3>
        <div className="space-y-4">
          <details className="bg-white p-4 rounded-lg border cursor-pointer">
            <summary className="font-semibold text-blue-800">¿Qué tasa de rendimiento es realista en México?</summary>
            <p className="mt-2 text-gray-600">
              Actualmente, instrumentos de bajo riesgo como CETES ofrecen tasas entre el 10% y 11%. Si buscas renta variable (Bolsa), el promedio histórico es del 7% al 10% anualizado.
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg border cursor-pointer">
            <summary className="font-semibold text-blue-800">¿Esta calculadora es exacta?</summary>
            <p className="mt-2 text-gray-600">
              Es una herramienta de proyección. Los rendimientos reales pueden variar según el instrumento y los cambios en la ley fiscal del SAT.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}