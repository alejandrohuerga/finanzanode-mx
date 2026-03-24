"use client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartProps {
  data: any[];
}

export default function InvestmentChart({ data }: ChartProps) {
  // Formateador para pesos mexicanos
  const formatter = (value: number) => 
    new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(value);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mt-8">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Proyección de Crecimiento</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="year" label={{ value: 'Años', position: 'insideBottom', offset: -5 }} />
            <YAxis tickFormatter={(value) => `$${value/1000}k`} />
            <Tooltip formatter={(value: number) => formatter(value)} labelFormatter={(label) => `Año ${label}`} />
            <Area 
              type="monotone" 
              dataKey="balance" 
              stroke="#2563eb" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorBalance)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-gray-400 mt-4 italic">
        * Los cálculos incluyen una retención de ISR estimada sobre el capital.
      </p>
    </div>
  );
}