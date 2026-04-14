export default function FAQSection() {
  const faqs = [
    {
      q: "¿Es mejor invertir en Cetes o en una SOFIPO?",
      a: "Depende de tu perfil. Cetes es la inversión más segura en México. Las SOFIPOS (como Nu, Finsus o Klar) suelen ofrecer tasas más altas pero con un nivel de riesgo ligeramente mayor, aunque cuentan con el seguro PROSOFIPO por hasta ~200,000 MXN."
    },
    {
      q: "¿Cuánto se paga de impuestos por inversiones en México?",
      a: "Las instituciones financieras retienen automáticamente el ISR sobre el capital. La tasa varía cada año (en 2024 fue de 0.50%). Sin embargo, inversiones como las SOFIPOS están exentas de impuestos si el saldo promedio no supera las 5 UMAs anuales."
    },
    {
      q: "¿Cómo funciona el interés compuesto en inversiones mensuales?",
      a: "Al sumar una cantidad fija cada mes, tu capital crece no solo por los intereses generados, sino por la nueva base que depositas. Esto acelera la curva de crecimiento de forma exponencial a largo plazo."
    }
  ];

  return (
    <section className="mt-16 border-t border-gray-200 pt-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Preguntas Frecuentes sobre Inversiones</h2>
      <div className="grid gap-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-blue-900 mb-2">{faq.q}</h3>
            <p className="text-gray-600 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}