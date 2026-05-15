/**
 * ARCHIVO DE CONFIGURACIÓN EDITABLE
 * =================================
 * 
 * Este archivo contiene todos los textos, colores y configuraciones
 * editables del sitio web. Modifica estos valores para personalizar
 * la página sin necesidad de editar componentes.
 */

export const siteConfig = {
  // ===== INFORMACIÓN GENERAL =====
  general: {
    siteName: "Transparencia Local 360",
    subtitle: "Banco de Proyectos MIDEPLAN de Curridabat",
    municipality: "Municipalidad de Curridabat",
    country: "Costa Rica",
    year: "2025",
  },

  // ===== COLORES DEL SITIO =====
  colors: {
    primary: "#0099CC", // Azul principal
    secondary: "#6FD56F", // Verde principal
    accent: "#4CAF50", // Verde brillante (botones)
    accentDark: "#2E7D32", // Verde oscuro
    blue: "#1976D2", // Azul para elementos
    orange: "#F57C00", // Naranja para alertas
    background: "#F7F9FB", // Fondo gris claro
  },

  // ===== LANDING PAGE =====
  landing: {
    title: "Transparencia Local 360",
  subtitle: "Gobiernos abiertos, comunidades transparentes.",
    ctaButton: "Explorar proyectos",
    description: "Plataforma ciudadana para visualizar, monitorear y participar en los proyectos públicos de nuestro cantón.",
  },

  // ===== SECCIÓN DE MAPA =====
  map: {
    title: "Mapa Interactivo de Proyectos",
    description: "Explora los proyectos de Curridabat en el mapa. Haz clic en los marcadores para más información.",
    instructions: {
      title: "Cómo usar el mapa:",
      items: [
        "Arrastra para mover el mapa",
        "Usa los controles para hacer zoom",
        "Haz clic en los marcadores para ver proyectos",
        "Los marcadores dorados están en ejecución",
      ],
    },
  },

  // ===== PANEL DE INDICADORES =====
  indicators: {
    title: "Panel de Indicadores",
    cards: [
      {
        label: "Total invertido",
        value: "₡125,000,000",
        icon: "dollar",
        color: "#2E7D32",
      },
      {
        label: "Proyectos en ejecución",
        value: "18",
        icon: "hammer",
        color: "#1976D2",
      },
      {
        label: "Promedio de duración",
        value: "3.2 años",
        icon: "calendar",
        color: "#F57C00",
      },
    ],
    chartTitle: "Distribución por Sector",
  },

  // FORMULARIO CIUDADANO: eliminado del flujo principal

  // ===== SISTEMA DE VALIDACIÓN =====
  validation: {
    badges: [
      {
        id: "verified",
        label: "Verificado",
        description: "Información validada por el equipo técnico municipal",
        color: "green",
        icon: "✓",
      },
      {
        id: "review",
        label: "En revisión",
        description: "La información está siendo verificada por el equipo",
        color: "yellow",
        icon: "⏳",
      },
      {
        id: "official",
        label: "Fuente oficial",
        description: "Información publicada directamente por la municipalidad",
        color: "blue",
        icon: "🏛️",
      },
      {
        id: "citizen",
        label: "Aporte ciudadano",
        description: "Contribución de la comunidad pendiente de validación",
        color: "purple",
        icon: "👤",
      },
    ],
  },

  // ===== CAPACITACIÓN CIUDADANA =====
  training: {
    title: "Capacitación y Acompañamiento Ciudadano",
    subtitle: "Aprende a participar de manera efectiva y responsable",
    description: "Te ofrecemos recursos educativos para que puedas contribuir con información verificada y de calidad.",
    modules: [
      {
        id: 1,
        title: "Cómo Identificar Información Confiable",
        description: "Aprende a distinguir datos verificados de rumores y desinformación",
        duration: "15 min",
        topics: [
          "Fuentes oficiales vs. no oficiales",
          "Verificación cruzada de información",
          "Señales de alerta en datos dudosos",
          "Importancia del contexto",
        ],
        icon: "🔍",
      },
      {
        id: 2,
        title: "Cómo Subir Datos Verificados",
        description: "Guía paso a paso para contribuir con observaciones de calidad",
        duration: "20 min",
        topics: [
          "Redacción clara y objetiva",
          "Adjuntar evidencia fotográfica",
          "Referenciar ubicaciones precisas",
          "Evitar sesgos personales",
        ],
        icon: "📝",
      },
      {
        id: 3,
        title: "Derechos y Responsabilidades Ciudadanas",
        description: "Conoce tus derechos de acceso a información y tus responsabilidades",
        duration: "10 min",
        topics: [
          "Ley de Transparencia y Acceso a la Información",
          "Uso responsable de la plataforma",
          "Protección de datos personales",
          "Canales oficiales de denuncia",
        ],
        icon: "⚖️",
      },
      {
        id: 4,
        title: "Talleres Virtuales Interactivos",
        description: "Participa en sesiones en vivo con el equipo municipal",
        duration: "60 min",
        topics: [
          "Sesiones mensuales por Zoom",
          "Casos prácticos reales",
          "Preguntas y respuestas en directo",
          "Certificado de participación",
        ],
        icon: "🎓",
      },
    ],
    ctaButton: "Ver calendario de talleres",
    downloadGuide: "Descargar guía completa (PDF)",
  },

  // ===== RED SOCIAL / FEED =====
  socialFeed: {
    title: "Participación Ciudadana",
    subtitle: "Comparte y comenta sobre los proyectos públicos",
    description: "Únete a la conversación sobre los proyectos de tu cantón. Comparte opiniones, sugerencias y experiencias de manera constructiva.",
    
    verificationSystem: {
      title: "Sistema de Verificación Ciudadana",
      description: "Ayuda a mantener la calidad de la información verificando publicaciones. Tu participación crea una comunidad más transparente y confiable.",
      
      levels: [
        {
          id: "official",
          label: "Fuente Oficial",
          icon: "🏛️",
          color: "blue",
          description: "Publicación verificada de entidad gubernamental",
          threshold: 0,
        },
        {
          id: "verified",
          label: "Verificado",
          icon: "✓",
          color: "green",
          description: "Contenido validado por 10+ ciudadanos",
          threshold: 10,
        },
        {
          id: "review",
          label: "En Revisión",
          icon: "⏳",
          color: "yellow",
          description: "3-9 verificaciones, pendiente de validación",
          threshold: 3,
        },
        {
          id: "unverified",
          label: "Sin Verificar",
          icon: "⚪",
          color: "gray",
          description: "Información nueva sin validar",
          threshold: 0,
        },
      ],
      
      reportThreshold: 3, // Número de reportes antes de marcar como problemático
      
      guidelines: {
        verify: {
          title: "Cuándo Verificar",
          yes: [
            "Información que puedes confirmar personalmente",
            "Datos con evidencia fotográfica clara",
            "Reportes de fuentes oficiales",
            "Sugerencias constructivas bien fundamentadas",
          ],
          no: [
            "Rumores o información sin confirmar",
            "Opiniones personales sin fundamento",
            "Contenido que no has podido contrastar",
            "Publicaciones con lenguaje ofensivo",
          ],
        },
        report: {
          title: "Reportar Contenido Inapropiado",
          reasons: [
            "Información falsa o engañosa",
            "Lenguaje ofensivo o discriminatorio",
            "Spam o publicidad no relacionada",
            "Ataques personales o acoso",
            "Contenido fuera de tema",
          ],
        },
        community: {
          title: "Normas de la Comunidad",
          rules: [
            {
              name: "Respeto",
              description: "Trata a todos los usuarios con respeto, incluso cuando no estés de acuerdo.",
            },
            {
              name: "Honestidad",
              description: "Verifica solo lo que puedes confirmar. No uses el sistema de manera maliciosa.",
            },
            {
              name: "Transparencia",
              description: "Si usas anonimato, asegúrate de que sea por razones legítimas de seguridad.",
            },
            {
              name: "Responsabilidad",
              description: "Tu participación afecta a toda la comunidad. Actúa con responsabilidad.",
            },
          ],
        },
      },
    },
    
    createPost: {
      placeholder: "Comparte información, sugerencias o comentarios sobre proyectos públicos...",
      anonymousLabel: "Publicar de forma anónima",
      anonymousDescription: "Tu identidad no será visible públicamente",
      submitButton: "Publicar",
      successMessage: "¡Publicación creada correctamente!",
      successAnonymous: "¡Publicación anónima creada!",
    },
    
    interactions: {
      like: "Me gusta",
      comment: "Comentar",
      share: "Compartir",
      verify: "Verificar",
      verified: "Verificado",
      options: "Opciones",
      delete: "Eliminar",
      report: "Reportar",
    },
  },

  // ===== FOOTER =====
  footer: {
    description:
      "Plataforma de transparencia y participación ciudadana para el monitoreo de proyectos públicos del cantón de Curridabat.",
    links: {
      about: [
        { label: "Sobre nosotros", url: "#" },
        { label: "Marco legal", url: "#" },
        { label: "Preguntas frecuentes", url: "#" },
      ],
      resources: [
        { label: "Guías de usuario", url: "#" },
        { label: "Datos abiertos", url: "#" },
        { label: "Reportes anuales", url: "#" },
      ],
    },
    copyright: "© {year} Municipalidad de Curridabat. Todos los derechos reservados.",
    disclaimer:
      "⚠️ Esta plataforma no está destinada para la recolección de datos personales sensibles. Para denuncias formales, utiliza los canales oficiales de la municipalidad.",
  },

  // ===== CRÉDITOS =====
  credits: {
    title: "¡Gracias por explorar!",
    description: "Prototipo desarrollado para promover la participación y transparencia municipal.",
    features: [
      "🏛️ Municipalidad de Curridabat",
      "📊 MIDEPLAN",
      "🤝 Participación Ciudadana",
    ],
    restartButton: "Volver al inicio",
  },
};

// ===== FUNCIONES DE UTILIDAD =====
export const getValidationBadge = (status: string) => {
  return siteConfig.validation.badges.find((badge) => badge.id === status);
};

export const getTrainingModule = (id: number) => {
  return siteConfig.training.modules.find((module) => module.id === id);
};
