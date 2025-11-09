"use client";

import { Truck, Users, Clock, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    icon: Truck,
    title: "Equipamiento Moderno",
    description: "Contamos con la flota más moderna y tecnológica del mercado para garantizar entregas eficientes.",
  },
  {
    icon: Users,
    title: "Enfoque en el Cliente",
    description: "Nuestro equipo está dedicado a proporcionar soluciones personalizadas para cada cliente.",
  },
  {
    icon: Clock,
    title: "Entrega a Tiempo",
    description: "Garantizamos puntualidad en todas nuestras entregas con seguimiento en tiempo real.",
  },
];

const tabs = [
  { id: "mission", label: "Misión y Visión" },
  { id: "operations", label: "Operaciones" },
  { id: "services", label: "Servicios" },
  { id: "commercial", label: "Comercial" },
];

const tabImages = {
  mission: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  operations: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  services: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
  commercial: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
};

const tabContent = {
  mission: {
    title: "Dirección General",
    description: "Nuestra razón de ser y hacia dónde nos dirigimos.",
    content: [
      {
        subtitle: "Misión",
        text: "Brindar soluciones logísticas integrales, eficientes y personalizadas que impulsen el crecimiento de nuestros clientes, optimizando cada etapa de la cadena de suministro con compromiso, innovación y excelencia operativa."
      },
      {
        subtitle: "Visión",
        text: "Ser reconocidos como el socio logístico líder en Chile, destacando por nuestra capacidad de adaptación, calidad de servicio y enfoque colaborativo, generando valor sostenible para nuestros clientes y colaboradores."
      }
    ],
    highlights: []
  },
  operations: {
    title: "Departamento de Operaciones",
    description: "Gestión operativa integral para maximizar eficiencia y calidad.",
    content: [],
    highlights: [
      "Recepción, almacenaje, preparación de pedidos y distribución",
      "Gestión de operaciones en centros propios y de clientes",
      "Transporte especializado: caja seca, refrigerada, plataformas y unidades expeditadas",
      "Vehículos especializados y personal capacitado",
      "Infraestructura operativa en ubicaciones estratégicas"
    ]
  },
  services: {
    title: "Servicios y Valor Agregado",
    description: "Soluciones personalizadas que agregan valor a tu operación.",
    content: [],
    highlights: [
      "Etiquetado, armado de kits y control de calidad",
      "Operación in-house: personal, maquinaria y tecnología",
      "Soluciones logísticas confiables e innovadoras",
      "Fulfillment integral y outsourcing logístico",
      "Almacenaje especializado: seco, frío y congelado"
    ]
  },
  commercial: {
    title: "Departamento Comercial",
    description: "Atención multicanal y soluciones para cada tipo de cliente.",
    content: [
      {
        subtitle: "Segmentos de Clientes",
        text: "Empresas B2B, Clientes B2C, E-commerce, Fulfillment y Pymes"
      }
    ],
    highlights: [
      "Plataforma web y sistemas integrados",
      "Integración con marketplaces, redes sociales y couriers nacionales",
      "Atención directa 24/7 vía correo y mensajería",
      "Servicios logísticos personalizados y proyectos PRIME",
      "Transporte especializado y manejo de carga crítica"
    ]
  }
};

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-[0px_55px] overflow-hidden">
              <div className="aspect-[4/3] relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={tabImages[activeTab as keyof typeof tabImages]}
                      alt={`${activeTab} illustration`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Experience Badge */}
            <motion.div 
              className="about-img about-area absolute bottom-8 right-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="year bg-white">
                  <h2>19</h2>
                  <span>Years of experience</span>
              </div>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-primary font-semibold text-sm">Sobre la Compañía</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              HENKO GRUP SPA: Soluciones Logísticas Integrales
            </h2>

            {/* Tabs */}
            <div className="flex gap-2 border-b border-gray-200 dark:border-gray-700">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-3 px-4 font-semibold transition-all relative ${
                    activeTab === tab.id
                      ? "text-primary"
                      : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="py-4"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {tabContent[activeTab as keyof typeof tabContent].title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {tabContent[activeTab as keyof typeof tabContent].description}
                </p>

                {/* Content Sections */}
                {tabContent[activeTab as keyof typeof tabContent].content.map((item, index) => (
                  <div key={index} className="mb-6">
                    <h4 className="text-lg font-bold text-primary mb-2">{item.subtitle}</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.text}</p>
                  </div>
                ))}

                {/* Highlights */}
                {tabContent[activeTab as keyof typeof tabContent].highlights.length > 0 && (
                  <ul className="space-y-3 mb-8">
                    {tabContent[activeTab as keyof typeof tabContent].highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                        </div>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA Button */}
                <button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Contactar
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
