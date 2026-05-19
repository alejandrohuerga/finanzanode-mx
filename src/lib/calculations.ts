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
  taxRate: number = 0.005 // Espera decimal (ej: 0.005 para 0.5%)
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

  // Aseguramos que si las tasas llegaron como enteros (ej: 4.5 en lugar de 0.045), las convertimos a decimales
  const cleanRate = annualRate > 1 ? annualRate / 100 : annualRate;
  const cleanInflation = inflationRate > 1 ? inflationRate / 100 : inflationRate;
  const cleanTax = taxRate > 1 ? taxRate / 100 : taxRate;

  for (let year = 1; year <= years; year++) {
    // Para el desglose anual, queremos saber cuánto se generó ESPECÍFICAMENTE en este año
    let interestThisYear = 0;
    let taxThisYear = 0;

    for (let month = 1; month <= 12; month++) {
      let monthlyInterest = 0;

      // Aplicar regla marginal si es tasa alta de SOFIPO
      if (cleanRate > 0.11) {
        if (currentBalance <= SOFIPO_LIMIT) {
          monthlyInterest = currentBalance * (cleanRate / 12);
        } else {
          const topTierInterest = SOFIPO_LIMIT * (cleanRate / 12);
          const lowerTierInterest = (currentBalance - SOFIPO_LIMIT) * (SOFIPO_BASE_RATE / 12);
          monthlyInterest = topTierInterest + lowerTierInterest;
        }
      } else {
        monthlyInterest = currentBalance * (cleanRate / 12);
      }

      // El ISR en México se cobra sobre el Capital Total (tasa provisional)
      const monthlyTax = currentBalance * (cleanTax / 12);
      
      // Ajustamos el balance del mes
      currentBalance += monthlyInterest + monthlyContribution - monthlyTax;
      
      // Acumuladores del año actual
      interestThisYear += monthlyInterest;
      taxThisYear += monthlyTax;

      // Acumuladores históricos de toda la vida de la inversión
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
      // Mostramos el interés generado ESPECÍFICAMENTE en este año para la tabla
      interests: Math.round(interestThisYear), 
      taxPaid: Math.round(taxThisYear),
      realBalance: Math.round(realBalance),
    });
  }
  return results;
};