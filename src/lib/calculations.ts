export interface CalculationResult {
  year: number;
  balance: number;
  contributions: number;
  interests: number;
  taxPaid: number;
  realBalance: number; // El valor real ajustado a inflación
}

export const calculateCompoundInterest = (
  initialAmount: number,
  monthlyContribution: number,
  annualRate: number,
  years: number,
  inflationRate: number = 0.045, // Nuevo parámetro
  taxRate: number = 0.005
): CalculationResult[] => {
  let results: CalculationResult[] = [];
  let currentBalance = initialAmount;
  let totalContributions = initialAmount;
  let totalInterests = 0;
  let totalTax = 0;

  for (let year = 1; year <= years; year++) {
    for (let month = 1; month <= 12; month++) {
      const monthlyInterest = currentBalance * (annualRate / 12);
      const monthlyTax = currentBalance * (taxRate / 12);
      
      currentBalance += monthlyInterest + monthlyContribution - monthlyTax;
      totalInterests += monthlyInterest;
      totalContributions += monthlyContribution;
      totalTax += monthlyTax;
    }

    // Calculamos cuánto valdría ese dinero hoy (Poder adquisitivo)
    const realBalance = currentBalance / Math.pow(1 + inflationRate, year);

    results.push({
      year,
      balance: Math.round(currentBalance),
      contributions: Math.round(totalContributions),
      interests: Math.round(totalInterests),
      taxPaid: Math.round(totalTax),
      realBalance: Math.round(realBalance),
    });
  }
  return results;
};