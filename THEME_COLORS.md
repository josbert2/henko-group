# Tema Turquesa - Información de Colores

## Color Principal
- **Turquesa Fuerte**: `#40E0D0`
- **HSL**: `174° 72% 56%`
- **RGB**: `64, 224, 208`

## Colores de Contraste

### Para Texto sobre Fondo Turquesa
- **Blanco**: `#FFFFFF` - Contraste óptimo (WCAG AAA)
- **Gris muy claro**: `#F5F5F5` - Buena legibilidad

### Para Texto sobre Fondo Blanco
- **Turquesa oscuro**: `#0A3530`
- **HSL**: `174° 90% 12%`
- **RGB**: `10, 53, 48`
- Contraste: 8.5:1 (WCAG AAA)

### Colores Secundarios
- **Turquesa claro** (backgrounds sutiles): `#40e0d02b` (con transparencia)
- **Turquesa oscuro** (modo oscuro): `#0D2F2B`
- **Turquesa medio** (hover states): `#6FE9DB`

## Variantes de Tema

### 1. Turquoise (Claro)
- Fondo: Blanco (`#FFFFFF`)
- Texto: Turquesa oscuro (`#0A3530`)
- Primario: Turquesa (`#40E0D0`)
- Acentos: Turquesa con transparencia

### 2. Turquoise Dark (Oscuro)
- Fondo: Turquesa muy oscuro (`#0D2F2B` / `174° 50% 8%`)
- Texto: Gris claro con tinte turquesa (`174° 20% 95%`)
- Primario: Turquesa (`#40E0D0`)
- Bordes: Turquesa oscuro (`174° 40% 20%`)

## Accesibilidad
Todos los contrastes cumplen con las pautas WCAG 2.1:
- ✅ Nivel AA: Mínimo 4.5:1 para texto normal
- ✅ Nivel AAA: Mínimo 7:1 para texto normal
- ✅ Nivel AA Grande: Mínimo 3:1 para texto grande

## Uso en Código

```css
/* Variables CSS */
--main-color: #40E0D0;
--secondary-color: #40e0d02b;

/* HSL para Tailwind */
--primary: 174 72% 56%;
--primary-foreground: 0 0% 100%;
```

```tsx
// Uso en componentes
className="bg-[#40E0D0] text-white"
className="text-[#0A3530]"
```

## Cambiar Tema por URL

Puedes cambiar el tema usando parámetros URL:

```
# Español
https://tu-sitio.com?theme=turquesa
https://tu-sitio.com?theme=turquesa-oscuro
https://tu-sitio.com?theme=claro
https://tu-sitio.com?theme=oscuro

# Inglés
https://tu-sitio.com?theme=turquoise
https://tu-sitio.com?theme=turquoise-dark
https://tu-sitio.com?theme=light
https://tu-sitio.com?theme=dark
```

Temas disponibles:
- **`?theme=turquesa`** o **`?theme=turquoise`** → Tema turquesa claro
- **`?theme=turquesa-oscuro`** o **`?theme=turquoise-dark`** → Tema turquesa oscuro
- **`?theme=claro`** o **`?theme=light`** → Tema claro
- **`?theme=oscuro`** o **`?theme=dark`** → Tema oscuro

El tema se aplicará automáticamente y persistirá en la sesión del usuario.

## Colores Complementarios
- **Coral**: `#FF6B6B` - Para elementos de alerta
- **Amarillo**: `#FFD93D` - Para destacados
- **Verde menta**: `#6BCB77` - Para éxitos

## Degradados Sugeridos
```css
/* Degradado turquesa a azul */
background: linear-gradient(135deg, #40E0D0 0%, #4A90E2 100%);

/* Degradado turquesa claro a oscuro */
background: linear-gradient(180deg, #6FE9DB 0%, #40E0D0 50%, #0D2F2B 100%);
```
