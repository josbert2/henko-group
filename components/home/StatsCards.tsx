"use client";

import { Sparkles, Truck, Package, Award } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const stats = [
  {
    icon: Sparkles,
    number: "30",
    label: "Años de experiencia",
    suffix: "",
  },
  {
    icon: Truck,
    number: "50",
    label: "Vehículos especializados",
    suffix: "+",
  },
  {
    icon: Package,
    number: "30",
    label: "Entregas por año",
    suffix: "K",
  },
  {
    icon: Award,
    number: "10",
    label: "Clientes satisfechos",
    suffix: "K",
  },
];

export default function StatsCards() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState<Record<number, number>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    stats.forEach((stat, index) => {
      const targetNumber = parseInt(stat.number);
      const duration = 2000;
      const increment = targetNumber / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          setAnimatedNumbers((prev) => ({ ...prev, [index]: targetNumber }));
          clearInterval(timer);
        } else {
          setAnimatedNumbers((prev) => ({ ...prev, [index]: Math.floor(current) }));
        }
      }, 16);
    });
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.15}s both` : "none",
              }}
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>

              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-7 h-7 text-primary" strokeWidth={2} />
                </div>
              </div>

              {/* Number */}
              <div className="relative mb-3">
                <h3 className="text-5xl md:text-6xl font-black text-primary leading-none">
                  {animatedNumbers[index] || 0}
                  {stat.suffix && (
                    <span className="text-primary">{stat.suffix}</span>
                  )}
                </h3>
              </div>

              {/* Label */}
              <p className="text-gray-600 dark:text-gray-400 font-semibold text-base leading-tight">
                {stat.label}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-primary/50 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
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
