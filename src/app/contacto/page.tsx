export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Contacto</h1>
        <p className="text-gray-600 mb-8">
          ¿Tienes dudas sobre la calculadora o sugerencias para mejorar MxCalc? 
          Estamos para escucharte.
        </p>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Correo Electrónico</h2>
            <p className="text-lg font-medium text-blue-600">finanzasmxinterescompuesto@gmail.com</p>
          </div>
          
          <div className="pt-6 border-t border-gray-100">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Ubicación</h2>
            <p className="text-gray-700">Ciudad de México, México</p>
          </div>
        </div>

        <footer className="mt-12">
          <a href="/" className="text-sm text-gray-400 hover:text-blue-600 transition-colors">
            ← Volver al inicio
          </a>
        </footer>
      </div>
    </main>
  );
}