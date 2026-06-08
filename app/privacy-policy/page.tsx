import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AptAirSense",
  description: "AptAirSense privacy policy — how we collect, use, and protect your information.",
  alternates: {
    canonical: "https://aptairsense.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="dark-section" style={{ padding: "4rem 1.5rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 style={{ color: "white", marginBottom: "1rem" }}>Privacy Policy</h1>
          <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "480px", margin: "0 auto" }}>
            Last updated: January 2026
          </p>
        </div>
      </section>
      <section style={{ padding: "4rem 1.5rem", backgroundColor: "var(--color-bg)" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <div className="prose-content" style={{ backgroundColor: "white", borderRadius: "16px", padding: "2.5rem", boxShadow: "0 2px 16px rgba(13,27,42,0.07)" }}>
            <h2>Information We Collect</h2>
            <p>
              AptAirSense.com collects minimal information necessary to operate the site. We may collect: pages visited, time on site, and browser/device type through standard web analytics tools. If you contact us through the contact form, we collect your name and email address to respond to your inquiry.
            </p>
            <h2>Cookies and Analytics</h2>
            <p>
              We use standard web analytics to understand how visitors use our site. This may involve cookies that store anonymous usage data. We do not use tracking cookies for advertising purposes. You can disable cookies in your browser settings without affecting the core functionality of this site.
            </p>
            <h2>Amazon Associates</h2>
            <p>
              This site participates in the Amazon Associates affiliate program. When you click product links, Amazon may use cookies to track referrals. Amazon's use of your data is governed by <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468496" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-accent)" }}>Amazon's Privacy Notice</a>.
            </p>
            <h2>Data Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties. Contact form submissions are used solely to respond to your inquiry and are not shared with external parties.
            </p>
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical measures to protect information submitted to us. However, no internet transmission is completely secure, and we cannot guarantee the absolute security of information transmitted to or from our site.
            </p>
            <h2>Children's Privacy</h2>
            <p>
              This site is not directed to children under 13. We do not knowingly collect personal information from children.
            </p>
            <h2>Contact</h2>
            <p>
              Questions about this privacy policy? Contact us at <a href="mailto:info@aptairsense.com" style={{ color: "var(--color-accent)" }}>info@aptairsense.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
