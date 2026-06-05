import { siteConfig } from "../config/site-config";
import {
  FileText,
  Mail,
  Phone,
  Globe,
  Shield,
} from "lucide-react";

export function Footer() {
  const { footer, general } = siteConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-white py-16 px-6"
      style={{
        background: "linear-gradient(135deg, #1a3a52 0%, #0f2a3a 100%)",
      }}
    >
      <div className="gov-container">
        {/* Main Footer Content */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pb-12"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
        >
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: "rgba(0, 163, 77, 0.15)",
                  border: "1px solid rgba(0, 163, 77, 0.3)",
                }}
              >
                <img
                  src="/logo.png"
                  alt="Transparencia Local 360"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">{general.siteName}</h3>
                <p
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {general.municipality}
                </p>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              {footer.description}
            </p>
            <p
              className="text-xs font-medium"
              style={{ color: "rgba(255, 249, 230, 0.8)" }}
            >
              ⚠️ {footer.disclaimer}
            </p>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">
              Acerca de
            </h4>
            <ul className="space-y-3">
              {footer.links.about.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    className="text-sm transition-colors duration-200 hover:text-[#00d65f]"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">
              Recursos
            </h4>
            <ul className="space-y-3">
              {footer.links.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    className="text-sm transition-colors duration-200 hover:text-[#00d65f]"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">
              Contacto
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Globe size={16} className="mt-0.5 flex-shrink-0" />
                <a
                  href="#"
                  className="text-sm transition-colors duration-200 hover:text-[#00d65f]"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  www.municipio.go.cr
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@municipio.go.cr"
                  className="text-sm transition-colors duration-200 hover:text-[#00d65f]"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  info@municipio.go.cr
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+50622731234"
                  className="text-sm transition-colors duration-200 hover:text-[#00d65f]"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  (+506) 2273-1234
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Copyright */}
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            {footer.copyright.replace("{year}", currentYear.toString())}
          </p>

          {/* Policy Links */}
          <div className="flex items-center gap-6 flex-wrap justify-center md:justify-end">
            <a
              href="#"
              className="flex items-center gap-2 text-xs transition-colors duration-200 hover:text-[#00d65f]"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              <Shield size={14} />
              Privacidad
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-xs transition-colors duration-200 hover:text-[#00d65f]"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              <FileText size={14} />
              Términos
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-xs transition-colors duration-200 hover:text-[#00d65f]"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              <Accessibility size={14} />
              Accesibilidad
            </a>
          </div>
        </div>

        {/* Government Seal / Badge */}
        <div
          className="pt-8 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p
            className="text-xs font-medium"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            🏛️ Gobierno de Costa Rica • Municipalidad de {general.municipality}
          </p>
          <p
            className="text-xs mt-2"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Comprometidos con la transparencia y participación ciudadana
          </p>
        </div>
      </div>
    </footer>
  );
}

// Accessibility icon component
function Accessibility({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="1" />
      <path d="M12 9v4" />
      <path d="M9 13h6" />
      <circle cx="12" cy="20" r="8" />
    </svg>
  );
}
