"use client";
import { useState, useEffect } from 'react'; // <--- useEffect añadido
import { useRouter, useSearchParams } from 'next/navigation'; // <--- Hooks de navegación
import { calculateCompoundInterest, type CalculationResult } from '@/lib/calculations';
import CalculatorForm from '@/components/CalculatorForm';
import InvestmentChart from '@/components/InvestmentChart';
import SEOContent from '@/components/SEOContent';
import ResultsTable from '@/components/ResultsTable';
import Testimonials from '@/components/Testimonials';
import Link from 'next/link';

export default function Home() {
  const [results, setResults] = useState<CalculationResult[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  // 1. Lógica para detectar parámetros en la URL al cargar la página
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
      // Ejecutamos el cálculo automáticamente con los datos de la URL
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
    // 2. Actualizamos la URL con los parámetros para que sea compartible
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

        <CalculatorForm onCalculate={handleCalculate} />

        {results.length > 0 && (
          <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <InvestmentChart data={results} />
            
            {/* BOTONES DE COMPARTIR (NUEVO) */}
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
                Resultado final: $
                {results[results.length - 1].balance.toLocaleString("es-MX")}{" "}
                MXN
              </h2>
              
              <p className="text-amber-700 font-bold text-lg mt-1">
                Poder adquisitivo real: $
                {results[results.length - 1].realBalance.toLocaleString("es-MX")}{" "}
                MXN
              </p>

              <p className="text-blue-700 font-medium">
                En {results.length} años habrás construido este patrimonio.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-white p-3 rounded-lg border border-blue-100">
                  <span className="text-gray-500 block">
                    Intereses totales generados:
                  </span>
                  <span className="font-bold text-green-600 text-lg">
                    $
                    {results[results.length - 1].interests.toLocaleString("es-MX")}
                  </span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-blue-100">
                  <span className="text-gray-500 block">
                    ISR Retenido (estimado):
                  </span>
                  <span className="font-bold text-red-600 text-lg">
                    $
                    {results[results.length - 1].taxPaid.toLocaleString("es-MX")}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 border-2 border-dashed border-blue-200 rounded-2xl bg-blue-50/50">
              <h4 className="text-blue-900 font-bold mb-2">💡 ¿Buscas optimizar tu retiro?</h4>
              <p className="text-blue-800 text-sm mb-4">
                Un PPR puede ayudarte a ahorrar miles de pesos en impuestos, pero elegir el incorrecto sale caro.
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
        
        <Testimonials/>
        <SEOContent />

        <footer className="mt-20 py-10 border-t border-gray-200 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-gray-600 font-bold">MxCalc - Herramientas Financieras México</p>
            <p className="text-gray-400 text-sm mt-2">
              Ayudamos a los inversionistas mexicanos a proyectar su futuro financiero con datos reales.
            </p>
            <div className="mt-6 flex justify-center space-x-6 text-sm">
              <a href="/privacidad" className="text-blue-600 hover:underline">Privacidad</a>
              <Link href="/guia-ppr" className="text-blue-600 hover:underline">Guía PPR</Link>
              <a href="/contacto" className="text-blue-600 hover:underline">Contacto</a>
            </div>
            <p className="mt-8 text-xs text-gray-300">
              © 2026 MxCalc. Los cálculos son estimaciones y no constituyen asesoría financiera legal.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}