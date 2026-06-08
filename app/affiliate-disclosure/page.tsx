import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | AptAirSense",
  description: "AptAirSense participates in the Amazon Associates program. Learn how we handle affiliate relationships while maintaining editorial independence.",
  alternates: {
    canonical: "https://aptairsense.com/affiliate-disclosure",
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <>
      <section className="dark-section" style={{ padding: "4rem 1.5rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 style={{ color: "white", marginBottom: "1rem" }}>Affiliate Disclosure</h1>
          <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "480px", margin: "0 auto" }}>
            Last updated: January 2026
          </p>
        </div>
      </section>
      <section style={{ padding: "4rem 1.5rem", backgroundColor: "var(--color-bg)" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <div className="prose-content" style={{ backgroundColor: "white", borderRadius: "16px", padding: "2.5rem", boxShadow: "0 2px 16px rgba(13,27,42,0.07)" }}>
            <h2>Amazon Associates Program</h2>
            <p>
              AptAirSense.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. When you click on product links on this site and make a purchase, we may earn a small commission at no additional cost to you.
            </p>
            <h2>How We Use Affiliate Links</h2>
            <p>
              Product links throughout this site include our affiliate tracking tag. When you click a "View on Amazon" button and subsequently make a purchase, Amazon credits us a small percentage of the sale. This commission helps fund our independent research, testing, and editorial operations.
            </p>
            <h2>Our Editorial Independence</h2>
            <p>
              Affiliate commissions do not influence our product recommendations, rankings, or editorial content. We do not accept payment for favorable coverage, guaranteed placements, or biased reviews. Our Editor&apos;s Choice designations, rankings, and written assessments are based solely on our independent testing and research.
            </p>
            <p>
              We evaluate products based on sensor accuracy, build quality, ease of use, smart home compatibility, and overall value — not based on which products pay higher commissions. In fact, some of our highest-ranked products offer lower affiliate rates than alternatives we rank lower.
            </p>
            <h2>FTC Compliance</h2>
            <p>
              In accordance with the FTC&apos;s 16 CFR Part 255 guidelines on endorsements and testimonials, we disclose all material affiliate relationships. This disclosure appears site-wide and on all pages containing affiliate links.
            </p>
            <h2>Questions</h2>
            <p>
              If you have questions about our affiliate relationships or editorial practices, please contact us at <a href="mailto:info@aptairsense.com" style={{ color: "var(--color-accent)" }}>info@aptairsense.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
