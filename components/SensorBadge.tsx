import type { SensorType } from "@/data/products";

const ALL_SENSORS: SensorType[] = ["CO2", "PM2.5", "VOC", "Radon", "Humidity", "Temp"];

interface SensorBadgeProps {
  activeSensors: SensorType[];
  size?: "sm" | "md";
}

export default function SensorBadge({ activeSensors, size = "sm" }: SensorBadgeProps) {
  const active = new Set(activeSensors);
  const fontSize = size === "sm" ? "10px" : "11px";
  const padding = size === "sm" ? "2px 7px" : "3px 9px";

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
      {ALL_SENSORS.map((sensor) => {
        const isActive = active.has(sensor);
        return (
          <span
            key={sensor}
            style={{
              display: "inline-block",
              padding,
              borderRadius: "4px",
              fontSize,
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              backgroundColor: isActive ? "var(--color-accent)" : "#E8EDF3",
              color: isActive ? "white" : "var(--color-text-muted)",
              transition: "opacity 0.15s",
            }}
          >
            {sensor}
          </span>
        );
      })}
    </div>
  );
}
