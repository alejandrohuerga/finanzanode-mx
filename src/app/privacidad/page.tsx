export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto prose prose-blue">
        <h1 className="text-3xl font-bold mb-6">Aviso de Privacidad</h1>
        <p className="text-gray-600 mb-4">Última actualización: 24 de marzo de 2026</p>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">1. Identidad y Domicilio</h2>
          <p>MxCalc (en adelante "Nosotros") con domicilio en México, es responsable del tratamiento de sus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">2. Datos que NO recolectamos</h2>
          <p>Nuestra calculadora de interés compuesto es una herramienta de uso local. <strong>No almacenamos, guardamos ni compartimos los datos financieros</strong> que usted ingresa (monto inicial, aportaciones o tasas) en ninguna base de datos externa. Los cálculos se realizan en su propio navegador.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">3. Cookies y Publicidad</h2>
          <p>Utilizamos servicios de terceros como Google Analytics y Google AdSense que pueden utilizar cookies para mejorar la experiencia del usuario y mostrar publicidad relevante basada en sus visitas anteriores.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">4. Derechos ARCO</h2>
          <p>Usted tiene derecho al Acceso, Rectificación, Cancelación u Oposición del manejo de sus datos. Al no almacenar datos personales, estos derechos se garantizan por la naturaleza técnica de nuestra herramienta.</p>
        </section>

        <footer className="mt-10 pt-6 border-t">
          <a href="/" className="text-blue-600 hover:underline">← Volver a la Calculadora</a>
        </footer>
      </div>
    </main>
  );
}