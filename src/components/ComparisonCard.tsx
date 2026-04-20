interface ComparisonProps {
  initialAmount: number;
  monthlyContribution: number;
  years: number;
}

export default function ComparisonCards({ initialAmount, monthlyContribution, years }: ComparisonProps) {
  // Tasas estimadas para la comparativa
  const scenarios = [
    { name: 'Cetes (Aprox)', rate: 11.0, color: 'bg-green-100 text-green-800' },
    { name: 'SOFIPOs / Nu', rate: 14.5, color: 'bg-purple-100 text-purple-800' },
    { name: 'S&P 500 (Promedio)', rate: 10.0, color: 'bg-blue-100 text-blue-800' },
  ];

  const calculateFinal = (rate: number) => {
    const r = rate / 100 / 12;
    const n = years * 12;
    const final = initialAmount * Math.pow(1 + r, n) + 
                  monthlyContribution * ((Math.pow(1 + r, n) - 1) / r);
    return final;
  };

  return (
    <div className="mt-12 no-print">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        📊 Comparativa de Escenarios (Sin impuestos)
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {scenarios.map((s) => (
          <div key={s.name} className="p-5 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
            <span className={`text-xs font-bold px-2 py-1 rounded-full ${s.color}`}>
              {s.rate}% Anual
            </span>
            <h4 className="font-bold text-gray-800 mt-3">{s.name}</h4>
            <p className="text-2xl font-black text-gray-900 mt-1">
              ${calculateFinal(s.rate).toLocaleString('es-MX', { maximumFractionDigits: 0 })}
            </p>
            <p className="text-gray-500 text-xs mt-1">Saldo final estimado</p>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-gray-400 mt-4 italic">
        *Cálculos informativos basados en interés compuesto mensual antes de impuestos.
      </p>
    </div>
  );
}