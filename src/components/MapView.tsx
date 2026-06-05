import { useState } from "react";
import { projects, Project } from "../data/projects";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { MapIcon, Users, ArrowLeft } from "lucide-react";
import { InteractiveMap } from "./InteractiveMap";
import { SocialFeed } from "./SocialFeed";

interface MapViewProps {
  onProjectClick: (projectId: number) => void;
  onBack: () => void;
}

export function MapView({ onProjectClick, onBack }: MapViewProps) {
  const [activeTab, setActiveTab] = useState("map");

  const handleProjectSelect = (project: Project) => {
    onProjectClick(parseInt(project.id));
  };

  return (
    <section className="gov-background-light min-h-screen">
      <div className="gov-container py-12 px-6">
        {/* Header Section */}
        <div className="mb-12">
          <Button
            onClick={onBack}
            className="mb-8 inline-flex items-center gap-2 gov-button-outline"
          >
            <ArrowLeft size={18} />
            Volver al inicio
          </Button>

          <div className="mb-8">
            <h2 className="gov-title mb-2">
              Monitoreo de Proyectos Municipales
            </h2>
            <p className="gov-text-muted text-lg">
              Explora en tiempo real los proyectos de infraestructura y servicios
              de tu comunidad. Acceso transparente a información municipal.
            </p>
          </div>
        </div>

        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="mb-8 overflow-x-auto">
            <TabsList
              className="inline-flex gap-2 p-1 rounded-lg"
              style={{
                backgroundColor: "rgba(255,255,255,0.8)",
                border: "1px solid var(--gov-border-light)",
              }}
            >
              <TabsTrigger
                value="map"
                className="gov-button flex items-center gap-2"
                style={{
                  color: activeTab === "map" ? "white" : "var(--gov-gray)",
                  backgroundColor:
                    activeTab === "map" ? "#0066cc" : "transparent",
                  fontWeight: activeTab === "map" ? 600 : 500,
                }}
              >
                <MapIcon size={18} />
                Mapa Interactivo
              </TabsTrigger>
              <TabsTrigger
                value="social"
                className="gov-button flex items-center gap-2"
                style={{
                  color: activeTab === "social" ? "white" : "var(--gov-gray)",
                  backgroundColor:
                    activeTab === "social" ? "#00a34d" : "transparent",
                  fontWeight: activeTab === "social" ? 600 : 500,
                }}
              >
                <Users size={18} />
                Participación Ciudadana
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Map Tab */}
          <TabsContent value="map" className="mt-0 space-y-6">
            <div className="gov-card p-6">
              <h3 className="gov-subtitle mb-2">Mapa de Proyectos</h3>
              <p className="gov-text-muted">
                Haz clic en los marcadores para ver detalles completos de cada
                proyecto, incluyendo presupuesto, estado de avance y documentos.
              </p>
            </div>
            <div
              className="relative w-full rounded-xl overflow-hidden gov-shadow-large"
              style={{
                height: "calc(100vh - 350px)",
                border: "1px solid var(--gov-border-light)",
              }}
            >
              <InteractiveMap
                projects={projects}
                onProjectClick={handleProjectSelect}
              />
            </div>
          </TabsContent>

          {/* Social Feed Tab */}
          <TabsContent value="social" className="mt-0 space-y-6">
            <div className="gov-card p-6">
              <h3 className="gov-subtitle mb-2">Participación Ciudadana</h3>
              <p className="gov-text-muted">
                Comparte tus opiniones, sugerencias y experiencias sobre los
                proyectos públicos. Tu participación es fundamental para
                mejorar la transparencia y calidad de los servicios
                municipales.
              </p>
            </div>
            <div className="gov-card p-8">
              <SocialFeed />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
