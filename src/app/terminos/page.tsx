import React from 'react';

export const metadata = {
  title: 'Términos y Condiciones | MxCalc',
  description: 'Reglas de uso y exención de responsabilidad de la calculadora MxCalc.',
};

export default function TerminosPage() {
  return (
    /* Añadimos bg-white y text-gray-800 para forzar el modo claro siempre */
    <main className="min-h-screen bg-white text-gray-800">
      <div className="max-w-4xl mx-auto p-6 md:p-12 leading-relaxed">
        
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Términos y Condiciones</h1>
        <p className="text-sm text-gray-500 mb-8">Última actualización: 21 de abril de 2026</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">1. Aceptación de los Términos</h2>
          <p className="text-gray-700">
            Al acceder y utilizar <strong>MxCalc.com</strong>, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, le sugerimos se abstenga de utilizar nuestras herramientas.
          </p>
        </section>

        {/* Forzamos el fondo azul claro y texto oscuro en el recuadro */}
        <section className="mb-8 bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 shadow-sm">
          <h2 className="text-xl font-semibold mb-3 text-blue-800">2. Exención de Responsabilidad Financiera</h2>
          <p className="mb-3 italic font-medium text-blue-900">
            El contenido de este sitio se proporciona únicamente con fines informativos y educativos.
          </p>
          <ul className="list-disc ml-5 space-y-2 text-blue-900">
            <li>Los resultados de las calculadoras son estimaciones y no constituyen una recomendación de inversión.</li>
            <li>MxCalc no garantiza la exactitud de proyecciones basadas en tasas de interés variables.</li>
            <li>Usted es el único responsable de las decisiones financieras que tome.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">3. Uso de las Herramientas</h2>
          <p className="text-gray-700">
            MxCalculos proporciona calculadoras y guías financieras de forma gratuita. El uso de estas herramientas es estrictamente personal. Queda prohibido el uso de sistemas automatizados (bots) para extraer datos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">4. Propiedad Intelectual</h2>
          <p className="text-gray-700">
            El diseño, los algoritmos, el código fuente y el contenido escrito de MxCalc son propiedad de sus administradores.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500">
            Si tiene dudas sobre estos términos, puede contactarnos en: <br />
            <span className="font-medium text-blue-600">finanzasmxinterescompuesto@gmail.com</span>
          </p>
        </div>
      </div>
    </main>
  );
}