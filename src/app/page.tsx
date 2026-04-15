"use client";
import { useState, useEffect, Suspense } from 'react'; // <--- Añadimos Suspense
import { useRouter, useSearchParams } from 'next/navigation';
import { calculateCompoundInterest, type CalculationResult } from '@/lib/calculations';
import CalculatorForm from '@/components/CalculatorForm';
import InvestmentChart from '@/components/InvestmentChart';
import SEOContent from '@/components/SEOContent';
import ResultsTable from '@/components/ResultsTable';
import Testimonials from '@/components/Testimonials';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

// 1. Creamos un componente interno que maneja la lógica de la URL
function CalculatorContent() {
  const [results, setResults] = useState<CalculationResult[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const initial = searchParams.get('i');
    if (initial) {
      const data = {
        initialAmount: Number(searchParams.get('i')),
        monthlyContribution: Number(searchParams.get('m')),
        annualRate: Number(searchParams.get('r')),
        years: Number(searchParams.get('y')),
        inflationRate: Number(searchParams.get('inf')) || 4.5,
      };
      const res = calculateCompoundInterest(
        data.initialAmount,
        data.monthlyContribution,
        data.annualRate,
        data.years,
        data.inflationRate
      );
      setResults(res);
    }
  }, [searchParams]);

  const handleCalculate = (data: {
    initialAmount: number;
    monthlyContribution: number;
    annualRate: number;
    years: number;
    inflationRate: number;
  }) => {
    const params = new URLSearchParams();
    params.set('i', data.initialAmount.toString());
    params.set('m', data.monthlyContribution.toString());
    params.set('r', data.annualRate.toString());
    params.set('y', data.years.toString());
    params.set('inf', data.inflationRate.toString());
    
    router.push(`?${params.toString()}`, { scroll: false });

    const res = calculateCompoundInterest(
      data.initialAmount,
      data.monthlyContribution,
      data.annualRate,
      data.years,
      data.inflationRate
    );
    setResults(res);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <>
      <CalculatorForm onCalculate={handleCalculate} />

      {results.length > 0 && (
        <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <InvestmentChart data={results} />
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("¡Enlace de tu proyección copiado! 🚀");
              }}
              className="flex-1 bg-white border-2 border-blue-600 text-blue-600 px-4 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
            >
              🔗 Copiar Enlace
            </button>
            
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`¡Mira la proyección que hice en MxCalc! Mi patrimonio estimado es de $${results[results.length - 1].balance.toLocaleString("es-MX")} MXN. Chécalo aquí: ` + window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#25D366] text-white px-4 py-3 rounded-xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              WhatsApp
            </a>
          </div>

          <ResultsTable data={results} />
          
          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 shadow-sm">
            <h2 className="text-2xl font-bold text-blue-900">
              Resultado final: ${results[results.length - 1].balance.toLocaleString("es-MX")} MXN
            </h2>
            <p className="text-amber-700 font-bold text-lg mt-1">
              Poder adquisitivo real: ${results[results.length - 1].realBalance.toLocaleString("es-MX")} MXN
            </p>
            <p className="text-blue-700 font-medium">
              En {results.length} años habrás construido este patrimonio.
            </p>
            {/* Aquí iría el resto del desglose (ISR e intereses) que ya tenías */}
          </div>

          <div className="mt-10 p-6 border-2 border-dashed border-blue-200 rounded-2xl bg-blue-50/50">
            <h4 className="text-blue-900 font-bold mb-2">💡 ¿Buscas optimizar tu retiro?</h4>
            <p className="text-blue-800 text-sm mb-4">
              Un PPR puede ayudarte a ahorrar miles de pesos en impuestos...
            </p>
            <Link 
              href="/guia-ppr" 
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
            >
              Leer guía: Cómo evaluar un PPR →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

// 2. El componente principal envuelve todo en Suspense
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Calculadora de Interés Compuesto México
          </h1>
          <p className="text-gray-600 text-lg">
            Proyecta tu ahorro e inversión considerando el ISR estimado y
            rendimientos reales.
          </p>
        </header>

        {/* EL TRUCO: Suspense envuelve la parte que usa useSearchParams */}
        <Suspense
          fallback={
            <div className="text-center py-10 text-gray-500 text-sm italic">
              Cargando calculadora...
            </div>
          }
        >
          <CalculatorContent />
        </Suspense>
        {/* SECCIÓN DE ARTÍCULOS PARA SEO */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Aprende a invertir como un experto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Cetes vs SOFIPOS */}
            <Link href="/cetes-vs-sofipos" className="group p-6 bg-white border border-gray-200 rounded-2xl hover:border-blue-500 hover:shadow-md transition-all">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Comparativa 2026</span>
              <h3 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition-colors">
                Cetes vs. SOFIPOS: ¿Dónde ganar más?
              </h3>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                Descubre por qué las SOFIPOS pueden darte más dinero neto gracias a sus beneficios fiscales frente a Cetes.
              </p>
              <span className="inline-block mt-4 text-blue-600 font-semibold text-sm">Leer comparativa →</span>
            </Link>

            {/* Card 2: AFORE */}
            <Link href="/guia-afore" className="group p-6 bg-white border border-gray-200 rounded-2xl hover:border-blue-500 hover:shadow-md transition-all">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Retiro Seguro</span>
              <h3 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition-colors">
                ¿Tu AFORE será suficiente?
              </h3>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                La mayoría de los mexicanos recibirá menos del 50% de su sueldo. Aprende cómo evitar este riesgo.
              </p>
              <span className="inline-block mt-4 text-blue-600 font-semibold text-sm">Ver realidad del retiro →</span>
            </Link>

          </div>
        </section>    
        <Testimonials />
        <SEOContent />
        <FAQSection />
        <Footer/>
      </div>
    </main>
  );
}