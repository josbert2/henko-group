"use client";

import { Truck, Users, Clock, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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
  { id: "history", label: "Nuestra Historia" },
  { id: "vision", label: "Nuestra Visión" },
  { id: "mission", label: "Nuestra Misión" },
];

const highlights = [
  "Al vero eos et accusam et justo duo dolores et ea rebum.",
  "Stet clita kasd gubergren, no sea takimata sanctus.",
  "Tempor invidunt ut labore et dolore magna aliquyam erat.",
  "Risus commodo viverra maecenas accumsan lacus vel facilisis.",
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("history");

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
                <Image
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80"
                  alt="Professional team member"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Experience Badge */}
            <div className="about-img about-area absolute bottom-8 right-8 bg-white dark:bg-gray-800 rounded-[0px_55px] p-8 shadow-2xl border-4 border-primary">
              <div className="year">
                  <h2>19</h2>
                  <span>Years of experience</span>
              </div>
            </div>
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
              Henko es la empresa de transporte y logística más grande del mundo
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
            <div className="py-4">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
              </p>

              {/* Highlights */}
              <ul className="space-y-3 mb-8">
                {highlights.map((highlight, index) => (
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

              {/* CTA Button */}
              <button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Leer Más
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
