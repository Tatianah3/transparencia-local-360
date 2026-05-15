import { useState } from "react";
import { Toaster } from "sonner@2.0.3";
import { WebsiteLanding } from "./components/WebsiteLanding";
import { MapView } from "./components/MapView";
import { IndicatorsPanel } from "./components/IndicatorsPanel";
// CitizenForm removed from the main landing as requested
import { TrainingSection } from "./components/TrainingSection";
import { Footer } from "./components/Footer";
import { ProjectDetail } from "./components/ProjectDetail";
import { Dialog, DialogContent } from "./components/ui/dialog";

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const handleProjectClick = (projectId: number) => {
    setSelectedProjectId(projectId);
  };

  const handleCloseProject = () => {
    setSelectedProjectId(null);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Toaster position="top-center" richColors />

      {/* Landing Section */}
      <WebsiteLanding />

      {/* Map Section */}
      <section id="mapa">
        <MapView
          onProjectClick={handleProjectClick}
          onBack={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </section>

      {/* Indicators Section */}
      <section id="indicadores">
        <IndicatorsPanel onBack={() => scrollToSection("mapa")} />
      </section>

  {/* Observaciones Ciudadanas removed from the main flow */}

      {/* Training Section */}
      <TrainingSection />

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal */}
      <Dialog open={selectedProjectId !== null} onOpenChange={handleCloseProject}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProjectId && (
            <ProjectDetail
              projectId={selectedProjectId}
              onBack={handleCloseProject}
              onViewForm={() => {
                handleCloseProject();
                // Observaciones form was removed; send users back to the map
                scrollToSection("mapa");
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
