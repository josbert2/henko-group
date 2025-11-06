# 🎨 Guía de Estilo - HENKO GRUP SPA

## 📋 Información Corporativa

### Empresa
**HENKO GRUP SPA**

### Misión
Brindar soluciones logísticas integrales, eficientes y personalizadas que impulsen el crecimiento de nuestros clientes, optimizando cada etapa de la cadena de suministro con compromiso, innovación y excelencia operativa.

### Visión
Ser reconocidos como el socio logístico líder en Chile, destacando por nuestra capacidad de adaptación, calidad de servicio y enfoque colaborativo, generando valor sostenible para nuestros clientes y colaboradores.

### Valores Clave
- **Compromiso**: Dedicación total con nuestros clientes
- **Innovación**: Tecnología de rastreo de última generación
- **Excelencia**: Operación continua 24/7

---

## 🎨 Paleta de Colores

### Colores Principales

#### Color Primario - Dorado HENKO
```css
--main-color: #FFBC3F
--secondary-color: #ffbc3f2b (con transparencia)
```
- **Uso**: Acentos, CTAs, elementos destacados, puntos decorativos
- **RGB**: rgb(255, 188, 63)
- **HSL**: hsl(45, 100%, 62%)

#### Colores de Fondo

**Light Mode:**
```css
--background: hsl(0, 0%, 100%)
--foreground: hsl(222.2, 84%, 4.9%)
```

**Dark Mode:**
```css
--background: hsl(222.2, 84%, 4.9%)
--foreground: hsl(210, 40%, 98%)
```

#### Colores de Texto

**Light Mode:**
- Texto principal: `text-gray-900` (#111827)
- Texto secundario: `text-gray-700` (#374151)
- Texto terciario: `text-gray-600` (#4B5563)

**Dark Mode:**
- Texto principal: `text-white` (#FFFFFF)
- Texto secundario: `text-gray-300` (#D1D5DB)
- Texto terciario: `text-gray-400` (#9CA3AF)

#### Colores de Gradiente

**Footer:**
```css
bg-gradient-to-br from-gray-50 via-[#FFF8E7] to-gray-50
```

**Overlay Carousel:**
```css
from-gray-900/40 via-transparent to-[#FFBC3F]/20
```

---

## 🔤 Tipografía

### Fuentes

#### Fuente Principal: Inter
- **Uso**: Todo el contenido general del sitio (párrafos, textos, navegación)
- **Familia de fuentes**: 
  ```css
  font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
  ```
- **Variable CSS**: `--font-sans`

#### Fuente Secundaria: Space Grotesk
- **Uso**: Títulos y elementos destacados
- **Familia de fuentes**: 
  ```css
  font-family: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
  ```
- **Variable CSS**: `--font-space-grotesk`

### Pesos de Fuentes
- Regular: `font-normal` (400)
- Medium: `font-medium` (500)
- Semibold: `font-semibold` (600)
- Bold: `font-bold` (700)
- Black: `font-black` (900)

### Jerarquía de Títulos

#### H1 - Hero Principal
```css
text-8xl font-black leading-[0.95] text-gray-900 tracking-tight
```
- **Tamaño**: 6rem (96px)
- **Uso**: Título principal del hero
- **Ejemplo**: "Tu socio logístico líder en Chile"

#### H2 - Títulos de Sección
```css
text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight
```
- **Tamaño**: 2.25rem - 3.75rem (36px - 60px)
- **Uso**: Títulos de secciones principales
- **Ejemplo**: "Soluciones logísticas integrales"

#### H3 - Títulos de Tarjetas
```css
text-2xl font-bold text-gray-900 dark:text-white leading-tight
```
- **Tamaño**: 1.5rem (24px)
- **Uso**: Títulos de servicios y tarjetas
- **Ejemplo**: "Almacenaje y Distribución"

#### H4 - Overlay Carousel
```css
text-3xl md:text-4xl font-bold text-white leading-tight
```
- **Tamaño**: 1.875rem - 2.25rem (30px - 36px)
- **Uso**: Mensajes sobre imágenes del carousel

### Texto Cuerpo

#### Párrafo Grande
```css
text-2xl text-gray-700 leading-relaxed font-medium
```
- **Tamaño**: 1.5rem (24px)
- **Uso**: Subtítulos importantes en hero

#### Párrafo Normal
```css
text-base text-gray-600 dark:text-gray-400 leading-relaxed
```
- **Tamaño**: 1rem (16px)
- **Uso**: Descripciones de servicios

#### Texto Pequeño
```css
text-sm text-gray-500 dark:text-gray-400
```
- **Tamaño**: 0.875rem (14px)
- **Uso**: Copyright, badges, metadatos

---

## 🖼️ Logo y Marca

### Logo Principal
- **Archivo**: `/logo.svg`
- **Tamaño Header**: 32x32px (`w-8 h-8`)
- **Tamaño Footer**: 48x48px (`w-12 h-12`)
- **Formato**: SVG (escalable)

### Marca Textual
```
Henko Group.
```
- **Fuente**: Bold (font-bold)
- **Tamaño**: 2xl (1.5rem / 24px)
- **Punto final**: Color #FFBC3F
- **Ejemplo HTML**:
```html
<span className="text-2xl font-bold text-gray-900 dark:text-white">
  Henko Group<span className="text-[#FFBC3F]">.</span>
</span>
```

---

## 📐 Espaciado y Layout

### Contenedores
```css
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```
- **Ancho máximo**: 1280px
- **Padding horizontal**: Responsive (16px - 32px)

### Secciones
```css
py-24 /* Padding vertical: 6rem (96px) */
py-32 /* Padding vertical: 8rem (128px) */
```

### Espaciado entre elementos
- **mb-6**: 1.5rem (24px) - Espaciado pequeño
- **mb-8**: 2rem (32px) - Espaciado medio
- **mb-12**: 3rem (48px) - Espaciado grande
- **mb-16**: 4rem (64px) - Espaciado extra grande
- **mb-20**: 5rem (80px) - Espaciado de sección

### Grid de Servicios
```css
grid grid-cols-1 md:grid-cols-3 gap-10
```
- **Columnas**: 1 (móvil) → 3 (desktop)
- **Gap**: 2.5rem (40px)

---

## 🎯 Componentes UI

### Botones

#### Botón Principal (CTA)
```css
bg-gray-900 text-white px-12 py-5 rounded-2xl font-bold text-xl 
hover:bg-gray-800 transition-all shadow-2xl 
hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] hover:scale-105
```
- **Colores**: Fondo negro, texto blanco
- **Padding**: 3rem x 1.25rem (48px x 20px)
- **Border radius**: 1rem (16px)
- **Efecto hover**: Escala + sombra

#### Botón Secundario
```css
text-gray-900 dark:text-white font-medium hover:text-[#FFBC3F]
```

### Tarjetas de Servicios
```css
bg-white dark:bg-gray-800 rounded-3xl overflow-hidden 
border border-[#e0e0e085] hover:shadow-2xl hover:-translate-y-2
```
- **Fondo**: Blanco / Gris oscuro
- **Border radius**: 1.5rem (24px)
- **Borde**: Gris claro con transparencia
- **Efecto hover**: Sombra + elevación

### Badges
```css
bg-white/10 backdrop-blur-md px-6 py-3 rounded-full 
border border-white/20
```
- **Efecto**: Glassmorphism
- **Padding**: 1.5rem x 0.75rem (24px x 12px)
- **Border radius**: Completo (rounded-full)

---

## 🎬 Animaciones

### Transiciones Estándar
```css
transition-all duration-300
```
- **Duración**: 300ms
- **Easing**: Default (ease)

### Animaciones de Entrada
```css
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
```
- **Duración**: 600ms
- **Easing**: ease-out

### Hover Effects
- **Escala**: `hover:scale-105` o `hover:scale-110`
- **Traducción**: `hover:-translate-y-2`
- **Sombra**: `hover:shadow-2xl`

---

## 📱 Responsive Design

### Breakpoints (Tailwind)
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

### Tamaños de Texto Responsive
```css
text-4xl sm:text-5xl lg:text-6xl xl:text-8xl
```

### Grid Responsive
```css
grid-cols-1 md:grid-cols-3
```

---

## 🎨 Elementos Decorativos

### Punto Decorativo Animado
```css
w-2 h-2 rounded-full bg-[#FFBC3F] animate-pulse
```

### Barra de Acento
```css
h-1 bg-[#FFBC3F] transform scale-x-0 group-hover:scale-x-100 
transition-transform duration-300 origin-left
```

### Número Decorativo (Tarjetas)
```css
text-6xl font-bold text-gray-100 dark:text-gray-700
```
- **Posición**: Absolute, top-right
- **Opacidad**: Muy baja para efecto watermark

---

## 📊 Servicios de HENKO

### Servicios Principales

1. **Almacenaje y Distribución**
   - Badge: "Almacenaje • Distribución • Preparación"
   - Descripción: "Recepción, almacenaje y preparación de pedidos con gestión integral en centros propios y de clientes."

2. **Transporte Especializado**
   - Badge: "Caja Seca • Refrigerada • Plataformas"
   - Descripción: "Flota especializada: caja seca, refrigerada, plataformas y unidades expeditadas para todo tipo de carga."

3. **Gestión Logística Integral**
   - Badge: "Compromiso • Innovación • Excelencia"
   - Descripción: "Soluciones logísticas personalizadas que optimizan cada etapa de tu cadena de suministro."

### Estadísticas Clave
- **24/7**: Operación continua
- **100%**: Rastreo en tiempo real
- **+15**: Años de experiencia

---

## 🔗 Navegación

### Enlaces Principales
1. Inicio (`/`)
2. Nosotros (`/about`)
3. Servicios (`/services`)
4. Noticias (`/news`)
5. Solicitar Cotización (`/contact`)

---

## 📝 Mensajes Clave

### Hero Principal
```
Tu socio
logístico
líder en Chile.
```

### Subtítulo Hero
```
Soluciones logísticas integrales y personalizadas 
que impulsan el crecimiento de tu negocio con excelencia operativa
```

### Sección Servicios
```
Soluciones logísticas integrales, eficientes y personalizadas.
```

### Footer Copyright
```
Copyright ©HENKO GRUP SPA — Powered by Josbert
```

---

## 🎯 Mejores Prácticas

### Uso de Colores
- ✅ Usar #FFBC3F para acentos y elementos destacados
- ✅ Mantener contraste adecuado para accesibilidad
- ✅ Usar gradientes sutiles para fondos
- ❌ No abusar del color dorado en grandes áreas

### Tipografía
- ✅ Usar font-black para títulos principales
- ✅ Mantener jerarquía clara entre títulos
- ✅ Usar leading-tight para títulos grandes
- ✅ Usar leading-relaxed para párrafos

### Espaciado
- ✅ Mantener espaciado generoso entre secciones
- ✅ Usar padding consistente en contenedores
- ✅ Respetar el max-w-7xl para contenido

### Animaciones
- ✅ Usar transiciones suaves (300ms)
- ✅ Aplicar hover effects sutiles
- ✅ Mantener consistencia en duraciones
- ❌ No usar animaciones muy largas (>1s)

---

## 🌐 Dark Mode

Todos los componentes deben soportar dark mode usando las clases de Tailwind:
```css
bg-white dark:bg-gray-800
text-gray-900 dark:text-white
border-gray-200 dark:border-gray-800
```

---

## 📦 Recursos

### Imágenes
- Logo: `/logo.svg`
- Imágenes de servicios: Unsplash (logística, transporte, almacenaje)

### Iconos
- Usar SVG inline para iconos personalizados
- Lucide React para iconos generales

### Fuentes
- System font stack (default de Tailwind)

---

**Última actualización**: Noviembre 2025  
**Versión**: 1.0  
**Creado para**: HENKO GRUP SPA
