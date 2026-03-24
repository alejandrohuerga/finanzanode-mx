"use client";
import { CalculationResult } from '@/lib/calculations';

interface ResultsTableProps {
  data: CalculationResult[];
}

export default function ResultsTable({ data }: ResultsTableProps) {
  const formatter = (value: number) => 
    new Intl.NumberFormat('es-MX', { 
      style: 'currency', 
      currency: 'MXN', 
      maximumFractionDigits: 0 
    }).format(value);

  return (
    <div className="mt-8 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-50">
        <h3 className="text-lg font-bold text-gray-800">Desglose Anual Proyectado</h3>
        <p className="text-sm text-gray-500">Evolución de tu patrimonio año tras año.</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-semibold">Año</th>
              <th className="px-6 py-4 font-semibold">Saldo Final</th>
              <th className="px-6 py-4 font-semibold">Interés Anual</th>
              <th className="px-6 py-4 font-semibold">ISR Estimado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((row) => (
              <tr key={row.year} className="hover:bg-blue-50/30 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  Año {row.year}
                </td>
                <td className="px-6 py-4 text-sm font-bold text-blue-700">
                  {formatter(row.balance)}
                </td>
                <td className="px-6 py-4 text-sm text-green-600 font-medium">
                  +{formatter(row.interests)}
                </td>
                <td className="px-6 py-4 text-sm text-red-400">
                  -{formatter(row.taxPaid)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}