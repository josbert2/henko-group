'use client';

import { useState } from 'react';
import Image from 'next/image';

interface AccordionItem {
  id: string;
  icon: string;
  title: string;
  content: string[];
}

const accordionItems: AccordionItem[] = [
  {
    id: 'history',
    icon: 'history',
    title: 'Nuestra historia',
    content: [
      'Con más de 15 años de experiencia en el mercado chileno, HENKO GROUP SPA ha evolucionado desde una pequeña operación logística hasta convertirse en un socio estratégico confiable para empresas de diversos sectores.',
      'Nuestra trayectoria está marcada por la innovación constante, la adaptación a las necesidades cambiantes del mercado y el compromiso inquebrantable con la excelencia operativa en cada servicio que brindamos.'
    ]
  },
  {
    id: 'vision',
    icon: 'target',
    title: 'Nuestra visión',
    content: [
      'Ser reconocidos como el socio logístico líder en Chile, destacando por nuestra capacidad de adaptación, calidad de servicio y enfoque colaborativo.',
      'Aspiramos a generar valor sostenible para nuestros clientes y colaboradores, siendo pioneros en soluciones logísticas innovadoras que impulsen el crecimiento de las empresas chilenas en el mercado nacional e internacional.'
    ]
  },
  {
    id: 'mission',
    icon: 'rocket',
    title: 'Nuestra misión',
    content: [
      'Brindar soluciones logísticas integrales, eficientes y personalizadas que impulsen el crecimiento de nuestros clientes, optimizando cada etapa de la cadena de suministro.',
      'Nos comprometemos a ofrecer servicios de almacenaje, distribución y transporte especializado con compromiso, innovación y excelencia operativa, garantizando la satisfacción total de nuestros clientes.'
    ]
  }
];

// Icon components
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'history':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'target':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'rocket':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function WhyChooseUs() {
  const [openItem, setOpenItem] = useState<string>('history');

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? '' : id);
  };

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Image with experience badge */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=2065"
                alt="HENKO logistics professional"
                width={600}
                height={700}
                className="w-full h-[500px] object-cover"
              />
              
              {/* Experience Badge */}
              <div className="absolute bottom-8 left-8 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-xl max-w-[280px] border border-orange-100 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-8xl font-black bg-gradient-to-br from-orange-500 to-orange-600 bg-clip-text text-transparent leading-none mb-3">
                    15
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                    Años de experiencia en servicios logísticos
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Accordion */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              ¿Por qué elegir{' '}
              <span className="text-[#FFBC3F]">HENKO</span>{' '}
              como tu socio logístico?
            </h2>

            <div className="space-y-4">
              {accordionItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between p-6 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gray-900 dark:bg-gray-700 flex items-center justify-center text-white flex-shrink-0">
                        {getIcon(item.icon)}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                    
                    <div className={`transform transition-transform duration-300 ${
                      openItem === item.id ? 'rotate-45' : ''
                    }`}>
                      <svg
                        className="w-6 h-6 text-[#FFBC3F]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      openItem === item.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-6 pt-0 bg-white dark:bg-gray-800 space-y-4">
                        {item.content.map((paragraph, index) => (
                          <p
                            key={index}
                            className="text-gray-600 dark:text-gray-400 leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
