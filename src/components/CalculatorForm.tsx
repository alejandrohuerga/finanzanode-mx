"use client"; // Crítico: Este componente tiene interacción

import React, { useState } from 'react';

interface CalculatorFormProps {
  onCalculate: (data: {
    initialAmount: number;
    monthlyContribution: number;
    annualRate: number;
    years: number;
  }) => void;
}

export default function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const [formData, setFormData] = useState({
    initialAmount: 10000,
    monthlyContribution: 1000,
    annualRate: 11,
    years: 10
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate({
      ...formData,
      annualRate: formData.annualRate / 100 // Convertimos porcentaje a decimal
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Inversión Inicial (MXN)</label>
          <input 
            type="number" 
            value={formData.initialAmount}
            onChange={(e) => setFormData({...formData, initialAmount: Number(e.target.value)})}
            className="mt-1 block w-full rounded-md border-black-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Aportación Mensual</label>
          <input 
            type="number" 
            value={formData.monthlyContribution}
            onChange={(e) => setFormData({...formData, monthlyContribution: Number(e.target.value)})}
            className="mt-1 block w-full rounded-md border-black-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Tasa Anual (%)</label>
          <input 
            type="number" 
            step="0.1"
            value={formData.annualRate}
            onChange={(e) => setFormData({...formData, annualRate: Number(e.target.value)})}
            className="mt-1 block w-full rounded-md border-black-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Años</label>
          <input 
            type="number" 
            value={formData.years}
            onChange={(e) => setFormData({...formData, years: Number(e.target.value)})}
            className="mt-1 block w-full rounded-md border-black-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
        </div>
      </div>
      <button 
        type="submit"
        className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-semibold"
      >
        Calcular Rendimiento
      </button>
    </form>
  );
}