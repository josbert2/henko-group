"use client";

import { Globe, Clock } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Globe,
    title: "Red Global",
    description: "Con nuestra red global, podemos alcanzar los rincones más remotos del mundo.",
  },
  {
    icon: Clock,
    title: "Soporte 24/7",
    description: "Creemos que el excepcional soporte al cliente es la piedra angular de nuestro servicio.",
  },
];

export default function WhyChooseUsAlt() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenido izquierdo */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-primary font-semibold text-sm">Why Choose Us</span>
            </div>

            {/* Título */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Potenciando tu{" "}
                <span className="text-primary">Negocio</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
                Entendemos que seleccionar el socio logístico correcto es crucial para el éxito de tu negocio.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Imágenes derecha */}
          <div className="relative h-[500px]">
            {/* Imagen de fondo - Puerto con grúas */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-blue-100">
              <div className="w-full h-full relative">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
                  alt="Puerto con grúas"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Imagen flotante - Contenedores */}
            <div className="absolute top-12 right-0 w-[60%] h-[55%] rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800 transform hover:scale-105 transition-transform duration-500">
              <div className="w-full h-full relative">
                <Image
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80"
                  alt="Contenedores apilados"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
