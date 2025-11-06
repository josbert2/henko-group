import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guía de Estilo - HENKO GRUP SPA',
  description: 'Guía de estilo visual y de marca para HENKO GRUP SPA',
};

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-[#FFF8E7] to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-4">
            Guía de Estilo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            HENKO GRUP SPA - Identidad Visual y de Marca
          </p>
        </div>

        {/* Información Corporativa */}
        <section className="mb-16 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-[#FFBC3F]">📋</span> Información Corporativa
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Misión</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Brindar soluciones logísticas integrales, eficientes y personalizadas que impulsen el crecimiento de nuestros clientes, 
                optimizando cada etapa de la cadena de suministro con compromiso, innovación y excelencia operativa.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Visión</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Ser reconocidos como el socio logístico líder en Chile, destacando por nuestra capacidad de adaptación, 
                calidad de servicio y enfoque colaborativo, generando valor sostenible para nuestros clientes y colaboradores.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Valores Clave</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#FFBC3F]/10 text-gray-900 dark:text-white rounded-full font-medium">
                  Compromiso
                </span>
                <span className="px-4 py-2 bg-[#FFBC3F]/10 text-gray-900 dark:text-white rounded-full font-medium">
                  Innovación
                </span>
                <span className="px-4 py-2 bg-[#FFBC3F]/10 text-gray-900 dark:text-white rounded-full font-medium">
                  Excelencia
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Paleta de Colores */}
        <section className="mb-16 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-[#FFBC3F]">🎨</span> Paleta de Colores
          </h2>
          
          <div className="space-y-8">
            {/* Color Principal */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Color Principal - Dorado HENKO</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#FFBC3F] rounded-2xl p-8 text-center">
                  <div className="text-white font-bold text-2xl mb-2">#FFBC3F</div>
                  <div className="text-white/90 text-sm">RGB: 255, 188, 63</div>
                  <div className="text-white/90 text-sm">HSL: 45, 100%, 62%</div>
                </div>
                <div className="bg-[#ffbc3f2b] rounded-2xl p-8 text-center border-2 border-[#FFBC3F]">
                  <div className="text-gray-900 dark:text-white font-bold text-2xl mb-2">#ffbc3f2b</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Con transparencia</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Para fondos sutiles</div>
                </div>
              </div>
            </div>

            {/* Colores de Texto */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Colores de Texto</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-900 rounded-2xl p-6 text-center">
                  <div className="text-white font-bold mb-2">Texto Principal</div>
                  <div className="text-white/70 text-sm">#111827</div>
                  <div className="text-white/70 text-sm">text-gray-900</div>
                </div>
                <div className="bg-gray-700 rounded-2xl p-6 text-center">
                  <div className="text-white font-bold mb-2">Texto Secundario</div>
                  <div className="text-white/70 text-sm">#374151</div>
                  <div className="text-white/70 text-sm">text-gray-700</div>
                </div>
                <div className="bg-gray-600 rounded-2xl p-6 text-center">
                  <div className="text-white font-bold mb-2">Texto Terciario</div>
                  <div className="text-white/70 text-sm">#4B5563</div>
                  <div className="text-white/70 text-sm">text-gray-600</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tipografía */}
        <section className="mb-16 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-[#FFBC3F]">🔤</span> Tipografía
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-[#FFBC3F] pl-6">
              <h1 className="text-6xl font-black text-gray-900 dark:text-white mb-2">H1 - Hero Principal</h1>
              <p className="text-gray-600 dark:text-gray-400">text-8xl font-black (96px)</p>
            </div>
            
            <div className="border-l-4 border-[#FFBC3F] pl-6">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">H2 - Títulos de Sección</h2>
              <p className="text-gray-600 dark:text-gray-400">text-4xl to text-6xl font-bold (36-60px)</p>
            </div>
            
            <div className="border-l-4 border-[#FFBC3F] pl-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">H3 - Títulos de Tarjetas</h3>
              <p className="text-gray-600 dark:text-gray-400">text-2xl font-bold (24px)</p>
            </div>
            
            <div className="border-l-4 border-[#FFBC3F] pl-6">
              <p className="text-base text-gray-600 dark:text-gray-400 mb-2">Párrafo Normal - Texto cuerpo estándar</p>
              <p className="text-gray-500 dark:text-gray-500 text-sm">text-base (16px)</p>
            </div>
          </div>
        </section>

        {/* Logo y Marca */}
        <section className="mb-16 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-[#FFBC3F]">🖼️</span> Logo y Marca
          </h2>
          
          <div className="flex flex-col items-center gap-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gray-900 dark:bg-white rounded-xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#FFBC3F]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                  </svg>
                </div>
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  Henko Group<span className="text-[#FFBC3F]">.</span>
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">Logo con icono y marca textual</p>
            </div>
          </div>
        </section>

        {/* Componentes UI */}
        <section className="mb-16 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-[#FFBC3F]">🎯</span> Componentes UI
          </h2>
          
          <div className="space-y-8">
            {/* Botones */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Botones</h3>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-2xl hover:scale-105">
                  Botón Principal
                </button>
                <button className="text-gray-900 dark:text-white font-medium hover:text-[#FFBC3F] transition-colors px-6 py-3">
                  Botón Secundario
                </button>
              </div>
            </div>

            {/* Badges */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Badges</h3>
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-gray-300 dark:border-white/20">
                  <div className="w-2 h-2 rounded-full bg-[#FFBC3F] animate-pulse"></div>
                  <span className="text-gray-900 dark:text-white text-sm font-semibold">
                    Compromiso • Innovación • Excelencia
                  </span>
                </div>
              </div>
            </div>

            {/* Tarjeta de Ejemplo */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Tarjeta de Servicio</h3>
              <div className="bg-white dark:bg-gray-700 rounded-3xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-2xl hover:-translate-y-2 transition-all max-w-md">
                <div className="w-14 h-14 mb-4 bg-[#FFBC3F] bg-opacity-20 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#FFBC3F]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Transporte Especializado</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Flota especializada para todo tipo de carga con tecnología de rastreo en tiempo real.
                </p>
                <div className="flex items-center gap-2 text-gray-900 dark:text-white font-medium">
                  <span className="text-sm">Ver más</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="mb-16 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-[#FFBC3F]">📊</span> Servicios de HENKO
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-4 border-[#FFBC3F] pl-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Almacenaje y Distribución</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Recepción, almacenaje y preparación de pedidos con gestión integral.
              </p>
            </div>
            <div className="border-l-4 border-[#FFBC3F] pl-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Transporte Especializado</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Flota especializada: caja seca, refrigerada, plataformas.
              </p>
            </div>
            <div className="border-l-4 border-[#FFBC3F] pl-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Gestión Logística Integral</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Soluciones personalizadas para optimizar tu cadena de suministro.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Operación continua</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Rastreo en tiempo real</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">+15</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Años de experiencia</div>
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p className="mb-2">Guía de Estilo - HENKO GRUP SPA</p>
          <p className="text-sm">Versión 1.0 • Noviembre 2025</p>
        </div>
      </div>
    </div>
  );
}
