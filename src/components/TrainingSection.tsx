import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Download, Calendar, Clock, CheckCircle } from "lucide-react";
import { siteConfig } from "../config/site-config";

export function TrainingSection() {
  const { training } = siteConfig;

  return (
    <section className="py-16 px-8 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="mb-4 bg-white border-blue-300 text-blue-700"
          >
            🎓 Educación Ciudadana
          </Badge>
          <h2 className="text-gray-900 mb-4">{training.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {training.description}
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {training.modules.map((module, index) => (
            <Card
              key={module.id}
              className="p-6 hover:shadow-xl transition-shadow bg-white border-2 border-gray-100 hover:border-blue-200"
            >
              <div className="flex items-start gap-4">
                <div
                  className="text-4xl p-3 rounded-xl"
                  style={{
                    backgroundColor: index % 2 === 0 ? "#E3F2FD" : "#E8F5E9",
                  }}
                >
                  {module.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-gray-900 mb-0">{module.title}</h3>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="outline" className="bg-gray-50 text-gray-600">
                      <Clock className="h-3 w-3 mr-1" />
                      {module.duration}
                    </Badge>
                    <span className="text-xs text-gray-500">
                      Módulo {module.id} de {training.modules.length}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{module.description}</p>

                  {/* Topics */}
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 mb-2">
                      Temas cubiertos:
                    </p>
                    <div className="space-y-1">
                      {module.topics.map((topic, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-gray-900 mb-2">
                ¿Listo para comenzar tu capacitación?
              </h3>
              <p className="text-gray-600">
                Accede a todos nuestros recursos educativos y participa en talleres
                interactivos con el equipo municipal.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="gap-2"
                style={{ backgroundColor: "#1976D2" }}
              >
                <Calendar className="h-4 w-4" />
                {training.ctaButton}
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                {training.downloadGuide}
              </Button>
            </div>
          </div>
        </div>

        {/* Info boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="p-6 bg-blue-50 border-blue-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="text-2xl">📅</div>
              <h4 className="text-gray-900 mb-0">Talleres mensuales</h4>
            </div>
            <p className="text-sm text-gray-700">
              Primer martes de cada mes a las 6:00 PM vía Zoom
            </p>
          </Card>

          <Card className="p-6 bg-green-50 border-green-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="text-2xl">💬</div>
              <h4 className="text-gray-900 mb-0">Comunidad activa</h4>
            </div>
            <p className="text-sm text-gray-700">
              Únete a nuestro grupo de WhatsApp para dudas y anuncios
            </p>
          </Card>

          <Card className="p-6 bg-purple-50 border-purple-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="text-2xl">🏆</div>
              <h4 className="text-gray-900 mb-0">Certificación</h4>
            </div>
            <p className="text-sm text-gray-700">
              Obtén tu certificado de participación ciudadana
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
