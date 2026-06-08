import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | AptAirSense",
  description: "Have a question about a product, a correction to report, or partnership inquiry? Contact AptAirSense.",
  alternates: {
    canonical: "https://aptairsense.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
