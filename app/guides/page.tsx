import type { Metadata } from "next";
import { guides } from "@/data/guides";
import GuideCard from "@/components/GuideCard";

export const metadata: Metadata = {
  title: "Air Quality Guides | AptAirSense",
  description:
    "Learn everything about indoor air quality — CO2, PM2.5, VOC, radon, and humidity — with our practical guides for apartment dwellers.",
  alternates: {
    canonical: "https://aptairsense.com/guides",
  },
};

export default function GuidesIndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="dark-section" style={{ padding: "4rem 1.5rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 style={{ color: "white", marginBottom: "1rem" }}>Air Quality Guides</h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.125rem", maxWidth: "560px", margin: "0 auto" }}>
            Evidence-based guides to understanding and improving the air in your apartment.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section style={{ padding: "4rem 1.5rem", backgroundColor: "var(--color-bg)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
            className="guides-grid"
          >
            {guides.map((guide, i) => (
              <GuideCard key={guide.slug} guide={guide} index={i} />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) { .guides-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .guides-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
