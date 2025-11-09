'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  href: string;
}

const services: Service[] = [
  {
    id: 'almacenaje-distribucion',
    title: 'Almacenaje y Distribución',
    description: 'Recepción, almacenaje y preparación de pedidos con gestión integral en centros propios y de clientes.',
    image: 'https://cdn.prod.website-files.com/65082b8d382b2e7786192725/650842d81a979f6b234467b8_photo-1.jpg',
    icon: 'https://cdn.prod.website-files.com/65082b8d382b2e7786192725/65084ba9a12da5ce04739350_icons8-airplane-256.png',
    href: '/services/almacenaje-distribucion',
  },
  {
    id: 'transporte-especializado',
    title: 'Transporte Especializado',
    description: 'Flota especializada: caja seca, refrigerada, plataformas y unidades expeditadas para todo tipo de carga.',
    image: 'https://cdn.prod.website-files.com/65082b8d382b2e7786192725/6508449e5bb8cefde72f2c39_photo-3.jpg',
    icon: 'https://cdn.prod.website-files.com/65082b8d382b2e7786192725/65084bbb1425443b24136c0a_icons8-truck-256.png',
    href: '/services/transporte-especializado',
  },
  {
    id: 'gestion-logistica',
    title: 'Gestión Logística Integral',
    description: 'Soluciones logísticas personalizadas que optimizan cada etapa de tu cadena de suministro.',
    image: 'https://cdn.prod.website-files.com/65082b8d382b2e7786192725/650843f71d3b51c0dc22b305_photo-2.jpg',
    icon: 'https://cdn.prod.website-files.com/65082b8d382b2e7786192725/65084bb198e2e0dd2340cb7e_icons8-ship-256.png',
    href: '/services/gestion-logistica',
  },
];

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const cardRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    // Hacer visibles todas las tarjetas inmediatamente
    const allIds = services.map(s => s.id);
    setVisibleCards(new Set(allIds));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-service-id');
            if (id) {
              setVisibleCards((prev) => new Set(prev).add(id));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative md:py-24 md:pt-10 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
   

      <div className="relative max-w-7xl mx-auto">
        {/* Header mejorado */}
        <div className="mb-20 animate-fade-in">
          {/* Texto vertical decorativo */}
          <div className="flex items-start gap-16">
            
            
            <div className="flex-1">
              <h2 className="text-4xl text-center sm:text-5xl lg:text-6xl font-bold text-primary-content dark:text-white leading-tight mb-6">
                Soluciones logísticas integrales,{' '}
                <span className="text-primary">eficientes y personalizadas.</span>
              </h2>
            </div>

          
          </div>
        </div>

        {/* Services Grid - Diseño mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={service.href}
              ref={(el) => {
                if (el) cardRefs.current.set(service.id, el);
              }}
              data-service-id={service.id}
              className={`group border border-[#e0e0e085] relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                visibleCards.has(service.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Imagen superior */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Número decorativo */}
              <div className="absolute top-52 right-6 text-6xl font-bold text-gray-100 dark:text-gray-700 z-0">
                0{index + 1}
              </div>

              {/* Contenido */}
              <div className="relative z-10 p-8">
                {/* Icon minimalista */}
                <div className="w-14 h-14 mb-6 bg-primary bg-opacity-20 rounded-2xl flex items-center justify-center">
                  <Image
                    src={service.icon}
                    alt={`${service.title} icon`}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain opacity-80"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-primary-content dark:text-white mb-4 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-base">
                  {service.description}
                </p>

                {/* Arrow indicator */}
                <div className="flex items-center gap-2 text-primary-content dark:text-white font-medium group-hover:gap-3 transition-all duration-300">
                  <span className="text-sm">Ver más</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Barra de acento inferior */}
              <div className="h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto animate-fade-in">
            Moldeamos nuestros servicios según tus{' '}
            <Link
              href="/contact"
              className="text-primary font-semibold hover:underline transition-all duration-300"
            >
              necesidades específicas.
            </Link>
            {' '}Generando valor sostenible para nuestros clientes y colaboradores.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
