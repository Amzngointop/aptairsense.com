import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | AptAirSense",
  description: "Terms and conditions for using AptAirSense.com.",
  alternates: {
    canonical: "https://aptairsense.com/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="dark-section" style={{ padding: "4rem 1.5rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 style={{ color: "white", marginBottom: "1rem" }}>Terms of Use</h1>
          <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "480px", margin: "0 auto" }}>
            Last updated: January 2026
          </p>
        </div>
      </section>
      <section style={{ padding: "4rem 1.5rem", backgroundColor: "var(--color-bg)" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <div className="prose-content" style={{ backgroundColor: "white", borderRadius: "16px", padding: "2.5rem", boxShadow: "0 2px 16px rgba(13,27,42,0.07)" }}>
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using AptAirSense.com, you accept and agree to be bound by these Terms of Use. If you do not agree, please do not use this site.
            </p>
            <h2>Informational Content Only</h2>
            <p>
              The content on AptAirSense.com is provided for informational purposes only. Our product reviews, air quality guidance, and health information are not a substitute for professional medical or safety advice. Always consult a qualified professional for health-related decisions.
            </p>
            <h2>Accuracy of Information</h2>
            <p>
              We strive to keep product information, test results, and recommendations accurate and up to date. However, product specifications, availability, and prices change frequently. Always verify product details on the manufacturer's or retailer's website before purchasing.
            </p>
            <h2>Affiliate Links</h2>
            <p>
              This site contains affiliate links to Amazon.com. By clicking these links and making purchases, you may help support our independent editorial operations. See our <a href="/affiliate-disclosure" style={{ color: "var(--color-accent)" }}>Affiliate Disclosure</a> for full details.
            </p>
            <h2>Intellectual Property</h2>
            <p>
              All original content on this site — including text, graphics, and design — is the intellectual property of AptAirSense and may not be reproduced without permission. Product names and trademarks referenced on this site are the property of their respective owners.
            </p>
            <h2>Limitation of Liability</h2>
            <p>
              AptAirSense shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this site or reliance on information contained herein.
            </p>
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the site after changes constitutes acceptance of the revised terms.
            </p>
            <h2>Contact</h2>
            <p>
              Questions about these terms? Contact us at <a href="mailto:info@aptairsense.com" style={{ color: "var(--color-accent)" }}>info@aptairsense.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
