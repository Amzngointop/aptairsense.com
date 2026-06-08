import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About AptAirSense | Independent Apartment Safety Reviews",
  description:
    "AptAirSense is an independent review site helping apartment dwellers find the best CO detectors, smoke alarms, dehumidifiers, air conditioners, air purifiers, and humidity monitors.",
  alternates: {
    canonical: "https://aptairsense.com/about",
  },
};

const CATEGORIES = [
  {
    label: "CO Detectors",
    href: "/best/best-carbon-monoxide-detectors",
    description:
      "Carbon monoxide is colorless and odorless — impossible to detect without a dedicated alarm. We review battery-powered, plug-in, and combination models suited for apartments.",
  },
  {
    label: "Dehumidifiers",
    href: "/best/best-dehumidifiers-apartment",
    description:
      "High humidity promotes mold growth and dust mites. We cover compact dehumidifiers sized for studios, bedrooms, and small living spaces.",
  },
  {
    label: "Smoke Detectors",
    href: "/best/best-smoke-detectors-apartment",
    description:
      "From basic ionization models to dual-sensor and smart alarms, we help you choose the right smoke detector for your apartment layout.",
  },
  {
    label: "Air Conditioners",
    href: "/best/best-air-conditioners-apartment",
    description:
      "Window units and portable air conditioners for renters who can't install central HVAC. We focus on BTU sizing, energy efficiency, and noise levels.",
  },
  {
    label: "Air Purifiers",
    href: "/best/best-air-purifiers-small-rooms",
    description:
      "True HEPA air purifiers that remove PM2.5, dust, pet dander, and allergens from apartment air without overwhelming a small room.",
  },
  {
    label: "Humidity & Temperature Monitors",
    href: "/best/best-humidity-temperature-monitors",
    description:
      "Accurate hygrometers and thermometers to track indoor conditions, prevent mold, and maintain a comfortable living environment year-round.",
  },
];

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: "white", minHeight: "100vh" }}>
      <div className="container" style={{ padding: "4rem 1.5rem", maxWidth: "800px" }}>
        <h1 style={{ marginBottom: "0.75rem" }}>About AptAirSense</h1>
        <p
          style={{
            color: "var(--color-text-muted)",
            fontSize: "1.125rem",
            lineHeight: 1.75,
            marginBottom: "3rem",
            borderBottom: "1px solid var(--color-border)",
            paddingBottom: "2rem",
          }}
        >
          Independent reviews of indoor safety and air quality products for apartment dwellers and renters.
        </p>

        {/* Who We Are */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Who We Are</h2>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
            AptAirSense is an independent editorial site focused on indoor safety and air quality for apartment
            dwellers and renters. We cover the products that protect you from invisible hazards — carbon monoxide,
            smoke, excess humidity, and poor air quality — and help you find the right solution for a small space.
          </p>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8 }}>
            Most apartment renters face the same challenge: their living space is small, installation options are
            limited, and the stakes of getting it wrong are high. We built AptAirSense to cut through the noise and
            give you direct, honest guidance on exactly which products are worth buying.
          </p>
        </section>

        {/* How We Work */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>How We Work</h2>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
            Our recommendations are based on analysis of manufacturer specifications, published safety standards
            (UL, EN, ISO), and verified user feedback from thousands of real apartment owners. We evaluate sensor
            accuracy, battery life, alarm volume, form factor, smart home compatibility, and long-term reliability
            before naming a top pick.
          </p>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8 }}>
            We do not accept payment for reviews or allow brands to influence our editorial conclusions. Every
            ranking reflects our independent assessment — nothing more.
          </p>
        </section>

        {/* Our Categories */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1.25rem" }}>Our Categories</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {CATEGORIES.map((cat) => (
              <div
                key={cat.href}
                style={{
                  padding: "1.25rem 1.5rem",
                  borderRadius: "10px",
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-bg)",
                }}
              >
                <Link
                  href={cat.href}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "var(--color-accent)",
                    textDecoration: "none",
                    display: "inline-block",
                    marginBottom: "0.4rem",
                  }}
                >
                  {cat.label} →
                </Link>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Affiliate Disclosure */}
        <section
          style={{
            padding: "1.5rem",
            borderRadius: "10px",
            backgroundColor: "var(--color-bg)",
            border: "1px solid var(--color-border)",
          }}
        >
          <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Affiliate Disclosure</h2>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0 }}>
            AptAirSense participates in the Amazon Associates program. When you click a product link and make a
            purchase, we may earn a small commission at no extra cost to you. This never influences which products
            we recommend — our editorial process runs completely independently of our affiliate relationships. For
            full details, see our{" "}
            <Link
              href="/affiliate-disclosure"
              style={{ color: "var(--color-accent)", textDecoration: "underline" }}
            >
              Affiliate Disclosure
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
