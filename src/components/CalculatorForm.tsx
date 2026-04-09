"use client";

import React, { useState } from 'react';

interface CalculatorFormProps {
  onCalculate: (data: {
    initialAmount: number;
    monthlyContribution: number;
    annualRate: number;
    years: number;
    inflationRate: number; // Nuevo campo
  }) => void;
}

export default function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  // Estados como strings para manejar mejor la limpieza de inputs y formateo
  const [initialAmount, setInitialAmount] = useState("10,000");
  const [monthlyContribution, setMonthlyContribution] = useState("1,000");
  const [annualRate, setAnnualRate] = useState("11");
  const [years, setYears] = useState("10");
  const [inflationRate, setInflationRate] = useState("4.5");

  // Función para poner comas en miles
  const formatWithCommas = (val: string) => {
    const numeric = val.replace(/\D/g, "");
    return numeric.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Manejador genérico para inputs numéricos simples (evita el "012")
  const handleSimpleNumber = (val: string, setter: (v: string) => void) => {
    let clean = val;
    if (val.length > 1 && val.startsWith("0") && val[1] !== ".") {
      clean = val.substring(1);
    }
    setter(clean);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate({
      initialAmount: Number(initialAmount.replace(/,/g, "")),
      monthlyContribution: Number(monthlyContribution.replace(/,/g, "")),
      annualRate: Number(annualRate) / 100,
      years: Number(years),
      inflationRate: Number(inflationRate) / 100
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Inversión Inicial con Comas */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Inversión Inicial (MXN)</label>
          <input 
            type="text" 
            value={initialAmount}
            onChange={(e) => setInitialAmount(formatWithCommas(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border text-gray-900"
          />
        </div>

        {/* Aportación Mensual con Comas */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Aportación Mensual</label>
          <input 
            type="text" 
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(formatWithCommas(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border text-gray-900"
          />
        </div>

        {/* Tasa Anual */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Tasa Anual (%)</label>
          <input 
            type="number" 
            step="0.1"
            value={annualRate}
            onChange={(e) => handleSimpleNumber(e.target.value, setAnnualRate)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border text-gray-900"
          />
        </div>

        {/* Inflación Estimada (Sugerencia de Reddit) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Inflación Estimada (%)</label>
          <input 
            type="number" 
            step="0.1"
            value={inflationRate}
            onChange={(e) => handleSimpleNumber(e.target.value, setInflationRate)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border text-gray-900"
          />
        </div>

        {/* Años */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Años</label>
          <input 
            type="number" 
            value={years}
            onChange={(e) => handleSimpleNumber(e.target.value, setYears)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border text-gray-900"
          />
        </div>
      </div>

      <button 
        type="submit"
        className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-all font-bold text-lg shadow-lg active:scale-95"
      >
        Calcular Rendimiento Real
      </button>
    </form>
  );
}