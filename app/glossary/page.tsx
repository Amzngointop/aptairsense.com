import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Safety Terms & Definitions | AptAirSense",
  description:
    "Plain-English definitions for every term you'll encounter when shopping for CO detectors, dehumidifiers, smoke alarms, air conditioners, air purifiers, and humidity monitors.",
  alternates: {
    canonical: "https://aptairsense.com/glossary",
  },
};

const GROUPS = [
  {
    category: "Carbon Monoxide Detectors",
    terms: [
      {
        term: "Carbon Monoxide (CO)",
        definition:
          "A colorless, odorless gas produced by incomplete combustion of fuels including gas, oil, wood, and coal. It binds to hemoglobin in the blood, preventing oxygen transport. Even brief exposure to high concentrations can be fatal.",
      },
      {
        term: "Electrochemical CO Sensor",
        definition:
          "The standard technology used in consumer CO detectors. A chemical reaction with CO molecules generates a measurable electrical current proportional to CO concentration. Accurate, fast-responding, and reliable for household use.",
      },
      {
        term: "Peak Level Memory",
        definition:
          "A feature in CO detectors that records the highest CO concentration detected since the last reset. Useful for identifying intermittent CO events that may occur during sleep or while away.",
      },
      {
        term: "UL 2034",
        definition:
          "The Underwriters Laboratories safety standard for single- and multiple-station carbon monoxide alarms in the United States. A UL 2034 listing means the detector has been independently tested and meets minimum performance requirements.",
      },
    ],
  },
  {
    category: "Dehumidifiers",
    terms: [
      {
        term: "Relative Humidity (RH)",
        definition:
          "A measure of how much water vapor is in the air relative to the maximum it could hold at that temperature. Expressed as a percentage. The EPA recommends keeping indoor RH between 30% and 50%.",
      },
      {
        term: "Pint Capacity",
        definition:
          "The amount of water a dehumidifier can remove from the air in 24 hours, measured in pints. Larger spaces and higher humidity levels require higher pint capacity units.",
      },
      {
        term: "Humidistat",
        definition:
          "A built-in sensor and control system that measures current relative humidity and automatically turns the dehumidifier on or off to maintain a set target level.",
      },
      {
        term: "Energy Star",
        definition:
          "A certification from the US EPA indicating that an appliance meets strict energy efficiency standards. Energy Star dehumidifiers use at least 15% less energy than non-certified models.",
      },
    ],
  },
  {
    category: "Smoke Detectors",
    terms: [
      {
        term: "Ionization Sensor",
        definition:
          "A smoke detection technology that uses a small radioactive source to ionize air inside a chamber. Smoke particles disrupt the ion flow, triggering the alarm. Responds quickly to fast-flaming fires but less sensitive to slow, smoldering fires.",
      },
      {
        term: "Photoelectric Sensor",
        definition:
          "A smoke detection technology that uses a light beam inside a sensing chamber. Smoke particles scatter the light onto a detector, triggering the alarm. More effective at detecting slow, smoldering fires that produce more visible smoke before flame.",
      },
      {
        term: "Dual-Sensor Detector",
        definition:
          "A smoke alarm that combines both ionization and photoelectric sensing technologies in a single unit, providing broader detection coverage across different fire types.",
      },
      {
        term: "Interconnect",
        definition:
          "A feature that allows multiple smoke detectors to communicate so that when one alarm triggers, all connected units sound simultaneously throughout the home.",
      },
    ],
  },
  {
    category: "Air Conditioners",
    terms: [
      {
        term: "BTU (British Thermal Unit)",
        definition:
          "The standard unit for measuring an air conditioner's cooling capacity. One BTU is the energy needed to cool one pound of water by one degree Fahrenheit. A 5,000 BTU unit suits rooms up to approximately 150 sq ft.",
      },
      {
        term: "EER (Energy Efficiency Ratio)",
        definition:
          "A measure of an air conditioner's cooling efficiency at a specific outdoor temperature (95°F). Calculated by dividing cooling capacity (BTUs) by power consumption (watts). Higher EER means lower operating cost.",
      },
      {
        term: "CEER (Combined Energy Efficiency Ratio)",
        definition:
          "An updated efficiency metric required on all US window ACs since 2014 that accounts for standby power consumption in addition to active cooling efficiency.",
      },
      {
        term: "Window vs Portable AC",
        definition:
          "Window air conditioners are installed in a window frame and exhaust heat directly outside — more efficient and quieter. Portable units stand on the floor and require a hose vented through a window — easier to install but less efficient.",
      },
    ],
  },
  {
    category: "Air Purifiers",
    terms: [
      {
        term: "HEPA Filter",
        definition:
          "A filter standard requiring capture of 99.97% of particles 0.3 micrometers and larger. True HEPA means the filter meets this certified standard. HEPA-type or HEPA-style are marketing terms for inferior filters with no standardized performance requirement.",
      },
      {
        term: "CADR (Clean Air Delivery Rate)",
        definition:
          "Measures how quickly an air purifier delivers filtered air, expressed in cubic feet per minute (CFM). Only trust AHAM-certified CADR ratings. Higher CADR means faster particle removal.",
      },
      {
        term: "Activated Carbon Filter",
        definition:
          "A filter layer made of porous carbon material that adsorbs gases, odors, and VOCs through chemical attraction. Often paired with HEPA filters. Effectiveness depends on carbon weight and contact time.",
      },
      {
        term: "ACH (Air Changes per Hour)",
        definition:
          "How many times an air purifier can filter the entire volume of air in a room within one hour. For allergy and asthma sufferers, 4–5 ACH is recommended.",
      },
    ],
  },
  {
    category: "Humidity & Temperature Monitors",
    terms: [
      {
        term: "Hygrometer",
        definition:
          "An instrument that measures relative humidity in the air. Consumer hygrometers use capacitive sensors that detect changes in electrical capacitance caused by moisture absorption.",
      },
      {
        term: "Dew Point",
        definition:
          "The temperature at which air becomes saturated with water vapor and condensation begins to form. A more absolute measure of moisture content than relative humidity, which changes with temperature.",
      },
      {
        term: "Capacitive Humidity Sensor",
        definition:
          "The most common technology in consumer humidity monitors. A hygroscopic material between two electrodes absorbs or releases moisture, changing capacitance in proportion to relative humidity. Accurate and stable at typical indoor conditions.",
      },
      {
        term: "Temperature Compensation",
        definition:
          "A calibration technique used in humidity sensors to correct readings based on ambient temperature. Important because relative humidity readings are temperature-dependent — a sensor without compensation will drift as room temperature changes.",
      },
    ],
  },
];

export default function GlossaryPage() {
  return (
    <>
      {/* Hero */}
      <section className="dark-section" style={{ padding: "4rem 1.5rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 style={{ color: "white", marginBottom: "1rem" }}>Home Safety Terms &amp; Definitions</h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.125rem", maxWidth: "560px", margin: "0 auto" }}>
            Every term you&apos;ll encounter when choosing and using safety and comfort products for your apartment — explained in plain English.
          </p>
        </div>
      </section>

      {/* Terms */}
      <section style={{ padding: "4rem 1.5rem", backgroundColor: "var(--color-bg)" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {GROUPS.map(({ category, terms }) => (
              <div key={category}>
                <h2
                  style={{
                    fontSize: "1.125rem",
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                    color: "var(--color-accent)",
                    marginBottom: "1rem",
                    paddingBottom: "0.5rem",
                    borderBottom: "2px solid var(--color-border)",
                  }}
                >
                  {category}
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {terms.map(({ term, definition }) => (
                    <div
                      key={term}
                      id={term.split(" ")[0].toLowerCase()}
                      style={{
                        backgroundColor: "white",
                        borderRadius: "12px",
                        padding: "1.375rem 1.75rem",
                        boxShadow: "0 2px 16px rgba(13,27,42,0.07)",
                        borderLeft: "4px solid var(--color-accent)",
                      }}
                    >
                      <h3 style={{ fontSize: "1.0625rem", marginBottom: "0.5rem" }}>{term}</h3>
                      <p style={{ color: "var(--color-text-muted)", fontSize: "0.9375rem", lineHeight: 1.75, margin: 0 }}>
                        {definition}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
