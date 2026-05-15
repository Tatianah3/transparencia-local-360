import { Button } from "./ui/button";
import { Building2, Map, TrendingUp, ChevronDown } from "lucide-react";
import { siteConfig } from "../config/site-config";

export function WebsiteLanding() {
  const { landing, general, colors } = siteConfig;

  const scrollToMap = () => {
    document.getElementById("mapa")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(120deg, #fafdff 0%, #e6f4fa 60%, #0099cc 100%)`,
      }}
    >
      {/* Fondo limpio, sin íconos flotantes para evitar saturación */}

      {/* Centered prominent logo */}

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl animate-scale-in">
        {/* Logo limpio, sin fondo ni sombra, centrado y con espacio visual */}
        <div className="mx-auto mb-8 animate-fade-in-up">
          <img
            src="/logo.png"
            alt="Transparencia Local 360"
            className="w-36 h-36 object-contain mx-auto"
            style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.08))" }}
          />
        </div>

        <h1
          className="mb-2 font-extrabold animate-fade-in-up"
          style={{
            fontSize: "48px",
            color: "#0099cc",
            letterSpacing: "-1px",
            textShadow: "0 2px 12px rgba(0,153,204,0.10)",
          }}
        >
          {landing.title}
        </h1>
        <div className="mb-6 animate-fade-in-up">
          <strong className="block text-xl text-gray-800" style={{fontWeight:700}}>{landing.subtitle}</strong>
          <span className="block text-base mt-2 text-gray-500 font-medium">{general.municipality}</span>
        </div>

        <p className="mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-400 text-gray-700 text-lg font-normal" style={{lineHeight:'1.7'}}>
          {landing.description}
        </p>

        <Button
          onClick={scrollToMap}
          className="text-white font-semibold shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-600"
          size="lg"
          style={{
            background: "linear-gradient(90deg, #0099cc 60%, #6fd56f 100%)",
            borderRadius: "28px",
            paddingLeft: "48px",
            paddingRight: "48px",
            paddingTop: "20px",
            paddingBottom: "20px",
            fontSize: "1.25rem",
            boxShadow: "0 4px 24px 0 rgba(0,153,204,0.10)",
          }}
        >
          {landing.ctaButton}
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white opacity-70" />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(20px) translateX(-10px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(15px); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.8s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
}
