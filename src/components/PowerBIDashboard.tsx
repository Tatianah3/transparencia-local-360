import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

interface MetricCardProps {
  label: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  color?: string;
}

function MetricCard({
  label,
  value,
  change,
  icon,
  color = "#0066cc",
}: MetricCardProps) {
  const isPositive = change ? change > 0 : false;

  return (
    <div
      className="p-6 rounded-lg border"
      style={{
        backgroundColor: "white",
        borderColor: "#e8ecf1",
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p
            className="text-sm font-medium mb-2"
            style={{ color: "#5a6c7d" }}
          >
            {label}
          </p>
          <p
            className="text-3xl font-bold"
            style={{ color: color }}
          >
            {value}
          </p>
        </div>
        {icon && (
          <div
            className="p-3 rounded-lg"
            style={{
              backgroundColor: `${color}15`,
            }}
          >
            {icon}
          </div>
        )}
      </div>

      {change !== undefined && (
        <div className="flex items-center gap-2">
          {isPositive ? (
            <ArrowUpRight size={16} style={{ color: "#00a34d" }} />
          ) : (
            <ArrowDownLeft size={16} style={{ color: "#dc2626" }} />
          )}
          <span
            className="text-sm font-medium"
            style={{
              color: isPositive ? "#00a34d" : "#dc2626",
            }}
          >
            {Math.abs(change)}% {isPositive ? "aumento" : "disminución"}
          </span>
          <span
            className="text-sm"
            style={{ color: "#5a6c7d" }}
          >
            vs mes anterior
          </span>
        </div>
      )}
    </div>
  );
}

interface PowerBIDashboardProps {
  onOpenAnalytics?: () => void;
}

export function PowerBIDashboard({ onOpenAnalytics }: PowerBIDashboardProps) {
  return (
    <section
      className="py-16 px-6"
      style={{
        backgroundColor: "#f5f7fa",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2
            className="text-3xl font-bold mb-3"
            style={{ color: "#1a3a52" }}
          >
            Resumen de Proyectos
          </h2>
          <p
            className="text-lg"
            style={{ color: "#5a6c7d" }}
          >
            Visualiza en tiempo real el estado y avance de los proyectos municipales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            label="Proyectos Activos"
            value="24"
            change={12}
            color="#0066cc"
          />
          <MetricCard
            label="Completados"
            value="8"
            change={25}
            color="#00a34d"
          />
          <MetricCard
            label="En Proceso"
            value="12"
            change={-5}
            color="#d97706"
          />
          <MetricCard
            label="Presupuesto Ejecutado"
            value="₡2.3B"
            change={18}
            color="#b8860b"
          />
        </div>

        <div
          className="rounded-lg p-8 border"
          style={{
            backgroundColor: "white",
            borderColor: "#e8ecf1",
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3
              className="text-2xl font-bold"
              style={{ color: "#1a3a52" }}
            >
              Análisis Detallado
            </h3>
            <button
              onClick={onOpenAnalytics}
              className="px-6 py-2 rounded-lg font-medium transition-all"
              style={{
                backgroundColor: "#0066cc",
                color: "white",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1a3a52";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#0066cc";
              }}
            >
              Ver más
            </button>
          </div>

          <div
            className="aspect-video rounded-lg flex items-center justify-center"
            style={{
              backgroundColor: "#f5f7fa",
              border: "2px dashed #d1d8e0",
            }}
          >
            <div className="text-center">
              <p
                className="text-lg font-medium mb-2"
                style={{ color: "#1a3a52" }}
              >
                Integración Power BI
              </p>
              <p
                style={{ color: "#5a6c7d" }}
              >
                Incrusta aquí tu dashboard de Power BI usando un iframe
              </p>
              <code
                className="block mt-4 p-3 rounded text-sm"
                style={{
                  backgroundColor: "#f0f6ff",
                  color: "#0066cc",
                  fontFamily: "monospace",
                }}
              >
                {`<iframe src="https://app.powerbi.com/..." />`}
              </code>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: "#f0f6ff" }}>
            <p className="text-sm" style={{ color: "#0066cc" }}>
              💡 Para integrar Power BI: Obtén el URL embed de tu reporte en Power BI Service
              y reemplaza el iframe en la sección anterior.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
