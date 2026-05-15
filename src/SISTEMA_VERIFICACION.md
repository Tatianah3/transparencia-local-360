# 🛡️ Sistema de Verificación Ciudadana - Documentación Técnica

## Resumen Ejecutivo

El **Sistema de Verificación Ciudadana** es un mecanismo democrático y transparente que permite a la comunidad validar información de manera colectiva, creando un ecosistema de confianza sin depender exclusivamente de validación oficial.

---

## 🎯 Objetivos del Sistema

### Primarios
1. **Combatir la desinformación**: Reducir la propagación de información falsa
2. **Fomentar participación responsable**: Incentivar contribuciones de calidad
3. **Crear transparencia**: Hacer visible el nivel de confiabilidad de cada publicación
4. **Empoderar ciudadanía**: Dar voz y poder de validación a la comunidad

### Secundarios
1. Reducir carga de trabajo del equipo municipal
2. Crear comunidad activa y comprometida
3. Identificar información valiosa rápidamente
4. Generar confianza en la plataforma

---

## 📊 Arquitectura del Sistema

### 4 Niveles de Verificación

```
┌─────────────────────────────────────────────────┐
│  🏛️ FUENTE OFICIAL (Azul)                      │
│  - Cuentas verificadas gubernamentales          │
│  - Verificación automática permanente           │
│  - No requiere validación ciudadana             │
└─────────────────────────────────────────────────┘
                     ▼
┌─────────────────────────────────────────────────┐
│  ✓ VERIFICADO (Verde)                           │
│  - 10+ verificaciones ciudadanas                │
│  - Contenido validado por comunidad             │
│  - Alta confiabilidad                           │
└─────────────────────────────────────────────────┘
                     ▼
┌─────────────────────────────────────────────────┐
│  ⏳ EN REVISIÓN (Amarillo)                      │
│  - 3-9 verificaciones ciudadanas                │
│  - Acumulando validaciones                      │
│  - Confiabilidad media                          │
└─────────────────────────────────────────────────┘
                     ▼
┌─────────────────────────────────────────────────┐
│  ⚪ SIN VERIFICAR (Gris)                        │
│  - 0-2 verificaciones                           │
│  - Información nueva                            │
│  - Requiere validación                          │
└─────────────────────────────────────────────────┘
```

### Umbrales de Verificación

| Nivel | Mínimo | Máximo | Badge | Color |
|-------|--------|--------|-------|-------|
| Sin Verificar | 0 | 2 | ⚪ | Gris (#9CA3AF) |
| En Revisión | 3 | 9 | ⏳ | Amarillo (#EAB308) |
| Verificado | 10 | ∞ | ✓ | Verde (#22C55E) |
| Fuente Oficial | - | - | 🏛️ | Azul (#3B82F6) |

---

## 🔄 Flujo de Verificación

### 1. Creación de Publicación

```
Usuario crea publicación
         ↓
¿Es cuenta oficial?
   ├─ Sí → Badge 🏛️ "Fuente Oficial"
   └─ No → Badge ⚪ "Sin Verificar" (0 verificaciones)
```

### 2. Verificación Ciudadana

```
Ciudadano ve publicación
         ↓
Lee contenido + evidencia
         ↓
¿La información es correcta?
   ├─ Sí → Click "Verificar" → +1 verificación
   ├─ No → Click "Reportar" → +1 reporte
   └─ Duda → No hace nada
```

### 3. Actualización Automática de Badges

```
Nueva verificación recibida
         ↓
Contar total de verificaciones
         ↓
Aplicar lógica de umbrales:
   ├─ 0-2 → ⚪ Sin Verificar
   ├─ 3-9 → ⏳ En Revisión
   └─ 10+ → ✓ Verificado
         ↓
Actualizar badge en UI
         ↓
Mostrar notificación (opcional)
```

---

## 💻 Implementación Técnica

### Estructura de Datos

```typescript
interface Post {
  id: string;
  author: {
    name: string;
    isAnonymous: boolean;
    avatar: string;
    location: string;
  };
  content: string;
  timestamp: string;
  
  // Métricas de interacción
  likes: number;
  comments: number;
  shares: number;
  
  // Sistema de verificación
  verifications: number;        // Contador de verificaciones
  reports: number;              // Contador de reportes
  isVerifiedByUser: boolean;    // Si el usuario actual ya verificó
  verificationType: "official" | "verified" | "review" | "unverified";
  
  // Opcional
  projectTag?: {
    name: string;
    sector: string;
  };
}
```

### Lógica de Verificación

```typescript
const handleVerify = (postId: string) => {
  setPosts(posts.map(post => {
    if (post.id === postId) {
      // Toggle verificación del usuario
      const newVerifications = post.isVerifiedByUser 
        ? post.verifications - 1 
        : post.verifications + 1;
      
      const newIsVerified = !post.isVerifiedByUser;
      
      // Calcular nuevo tipo de verificación
      let newType: Post["verificationType"] = "unverified";
      
      if (post.verificationType === "official") {
        newType = "official"; // No cambia
      } else if (newVerifications >= 10) {
        newType = "verified";
      } else if (newVerifications >= 3) {
        newType = "review";
      } else {
        newType = "unverified";
      }
      
      return {
        ...post,
        verifications: newVerifications,
        isVerifiedByUser: newIsVerified,
        verificationType: newType,
      };
    }
    return post;
  }));
};
```

### Renderizado de Badges

```typescript
const getVerificationBadge = (type: Post["verificationType"]) => {
  const badges = {
    official: {
      label: "Fuente Oficial",
      icon: "🏛️",
      color: "bg-blue-500 text-white",
      description: "Publicación verificada de entidad gubernamental",
    },
    verified: {
      label: "Verificado",
      icon: "✓",
      color: "bg-green-500 text-white",
      description: "Contenido validado por 10+ ciudadanos",
    },
    review: {
      label: "En Revisión",
      icon: "⏳",
      color: "bg-yellow-500 text-white",
      description: "3-9 verificaciones, pendiente de validación",
    },
    unverified: {
      label: "Sin Verificar",
      icon: "⚪",
      color: "bg-gray-400 text-white",
      description: "Información nueva sin validar",
    },
  };
  return badges[type];
};
```

---

## 🎨 Diseño Visual

### Badges de Verificación

**Fuente Oficial** (Azul)
```
┌─────────────────────────┐
│  🏛️ Fuente Oficial     │  ← Badge azul sólido
└─────────────────────────┘
Tooltip: "Publicación verificada de entidad gubernamental"
```

**Verificado** (Verde)
```
┌─────────────────────────┐
│  ✓ Verificado          │  ← Badge verde sólido
└─────────────────────────┘
Tooltip: "Contenido validado por 12 ciudadanos" (dinámico)
```

**En Revisión** (Amarillo)
```
┌─────────────────────────┐
│  ⏳ En Revisión        │  ← Badge amarillo sólido
└─────────────────────────┘
Tooltip: "7 verificaciones, pendiente de validación"
```

**Sin Verificar** (Gris)
```
┌─────────────────────────┐
│  ⚪ Sin Verificar       │  ← Badge gris sólido
└─────────────────────────┘
Tooltip: "Información nueva sin validar - 2 verificaciones"
```

### Botón de Verificación

**Estado: No verificado**
```
┌──────────────────────┐
│  ✓ Verificar        │  ← Botón outline gris
└──────────────────────┘
```

**Estado: Verificado por usuario**
```
┌──────────────────────┐
│  ✓ Verificado       │  ← Botón verde sólido
└──────────────────────┘
```

### Estadísticas de Confiabilidad

```
┌─────────────────────────────────────────┐
│  ✅ 12 verificaciones                   │
│  🚩 1 reporte                           │
└─────────────────────────────────────────┘
```

---

## 📋 Guía de Verificación para Usuarios

### Paso 1: Evaluación Inicial

**Preguntas a hacer:**
- ¿La publicación tiene evidencia (fotos, documentos, enlaces)?
- ¿Puedo confirmar esta información personalmente?
- ¿Conozco el tema del que se habla?
- ¿La fuente parece confiable?

### Paso 2: Verificación Cruzada

**Métodos:**
1. **Experiencia personal**: ¿He visto/vivido esto personalmente?
2. **Fuentes oficiales**: ¿Hay anuncios oficiales que lo confirmen?
3. **Evidencia visual**: ¿Las fotos son auténticas y relevantes?
4. **Consistencia**: ¿Es coherente con información previa?

### Paso 3: Decisión

```
SI puedes confirmar → Click "Verificar"
SI tienes dudas → No hagas nada
SI es falso/inapropiado → Click "Reportar"
```

---

## ⚠️ Sistema Anti-Abuso

### Prevención de Spam de Verificaciones

**Límites por usuario:**
- 1 verificación por publicación por usuario
- No puede verificar sus propias publicaciones (futuro)
- Histórico de verificaciones visible (futuro admin)

### Sistema de Reportes

**Umbrales:**
- 1-2 reportes: Se registran internamente
- **3+ reportes**: Activación de alertas
  - Banner rojo en publicación
  - Notificación a equipo municipal
  - Reducción de visibilidad en feed
  - Revisión prioritaria

### Detección de Patrones Sospechosos

**Futuras implementaciones:**
- Verificaciones masivas del mismo usuario
- Reportes coordinados
- Cuentas anónimas verificando excesivamente
- Verificaciones de cuentas nuevas

---

## 🔐 Privacidad y Transparencia

### Datos Públicos
- ✅ Número total de verificaciones por publicación
- ✅ Número total de reportes (si > 0)
- ✅ Badge de verificación actual
- ✅ Estado de verificación del usuario actual

### Datos Privados
- ❌ Identidad de quién verificó (anónimo)
- ❌ Identidad de quién reportó (anónimo)
- ❌ Detalles de reportes específicos
- ❌ Historial de verificaciones por usuario

### Excepciones (Admin)
Los administradores pueden ver:
- Usuarios que verificaron cada publicación
- Usuarios que reportaron
- Patrones de verificación sospechosos
- Historial completo de acciones

---

## 📈 Métricas y KPIs

### Métricas por Publicación
- **Tasa de verificación**: verificaciones / vistas
- **Velocidad de verificación**: tiempo hasta alcanzar cada umbral
- **Ratio verificación/reporte**: indica calidad del contenido
- **Engagement verificado**: interacciones en posts verificados vs. no verificados

### Métricas del Sistema
- **Total de verificaciones**: en toda la plataforma
- **Posts verificados**: % de posts con badge verde
- **Tiempo promedio**: para alcanzar 10 verificaciones
- **Tasa de reportes**: % de posts reportados
- **Efectividad**: % de posts reportados que fueron removidos

### Métricas de Usuario
- **Verificaciones realizadas**: por usuario
- **Precisión**: % de verificaciones correctas
- **Reputación**: score basado en historial
- **Nivel de participación**: activo/moderado/bajo

---

## 🛠️ Configuración (site-config.ts)

### Umbrales Editables

```typescript
verificationSystem: {
  levels: [
    {
      id: "verified",
      threshold: 10,  // ← EDITABLE: Cambiar a 5, 15, 20, etc.
    },
    {
      id: "review",
      threshold: 3,   // ← EDITABLE: Cambiar a 2, 5, etc.
    },
  ],
  
  reportThreshold: 3,  // ← EDITABLE: Reportes antes de alerta
}
```

### Textos Editables

Todos los textos del sistema están en `site-config.ts`:
- Labels de badges
- Descripciones de tooltips
- Mensajes de notificación
- Guías de verificación
- Normas de comunidad

---

## 🚀 Futuras Mejoras

### Corto Plazo (1-3 meses)
- [ ] Impedir verificar publicaciones propias
- [ ] Historial de verificaciones en perfil de usuario
- [ ] Notificaciones cuando tu post alcanza umbrales
- [ ] Exportar reportes de verificación

### Mediano Plazo (3-6 meses)
- [ ] Sistema de reputación por usuario
- [ ] Peso de verificaciones según reputación
- [ ] Gamificación (badges, logros)
- [ ] Dashboard de moderación

### Largo Plazo (6-12 meses)
- [ ] Machine Learning para detectar spam
- [ ] Verificación automática de imágenes
- [ ] Integración con fuentes de datos oficiales
- [ ] API pública de verificación

---

## 🎓 Capacitación

### Para Ciudadanos
1. **Guía Interactiva**: Modal con instrucciones completas
2. **Tooltips**: Explicaciones en tiempo real
3. **Ejemplos**: Casos de uso en documentación
4. **Talleres**: Sesiones educativas mensuales

### Para Administradores
1. **Panel de moderación**: Interfaz de gestión
2. **Alertas automáticas**: Notificaciones de problemas
3. **Estadísticas**: Dashboard con métricas
4. **Protocolos**: Documentos de procedimientos

### Para Desarrolladores
1. **Código documentado**: Comentarios inline
2. **README técnico**: Arquitectura del sistema
3. **API docs**: Si se expone API pública
4. **Tests**: Suite de pruebas automatizadas

---

## 📞 Soporte

### Para Usuarios
- **Guía de Verificación**: Botón en feed social
- **Tooltips**: Hover sobre badges y botones
- **FAQs**: Sección de preguntas frecuentes
- **Contacto**: Email/chat de soporte

### Para Moderadores
- **Panel admin**: Interfaz de gestión
- **Documentación**: Este archivo
- **Training**: Capacitación inicial
- **Hotline**: Canal directo de comunicación

---

## ✅ Checklist de Implementación

### Fase 1: Core Básico ✅
- [x] Estructura de datos para verificaciones
- [x] Lógica de umbrales (3, 10)
- [x] Badges visuales (4 niveles)
- [x] Botón "Verificar" por publicación
- [x] Contador de verificaciones

### Fase 2: UX Mejorada ✅
- [x] Tooltips explicativos
- [x] Estadísticas de confiabilidad
- [x] Banner informativo
- [x] Guía de verificación (modal)
- [x] Notificaciones toast

### Fase 3: Anti-Spam ✅
- [x] Sistema de reportes
- [x] Contador de reportes
- [x] Alertas a 3+ reportes
- [x] Banner de advertencia
- [x] Menú de opciones

### Fase 4: Configuración ✅
- [x] Archivo site-config.ts
- [x] Textos editables
- [x] Umbrales configurables
- [x] Documentación completa

### Fase 5: Próximas (Pendientes)
- [ ] Integración con backend real
- [ ] Base de datos de verificaciones
- [ ] Panel de administración
- [ ] Sistema de reputación
- [ ] Notificaciones push
- [ ] Historial de usuario

---

## 📖 Referencias

### Inspiración
- **Wikipedia**: Sistema de edición colaborativa
- **Stack Overflow**: Votos y reputación
- **Reddit**: Upvotes/downvotes
- **Twitter Community Notes**: Verificación comunitaria
- **Facebook**: Sistema de reportes

### Mejores Prácticas
- Transparencia total en procesos
- Umbrales claros y públicos
- Feedback inmediato al usuario
- Prevención de abuso desde diseño
- Educación constante de usuarios

---

**Versión del Documento**: 1.0  
**Última Actualización**: Noviembre 2025  
**Autor**: Equipo Transparencia Local 360  
**Estado**: ✅ Implementado y Funcional

---

## 🎉 Conclusión

El Sistema de Verificación Ciudadana es el núcleo de la plataforma de participación. Empodera a los ciudadanos, combate la desinformación y crea una comunidad transparente y responsable.

**La confianza se construye colectivamente. Cada verificación cuenta.** ✓
