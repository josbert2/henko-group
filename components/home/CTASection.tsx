'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function CTASection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
    script.type = 'module';
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12">
          
          {/* Content Block */}
          <div className="text-center max-w-4xl mx-auto relative z-10">
            {/* Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Excelencia en el movimiento de{' '}
              <span className="text-gray-500">mercancías</span>{' '}
              de forma confiable de un destino a otro
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Experimenta soluciones logísticas rápidas, confiables y rentables, adaptadas a tu negocio.
            </p>

            {/* CTA Button */}
            <a
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/70 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              <span>Solicitar cotización</span>
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* Map Image Block */}
          <div className="relative w-full max-w-5xl mx-auto">
            <div className="relative aspect-[2/1] rounded-2xl overflow-hidden">
              <Image
                src="https://framerusercontent.com/images/QLqr9TKnTCMOy1FwVz31Aw.png"
                alt="Global logistics network"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      {/* Animated Arrow at bottom */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <div className="relative w-[140px] h-[29px]">
          <div className="absolute inset-0 rounded-[inherit]">
            <Image
              width={140}
              height={29}
              src="https://framerusercontent.com/images/FNO18dtlrdhmT5ftwXwHu9MVs94.svg"
              alt=""
              className="block w-full h-full rounded-[inherit] object-contain"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rotate-[-90deg] w-full h-full">
              <dotlottie-player
                src="https://framerusercontent.com/assets/Ox8ASNQ1btRMbSiuh4KfSho9wM.json"
                autoplay
                loop
                speed="1"
                direction="1"
                style={{ height: '100%', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-[120px]"></div>
      </div>
    </section>
  );
}
