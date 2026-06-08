"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "outline-dark";
  external?: boolean;
  fullWidth?: boolean;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  fullWidth = false,
}: CTAButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.4rem",
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    fontSize: "1rem",
    textDecoration: "none",
    cursor: "pointer",
    transition: "background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease",
    width: fullWidth ? "100%" : undefined,
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: "var(--color-accent)",
      color: "white",
      border: "none",
    },
    outline: {
      backgroundColor: "transparent",
      color: "white",
      border: "2px solid rgba(255,255,255,0.6)",
    },
    "outline-dark": {
      backgroundColor: "transparent",
      color: "var(--color-accent)",
      border: "2px solid var(--color-accent)",
    },
  };

  const combinedStyle = { ...baseStyle, ...variantStyles[variant] };

  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      style={combinedStyle}
      {...externalProps}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        if (variant === "primary") {
          el.style.backgroundColor = "#185EAA";
          el.style.transform = "scale(1.02)";
        } else if (variant === "outline") {
          el.style.backgroundColor = "rgba(255,255,255,0.1)";
          el.style.borderColor = "white";
          el.style.transform = "scale(1.02)";
        } else {
          el.style.backgroundColor = "rgba(30,111,200,0.08)";
          el.style.transform = "scale(1.02)";
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.backgroundColor = variantStyles[variant].backgroundColor as string;
        el.style.borderColor = (variantStyles[variant].border as string)?.split(" ").slice(2).join(" ") || "";
        el.style.transform = "scale(1)";
      }}
    >
      {children}
      {external && <ExternalLink size={14} />}
    </Link>
  );
}
