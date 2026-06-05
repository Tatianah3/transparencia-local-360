import { Button } from "./ui/button";
import { Building2, Map, TrendingUp, ChevronDown, Lock } from "lucide-react";
import { siteConfig } from "../config/site-config";

export function WebsiteLanding() {
  const { landing, general, colors } = siteConfig;

  const scrollToMap = () => {
    document.getElementById("mapa")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-section"
    >
      {/* Decorative background elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl"
        style={{ transform: "translate(50%, -50%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl"
        style={{ transform: "translate(-50%, 50%)" }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl hero-content">
        {/* Logo */}
        <div className="mx-auto mb-8 animate-slide-in-down">
          <div
            className="relative inline-block"
            style={{
              filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.15))",
            }}
          >
            <img
              src="/logo.png"
              alt="Transparencia Local 360"
              className="w-32 h-32 object-contain"
            />
          </div>
        </div>

        {/* Main Title */}
        <h1
          className="mb-4 font-extrabold animate-slide-in-up leading-tight"
          style={{
            fontSize: "52px",
            color: "white",
            letterSpacing: "-1.5px",
            textShadow: "0 2px 12px rgba(0,0,0,0.2)",
            fontWeight: 800,
            animation: "slideInUp 0.8s ease-out",
          }}
        >
          {landing.title}
        </h1>

        {/* Subtitle */}
        <div className="mb-6 animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
          <strong
            className="block text-2xl font-bold"
            style={{
              color: "#fef9e6",
              textShadow: "0 1px 4px rgba(0,0,0,0.15)",
              letterSpacing: "-0.5px",
            }}
          >
            {landing.subtitle}
          </strong>
          <span
            className="block text-base mt-3 font-medium"
            style={{
              color: "rgba(255,255,255,0.85)",
            }}
          >
            {general.municipality}
          </span>
        </div>

        {/* Description */}
        <p
          className="mb-12 max-w-2xl mx-auto animate-slide-in-up text-lg font-normal"
          style={{
            lineHeight: "1.8",
            color: "rgba(255,255,255,0.9)",
            textShadow: "0 1px 2px rgba(0,0,0,0.1)",
            animationDelay: "0.2s",
          }}
        >
          {landing.description}
        </p>

        {/* Features Row */}
        <div
          className="mb-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto animate-slide-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="text-center hover:transform hover:scale-105 transition-transform duration-300">
            <div
              className="mx-auto mb-2 w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <Map className="text-white" size={24} />
            </div>
            <p
              className="text-xs font-medium"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              Mapa Interactivo
            </p>
          </div>
          <div className="text-center hover:transform hover:scale-105 transition-transform duration-300">
            <div
              className="mx-auto mb-2 w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <Lock className="text-white" size={24} />
            </div>
            <p
              className="text-xs font-medium"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              Transparencia
            </p>
          </div>
          <div className="text-center hover:transform hover:scale-105 transition-transform duration-300">
            <div
              className="mx-auto mb-2 w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <TrendingUp className="text-white" size={24} />
            </div>
            <p
              className="text-xs font-medium"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              Indicadores
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          onClick={scrollToMap}
          className="text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 animate-slide-in-up"
          size="lg"
          style={{
            background: "linear-gradient(90deg, #00a34d 0%, #00d65f 100%)",
            borderRadius: "8px",
            paddingLeft: "48px",
            paddingRight: "48px",
            paddingTop: "14px",
            paddingBottom: "14px",
            fontSize: "1.1rem",
            fontWeight: 600,
            boxShadow: "0 6px 20px rgba(0,163,77,0.35)",
            border: "none",
            animationDelay: "0.4s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 8px 28px rgba(0,163,77,0.45)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,163,77,0.35)";
          }}
        >
          {landing.ctaButton}
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown
          size={32}
          className="text-white opacity-70"
          style={{
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
          }}
        />
      </div>
    </section>
  );
}
