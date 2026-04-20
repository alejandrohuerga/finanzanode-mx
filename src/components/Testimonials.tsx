import { Star } from "lucide-react"; // Si no usas lucide-react, puedes usar un emoji de estrella ⭐

const testimonials = [
  {
    id: 1,
    name: "Carlos Mendoza",
    role: "Inversionista Particular",
    content: "La mejor calculadora para proyectar CETES y fondos de inversión en México. El desglose del ISR es súper útil.",
    rating: 5
  },
  {
    id: 2,
    name: "Elena Rodríguez",
    role: "Ahorradora",
    content: "Me ayudó a entender por qué es importante empezar a invertir desde ya. Muy visual y fácil de usar.",
    rating: 5
  },
  {
    id: 3,
    name: "Ricardo Silva",
    role: "Consultor Independiente",
    content: "Uso esta herramienta para mostrarle a mis clientes el poder del interés compuesto a largo plazo. Muy profesional.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white rounded-3xl my-10 border border-gray-100 shadow-sm">
      <div className="px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Lo que dicen nuestros usuarios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 italic">
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{t.content}"</p>
              <div>
                <p className="font-bold text-gray-900 not-italic">{t.name}</p>
                <p className="text-sm text-gray-500 not-italic">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}