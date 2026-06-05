# 🎨 Sistema de Diseño - Transparencia Local 360

## Paleta de Colores - Gobierno de Costa Rica

Este proyecto utiliza un sistema de colores inspirado en **datosabiertos.gob.go.cr** para transmitir profesionalismo, confianza y transparencia gubernamental.

### Colores Primarios

| Color | Código Hex | Uso | Descripción |
|-------|-----------|-----|------------|
| **Azul Institucional Oscuro** | `#1a3a52` | Headers, titles, backgrounds | Autoridad y profesionalismo |
| **Azul Profesional** | `#0066cc` | Links, botones primarios, highlights | Identidad principal |
| **Azul Luz** | `#e6f0ff` | Backgrounds suaves | Contexto sin abrumar |
| **Azul Muy Claro** | `#f0f6ff` | Backgrounds de secciones | Base visual limpia |

### Colores Secundarios

| Color | Código Hex | Uso | Descripción |
|-------|-----------|-----|------------|
| **Verde Confianza** | `#00a34d` | Botones secundarios, verificaciones | Éxito y sostenibilidad |
| **Verde Luz** | `#e6f5ed` | Backgrounds positivos | Ambiente acogedor |
| **Verde Brillante** | `#00d65f` | Hover states, accents | Dinamismo |

### Colores de Acentos

| Color | Código Hex | Uso | Descripción |
|-------|-----------|-----|------------|
| **Dorado Elegante** | `#b8860b` | Detalles premium | Sofisticación |
| **Dorado Luz** | `#fef9e6` | Backgrounds dorados | Elegancia suave |
| **Teal Moderno** | `#0099b8` | Gradientes, acentos | Contemporáneo |

### Colores Neutrales

| Color | Código Hex | Uso | Descripción |
|-------|-----------|-----|------------|
| **Gris Oscuro** | `#2c3e50` | Texto principal | Legibilidad máxima |
| **Gris Medio** | `#5a6c7d` | Texto secundario | Jerarquía visual |
| **Gris Claro** | `#ecf0f3` | Borders, dividers | Separación suave |
| **Gris Muy Claro** | `#f5f7fa` | Backgrounds alternos | Contraste suave |

### Colores de Estado

| Estado | Color | Código Hex |
|--------|-------|-----------|
| **Éxito** | Verde | `#00a34d` |
| **Advertencia** | Naranja | `#d97706` |
| **Error** | Rojo | `#dc2626` |
| **Info** | Azul | `#0066cc` |

## 🎯 Uso en Componentes

### Botones

```tsx
// Botón Primario (Azul)
<Button className="gov-button-primary">
  Explorar Mapa
</Button>

// Botón Secundario (Verde)
<Button className="gov-button-secondary">
  Participar
</Button>

// Botón Outline (Azul con borde)
<Button className="gov-button-outline">
  Más Información
</Button>
```

### Tarjetas

```tsx
<div className="gov-card">
  {/* Contenido con sombra y borde profesional */}
</div>
```

### Badges

```tsx
<span className="gov-badge-success">Completado</span>
<span className="gov-badge-warning">En Proceso</span>
<span className="gov-badge-error">Retraso</span>
```

### Secciones

```tsx
<section className="gov-section bg-gradient-to-br from-[#f0f6ff] via-[#fafbfc] to-[#e6f5ed]">
  {/* Contenido con fondo profesional */}
</section>
```

## 🎨 Gradientes

### Hero Section
```css
background: linear-gradient(135deg, #1a3a52 0%, #0066cc 50%, #0099b8 100%);
```

### Botón Verde
```css
background: linear-gradient(90deg, #00a34d 0%, #00d65f 100%);
```

### Fondo General
```css
background: linear-gradient(to-br, #f0f6ff, #e6f5ed, #f5f7fa);
```

## 📐 Tipografía

- **Font Family**: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'
- **Headings (h1-h6)**: Color `#1a3a52`, font-weight 600-800
- **Body Text**: Color `#2c3e50`, font-weight 400
- **Muted Text**: Color `#5a6c7d`, font-weight 400
- **Links**: Color `#0066cc`, hover `#1a3a52`

## 🎭 Sombras

```css
/* Subtle */
box-shadow: 0 1px 3px rgba(0, 51, 102, 0.06);

/* Medium */
box-shadow: 0 4px 12px rgba(0, 51, 102, 0.12);

/* Large */
box-shadow: 0 8px 24px rgba(0, 51, 102, 0.18);
```

## ✨ Variables CSS

Todas las variables están disponibles en `src/styles/governance-colors.css`:

```css
:root {
  --gov-primary-dark: #1a3a52;
  --gov-primary: #0066cc;
  --gov-secondary: #00a34d;
  --gov-accent-gold: #b8860b;
  --gov-gray-dark: #2c3e50;
  /* ... y más */
}
```

## 🚀 Clases Utility

### Componentes

```tsx
.gov-header        /* Header con gradiente azul */
.gov-card         /* Tarjeta profesional */
.gov-button       /* Base para botones */
.gov-button-primary
.gov-button-secondary
.gov-button-outline
.gov-input        /* Inputs con enfoque azul */
.gov-badge        /* Badges base */
.gov-title        /* Títulos h2/h3 */
.gov-subtitle     /* Subtítulos */
.gov-text-muted   /* Texto secundario */
```

### Backgrounds

```tsx
.gov-background-light      /* Fondo claro profesional */
.gov-background-subtle     /* Fondo muy claro */
```

### Sombras

```tsx
.gov-shadow-subtle
.gov-shadow-medium
.gov-shadow-large
```

### Contenedor

```tsx
.gov-container     /* max-w-6xl mx-auto */
.gov-section       /* Sección con padding y bordes */
```

## 🔄 Animaciones

```tsx
.animate-slide-in-up      /* Desliza hacia arriba */
.animate-fade-in          /* Desvanece */
.animate-slide-in-down    /* Desliza hacia abajo */
.animate-pulse-gently     /* Pulsa suavemente */
```

## ♿ Accesibilidad

- **Contraste**: Todos los colores cumplen WCAG AA
- **Focus States**: Anillos azules visibles en elementos interactivos
- **Texto**: Tamaños legibles (16px mínimo)
- **Colores**: No se usa color solo para transmitir información

## 📱 Responsive

- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Diseño mobile-first
- Flexible en todos los dispositivos

## 🌙 Dark Mode (Future)

Sistema preparado para soportar tema oscuro con media query:
```css
@media (prefers-color-scheme: dark) {
  /* Estilos oscuros */
}
```

---

**Creado con 💚 para Transparencia Local 360**
Inspirado en: https://datosabiertos.gob.go.cr/
