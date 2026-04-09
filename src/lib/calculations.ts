export interface CalculationResult {
  year: number;
  balance: number;
  contributions: number;
  interests: number;
  taxPaid: number;
  realBalance: number; // <--- Añadido para el poder adquisitivo real
}

export const calculateCompoundInterest = (
  initialAmount: number,
  monthlyContribution: number,
  annualRate: number, // Ejemplo: 0.11 para 11%
  years: number,
  inflationRate: number = 0.045, // Nueva: Tasa de inflación anual
  taxRate: number = 0.005 // ISR estimado sobre capital
): CalculationResult[] => {
  let results: CalculationResult[] = [];
  let currentBalance = initialAmount;
  let totalContributions = initialAmount;
  let totalInterests = 0;
  let totalTax = 0;

  for (let year = 1; year <= years; year++) {
    for (let month = 1; month <= 12; month++) {
      // Cálculo de interés mensual
      const monthlyInterest = currentBalance * (annualRate / 12);
      
      // Simulación de retención de ISR mensual
      const monthlyTax = currentBalance * (taxRate / 12);
      
      currentBalance += monthlyInterest + monthlyContribution - monthlyTax;
      totalInterests += monthlyInterest;
      totalContributions += monthlyContribution;
      totalTax += monthlyTax;
    }

    // --- CÁLCULO DEL PODER ADQUISITIVO REAL ---
    // Dividimos el saldo actual entre (1 + inflación) elevado al año correspondiente
    const realBalance = currentBalance / Math.pow(1 + inflationRate, year);

    results.push({
      year,
      balance: Math.round(currentBalance),
      contributions: Math.round(totalContributions),
      interests: Math.round(totalInterests),
      taxPaid: Math.round(totalTax),
      realBalance: Math.round(realBalance), // <--- Lo que verá la línea naranja
    });
  }

  return results;
};