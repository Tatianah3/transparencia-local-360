import { useState, useRef } from "react";
import { Project } from "../data/projects";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  DollarSign,
  Calendar,
  MapPin,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  Maximize2,
} from "lucide-react";

interface InteractiveMapProps {
  projects: Project[];
  onProjectClick?: (project: Project) => void;
}

export function InteractiveMap({
  projects,
  onProjectClick,
}: InteractiveMapProps) {
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Convert lat/lng to SVG coordinates
  const latLngToSVG = (lat: number, lng: number) => {
    const minLat = 9.91;
    const maxLat = 9.925;
    const minLng = -84.04;
    const maxLng = -84.025;

    const x = ((lng - minLng) / (maxLng - minLng)) * 1400;
    const y = ((maxLat - lat) / (maxLat - minLat)) * 900;

    return { x, y };
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.3, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.3, 0.5));
  };

  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const target = e.target as any;

    // Check if clicking on a marker (g element with marker class)
    if (
      target.closest &&
      (target.closest(".marker") || target.closest("button"))
    ) {
      return;
    }

    // Check if target is SVG element that's part of a marker
    let element = target;
    while (element && element !== e.currentTarget) {
      if (element.classList && element.classList.contains("marker")) {
        return;
      }
      element = element.parentElement;
    }

    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - pan.x,
      y: e.clientY - pan.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoom((prev) => Math.max(0.5, Math.min(3, prev + delta)));
  };

  const getSectorColor = (sector: string) => {
    const colors: Record<string, string> = {
      Salud: "#ef4444",
      "Obras Públicas y Transportes": "#3b82f6",
      Cultura: "#a855f7",
      "Ambiente y Energía": "#10b981",
      "Seguridad Ciudadana y Justicia": "#f97316",
      "Planes Conjuntos": "#6366f1",
    };
    return colors[sector] || "#6b7280";
  };

  const getEtapaColorClass = (etapa: string) => {
    const colors: Record<string, string> = {
      "En ejecución": "bg-green-100 text-green-700 border-green-300",
      Financiamiento: "bg-yellow-100 text-yellow-700 border-yellow-300",
      Factibilidad: "bg-blue-100 text-blue-700 border-blue-300",
      Prefactibilidad: "bg-indigo-100 text-indigo-700 border-indigo-300",
      Perfil: "bg-gray-100 text-gray-700 border-gray-300",
    };
    return colors[etapa] || "bg-gray-100 text-gray-700 border-gray-300";
  };

  const getSectorColorClass = (sector: string) => {
    const colors: Record<string, string> = {
      Salud: "bg-red-100 text-red-700 border-red-200",
      "Obras Públicas y Transportes": "bg-blue-100 text-blue-700 border-blue-200",
      Cultura: "bg-purple-100 text-purple-700 border-purple-200",
      "Ambiente y Energía": "bg-green-100 text-green-700 border-green-200",
      "Seguridad Ciudadana y Justicia":
        "bg-orange-100 text-orange-700 border-orange-200",
      "Planes Conjuntos": "bg-indigo-100 text-indigo-700 border-indigo-200",
    };
    return colors[sector] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  // Add safety check for projects
  if (!projects || projects.length === 0) {
    return (
      <div className="relative h-full w-full bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center p-8">
          <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-gray-700 mb-2">No hay proyectos para mostrar</h3>
          <p className="text-sm text-gray-600">
            Ajusta los filtros para ver proyectos en el mapa.
          </p>
        </div>
      </div>
    );
  }

  const selectedProject = selectedMarker
    ? projects.find((p) => p.id === selectedMarker)
    : null;

  const handleMarkerClick = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setSelectedMarker((prev) => (prev === projectId ? null : projectId));
  };

  // Districts of Curridabat
  const districts = [
    {
      name: "Curridabat Centro",
      x: 400,
      y: 300,
      path: "M 200 150 L 550 150 L 550 450 L 200 450 Z",
    },
    {
      name: "Granadilla",
      x: 850,
      y: 300,
      path: "M 550 150 L 1100 150 L 1100 450 L 550 450 Z",
    },
    {
      name: "Sánchez",
      x: 400,
      y: 650,
      path: "M 200 450 L 550 450 L 550 750 L 200 750 Z",
    },
    {
      name: "Tirrases",
      x: 850,
      y: 650,
      path: "M 550 450 L 1100 450 L 1100 750 L 550 750 Z",
    },
  ];

  // Major streets and avenues
  const streets = [
    {
      name: "Autopista Florencio del Castillo",
      path: "M 0 300 L 1400 300",
      type: "highway",
    },
    {
      name: "Av Central",
      path: "M 650 0 L 650 900",
      type: "main",
    },
    {
      name: "Calle 1",
      path: "M 100 200 L 1300 200",
      type: "secondary",
    },
    {
      name: "Calle 3",
      path: "M 100 500 L 1300 500",
      type: "secondary",
    },
    {
      name: "Av 2",
      path: "M 400 50 L 400 850",
      type: "secondary",
    },
    {
      name: "Av 4",
      path: "M 900 50 L 900 850",
      type: "secondary",
    },
  ];

  // Points of interest
  const landmarks = [
    {
      name: "Municipalidad de Curridabat",
      x: 450,
      y: 280,
      icon: "🏛️",
    },
    { name: "Parque Central", x: 500, y: 350, icon: "🌳" },
    { name: "Centro Comercial", x: 800, y: 250, icon: "🏬" },
    { name: "Hospital", x: 350, y: 500, icon: "🏥" },
    { name: "Escuela", x: 700, y: 600, icon: "🏫" },
    { name: "Iglesia", x: 550, y: 320, icon: "⛪" },
    { name: "Estadio", x: 950, y: 550, icon: "⚽" },
    { name: "Biblioteca", x: 420, y: 650, icon: "📚" },
  ];

  return (
    <div className="relative h-full w-full bg-gradient-to-br from-blue-50 to-green-50">
      {/* Map Container */}
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-hidden cursor-move select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        <svg
          viewBox="0 0 1400 900"
          className="w-full h-full"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: "center center",
            transition: isDragging ? "none" : "transform 0.2s ease-out",
          }}
        >
          {/* Definitions */}
          <defs>
            {/* Grid pattern */}
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="#e0e7ee"
                strokeWidth="0.5"
                opacity="0.5"
              />
            </pattern>

            {/* Building pattern */}
            <pattern
              id="buildings"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="2" y="2" width="7" height="7" fill="#cbd5e1" opacity="0.3" />
              <rect x="11" y="2" width="7" height="7" fill="#cbd5e1" opacity="0.3" />
              <rect x="2" y="11" width="7" height="7" fill="#cbd5e1" opacity="0.3" />
              <rect
                x="11"
                y="11"
                width="7"
                height="7"
                fill="#cbd5e1"
                opacity="0.3"
              />
            </pattern>

            {/* Shadow filter */}
            <filter id="shadow">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Background */}
          <rect x="0" y="0" width="1400" height="900" fill="#f8fafc" />
          <rect x="0" y="0" width="1400" height="900" fill="url(#grid)" />

          {/* Districts with boundaries */}
          {districts.map((district, idx) => (
            <g key={district.name}>
              {/* District area */}
              <path
                d={district.path}
                fill={idx % 2 === 0 ? "#dcfce7" : "#dbeafe"}
                opacity="0.3"
                stroke="#94a3b8"
                strokeWidth="1"
                strokeDasharray="5,5"
              />

              {/* District name (large, centered) */}
              <text
                x={district.x}
                y={district.y - 30}
                textAnchor="middle"
                className="fill-gray-700 pointer-events-none"
                style={{ fontSize: "24px", fontWeight: "600" }}
              >
                {district.name}
              </text>

              {/* Urban area pattern */}
              <rect
                x={district.x - 100}
                y={district.y - 50}
                width="200"
                height="150"
                fill="url(#buildings)"
                opacity="0.5"
              />
            </g>
          ))}

          {/* Rivers/Waterways */}
          <g className="waterways">
            <path
              d="M 0 400 Q 200 420 400 400 T 800 390 T 1400 400"
              stroke="#3b82f6"
              strokeWidth="8"
              fill="none"
              opacity="0.3"
            />
            <text
              x="100"
              y="430"
              className="fill-blue-600 text-xs"
              style={{ fontSize: "11px" }}
            >
              Río María Aguilar
            </text>
          </g>

          {/* Streets and Roads */}
          {streets.map((street) => {
            const strokeWidth =
              street.type === "highway" ? 8 : street.type === "main" ? 5 : 3;
            const strokeColor = street.type === "highway" ? "#f97316" : "#475569";

            return (
              <g key={street.name}>
                {/* Road background */}
                <path
                  d={street.path}
                  stroke={strokeColor}
                  strokeWidth={strokeWidth + 2}
                  fill="none"
                  opacity="0.2"
                />
                {/* Road */}
                <path
                  d={street.path}
                  stroke={strokeColor}
                  strokeWidth={strokeWidth}
                  fill="none"
                  opacity="0.6"
                />
                {/* Center line for highways */}
                {street.type === "highway" && (
                  <path
                    d={street.path}
                    stroke="white"
                    strokeWidth="1"
                    fill="none"
                    strokeDasharray="10,10"
                    opacity="0.6"
                  />
                )}
              </g>
            );
          })}

          {/* Street Labels */}
          <g className="street-labels">
            <text
              x="700"
              y="190"
              className="fill-gray-600"
              style={{ fontSize: "11px" }}
            >
              Calle 1
            </text>
            <text
              x="700"
              y="295"
              className="fill-orange-600"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              Autopista Florencio del Castillo
            </text>
            <text
              x="700"
              y="490"
              className="fill-gray-600"
              style={{ fontSize: "11px" }}
            >
              Calle 3
            </text>
            <text
              x="410"
              y="120"
              className="fill-gray-600"
              style={{ fontSize: "11px" }}
            >
              Av 2
            </text>
            <text
              x="660"
              y="120"
              className="fill-gray-600"
              style={{ fontSize: "12px", fontWeight: "600" }}
            >
              Av Central
            </text>
            <text
              x="910"
              y="120"
              className="fill-gray-600"
              style={{ fontSize: "11px" }}
            >
              Av 4
            </text>
          </g>

          {/* Parks and Green Spaces */}
          <g className="parks">
            <rect
              x="480"
              y="330"
              width="80"
              height="80"
              fill="#22c55e"
              opacity="0.3"
              rx="8"
            />
            <circle cx="520" cy="370" r="15" fill="#16a34a" opacity="0.4" />
            <circle cx="540" cy="380" r="12" fill="#16a34a" opacity="0.4" />
          </g>

          {/* Landmarks */}
          {landmarks.map((landmark) => (
            <g key={landmark.name}>
              <circle
                cx={landmark.x}
                cy={landmark.y}
                r="18"
                fill="white"
                stroke="#64748b"
                strokeWidth="2"
                filter="url(#shadow)"
              />
              <text
                x={landmark.x}
                y={landmark.y + 6}
                textAnchor="middle"
                style={{ fontSize: "16px" }}
              >
                {landmark.icon}
              </text>
              {zoom > 1.2 && (
                <text
                  x={landmark.x}
                  y={landmark.y + 32}
                  textAnchor="middle"
                  className="fill-gray-700"
                  style={{
                    fontSize: "10px",
                    fontWeight: "500",
                  }}
                >
                  {landmark.name}
                </text>
              )}
            </g>
          ))}

          {/* Project Markers */}
          {projects.map((project) => {
            const pos = latLngToSVG(project.lat, project.lng);
            const color = getSectorColor(project.sector);
            const isSelected = selectedMarker === project.id;
            const isHovered = hoveredMarker === project.id;
            const isActive = project.etapa === "En ejecución";
            const scale = isSelected ? 1.5 : isHovered ? 1.3 : 1;

            return (
              <g
                key={project.id}
                className="marker cursor-pointer"
                transform={`translate(${pos.x}, ${pos.y})`}
                onMouseEnter={() => setHoveredMarker(project.id)}
                onMouseLeave={() => setHoveredMarker(null)}
                onClick={(e) => handleMarkerClick(project.id, e)}
                style={{
                  transition: "transform 0.2s",
                  pointerEvents: "all",
                }}
              >
                {/* Invisible click area - larger hit target */}
                <circle
                  cx="0"
                  cy="0"
                  r="25"
                  fill="transparent"
                  style={{ cursor: "pointer" }}
                />

                {/* Shadow */}
                <ellipse
                  cx="0"
                  cy="32"
                  rx="10"
                  ry="4"
                  fill="black"
                  opacity="0.25"
                  style={{ pointerEvents: "none" }}
                />

                {/* Marker pin */}
                <g
                  transform={`scale(${scale})`}
                  style={{
                    transition: "transform 0.2s",
                    pointerEvents: "none",
                  }}
                >
                  <path
                    d="M 0,-24 C -9,-24 -17,-16 -17,-7 C -17,5 0,24 0,24 C 0,24 17,5 17,-7 C 17,-16 9,-24 0,-24 Z"
                    fill={color}
                    stroke={isActive ? "#fbbf24" : "#ffffff"}
                    strokeWidth={isActive ? 2.5 : 2}
                    filter="url(#shadow)"
                  />
                  <circle cx="0" cy="-7" r="6" fill="white" opacity="0.95" />
                  {isActive && (
                    <circle cx="0" cy="-7" r="3" fill={color} opacity="0.8" />
                  )}
                </g>

                {/* Label on hover */}
                {(isHovered || isSelected) && (
                  <g transform="translate(0, -45)">
                    <rect
                      x="-80"
                      y="-18"
                      width="160"
                      height="24"
                      fill="white"
                      rx="6"
                      stroke="#cbd5e1"
                      strokeWidth="1"
                      filter="url(#shadow)"
                    />
                    <text
                      x="0"
                      y="-2"
                      textAnchor="middle"
                      className="fill-gray-900 pointer-events-none"
                      style={{
                        fontSize: "11px",
                        fontWeight: "500",
                      }}
                    >
                      {project.nombre.substring(0, 25)}...
                    </text>
                  </g>
                )}
              </g>
            );
          })}

          {/* Map Title */}
          <g>
            <rect
              x="450"
              y="10"
              width="500"
              height="50"
              fill="white"
              opacity="0.95"
              rx="8"
              filter="url(#shadow)"
            />
            <text
              x="700"
              y="32"
              textAnchor="middle"
              className="fill-gray-800"
              style={{ fontSize: "18px", fontWeight: "600" }}
            >
              Curridabat, San José, Costa Rica
            </text>
            <text
              x="700"
              y="48"
              textAnchor="middle"
              className="fill-gray-600"
              style={{ fontSize: "12px" }}
            >
              Mapa de Proyectos Públicos
            </text>
          </g>

          {/* Compass */}
          <g transform="translate(100, 100)">
            <circle
              cx="0"
              cy="0"
              r="30"
              fill="white"
              opacity="0.9"
              stroke="#cbd5e1"
              strokeWidth="2"
            />
            <path d="M 0,-20 L 5,0 L 0,20 L -5,0 Z" fill="#ef4444" />
            <text
              x="0"
              y="-35"
              textAnchor="middle"
              className="fill-gray-700"
              style={{ fontSize: "14px", fontWeight: "600" }}
            >
              N
            </text>
          </g>
        </svg>
      </div>

      {/* Map Controls */}
      <div className="absolute bottom-6 right-6 flex flex-col gap-2 z-10">
        <Button
          size="icon"
          variant="secondary"
          onClick={handleZoomIn}
          className="bg-white shadow-lg hover:bg-gray-100"
          title="Acercar"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          onClick={handleZoomOut}
          className="bg-white shadow-lg hover:bg-gray-100"
          title="Alejar"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          onClick={handleReset}
          className="bg-white shadow-lg hover:bg-gray-100"
          title="Restablecer vista"
        >
          <Maximize2 className="h-4 w-4" />
        </Button>
      </div>

      {/* Zoom indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg px-4 py-2 z-10">
        <p className="text-sm text-gray-700">Zoom: {(zoom * 100).toFixed(0)}%</p>
      </div>

      {/* Project Details Popup */}
      {selectedProject && (
        <div className="absolute top-6 right-6 w-96 z-20 animate-in slide-in-from-right">
          <Card className="p-6 shadow-2xl border-2">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-wrap gap-2 flex-1">
                  <Badge
                    variant="outline"
                    className={getEtapaColorClass(selectedProject.etapa)}
                  >
                    {selectedProject.etapa}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={getSectorColorClass(selectedProject.sector)}
                  >
                    {selectedProject.sector}
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedMarker(null)}
                  className="h-8 w-8 hover:bg-gray-100"
                >
                  ✕
                </Button>
              </div>

              <div>
                <h3 className="text-gray-900 mb-2 leading-snug">
                  {selectedProject.nombre}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                  {selectedProject.descripcion}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t">
                <div className="flex items-center gap-2 text-sm">
                  <div className="p-1.5 bg-green-100 rounded">
                    <DollarSign className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Inversión</p>
                    <p className="text-gray-900">
                      ₡{selectedProject.costaEstimado.toFixed(2)} Millones
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="p-1.5 bg-blue-100 rounded">
                    <Calendar className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Período</p>
                    <p className="text-gray-900">{selectedProject.anioEjecucion}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="p-1.5 bg-purple-100 rounded">
                    <MapPin className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Ubicación</p>
                    <p className="text-gray-900">{selectedProject.canton}</p>
                  </div>
                </div>
              </div>

              {onProjectClick && (
                <Button
                  size="sm"
                  className="w-full gap-2 mt-2"
                  onClick={() => {
                    onProjectClick(selectedProject);
                    setSelectedMarker(null);
                  }}
                >
                  Ver detalles completos
                  <ExternalLink className="h-3 w-3" />
                </Button>
              )}
            </div>
          </Card>
        </div>
      )}

      {/* Instructions */}
      <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 z-10 max-w-xs border">
        <p className="text-sm text-gray-800 mb-2 flex items-center gap-2">
          <span className="text-lg">🗺️</span>
          <span>Cómo usar el mapa:</span>
        </p>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>• Arrastra para mover el mapa</li>
          <li>• Usa los controles para hacer zoom</li>
          <li>• Haz clic en los marcadores para ver proyectos</li>
          <li>• Los marcadores dorados están en ejecución</li>
        </ul>
      </div>
    </div>
  );
}
