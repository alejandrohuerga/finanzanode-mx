"use client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface ChartProps {
  data: any[];
}

export default function InvestmentChart({ data }: ChartProps) {
  // Formateador para pesos mexicanos
  const currencyFormatter = (value: number) => 
    new Intl.NumberFormat('es-MX', { 
      style: 'currency', 
      currency: 'MXN', 
      maximumFractionDigits: 0 
    }).format(value);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mt-8">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Proyección: Saldo Nominal vs. Poder Adquisitivo</h3>
      
      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              {/* Degradado Azul (Saldo Nominal) */}
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
              </linearGradient>
              {/* Degradado Ámbar (Poder Adquisitivo Real) */}
              <linearGradient id="colorReal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
              </linearGradient>
            </defs>
            
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="year" />
            <YAxis tickFormatter={(value) => `$${Number(value)/1000}k`} />
            
            <Tooltip 
              formatter={(value: any, name: string) => [
                currencyFormatter(Number(value)), 
                name === "balance" ? "Saldo Nominal" : "Poder Adquisitivo (Real)"
              ]} 
              labelFormatter={(label) => `Año ${label}`} 
            />
            
            {/* La leyenda ayuda al usuario a entender el gráfico de inmediato */}
            <Legend verticalAlign="top" height={36}/>
            
            {/* ÁREA 1: Saldo Nominal (El dinero "en papel") */}
            <Area 
              name="Saldo Nominal"
              type="monotone" 
              dataKey="balance" 
              stroke="#2563eb" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorBalance)" 
            />

            {/* ÁREA 2: Saldo Real (Ajustado por Inflación) */}
            <Area 
              name="Poder Adquisitivo"
              type="monotone" 
              dataKey="realBalance" 
              stroke="#f59e0b" 
              strokeWidth={3}
              strokeDasharray="5 5" // Línea punteada para mayor claridad visual
              fillOpacity={1} 
              fill="url(#colorReal)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 space-y-1">
        <p className="text-xs text-gray-500 italic">
          * La <strong>línea azul</strong> muestra el saldo total en tu cuenta año con año.
        </p>
        <p className="text-xs text-amber-600 italic font-medium">
          * La <strong>línea naranja punteada</strong> muestra lo que ese dinero valdría hoy (ajustado por la inflación seleccionada).
        </p>
        <p className="text-xs text-gray-400 italic">
          * Los cálculos incluyen una retención de ISR estimada sobre el capital.
        </p>
      </div>
    </div>
  );
}