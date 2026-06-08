import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "AptAirSense | CO Detectors, Smoke Alarms & Air Safety for Apartments",
  description:
    "Independent reviews of CO detectors, smoke alarms, dehumidifiers, air conditioners, air purifiers, and humidity monitors for apartments and small spaces.",
  alternates: {
    canonical: "https://aptairsense.com",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
