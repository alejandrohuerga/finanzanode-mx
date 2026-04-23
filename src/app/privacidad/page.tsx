export default function PrivacyPage() {
  return (
    /* Forzamos fondo blanco y color de texto base gris oscuro */
    <main className="min-h-screen bg-white text-gray-800 py-16 px-4">
      {/* Eliminamos 'prose' si te da problemas, o forzamos los colores manualmente */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Aviso de Privacidad</h1>
        <p className="text-gray-600 mb-6">Última actualización: 24 de marzo de 2026</p>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">1. Identidad y Domicilio</h2>
          <p className="text-gray-700">
            MxCalc (en adelante "Nosotros") con domicilio en México, es responsable del tratamiento de sus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">2. Datos que NO recolectamos</h2>
          <p className="text-gray-700">
            Nuestra calculadora de interés compuesto es una herramienta de uso local. <strong>No almacenamos, guardamos ni compartimos los datos financieros</strong> que usted ingresa (monto inicial, aportaciones o tasas) en ninguna base de datos externa. Los cálculos se realizan en su propio navegador.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">3. Cookies y Publicidad</h2>
          <p className="text-gray-700">
            Utilizamos <strong>Google Analytics</strong> para analizar el tráfico y <strong>Google AdSense</strong> para mostrar anuncios. Estos servicios utilizan cookies para personalizar anuncios basados en sus visitas previas. Google utiliza la cookie de <strong>DoubleClick</strong> para permitir que tanto él como sus socios muestren anuncios basados en las visitas de los usuarios a este u otros sitios de Internet.
          </p>
          <p className="mt-4 text-sm text-gray-500 italic">
            Usted puede inhabilitar el uso de la publicidad personalizada visitando <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Configuración de anuncios de Google</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">4. Derechos ARCO</h2>
          <p className="text-gray-700">
            Usted tiene derecho al Acceso, Rectificación, Cancelación u Oposición del manejo de sus datos. Al no almacenar datos personales, estos derechos se garantizan por la naturaleza técnica de nuestra herramienta.
          </p>
        </section>

        <footer className="mt-10 pt-6 border-t border-gray-200">
          <a href="/" className="text-blue-600 font-medium hover:underline inline-flex items-center">
            <span className="mr-2">←</span> Volver a la Calculadora
          </a>
        </footer>
      </div>
    </main>
  );
}