import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calendar, DollarSign, MapPin, MessageSquare } from "lucide-react";
import { projects } from "../data/projects";

interface ProjectDetailProps {
  projectId: number;
  onBack: () => void;
  onViewForm: () => void;
}

export function ProjectDetail({ projectId, onBack, onViewForm }: ProjectDetailProps) {
  const project = projects.find((p) => p.id === projectId.toString());

  if (!project) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-600">Proyecto no encontrado</p>
        <Button onClick={onBack} variant="outline" className="mt-4">
          Cerrar
        </Button>
      </div>
    );
  }

  const getStageBadgeColor = (stage: string) => {
    switch (stage) {
      case "En ejecución":
        return "bg-green-500 text-white";
      case "Financiamiento":
        return "bg-yellow-500 text-white";
      case "Factibilidad":
        return "bg-blue-500 text-white";
      case "Prefactibilidad":
        return "bg-indigo-500 text-white";
      case "Perfil":
        return "bg-gray-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getSectorBadgeColor = (sector: string) => {
    const colors: Record<string, string> = {
      Salud: "bg-red-100 text-red-700",
      "Obras Públicas y Transportes": "bg-blue-100 text-blue-700",
      Cultura: "bg-purple-100 text-purple-700",
      "Ambiente y Energía": "bg-green-100 text-green-700",
      "Seguridad Ciudadana y Justicia": "bg-orange-100 text-orange-700",
      "Planes Conjuntos": "bg-indigo-100 text-indigo-700",
    };
    return colors[sector] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 pb-4 border-b-2" style={{ borderColor: "#4CAF50" }}>
        <h2 className="text-gray-900 mb-3">{project.nombre}</h2>
        <div className="flex flex-wrap gap-2">
          <Badge className={getStageBadgeColor(project.etapa)}>
            {project.etapa}
          </Badge>
          <Badge variant="outline" className={getSectorBadgeColor(project.sector)}>
            {project.sector}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <h3 className="text-gray-800 mb-4">Descripción</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{project.descripcion}</p>

          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-50 rounded">
              <MapPin size={20} style={{ color: "#4CAF50" }} />
            </div>
            <div>
              <p className="text-gray-500 mb-0">Ubicación</p>
              <p className="text-gray-800 mb-0">{project.canton}</p>
            </div>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 mt-4">
            <p className="text-sm text-blue-900 mb-1">
              <strong>Coordenadas:</strong>
            </p>
            <p className="text-xs text-blue-700">
              Lat: {project.lat.toFixed(4)}, Lng: {project.lng.toFixed(4)}
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="text-gray-800 mb-4">Datos del Proyecto</h3>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 rounded">
                <Calendar size={20} style={{ color: "#1976D2" }} />
              </div>
              <div>
                <p className="text-gray-500 mb-1">Período de ejecución</p>
                <p className="text-gray-800 mb-0">{project.anioEjecucion}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-green-50 rounded">
                <DollarSign size={20} style={{ color: "#2E7D32" }} />
              </div>
              <div>
                <p className="text-gray-500 mb-1">Inversión estimada</p>
                <p className="mb-0" style={{ color: "#2E7D32", fontSize: "20px" }}>
                  ₡{project.costaEstimado.toFixed(2)} Millones
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <Button
              onClick={onViewForm}
              className="w-full text-white shadow-md gap-2"
              size="lg"
              style={{
                backgroundColor: "#1976D2",
              }}
            >
              <MessageSquare size={18} />
              Enviar observación sobre este proyecto
            </Button>
            <Button onClick={onBack} variant="outline" className="w-full" size="lg">
              Cerrar
            </Button>
          </div>
        </div>
      </div>

      {/* Additional info */}
      <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <p className="text-sm text-amber-900">
          <strong>💡 Participa:</strong> Si tienes información adicional sobre este
          proyecto o has observado avances en el terreno, comparte tu observación para
          mantener la plataforma actualizada.
        </p>
      </div>
    </div>
  );
}
