# Transparencia Local 360

Plataforma web de transparencia y participación ciudadana para el monitoreo de proyectos públicos del cantón de Curridabat, Costa Rica.

## 🎨 Características Principales

- **Mapa Interactivo**: Visualización geográfica de todos los proyectos con zoom, pan y detalles en tiempo real
- **Sistema de Validación**: Observaciones ciudadanas con etiquetas de confiabilidad (verificado, en revisión, fuente oficial)
- **Capacitación Ciudadana**: Módulos educativos y talleres virtuales para participación responsable
- **Panel de Indicadores**: Métricas clave sobre inversión, proyectos activos y duración promedio
- **Completamente Editable**: Sistema de configuración centralizado para personalización sin código

## 📂 Estructura del Proyecto

```
├── App.tsx                     # Aplicación principal (página web con scroll)
├── config/
│   └── site-config.ts         # ⚙️ ARCHIVO DE CONFIGURACIÓN EDITABLE
├── components/
│   ├── WebsiteLanding.tsx     # Landing page con hero
│   ├── MapView.tsx            # Mapa interactivo SVG
│   ├── IndicatorsPanel.tsx    # Panel de métricas
│   ├── TrainingSection.tsx    # Módulos de capacitación
│   ├── ValidationBadge.tsx    # Etiquetas de validación
│   ├── ProjectDetail.tsx      # Detalles de proyectos
│   └── Footer.tsx             # Pie de página
├── data/
│   └── projects.ts            # 📊 Base de datos de proyectos
└── styles/
    └── globals.css            # Estilos globales

Note: El logo principal del proyecto se encuentra en `public/logo.png` — úsalo como referencia para la identidad visual del sitio.
```

## 🔧 Guía de Edición Rápida

### 1. Editar Textos y Colores (site-config.ts)

El archivo `/config/site-config.ts` contiene **TODA** la configuración editable del sitio:

```typescript
// Ejemplo: Cambiar el título del sitio
general: {
  siteName: "Tu Nombre Aquí",
  municipality: "Tu Municipalidad",
}

// Ejemplo: Cambiar colores
colors: {
  primary: "#0099CC",     // Cambiar azul principal
  accent: "#4CAF50",      // Cambiar color de botones
}

// Ejemplo: Editar textos de landing
landing: {
  title: "Tu Título Personalizado",
  subtitle: "Tu Subtítulo",
}
```

#### Secciones editables en site-config.ts:

- ✅ **general**: Información del sitio y municipalidad
- ✅ **colors**: Paleta de colores completa
- ✅ **landing**: Textos del hero principal
- ✅ **map**: Configuración del mapa
- ✅ **indicators**: Métricas del panel
-- ✅ **citizenForm**: (Formulario de observaciones) — eliminado del flujo principal. Los textos quedan en `site-config.ts` si deseas reactivar.
- ✅ **validation**: Etiquetas de validación
- ✅ **training**: Módulos de capacitación
- ✅ **footer**: Pie de página y enlaces

### 2. Editar Proyectos (projects.ts)

Archivo: `/data/projects.ts`

```typescript
// Agregar un nuevo proyecto
{
  id: "11",
  nombre: "Nuevo Proyecto",
  descripcion: "Descripción detallada...",
  sector: "Salud",
  etapa: "En ejecución",
  costaEstimado: 500.00,
  anioEjecucion: "2025-2026",
  canton: "Curridabat, Granadilla",
  lat: 9.9170,  // Coordenada latitud
  lng: -84.0320, // Coordenada longitud
}
```

**Sectores disponibles:**
- Salud
- Obras Públicas y Transportes
- Cultura
- Ambiente y Energía
- Seguridad Ciudadana y Justicia
- Planes Conjuntos

**Etapas disponibles:**
- En ejecución
- Financiamiento
- Factibilidad
- Prefactibilidad
- Perfil

### 3. Personalizar Etiquetas de Validación

En `site-config.ts`, sección `validation.badges`:

```typescript
{
  id: "verified",
  label: "Verificado",
  description: "Información validada por el equipo técnico",
  color: "green",
  icon: "✓",
}
```

### 4. Editar Módulos de Capacitación

En `site-config.ts`, sección `training.modules`:

```typescript
{
  id: 1,
  title: "Título del Módulo",
  description: "Descripción breve",
  duration: "15 min",
  topics: [
    "Tema 1",
    "Tema 2",
    "Tema 3",
  ],
  icon: "🔍",
}
```

### 5. Cambiar Indicadores del Panel

En `site-config.ts`, sección `indicators.cards`:

```typescript
{
  label: "Total invertido",
  value: "₡125,000,000",
  icon: "dollar",
  color: "#2E7D32",
}
```

## 🎨 Personalización de Colores

Los colores se aplican automáticamente en todo el sitio al editarlos en `site-config.ts`:

```typescript
colors: {
  primary: "#0099CC",      // Gradiente principal (azul)
  secondary: "#6FD56F",    // Gradiente secundario (verde)
  accent: "#4CAF50",       // Botones principales
  accentDark: "#2E7D32",   // Títulos destacados
  blue: "#1976D2",         // Elementos azules
  orange: "#F57C00",       // Alertas y métricas
  background: "#F7F9FB",   // Fondos de secciones
}
```

## 📊 Gestión de Datos

### Coordenadas del Mapa

El mapa está centrado en Curridabat con estos límites:

- **Latitud**: 9.910 - 9.925
- **Longitud**: -84.040 - -84.025

Para agregar un marcador en el mapa, usa coordenadas dentro de estos rangos.

**Herramienta recomendada**: Google Maps
1. Haz clic derecho en una ubicación
2. Copia las coordenadas (formato: lat, lng)
3. Usa esos valores en tu proyecto

### Campos del Formulario de Observaciones

Los campos se configuran en `site-config.ts`:

```typescript
citizenForm: {
  fields: {
    name: { label: "...", placeholder: "..." },
    email: { label: "...", placeholder: "..." },
    category: {
      options: [
        { value: "suggestion", label: "Sugerencia de mejora" },
        // Agregar más opciones aquí
      ]
    }
  }
}
```

## 🚀 Características Técnicas

### Sistema de Validación de Observaciones

Todas las observaciones ciudadanas incluyen:

- **4 Estados de validación**: Verificado, En revisión, Fuente oficial, Aporte ciudadano
- **Tooltips informativos**: Explicación de cada estado
- **Visualización clara**: Badges de colores según el nivel de confiabilidad

### Capacitación Ciudadana

- **4 Módulos educativos** predefinidos
- **Talleres virtuales** programables
- **Certificación** de participación
- **Comunidad activa** (WhatsApp, Zoom)

### Mapa Interactivo

- **Zoom**: 50% - 300%
- **Pan**: Arrastrar para mover
- **4 Distritos**: Curridabat Centro, Granadilla, Sánchez, Tirrases
- **Calles principales**: Autopista, avenidas, calles
- **8 Puntos de referencia**: Municipalidad, parques, hospitales, etc.
- **Marcadores animados**: Por sector y estado

## 🔐 Privacidad y Seguridad

El sitio incluye avisos automáticos sobre:

- Protección de datos personales
- No recolección de datos sensibles
- Canales oficiales para denuncias formales
- Transparencia en el uso de la información

## 📱 Responsive Design

El sitio es completamente responsivo y se adapta a:

- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Pantallas grandes (1440px+)

## 🌐 Navegación

La página web tiene una estructura de scroll con secciones ancla:

1. **Hero/Landing** - Portada inicial
2. **#mapa** - Mapa interactivo
3. **#indicadores** - Panel de métricas
4. **#observaciones** - (Formulario eliminado)
5. **Capacitación** - Módulos educativos
6. **Footer** - Información y enlaces

## 🎯 Casos de Uso

### Para Administradores Municipales:

1. Editar proyectos en `projects.ts`
2. Actualizar métricas en `site-config.ts` → `indicators`
3. Cambiar textos institucionales en `general`

### Para Diseñadores:

1. Personalizar paleta de colores en `colors`
2. Ajustar textos de interfaz en cada sección
3. Modificar iconos emoji en módulos

### Para Gestores de Contenido:

1. Actualizar módulos de capacitación
2. Editar campos del formulario
3. Personalizar mensajes de validación

## 📝 Notas Importantes

- ⚠️ **No modificar** archivos en `/components/ui/` (componentes del sistema)
- ⚠️ **No modificar** `/components/figma/ImageWithFallback.tsx` (protegido)
- ✅ **Sí modificar** todo en `/config/site-config.ts`
- ✅ **Sí modificar** proyectos en `/data/projects.ts`

## 🆘 Soporte

Para personalizaciones avanzadas o dudas técnicas:

1. Revisa primero `/config/site-config.ts`
2. Consulta este README
3. Verifica la estructura de datos en `/data/projects.ts`

## 📄 Licencia

© 2025 Municipalidad de Curridabat. Todos los derechos reservados.

---

**Última actualización**: Noviembre 2025
**Versión**: 1.0.0
**Plataforma**: React + TypeScript + Tailwind CSS
