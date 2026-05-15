import { useState } from "react";
import { projects, Project } from "../data/projects";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { MapIcon, Users } from "lucide-react";
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
    <section className="py-8 px-8 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Button onClick={onBack} variant="outline" className="mb-6">
          ← Volver al inicio
        </Button>

        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="map" className="gap-2">
              <MapIcon className="h-4 w-4" />
              Mapa de Proyectos
            </TabsTrigger>
            <TabsTrigger value="social" className="gap-2">
              <Users className="h-4 w-4" />
              Participación Ciudadana
            </TabsTrigger>
          </TabsList>

          {/* Map Tab */}
          <TabsContent value="map" className="mt-0">
            <div className="mb-6">
              <h2 className="text-gray-800 mb-2">Mapa Interactivo de Proyectos</h2>
              <p className="text-gray-600">
                Explora los proyectos de Curridabat en el mapa. Haz clic en los
                marcadores para más información.
              </p>
            </div>
            <div className="relative h-[calc(100vh-300px)] w-full rounded-2xl overflow-hidden shadow-2xl">
              <InteractiveMap
                projects={projects}
                onProjectClick={handleProjectSelect}
              />
            </div>
          </TabsContent>

          {/* Social Feed Tab */}
          <TabsContent value="social" className="mt-0">
            <div className="mb-8">
              <h2 className="text-gray-800 mb-2">Participación Ciudadana</h2>
              <p className="text-gray-600">
                Comparte tus opiniones, sugerencias y experiencias sobre los proyectos
                públicos. Tu voz es importante para mejorar nuestra comunidad.
              </p>
            </div>
            <SocialFeed />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
