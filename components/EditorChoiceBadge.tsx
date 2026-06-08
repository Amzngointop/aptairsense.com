import { Award } from "lucide-react";

interface EditorChoiceBadgeProps {
  label?: string;
}

export default function EditorChoiceBadge({ label = "Editor's Choice 2026" }: EditorChoiceBadgeProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.3rem",
        backgroundColor: "#D4860A",
        color: "white",
        padding: "4px 10px",
        borderRadius: "6px",
        fontFamily: "var(--font-body)",
        fontSize: "11px",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.07em",
      }}
    >
      <Award size={12} />
      {label}
    </span>
  );
}
