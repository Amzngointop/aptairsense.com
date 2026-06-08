"use client";

import { Mail, MapPin, Clock } from "lucide-react";

export default function ContactClient() {
  return (
    <>
      <section className="dark-section" style={{ padding: "4rem 1.5rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 style={{ color: "white", marginBottom: "1rem" }}>Contact Us</h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.125rem", maxWidth: "480px", margin: "0 auto" }}>
            Have a question about a product, a correction to report, or partnership inquiry? We read every message.
          </p>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", backgroundColor: "var(--color-bg)" }}>
        <div
          className="container contact-grid"
          style={{
            maxWidth: "900px",
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "3rem",
          }}
        >
          {/* Contact info */}
          <div>
            <h2 style={{ marginBottom: "1.5rem" }}>Get in Touch</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@aptairsense.com",
                  href: "mailto:info@aptairsense.com",
                },
                {
                  icon: Clock,
                  label: "Response Time",
                  value: "Usually within 2 business days",
                  href: null,
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "United States",
                  href: null,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "rgba(30,111,200,0.1)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color="var(--color-accent)" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "11px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.07em",
                        color: "var(--color-text-muted)",
                        marginBottom: "2px",
                      }}
                    >
                      {label}
                    </div>
                    {href ? (
                      <a href={href} style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)", textDecoration: "none" }}>
                        {value}
                      </a>
                    ) : (
                      <span style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}>{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "2rem",
              boxShadow: "0 2px 16px rgba(13,27,42,0.07)",
            }}
          >
            <h2 style={{ marginBottom: "1.5rem" }}>Send a Message</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for your message! We'll get back to you within 2 business days.");
                (e.target as HTMLFormElement).reset();
              }}
              style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--color-text)",
                    marginBottom: "0.4rem",
                  }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Jane Smith"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jane@example.com"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  name="message"
                  required
                  placeholder="Your question or comment..."
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Send Message
              </button>
              <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", textAlign: "center" }}>
                We never share your email with third parties.
              </p>
            </form>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 700px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  border: "1.5px solid var(--color-border)",
  borderRadius: "8px",
  fontFamily: "var(--font-body)",
  fontSize: "1rem",
  color: "var(--color-text)",
  backgroundColor: "var(--color-bg)",
  outline: "none",
  transition: "border-color 0.15s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-body)",
  fontSize: "0.875rem",
  fontWeight: 600,
  color: "var(--color-text)",
  marginBottom: "0.4rem",
};
