import { Card } from "./ui/card";
import { DollarSign, Hammer, Calendar } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { siteConfig } from "../config/site-config";

interface IndicatorsPanelProps {
  onBack: () => void;
}

const chartData = [
  { name: "Salud", value: 35, color: "#2E7D32" },
  { name: "Educación", value: 28, color: "#1976D2" },
  { name: "Infraestructura", value: 22, color: "#F57C00" },
  { name: "Ambiente", value: 15, color: "#0099CC" },
];

export function IndicatorsPanel({ onBack }: IndicatorsPanelProps) {
  const { indicators } = siteConfig;

  return (
    <section className="py-16 px-8" style={{ backgroundColor: "#F7F9FB" }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-gray-800 mb-8 text-center">{indicators.title}</h2>

        {/* Indicator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {indicators.cards.map((card, index) => {
            const Icon =
              card.icon === "dollar"
                ? DollarSign
                : card.icon === "hammer"
                ? Hammer
                : Calendar;
            const bgColor =
              card.icon === "dollar"
                ? "#E8F5E9"
                : card.icon === "hammer"
                ? "#E3F2FD"
                : "#FFF3E0";

            return (
              <Card
                key={index}
                className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow"
                style={{ borderRadius: "16px" }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: bgColor }}>
                    <Icon size={32} style={{ color: card.color }} />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">{card.label}</p>
                    <p
                      className="mb-0"
                      style={{
                        color: card.color,
                        fontSize: "36px",
                      }}
                    >
                      {card.value}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Chart Section */}
        <Card className="p-8 bg-white shadow-lg" style={{ borderRadius: "16px" }}>
          <h3 className="text-gray-800 mb-6 text-center">
            {indicators.chartTitle}
          </h3>
            <div className="w-full h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    animationBegin={0}
                    animationDuration={800}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
        </Card>
      </div>
    </section>
  );
}
