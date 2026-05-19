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
  inflationRate: number = 0.045,
  taxRate: number = 0.005
): CalculationResult[] => {
  let results: CalculationResult[] = [];
  let currentBalance = initialAmount;
  let totalContributions = initialAmount;
  let totalInterests = 0;
  let totalTax = 0;

  // Parámetros de topes reales para SOFIPOs (Nu)
  const SOFIPO_LIMIT = 24250; // Límite aproximado de saldo para la tasa máxima en la Cajita
  const SOFIPO_BASE_RATE = 0.09; // Tasa que paga Nu por el excedente por encima del límite (9%)

  for (let year = 1; year <= years; year++) {
    for (let month = 1; month <= 12; month++) {
      let monthlyInterest = 0;

      // Si es una tasa alta de SOFIPO (ej: Nu al 12% o 13%), aplicamos la regla del tope
      if (annualRate > 0.11) {
        if (currentBalance <= SOFIPO_LIMIT) {
          // Todo el dinero genera la tasa máxima
          monthlyInterest = currentBalance * (annualRate / 12);
        } else {
          // Los primeros $24,250 ganan la tasa máxima
          const topTierInterest = SOFIPO_LIMIT * (annualRate / 12);
          // El excedente gana la tasa base menor (9%)
          const lowerTierInterest = (currentBalance - SOFIPO_LIMIT) * (SOFIPO_BASE_RATE / 12);
          
          monthlyInterest = topTierInterest + lowerTierInterest;
        }
      } else {
        // Si es Cetes o S&P 500, aplica la tasa pareja a todo el balance
        monthlyInterest = currentBalance * (annualRate / 12);
      }

      // Cálculo del impuesto provisional (ISR sobre capital)
      const monthlyTax = currentBalance * (taxRate / 12);
      
      // Actualizamos balance del mes
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