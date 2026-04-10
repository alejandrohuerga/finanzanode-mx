import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Cómo evaluar un PPR en México 2026 | MxCalc",
  description: "Guía para elegir el mejor Plan Personal de Retiro: comisiones, beneficios fiscales Art. 151 vs 185 y seguros vinculados.",
};

export default function GuiaPPRPage() {
  return (
    <main className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        
        <header className="mb-12 border-b pb-8">
          <Link href="/" className="text-blue-600 hover:underline font-medium mb-6 inline-block">
            ← Volver a la calculadora
          </Link>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Guía: Cómo evaluar un Plan Personal de Retiro (PPR)
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Elegir un PPR es una de las decisiones financieras más importantes para tu futuro en México. 
            No todos son iguales: un plan mal elegido puede costarte cientos de miles de pesos en comisiones.
          </p>
        </header>

        <nav className="mb-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
            Puntos clave a revisar:
          </p>
          <ul className="space-y-3 text-gray-800">
            <li>
              <a href="#beneficio-fiscal" className="text-blue-600 hover:underline font-medium">
                1. Beneficios Fiscales (Art. 151 vs 185 LISR)
              </a>
            </li>
            <li>
              <a href="#comisiones" className="text-blue-600 hover:underline font-medium">
                2. El impacto real de las comisiones en el tiempo.
              </a>
            </li>
            <li>
              <a href="#seguros" className="text-blue-600 hover:underline font-medium">
                3. PPR con seguro vs. PPR puro.
              </a>
            </li>
          </ul>
        </nav>

        <article className="max-w-none text-gray-800 space-y-10">
          
          <section id="beneficio-fiscal">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. El Beneficio Fiscal: Recupera impuestos</h2>
            <p className="mb-4">
              La mayor ventaja de un PPR es la deducibilidad. En México, puedes elegir principalmente bajo dos esquemas:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Artículo 151:</strong> Permite deducir hasta el 10% de tus ingresos anuales (topado a aprox. $198,000 MXN en 2026). Ideal para recibir devoluciones del SAT cada año.</li>
              <li><strong>Artículo 185:</strong> Permite diferir el pago de impuestos de hasta $152,000 MXN anuales. Es útil si ya topaste el artículo 151.</li>
            </ul>
          </section>

          <section id="comisiones" className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Cuidado con las Comisiones</h2>
            <p className="mb-4">
              A diferencia de invertir en Cetes o SOFIPOS, los PPR tienen costos de administración. Una comisión del <strong>2% anual</strong> parece pequeña, pero en un plazo de 30 años puede reducir tu capital final en casi un 35%.
            </p>
            <p className="text-sm italic">
              <strong>Consejo:</strong> Busca planes que tengan comisiones decrecientes o cargos fijos que no dependan totalmente del saldo acumulado.
            </p>
          </section>

          <section id="seguros">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. PPR con Seguro vs. PPR Puro</h2>
            <p className="mb-4">
              Muchos agentes de seguros te ofrecerán planes que incluyen seguro de vida o invalidez. 
            </p>
            <p className="mb-4">
              Si bien la protección es buena, <strong>el costo del seguro sale de tu inversión</strong>. Si ya tienes un seguro de vida por tu cuenta o por tu empresa, te conviene buscar un "PPR Puro" (normalmente ofrecido por casas de bolsa u operadoras de fondos) donde el 100% de tu dinero se ponga a trabajar.
            </p>
          </section>

          <section className="bg-gray-900 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">¿Quieres ver cómo crece tu ahorro?</h2>
            <p className="mb-6 text-gray-300">Regresa a nuestra calculadora y proyecta tu inversión considerando los años que te faltan para el retiro.</p>
            <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
              Volver a la Calculadora
            </Link>
          </section>

        </article>

        <footer className="mt-16 pt-8 border-t text-sm text-gray-500">
          <p>MxCalc - Guía educativa sobre retiro en México. No constituye asesoría financiera legal ni fiscal.</p>
        </footer>
      </div>
    </main>
  );
}