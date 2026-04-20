import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Afore en México: Por qué no es suficiente para tu retiro | MxCalc",
  description: "Descubre por qué depender solo de la AFORE es riesgoso y cómo el interés compuesto en un PPR puede salvar tu jubilación.",
};

export default function GuiaAfore() {
  return (
    <main className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10">
          <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block font-medium">← Volver al inicio</Link>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">La cruda realidad: ¿Por qué tu AFORE no será suficiente?</h1>
          <p className="text-lg text-gray-600">Si eres Ley 97, tu pensión dependerá exclusivamente de lo que ahorres. Te explicamos por qué necesitas un plan B.</p>
        </header>

        <article className="text-gray-800 space-y-6 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900">1. La Tasa de Reemplazo</h2>
          <p>
            Se estima que un trabajador promedio recibirá entre el 30% y el 50% de su último sueldo como pensión a través de la AFORE. ¿Podrías mantener tu estilo de vida actual con menos de la mitad de tus ingresos? La mayoría de los mexicanos no.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">2. El poder de las aportaciones voluntarias</h2>
          <p>
            La AFORE invierte a través de las SIEFORES, que usan interés compuesto. Sin embargo, las comisiones y los límites de inversión a veces limitan el crecimiento. Hacer aportaciones voluntarias es deducible de impuestos, lo cual es un "rendimiento inmediato" que te regala el SAT.
          </p>

          <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500">
            <h3 className="font-bold text-amber-900 mb-2">💡 Dato importante:</h3>
            <p className="text-amber-800">
              Gracias al interés compuesto, empezar a ahorrar para tu retiro a los 25 años es <strong>significativamente más barato</strong> que empezar a los 40. El tiempo es más importante que la cantidad.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">3. La alternativa: PPR (Plan Personal de Retiro)</h2>
          <p>
            Complementar tu AFORE con un PPR te da control total sobre dónde se invierte tu dinero y te permite recuperar hasta el 35% de tus aportaciones mediante la declaración anual.
          </p>
        </article>
      </div>
    </main>
  );
}