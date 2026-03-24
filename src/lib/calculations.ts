export interface CalculationResult {
  year: number;
  balance: number;
  contributions: number;
  interests: number;
  taxPaid: number;
}

export const calculateCompoundInterest = (
  initialAmount: number,
  monthlyContribution: number,
  annualRate: number, // Ejemplo: 0.11 para 11%
  years: number,
  taxRate: number = 0.005 // ISR estimado sobre capital (ajustable)
): CalculationResult[] => {
  let results: CalculationResult[] = [];
  let currentBalance = initialAmount;
  let totalContributions = initialAmount;
  let totalInterests = 0;
  let totalTax = 0;

  // El React Compiler optimizará este bucle automáticamente
  for (let year = 1; year <= years; year++) {
    for (let month = 1; month <= 12; month++) {
      // Cálculo de interés mensual (tasa nominal)
      const monthlyInterest = currentBalance * (annualRate / 12);
      
      // Simulación de retención de ISR mensual (sobre el capital)
      const monthlyTax = currentBalance * (taxRate / 12);
      
      currentBalance += monthlyInterest + monthlyContribution - monthlyTax;
      totalInterests += monthlyInterest;
      totalContributions += monthlyContribution;
      totalTax += monthlyTax;
    }

    results.push({
      year,
      balance: Math.round(currentBalance),
      contributions: Math.round(totalContributions),
      interests: Math.round(totalInterests),
      taxPaid: Math.round(totalTax),
    });
  }

  return results;
};