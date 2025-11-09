"use client";

import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Planificación",
    description: "Analizamos tus necesidades y diseñamos la estrategia logística ideal.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
  },
  {
    number: "02",
    title: "Implementación",
    description: "Ponemos en marcha las soluciones acordadas con tecnología de punta.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
  },
  {
    number: "03",
    title: "Recopilación de Datos",
    description: "Monitoreamos en tiempo real cada aspecto de la operación logística.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
  },
  {
    number: "04",
    title: "Entrega del Proyecto",
    description: "Completamos exitosamente la entrega con reportes detallados.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-black dark:to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Cómo trabajamos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Paso a Paso Para Tu{" "}
            <span className="text-primary">Éxito Logístico</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Descubre la metodología donde cada adopción e innovación de vanguardia se encuentra con la tecnología de vanguardia.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
              }}
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black rounded-3xl p-8 border border-gray-700 hover:border-primary/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 h-full">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <span className="text-white font-black text-sm">{step.number}</span>
                </div>

                {/* Image Container */}
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-700 group-hover:border-primary transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-3xl"></div>
              </div>

              {/* Connector Line (except for last item on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
