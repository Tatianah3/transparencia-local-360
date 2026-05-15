import { siteConfig } from "../config/site-config";

export function Footer() {
  const { footer, general } = siteConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 mb-8">
          {/* Logo and main text */}
          <div className="flex items-start gap-4 md:gap-6 md:flex-1">
            <div className="w-20 h-20 rounded-full bg-transparent flex items-center justify-center">
              <img src="/logo.png" alt="Transparencia Local 360" className="w-16 h-16 object-contain" />
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold">{general.siteName}</h3>
              <p className="text-sm text-gray-400">{general.municipality}</p>
              <p className="text-gray-400 text-sm mt-3 max-w-xl">{footer.description}</p>
              <p className="text-xs text-yellow-300 mt-3">{footer.disclaimer}</p>
            </div>
          </div>

          {/* Links columns */}
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            <div>
              <h4 className="text-white mb-4">Acerca de</h4>
              <ul className="space-y-2">
                {footer.links.about.map((link) => (
                  <li key={link.label}>
                    <a href={link.url} className="text-gray-400 hover:text-white text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-4">Recursos</h4>
              <ul className="space-y-2">
                {footer.links.resources.map((link) => (
                  <li key={link.label}>
                    <a href={link.url} className="text-gray-400 hover:text-white text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">{footer.copyright.replace("{year}", currentYear.toString())}</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Política de Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Términos de Uso</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Accesibilidad</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
