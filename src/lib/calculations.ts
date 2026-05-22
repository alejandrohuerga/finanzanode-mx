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
  annualRate: number, // Espera decimal (ej: 0.0717 para 7.17%)
  years: number,
  inflationRate: number = 0.045, // Espera decimal (ej: 0.045 para 4.5%)
  taxRate: number = 0.005, // Espera decimal (ej: 0.005 para 0.5%)
): CalculationResult[] => {
  let results: CalculationResult[] = [];
  let currentBalance = initialAmount;

  // Llevamos el conteo histórico real del dinero que HA SALIDO de la bolsa del usuario
  let cumulativeContributions = initialAmount;
  let cumulativeInterests = 0;
  let cumulativeTax = 0;

  // Parámetros de topes reales para SOFIPOs (Nu)
  const SOFIPO_LIMIT = 24250;
  const SOFIPO_BASE_RATE = 0.09;

  // Aseguramos que si las tasas llegaron como enteros, las convertimos a decimales
  const cleanRate = annualRate > 1 ? annualRate / 100 : annualRate;
  const cleanInflation =
    inflationRate > 1 ? inflationRate / 100 : inflationRate;
  const cleanTax = taxRate > 1 ? taxRate / 100 : taxRate;

  // CÁLCULO DE LA TASA MENSUAL EQUIVALENTE FUERA DEL BUCLE PARA OPTIMIZAR
  // Fórmula: (1 + r)^(1/12) - 1
  const monthlyRateClean = Math.pow(1 + cleanRate, 1 / 12) - 1;
  const monthlyRateSOFIPO = Math.pow(1 + SOFIPO_BASE_RATE, 1 / 12) - 1;

  for (let year = 1; year <= years; year++) {
    // Para el desglose anual, queremos saber cuánto se generó ESPECÍFICAMENTE en este año
    let interestThisYear = 0;
    let taxThisYear = 0;

    for (let month = 1; month <= 12; month++) {
      let monthlyInterest = 0;

      // Aplicar regla marginal si es tasa alta de SOFIPO (ej: Nu)
      if (cleanRate > 0.11) {
        if (currentBalance <= SOFIPO_LIMIT) {
          monthlyInterest = currentBalance * monthlyRateClean;
        } else {
          const topTierInterest = SOFIPO_LIMIT * monthlyRateClean;
          const lowerTierInterest =
            (currentBalance - SOFIPO_LIMIT) * monthlyRateSOFIPO;
          monthlyInterest = topTierInterest + lowerTierInterest;
        }
      } else {
        // Para Cetes o S&P 500, usamos la tasa equivalente mensual exacta
        monthlyInterest = currentBalance * monthlyRateClean;
      }

      // El ISR en México se cobra sobre el Capital Total (tasa provisional anualizada)
      const monthlyTax = currentBalance * (cleanTax / 12);

      // Ajustamos el balance del mes
      currentBalance += monthlyInterest + monthlyContribution - monthlyTax;

      // Acumuladores del año actual
      interestThisYear += monthlyInterest;
      taxThisYear += monthlyTax;

      // Acumuladores históricos
      cumulativeInterests += monthlyInterest;
      cumulativeContributions += monthlyContribution;
      cumulativeTax += monthlyTax;
    }

    // Calculamos el poder adquisitivo real acumulado correctamente
    const realBalance = currentBalance / Math.pow(1 + cleanInflation, year);

    results.push({
      year,
      balance: Math.round(currentBalance),
      contributions: Math.round(cumulativeContributions),
      interests: Math.round(interestThisYear),
      taxPaid: Math.round(taxThisYear),
      realBalance: Math.round(realBalance),
    });
  }

  return results;
};
