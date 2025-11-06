'use client';

import { useEffect, useRef } from 'react';

// Declaración de tipo para dotlottie-player
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dotlottie-player': any;
    }
  }
}

export default function ParallaxSection() {
  const parallaxRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Cargar el script de dotlottie-player
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
    script.type = 'module';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    let currentScrollY = 0;
    let targetScrollY = window.pageYOffset;
    let velocity = 0;
    let animationFrameId: number;
    let lastWheelTime = 0;
    let isUserScrolling = false;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      // Actualizar velocidad basada en la rueda del mouse
      const now = Date.now();
      const timeDelta = now - lastWheelTime;
      
      if (timeDelta > 0 && timeDelta < 100) {
        velocity += e.deltaY * 0.5; // Reducido para más suavidad
      } else {
        velocity = e.deltaY * 0.5;
      }
      
      lastWheelTime = now;
      isUserScrolling = true;
      
      // Limitar velocidad máxima
      velocity = Math.max(-50, Math.min(50, velocity));
      
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(smoothScroll);
      }
    };

    const smoothScroll = () => {
      // Aplicar velocidad al target
      targetScrollY += velocity;
      
      // Limitar el scroll a los bounds de la página
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScrollY = Math.max(0, Math.min(maxScroll, targetScrollY));
      
      // Interpolar hacia el target (factor más bajo = más suave)
      currentScrollY = lerp(currentScrollY, targetScrollY, 0.06);
      
      // Aplicar el scroll
      window.scrollTo(0, currentScrollY);
      
      // Decay de velocidad (efecto de deslizamiento)
      if (Math.abs(velocity) > 0.05) {
        velocity *= 0.95; // Mayor valor = deslizamiento más largo y suave
      } else {
        velocity = 0;
        isUserScrolling = false;
      }
      
      // Actualizar parallax
      if (parallaxRef.current && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top / (rect.height + window.innerHeight);
        
        const parallaxSpeed = 0.4; // Reducido para más suavidad
        const yPos = scrollProgress * window.innerHeight * parallaxSpeed;
        
        parallaxRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
      
      // Continuar la animación si hay movimiento
      if (Math.abs(velocity) > 0.05 || Math.abs(currentScrollY - targetScrollY) > 0.5) {
        animationFrameId = requestAnimationFrame(smoothScroll);
      } else {
        animationFrameId = 0;
      }
    };

    // Inicializar scroll actual
    currentScrollY = window.pageYOffset;
    
    // Agregar listener para la rueda del mouse
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-screen p-3 rounded-[30px] relative">
      <div className="absolute top-0 left-0 w-full px-5 py-5 z-20">
        <nav className='bg-white/95 backdrop-blur-md rounded-[30px] px-4 py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-3 rounded-2xl">
                <img 
                  src="https://framerusercontent.com/images/jnuD1MI94Vu45n44bbJ8JUBqts.png" 
                  alt="logo" 
                  className="h-8 w-auto"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <span className="text-gray-800 text-2xl font-bold ml-2">Henko Group <span className="text-[#FFBC3F]">.</span></span>
            </div>
            
            {/* Menu Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-800 hover:text-[#FFBC3F] transition-colors font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-800 hover:text-[#FFBC3F] transition-colors font-medium">
                About
              </a>
              <a href="#services" className="text-gray-800 hover:text-[#FFBC3F] transition-colors font-medium">
                Services
              </a>
              <a href="#portfolio" className="text-gray-800 hover:text-[#FFBC3F] transition-colors font-medium">
                Portfolio
              </a>
              <a href="#contact" className="text-gray-800 hover:text-[#FFBC3F] transition-colors font-medium">
                Contact
              </a>
            </div>
            
            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <button className="hidden md:block font-bold px-6 py-2.5 bg-[#FFBC3F] text-gray-900 rounded-full hover:bg-[#ffb020] transition-all font-semibold shadow-md hover:shadow-xl hover:scale-105">
                Get Started
              </button>
              
              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div className="grid grid-cols-2 h-full">
        <div className="relative py-20 px-16">
          <div className="bg absolute h-full w-full top-0 left-0">
            <img className="rounded-l-[30px] h-full w-full object-cover" src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-52.webp" alt="image" />
          </div>
          
          {/* Texto vertical en el lado izquierdo */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
            <p className="text-sm font-semibold tracking-[0.3em] text-gray-800 whitespace-nowrap">
              GLOBAL LOGISTICS SOLUTIONS
            </p>
          </div>
          
          {/* Contenido principal del hero */}
          <div className='flex flex-col justify-center h-full z-10 relative max-w-3xl'>
            {/* Título principal con badge */}
            <div className="mb-8">
              <div className="flex items-start gap-5 mb-3">
                <h1 className="text-8xl font-black leading-[0.95] text-gray-900 tracking-tight">
                  Smart
                </h1>
                {/* Badge con ícono de camión */}
                <div className="bg-white rounded-[28px] px-7 py-4 shadow-xl mt-3 border-2 border-gray-100">
                  <svg className="w-12 h-12 stroke-gray-900" viewBox="0 0 24 24" fill="none" strokeWidth="2.5">
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                </div>
              </div>
              <h1 className="text-8xl font-black leading-[0.95] text-gray-900 tracking-tight">
                logistics
              </h1>
              <h1 className="text-8xl font-black leading-[0.95] text-gray-900 tracking-tight relative">
                company
                <span className="absolute -right-2 -bottom-2 text-[#FFBC3F] text-9xl">.</span>
              </h1>
            </div>
            
            {/* Subtítulo con más énfasis */}
            <p className="text-2xl text-gray-700 mb-10 max-w-xl leading-relaxed font-medium">
              We deliver your cargo <span className="text-gray-900 font-bold">safely</span> and <span className="text-gray-900 font-bold">on time</span> with cutting-edge tracking technology
            </p>
            
            {/* Botón CTA con más impacto */}
            <div className="mb-14">
              <button className="group bg-gray-900 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-gray-800 transition-all shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] hover:scale-105 flex items-center gap-4">
                Get Started
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Rating section con más destaque */}
            <div className="flex items-end gap-8">
              <div className="border-t-[3px] border-gray-900 pt-5">
                <div className="text-7xl font-black text-gray-900 leading-none mb-2">4.9</div>
                <div className="text-base text-gray-600 font-medium">(32 reviews)</div>
              </div>
              <div className="pb-3">
                <div className="text-base font-bold text-gray-900 mb-3">Average Rating</div>
                <div className="flex gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-7 h-7 fill-[#FFBC3F] drop-shadow-sm" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Lottie Animation en el bottom center */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
            <div className="relative w-[140px] h-[29px]">
              <div className="absolute inset-0 rounded-[inherit]">
                <img
                  decoding="auto"
                  width="140"
                  height="29"
                  src="https://framerusercontent.com/images/FNO18dtlrdhmT5ftwXwHu9MVs94.svg?width=140&height=29"
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
        </div>
        <div className="overflow-hidden rounded-r-[30px]">
          <div className="thumb relative h-full">
            <img 
              ref={parallaxRef}
              className="rounded-r-[30px] h-[120vh] w-full object-cover"
              style={{
                willChange: 'transform',
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
              }}
              src="https://framerusercontent.com/images/QBxuhADJzunB3F72kt5qm9wXcec.jpg?scale-down-to=1024&width=3161&height=2048" 
              alt="image" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
