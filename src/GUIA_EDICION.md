# 📝 Guía Rápida de Edición - Transparencia Local 360

Esta guía te ayudará a personalizar el sitio web sin necesidad de conocimientos técnicos profundos.

## 🎯 Lo Más Importante: site-config.ts

**TODO** lo editable está en un solo archivo: `/config/site-config.ts`

## 🔥 Ediciones Más Comunes

### 1. Cambiar el Nombre del Sitio

```typescript
// Busca en site-config.ts:
general: {
  siteName: "Transparencia Local 360",  // ← EDITAR AQUÍ
  subtitle: "Banco de Proyectos MIDEPLAN de Curridabat",  // ← Y AQUÍ
  municipality: "Municipalidad de Curridabat",  // ← Y AQUÍ
}
```

### 2. Cambiar Colores del Sitio

```typescript
// Busca en site-config.ts:
colors: {
  primary: "#0099CC",      // Azul principal (gradiente)
  secondary: "#6FD56F",    // Verde (gradiente)
  accent: "#4CAF50",       // Color de botones
  accentDark: "#2E7D32",   // Títulos importantes
  blue: "#1976D2",         // Elementos azules
  orange: "#F57C00",       // Alertas
}
```

**Herramienta recomendada**: [Coolors.co](https://coolors.co) para elegir colores

### 3. Cambiar Textos del Hero Principal

```typescript
// Busca en site-config.ts:
landing: {
  title: "Transparencia Local 360",  // ← Título grande
  subtitle: "Banco de Proyectos MIDEPLAN de Curridabat",  // ← Subtítulo
  ctaButton: "Explorar proyectos",  // ← Texto del botón
  description: "Plataforma ciudadana para visualizar...",  // ← Descripción
}
```

### 4. Editar Indicadores (Números Grandes)

```typescript
// Busca en site-config.ts:
indicators: {
  cards: [
    {
      label: "Total invertido",  // ← Texto del indicador
      value: "₡125,000,000",     // ← Número a mostrar
      color: "#2E7D32",          // ← Color del número
    },
    // ... más indicadores
  ]
}
```

### 5. Formulario de Observaciones (nota)

El formulario de observaciones fue retirado del flujo principal de la interfaz. Todavía puedes encontrar los textos y configuraciones relacionados en `site-config.ts` si deseas reactivar o reutilizar el componente en el futuro.

### 6. Editar Módulos de Capacitación

```typescript
// Busca en site-config.ts:
training: {
  modules: [
    {
      id: 1,
      title: "Cómo Identificar Información Confiable",  // ← Título
      description: "Aprende a distinguir datos verificados...",  // ← Descripción
      duration: "15 min",  // ← Duración
      topics: [  // ← Lista de temas
        "Fuentes oficiales vs. no oficiales",
        "Verificación cruzada de información",
        // ... agregar más temas
      ],
      icon: "🔍",  // ← Emoji del módulo
    },
    // ... más módulos
  ]
}
```

### 7. Cambiar Etiquetas de Validación

```typescript
// Busca en site-config.ts:
validation: {
  badges: [
    {
      id: "verified",
      label: "Verificado",  // ← Nombre de la etiqueta
      description: "Información validada por el equipo técnico",  // ← Descripción
      color: "green",  // ← Color (green, yellow, blue, purple)
      icon: "✓",  // ← Icono
    },
    // ... más etiquetas
  ]
}
```

## 📊 Agregar/Editar Proyectos

Archivo: `/data/projects.ts`

### Agregar un Nuevo Proyecto

```typescript
// Copia este template y pégalo al final de la lista:
{
  id: "11",  // ← Número único (siguiente disponible)
  nombre: "Nombre del Proyecto",
  descripcion: "Descripción completa y detallada del proyecto...",
  sector: "Salud",  // ← Ver opciones abajo
  etapa: "En ejecución",  // ← Ver opciones abajo
  costaEstimado: 500.00,  // ← Costo en millones
  anioEjecucion: "2025-2026",
  canton: "Curridabat, Granadilla",  // ← Ubicación
  lat: 9.9170,  // ← Latitud (usar Google Maps)
  lng: -84.0320,  // ← Longitud (usar Google Maps)
}
```

### Opciones de Sector:
- `"Salud"` - Color: Rojo
- `"Obras Públicas y Transportes"` - Color: Azul
- `"Cultura"` - Color: Morado
- `"Ambiente y Energía"` - Color: Verde
- `"Seguridad Ciudadana y Justicia"` - Color: Naranja
- `"Planes Conjuntos"` - Color: Índigo

### Opciones de Etapa:
- `"En ejecución"` - Color: Verde
- `"Financiamiento"` - Color: Amarillo
- `"Factibilidad"` - Color: Azul
- `"Prefactibilidad"` - Color: Índigo
- `"Perfil"` - Color: Gris

### Cómo Obtener Coordenadas (lat, lng):

1. Abre Google Maps
2. Haz clic derecho en la ubicación exacta
3. Selecciona las coordenadas que aparecen arriba
4. Ejemplo: `9.9170, -84.0320`
   - `lat: 9.9170` (primer número)
   - `lng: -84.0320` (segundo número)

## 🎨 Cambios Avanzados

### Editar Pie de Página (Footer)

```typescript
// Busca en site-config.ts:
footer: {
  description: "Plataforma de transparencia...",  // ← Descripción
  
  links: {
    about: [  // ← Enlaces "Acerca de"
      { label: "Sobre nosotros", url: "#" },
      // ... más enlaces
    ],
    resources: [  // ← Enlaces "Recursos"
      { label: "Guías de usuario", url: "#" },
      // ... más enlaces
    ],
  },
  
  copyright: "© {year} Municipalidad de Curridabat",  // ← Copyright
  disclaimer: "Esta plataforma no está destinada...",  // ← Aviso legal
}
```

### Personalizar Instrucciones del Mapa

```typescript
// Busca en site-config.ts:
map: {
  instructions: {
    title: "Cómo usar el mapa:",
    items: [
      "Arrastra para mover el mapa",
      "Usa los controles para hacer zoom",
      // ... agregar más instrucciones
    ],
  },
}
```

## ⚠️ Errores Comunes

### ❌ Error: Comas faltantes
```typescript
// INCORRECTO:
{
  id: "1"
  nombre: "Proyecto"  // ← Falta coma aquí
}

// CORRECTO:
{
  id: "1",
  nombre: "Proyecto",  // ← Con coma
}
```

### ❌ Error: Comillas sin cerrar
```typescript
// INCORRECTO:
nombre: "Proyecto sin cerrar

// CORRECTO:
nombre: "Proyecto cerrado",
```

### ❌ Error: Coordenadas fuera de rango
```typescript
// Para Curridabat, las coordenadas deben estar en:
lat: 9.910 - 9.925
lng: -84.040 - -84.025
```

## 🔍 Tips Útiles

### 1. Buscar Texto para Editar
En tu editor, usa `Ctrl + F` (Windows) o `Cmd + F` (Mac) para buscar el texto exacto que quieres cambiar.

### 2. Comentarios en el Código
Puedes agregar notas usando `//`:
```typescript
title: "Mi Título",  // Este es mi comentario personal
```

### 3. Deshacer Cambios
`Ctrl + Z` (Windows) o `Cmd + Z` (Mac)

### 4. Guardar Cambios
`Ctrl + S` (Windows) o `Cmd + S` (Mac)

## 📞 ¿Necesitas Ayuda?

Si algo no funciona después de editar:

1. ✅ Verifica que todas las comillas estén cerradas
2. ✅ Verifica que todas las comas estén en su lugar
3. ✅ Verifica que los colores empiecen con `#`
4. ✅ Revisa que las coordenadas estén en el formato correcto

## 🎯 Checklist de Personalización

Usa esta lista para personalizar tu sitio:

- [ ] Cambiar nombre del sitio
- [ ] Cambiar nombre de la municipalidad
- [ ] Personalizar colores
- [ ] Editar textos del hero
- [ ] Actualizar métricas/indicadores
- [ ] Revisar textos del formulario
- [ ] Agregar/editar proyectos
- [ ] Personalizar módulos de capacitación
- [ ] Editar enlaces del footer
- [ ] Revisar aviso legal

## ✅ Todo Listo

Una vez que hayas editado lo que necesitas:

1. Guarda el archivo
2. Recarga la página
3. ¡Verás tus cambios!

---

**Recuerda**: Todo lo editable está en `/config/site-config.ts` y `/data/projects.ts`
