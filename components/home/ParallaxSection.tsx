'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Declaración de tipo para dotlottie-player
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dotlottie-player': any;
    }
  }
}

// Componente Carousel para el Hero
function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070',
      alt: 'Almacenaje y distribución',
      badge: 'Almacenaje • Distribución • Preparación',
      title: 'Gestión integral en',
      highlight: 'centros propios y de clientes',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070',
      alt: 'Transporte especializado',
      badge: 'Caja Seca • Refrigerada • Plataformas',
      title: 'Flota especializada para',
      highlight: 'todo tipo de carga',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=2065',
      alt: 'Gestión logística',
      badge: 'Compromiso • Innovación • Excelencia',
      title: 'Optimizando cada etapa de tu',
      highlight: 'cadena de suministro',
    },
  ];

  const SLIDE_DURATION = 5000; // 5 segundos por slide
  const PROGRESS_INTERVAL = 50; // Actualizar progreso cada 50ms

  useEffect(() => {
    startSlideTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [currentSlide]);

  const startSlideTimer = () => {
    // Limpiar intervalos anteriores
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    // Resetear progreso
    setProgress(0);

    // Progreso suave
    let currentProgress = 0;
    progressIntervalRef.current = setInterval(() => {
      currentProgress += (PROGRESS_INTERVAL / SLIDE_DURATION) * 100;
      if (currentProgress >= 100) {
        currentProgress = 100;
      }
      setProgress(currentProgress);
    }, PROGRESS_INTERVAL);

    // Cambiar slide
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-full w-full">
      {/* Slides */}
      <div className="relative h-[120vh] w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover md:rounded-r-[30px]"
              priority={index === 0}
            />
            {/* Overlay degradado */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-transparent to-[#FFBC3F]/20 rounded-r-[30px]"></div>
          </div>
        ))}
      </div>

      {/* Overlay con mensaje dinámico centrado */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <div 
            key={`badge-${currentSlide}`}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-6 animate-fade-in-up"
          >
            <div className="w-2 h-2 rounded-full bg-[#FFBC3F] animate-pulse"></div>
            <span className="text-white text-sm font-semibold tracking-wide">
              {slides[currentSlide].badge}
            </span>
          </div>
          <h3 
            key={`title-${currentSlide}`}
            className="text-white text-3xl md:text-4xl font-bold leading-tight drop-shadow-2xl animate-fade-in-up"
            style={{ animationDelay: '100ms' }}
          >
            {slides[currentSlide].title}{' '}
            <span className="text-[#FFBC3F]">{slides[currentSlide].highlight}</span>
          </h3>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>

      {/* Progress Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative"
            aria-label={`Ir a slide ${index + 1}`}
          >
            {/* Background del dot */}
            <div className="w-12 h-1.5 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm">
              {/* Barra de progreso */}
              {index === currentSlide && (
                <div
                  className="h-full bg-[#FFBC3F] transition-all duration-100 ease-linear rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              )}
              {/* Estado completado */}
              {index < currentSlide && (
                <div className="h-full bg-[#FFBC3F] w-full rounded-full"></div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ParallaxSection() {
  const parallaxRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

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

  // Detectar scroll para hacer sticky el header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHeaderSticky(true);
      } else {
        setIsHeaderSticky(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      currentScrollY = lerp(currentScrollY, targetScrollY, 0.09);
      
      // Aplicar el scroll
      window.scrollTo(0, currentScrollY);
      
      // Decay de velocidad (efecto de deslizamiento)
      if (Math.abs(velocity) > 0.05) {
        velocity *= 0.35; // Mayor valor = deslizamiento más largo y suave
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
    <>
      <div ref={containerRef} className="w-full h-screen p-3 rounded-[30px] relative">
          <div className={`${isHeaderSticky ? 'absolute top-0' : 'absolute top-0'} left-0 w-full px-5 py-5 z-50 transition-all duration-500 ease-in-out`}>
              <nav className={`bg-white/95 backdrop-blur-md rounded-[30px] px-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-all duration-300 ${isHeaderSticky ? 'py-2 shadow-2xl' : 'py-3'}`}>
              <div className="flex items-center justify-between w-full">
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
                  <span className="text-gray-800 text-base md:text-2xl font-bold ml-2">Henko Group <span className="text-[#FFBC3F]">.</span></span>
                  </div>
                  
                  {/* Menu Links */}
                  <div className="hidden md:flex items-center gap-8">
                  <a href="#inicio" className="text-gray-800 hover:text-[#FFBC3F] transition-colors font-medium">
                      Inicio
                  </a>
                  <a href="#nosotros" className="text-gray-800 hover:text-[#FFBC3F] transition-colors font-medium">
                      Nosotros
                  </a>
                  <a href="#servicios" className="text-gray-800 hover:text-[#FFBC3F] transition-colors font-medium">
                      Servicios
                  </a>
                  <a href="#portafolio" className="text-gray-800 hover:text-[#FFBC3F] transition-colors font-medium">
                      Portafolio
                  </a>
                  <a href="#contacto" className="text-gray-800 hover:text-[#FFBC3F] transition-colors font-medium">
                      Contacto
                  </a>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="flex items-center gap-4">
                  <button className="hidden md:block font-bold px-6 py-2.5 bg-[#FFBC3F] text-gray-900 rounded-full hover:bg-[#ffb020] transition-all font-semibold shadow-md hover:shadow-xl hover:scale-105">
                      Comenzar
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
          <div className="grid md:grid-cols-2 h-full">
              <div className="absolute -left-24 top-1/2 -translate-y-1/2 -rotate-90 origin-center z-10 md:block hidden">
                  <p className="text-sm font-semibold tracking-[0.3em] text-gray-800 whitespace-nowrap">
                  SOLUCIONES LOGÍSTICAS GLOBALES
                  </p>
              </div>
              <div className="relative md:py-20 py-16 md:px-16 px-6">
          
              <div className="bg absolute h-full w-full top-0 left-0">
                  <img className="md:rounded-l-[30px] rounded-t-[30px] h-full w-full object-cover" src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-52.webp" alt="image" />
              </div>
              
              {/* Texto vertical en el lado izquierdo */}
              
              
              {/* Contenido principal del hero */}
              <div className='flex flex-col justify-center h-full z-10 relative max-w-3xl md:pl-20 md:mt-0 mt-10'>
                  {/* Título principal con badge */}
                  <div className="mb-8">
                    <div className="flex items-start gap-5 mb-2">
                        <h1 className="md:text-8xl text-5xl mb-0 font-black leading-[0.95] text-gray-900 tracking-tight">
                          Tu socio
                        </h1>
                    </div>
                    <h1 className="md:text-8xl text-5xl mb-3 font-black leading-[0.95] text-gray-900 tracking-tight">
                        logístico
                    </h1>
                    <h1 className="md:text-8xl text-5xl mb-2 font-black leading-[0.95] text-gray-900 tracking-tight relative">
                        líder en Chile
                        <span className="absolute -right-1 -bottom-2 text-[#FFBC3F] text-9xl">.</span>
                    </h1>
                  </div>
                  
                  {/* Subtítulo con más énfasis */}
                  <p className="text-2xl text-gray-700 mb-10 max-w-xl leading-relaxed font-medium md:block hidden">
                  Soluciones logísticas <span className="text-gray-900 font-bold">integrales</span> y <span className="text-gray-900 font-bold">personalizadas</span> que impulsan el crecimiento de tu negocio con excelencia operativa
                  </p>
                  
                  {/* Botón CTA con más impacto */}
                  <div className="mb-14">
                  <button className="group bg-gray-900 text-white px-12 py-5 rounded-2xl font-bold md:text-xl w-full md:w-auto text-lg hover:bg-gray-800 transition-all shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] hover:scale-105 flex items-center gap-4">
                      Solicitar Cotización
                      <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                  </button>
                  </div>
                  
                  {/* Valores clave de HENKO */}
                  <div className="grid grid-cols-3 gap-8 max-w-2xl">
                    <div className="border-l-4 border-[#FFBC3F] pl-4">
                        <div className="md:text-4xl text-2xl font-black text-gray-900 leading-none mb-2">24/7</div>
                        <div className="text-sm text-gray-600 font-medium">Operación continua</div>
                    </div>
                    <div className="border-l-4 border-[#FFBC3F] pl-4">
                        <div className="md:text-4xl text-2xl font-black text-gray-900 leading-none mb-2">100%</div>
                        <div className="text-sm text-gray-600 font-medium">Rastreo en tiempo real</div>
                    </div>
                    <div className="border-l-4 border-[#FFBC3F] pl-4">
                        <div className="md:text-4xl text-2xl font-black text-gray-900 leading-none mb-2">+15</div>
                        <div className="text-sm text-gray-600 font-medium">Años de experiencia</div>
                    </div>
                  </div>
              </div>
              
              
              </div>
              <div className="overflow-hidden md:rounded-r-[30px] rounded-b-[30px] relative">
              <HeroCarousel />
              </div>
          </div>
          {/* Lottie Animation en el bottom center */}
          <div className="absolute bottom-[12px] left-1/2 -translate-x-1/2 z-20">
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
      <section>
          <div className='flex flex-col items-center py-7 md:pt-36 pt-16 px-5'>
              <div className='flex items-center gap-2 flex-tag '>
                <div className='bullet-tag'></div>
                <div className="title-tag">Nuestros servicios</div>
              </div>
          </div>
      </section>
    </>
  );
}
