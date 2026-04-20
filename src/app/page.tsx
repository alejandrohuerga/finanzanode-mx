"use client";
import { useState, useEffect, Suspense } from 'react';
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

// --- COMPONENTE DE COMPARATIVA INTERACTIVA ---
function ComparisonCards({ 
  initialAmount, 
  monthlyContribution, 
  years,
  onSelectScenario 
}: { 
  initialAmount: number, 
  monthlyContribution: number, 
  years: number,
  onSelectScenario: (rate: number) => void 
}) {
  const scenarios = [
    { name: 'Cetes (Aprox)', rate: 11.0, color: 'bg-green-100 text-green-800 border-green-200' },
    { name: 'SOFIPOs / Nu', rate: 14.5, color: 'bg-purple-100 text-purple-800 border-purple-200' },
    { name: 'S&P 500 (Promedio)', rate: 10.0, color: 'bg-blue-100 text-blue-800 border-blue-200' },
  ];

  const calculateFinal = (rate: number) => {
    const r = rate / 100 / 12;
    const n = years * 12;
    const final = initialAmount * Math.pow(1 + r, n) + 
                  monthlyContribution * ((Math.pow(1 + r, n) - 1) / r);
    return final;
  };

  return (
    <div className="mt-10 no-print">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        📊 Comparativa de Escenarios (Clic para aplicar)
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {scenarios.map((s) => (
          <button 
            key={s.name} 
            onClick={() => onSelectScenario(s.rate)}
            className="p-5 border text-left rounded-2xl bg-white shadow-sm hover:shadow-md hover:border-blue-400 transition-all active:scale-95 group border-gray-200"
          >
            <span className={`text-xs font-bold px-2 py-1 rounded-full ${s.color}`}>
              {s.rate}% Anual
            </span>
            <h4 className="font-bold text-gray-800 mt-3 group-hover:text-blue-600 transition-colors">{s.name}</h4>
            <p className="text-2xl font-black text-gray-900 mt-1">
              ${calculateFinal(s.rate).toLocaleString('es-MX', { maximumFractionDigits: 0 })}
            </p>
            <p className="text-blue-500 text-[10px] mt-2 font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">
              ⚡ Aplicar esta tasa
            </p>
          </button>
        ))}
      </div>
      <p className="text-[10px] text-gray-400 mt-4 italic text-center">
        *Cálculos informativos basados en capitalización mensual antes de impuestos e inflación.
      </p>
    </div>
  );
}

// --- LÓGICA INTERNA DE LA CALCULADORA ---
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
    // Solo hacemos scroll si el usuario hizo click manual en calcular
    if (window.scrollY < 300) {
        window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  const handleSelectScenario = (newRate: number) => {
    const data = {
      initialAmount: Number(searchParams.get('i')) || 0,
      monthlyContribution: Number(searchParams.get('m')) || 0,
      annualRate: newRate,
      years: Number(searchParams.get('y')) || 1,
      inflationRate: Number(searchParams.get('inf')) || 4.5,
    };
    handleCalculate(data);
  };

  return (
    <>
      <CalculatorForm onCalculate={handleCalculate} />

      {results.length > 0 && (
        <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          {/* HEADER PDF */}
          <div className="hidden print:block mb-8 border-b-4 border-blue-600 pb-4 text-left">
            <h1 className="text-3xl font-bold text-blue-900">MxCalc - Reporte de Proyección</h1>
            <p className="text-gray-600 text-sm">Análisis detallado de inversión e impuestos</p>
            <p className="text-blue-600 font-medium mt-2 text-xs">https://finanzanode-mx-q5ij.vercel.app</p>
          </div>

          <InvestmentChart data={results} />
          
          {/* ACCIONES */}
          <div className="flex flex-col sm:flex-row gap-3 no-print">
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

            <button 
              onClick={() => window.print()} 
              className="flex-1 bg-gray-900 text-white px-4 py-3 rounded-xl font-bold hover:bg-black transition-all shadow-lg flex items-center justify-center gap-2"
            >
              📄 PDF
            </button>
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
          </div>

          {/* COMPONENTE INTERACTIVO */}
          <ComparisonCards 
            initialAmount={Number(searchParams.get('i')) || 0}
            monthlyContribution={Number(searchParams.get('m')) || 0}
            years={Number(searchParams.get('y')) || 1}
            onSelectScenario={handleSelectScenario}
          />

          <div className="mt-10 p-6 border-2 border-dashed border-blue-200 rounded-2xl bg-blue-50/50 no-print">
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

// --- COMPONENTE PRINCIPAL (HOME) ---
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center no-print">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Calculadora de Interés Compuesto México
          </h1>
          <p className="text-gray-600 text-lg">
            Proyecta tu ahorro e inversión considerando el ISR estimado y rendimientos reales.
          </p>
        </header>

        <Suspense fallback={<div className="text-center py-10 text-gray-500 italic">Cargando calculadora...</div>}>
          <CalculatorContent />
        </Suspense>

        <div className="mt-8 p-6 bg-amber-50 border-2 border-dashed border-amber-200 rounded-2xl text-center no-print">
          <h3 className="text-lg font-bold text-amber-900">¿Tienes alguna sugerencia? 💡</h3>
          <p className="text-amber-800 text-sm mb-4">Me encantaría saber qué otras funciones te ayudarían.</p>
          <a 
            href="mailto:finanzasmxinterescompuesto@gmail.com?subject=Feedback MxCalc" 
            className="inline-block bg-amber-500 text-white px-6 py-2 rounded-full font-bold hover:bg-amber-600 transition-all"
          >
            Enviar sugerencia
          </a>
        </div>

        <section className="mt-20 no-print">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Aprende a invertir como un experto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/cetes-vs-sofipos" className="group p-6 bg-white border border-gray-200 rounded-2xl hover:border-blue-500 hover:shadow-md transition-all">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Comparativa 2026</span>
              <h3 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition-colors">
                Cetes vs. SOFIPOS: ¿Dónde ganar más?
              </h3>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed text-pretty">
                Descubre por qué las SOFIPOS pueden darte más dinero neto gracias a sus beneficios fiscales frente a Cetes.
              </p>
              <span className="inline-block mt-4 text-blue-600 font-semibold text-sm">Leer comparativa →</span>
            </Link>

            <Link href="/guia-afore" className="group p-6 bg-white border border-gray-200 rounded-2xl hover:border-blue-500 hover:shadow-md transition-all">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Retiro Seguro</span>
              <h3 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition-colors">
                ¿Tu AFORE será suficiente?
              </h3>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed text-pretty">
                La mayoría de los mexicanos recibirá menos del 50% de su sueldo. Aprende cómo evitar este riesgo.
              </p>
              <span className="inline-block mt-4 text-blue-600 font-semibold text-sm">Ver realidad del retiro →</span>
            </Link>
          </div>
        </section>     

        <div className="no-print">
            <Testimonials />
            <SEOContent />
            <FAQSection />
            <Footer/>
        </div>
      </div>
    </main>
  );
}