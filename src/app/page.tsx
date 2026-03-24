"use client";
import { useState } from 'react';
import { calculateCompoundInterest, type CalculationResult } from '@/lib/calculations';
import CalculatorForm from '@/components/CalculatorForm';
import InvestmentChart from '@/components/InvestmentChart';
import SEOContent from '@/components/SEOContent';
import ResultsTable from '@/components/ResultsTable';

export default function Home() {
  const [results, setResults] = useState<CalculationResult[]>([]);

  const handleCalculate = (data: {
    initialAmount: number;
    monthlyContribution: number;
    annualRate: number;
    years: number;
  }) => {
    const res = calculateCompoundInterest(
      data.initialAmount,
      data.monthlyContribution,
      data.annualRate,
      data.years
    );
    setResults(res);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* ENCABEZADO: Impacto inmediato para el usuario y Google */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Calculadora de Interés Compuesto México
          </h1>
          <p className="text-gray-600 text-lg">
            Proyecta tu ahorro e inversión considerando el ISR estimado y rendimientos reales.
          </p>
        </header>

        {/* ACCIÓN: El formulario donde ocurre la magia */}
        <CalculatorForm onCalculate={handleCalculate} />
        
        {/* RESULTADOS DINÁMICOS: Solo aparecen tras el cálculo */}
        {results.length > 0 && (
          <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            
            {/* 1. Visualización Gráfica */}
            <InvestmentChart data={results} />
            <ResultsTable data={results} />
            {/* 2. Cuadro de Resumen Financiero */}
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 shadow-sm">
              <h2 className="text-2xl font-bold text-blue-900">
                Resultado final: ${results[results.length - 1].balance.toLocaleString('es-MX')} MXN
              </h2>
              <p className="text-blue-700 font-medium">
                En {results.length} años habrás construido este patrimonio.
              </p>
              
              {/* Desglose técnico para generar confianza y tiempo en página */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-white p-3 rounded-lg border border-blue-100">
                  <span className="text-gray-500 block">Intereses totales generados:</span>
                  <span className="font-bold text-green-600 text-lg">
                    ${results[results.length - 1].interests.toLocaleString('es-MX')}
                  </span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-blue-100">
                  <span className="text-gray-500 block">ISR Retenido (estimado):</span>
                  <span className="font-bold text-red-600 text-lg">
                    ${results[results.length - 1].taxPaid.toLocaleString('es-MX')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CONTENIDO SEMÁNTICO: Fundamental para que Google nos posicione (SEO) */}
        <SEOContent />

        {/* FOOTER: Credibilidad */}
        <footer className="mt-20 py-8 border-t border-gray-200 text-center text-gray-400 text-sm">
          <p>© 2026 MxCalc - Herramientas Financieras para México</p>
          <p className="mt-2 text-xs">Los resultados son proyecciones informativas basadas en los datos ingresados.</p>
        </footer>
      </div>
    </main>
  );
}