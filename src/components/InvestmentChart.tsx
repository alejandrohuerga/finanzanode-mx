"use client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function InvestmentChart({ data }: { data: any[] }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mt-8">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Proyección de Crecimiento</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="year" />
            <YAxis tickFormatter={(value) => `$${Number(value)/1000}k`} />
            <Tooltip />
            <Legend verticalAlign="top" height={36}/>
            
            {/* Línea Azul: Saldo en el banco */}
            <Area 
              name="Saldo Nominal"
              type="monotone" 
              dataKey="balance" 
              stroke="#2563eb" 
              fill="#2563eb" 
              fillOpacity={0.1}
            />

            {/* Línea Naranja: Valor Real (Inflación) */}
            <Area 
              name="Poder Adquisitivo"
              type="monotone" 
              dataKey="realBalance" 
              stroke="#f59e0b" 
              fill="#f59e0b" 
              fillOpacity={0.1}
              strokeDasharray="5 5"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}