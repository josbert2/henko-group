'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  id: string;
  number: string;
  text: string;
  suffix?: string;
}

const stats: Stat[] = [
  {
    id: 'experience',
    number: '15',
    suffix: '+',
    text: 'Años de experiencia',
  },
  {
    id: 'projects',
    number: '500',
    suffix: '+',
    text: 'Proyectos completados exitosamente',
  },
  {
    id: 'team',
    number: '50',
    suffix: '+',
    text: 'Profesionales especializados',
  },
  {
    id: 'coverage',
    number: '100',
    suffix: '%',
    text: 'Cobertura logística nacional',
  },
];

export default function StatsSection() {
  const [visibleStats, setVisibleStats] = useState<Set<string>>(new Set());
  const [animatedNumbers, setAnimatedNumbers] = useState<Record<string, number>>({});
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            
            // Make all stats visible
            const allIds = stats.map(s => s.id);
            setVisibleStats(new Set(allIds));

            // Animate numbers
            stats.forEach((stat, index) => {
              const targetNumber = parseInt(stat.number);
              const duration = 2000;
              const steps = 60;
              const increment = targetNumber / steps;
              let current = 0;

              const interval = setInterval(() => {
                current += increment;
                if (current >= targetNumber) {
                  current = targetNumber;
                  clearInterval(interval);
                }
                setAnimatedNumbers(prev => ({
                  ...prev,
                  [stat.id]: Math.floor(current)
                }));
              }, duration / steps);
            });
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 dark:bg-gray-900"
      style={{ backgroundColor: '#fafbfc' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Las razones por las que <br />
            deberías{' '}
            <span className="relative inline-block">
              <span className="relative z-10">trabajar</span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-[#FFBC3F]"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 7C50 3, 100 3, 150 7C160 8, 180 10, 198 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            {' '}con nosotros
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center text-center transition-all duration-700 ${
                visibleStats.has(stat.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Number with decorative background */}
              <div className="relative mb-6 flex items-center justify-center">
                {/* Number with background image */}
                <h3 
                  className="number-with-bg text-6xl md:text-7xl lg:text-8xl font-semibold text-gray-900 dark:text-white relative z-10 inline-block px-8 py-2"
                  style={{
                    backgroundImage: 'url(https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-55.webp)',
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  {animatedNumbers[stat.id] || 0}
                  {stat.suffix && (
                    <span className="text-[#FFBC3F]">{stat.suffix}</span>
                  )}
                </h3>
              </div>

              {/* Text */}
              <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white leading-snug max-w-[200px]">
                {stat.text}
              </h4>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .transition-all.duration-2000 {
          transition-duration: 2000ms;
        }
      `}</style>
    </section>
  );
}
