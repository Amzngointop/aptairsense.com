export default function AirQualityScale() {
  const scales = [
    {
      label: "CO2",
      unit: "ppm",
      zones: [
        { label: "Good", value: "< 800", color: "#22A06B" },
        { label: "Moderate", value: "800–1200", color: "#E8890C" },
        { label: "Poor", value: "1200–2000", color: "#E06B20" },
        { label: "Hazardous", value: "2000+", color: "#D63B3B" },
      ],
    },
    {
      label: "PM2.5",
      unit: "μg/m³",
      zones: [
        { label: "Good", value: "0–12", color: "#22A06B" },
        { label: "Moderate", value: "12–35", color: "#E8890C" },
        { label: "Poor", value: "35–55", color: "#E06B20" },
        { label: "Hazardous", value: "55+", color: "#D63B3B" },
      ],
    },
    {
      label: "VOC",
      unit: "level",
      zones: [
        { label: "Low", value: "Good", color: "#22A06B" },
        { label: "Medium", value: "Moderate", color: "#E8890C" },
        { label: "High", value: "Poor", color: "#E06B20" },
        { label: "Very High", value: "Hazardous", color: "#D63B3B" },
      ],
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {scales.map((scale) => (
        <div key={scale.label}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "0.875rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.7)",
                minWidth: "60px",
              }}
            >
              {scale.label}
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              ({scale.unit})
            </span>
          </div>

          {/* Gradient bar */}
          <div
            style={{
              height: "16px",
              borderRadius: "8px",
              background: `linear-gradient(to right, #22A06B 0%, #E8890C 33%, #E06B20 66%, #D63B3B 100%)`,
              marginBottom: "0.5rem",
              position: "relative",
              overflow: "visible",
            }}
          >
            {/* Zone markers */}
            {[33, 66].map((pct) => (
              <div
                key={pct}
                style={{
                  position: "absolute",
                  left: `${pct}%`,
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  backgroundColor: "rgba(255,255,255,0.4)",
                }}
              />
            ))}
          </div>

          {/* Zone labels */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.25rem" }}>
            {scale.zones.map((zone) => (
              <div key={zone.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: zone.color,
                    marginBottom: "2px",
                  }}
                >
                  {zone.label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {zone.value} {scale.unit !== "level" ? scale.unit : ""}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
