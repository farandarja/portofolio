import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { COLORS } from "../../lib/theme";

// Edit this block with your real bio details.
const BIODATA = [
  ["Name", "Farand Arja Kurniawan"],
  ["Based in", "Bogor, Indonesia"],
  ["Status", "8th Semester University Student — finishing a thesis on AHP/SAW-based decision support systems"],
  ["Focus", "Full-stack web development, automation, applied software projects"],
];

// Backend/Frontend skills shown as logos. `icon` is a Simple Icons slug
// (https://simpleicons.org) — set to null if there's no logo for it.
const LOGO_SKILLS = {
  Backend: [
    { name: "PHP", icon: "php" },
    { name: "MySQL", icon: "mysql" },
    { name: "REST APIs", icon: null },
    { name: "Session/role-based auth", icon: null },
  ],
  Frontend: [
    { name: "Next.js", icon: "nextdotjs" },
    { name: "React", icon: "react" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
  ],
};

const TEXT_SKILLS = {
  label: "Data & algorithms",
  items: ["AHP", "SAW", "Decision support systems", "Chart.js"],
};

const TOOLS = [
  { name: "VS Code", icon: null },
  { name: "XAMPP", icon: "XAMPP" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "n8n", icon: "n8n" },
  { name: "draw.io", icon: "diagramsdotnet" },
  { name: "Postman", icon: "postman" },
];

// Soft skills — plain text, edit freely.
const SOFT_SKILLS = [
  "Leadership",
  "Teamwork",
  "Time management",
  "Communication",
  "Problem solving",
  "Adaptability",
];

// Add your own photos here. Put image files inside the `public/` folder,
// then reference them as "/filename.jpg" (the leading slash matters).
const PHOTOS = [
  { src: "/farand1.jpg"},
  { src: "/farand2.jpg"},
];

function SkillChip({ name, icon }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: COLORS.surfaceAlt,
        border: `1px solid ${COLORS.border}`,
        padding: "8px 12px",
      }}
    >
      {icon && (
        <img
          src={`https://cdn.simpleicons.org/${icon}/EDEBE6`}
          alt={name}
          width={18}
          height={18}
          style={{ display: "block", opacity: 0.9 }}
        />
      )}
      <span style={{ fontSize: 13, color: COLORS.text }}>{name}</span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div style={{ background: COLORS.bg, color: COLORS.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Nav */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 40px",
          background: "rgba(10,11,15,0.92)",
          borderBottom: `1px solid ${COLORS.border}`,
          backdropFilter: "blur(6px)",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 13, color: COLORS.textMuted, textDecoration: "none" }}>
          <ArrowLeft size={15} strokeWidth={1.5} /> back
        </Link>
        <span style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 14, letterSpacing: "0.04em" }}>
          rand<span style={{ color: COLORS.accent }}>.</span>dev
        </span>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 40px 100px" }}>
        <h1 style={{ fontSize: 34, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 40px" }}>About me</h1>

        {/* Biodata */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 56 }}>
          {BIODATA.map(([k, v]) => (
            <div
              key={k}
              style={{
                display: "flex",
                gap: 24,
                borderBottom: `1px solid ${COLORS.border}`,
                paddingBottom: 14,
              }}
            >
              <span
                style={{
                  flex: "0 0 140px",
                  fontSize: 12,
                  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                  color: COLORS.textFaint,
                  paddingTop: 2,
                }}
              >
                {k}
              </span>
              <span style={{ fontSize: 15, color: COLORS.text, lineHeight: 1.6 }}>{v}</span>
            </div>
          ))}
        </div>

        {/* Skills */}
        <p style={{ fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: COLORS.accentDim, marginBottom: 20 }}>
          Skills
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32, marginBottom: 40 }}>
          {Object.entries(LOGO_SKILLS).map(([label, items]) => (
            <div key={label}>
              <p style={{ fontSize: 13, color: COLORS.textMuted, marginBottom: 10 }}>{label}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {items.map((it) => (
                  <SkillChip key={it.name} name={it.name} icon={it.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: 56 }}>
          <p style={{ fontSize: 13, color: COLORS.textMuted, marginBottom: 10 }}>{TEXT_SKILLS.label}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {TEXT_SKILLS.items.map((it) => (
              <span key={it} style={{ fontSize: 14, color: COLORS.text }}>
                {it}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <p style={{ fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: COLORS.accentDim, marginBottom: 20 }}>
          Tools & workflow
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 56 }}>
          {TOOLS.map((t) => (
            <SkillChip key={t.name} name={t.name} icon={t.icon} />
          ))}
        </div>

        {/* Soft skills */}
        <p style={{ fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: COLORS.accentDim, marginBottom: 20 }}>
          Soft skills
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 56 }}>
          {SOFT_SKILLS.map((s) => (
            <span
              key={s}
              style={{
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: 13,
                color: COLORS.textMuted,
                background: COLORS.surfaceAlt,
                border: `1px solid ${COLORS.border}`,
                padding: "6px 12px",
              }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Photos */}
        <p style={{ fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: COLORS.accentDim, marginBottom: 20 }}>
          Photos
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {PHOTOS.map((p, i) => (
              <div
              key={i}
              style={{
                aspectRatio: "4 / 3",
                background: COLORS.surfaceAlt,
                border: `1px solid ${COLORS.border}`,
                overflow: "hidden",
              }}
              >
                <img
                src={p.src}
                alt={`Photo ${i + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                </div>
              ))}
              </div>
      </div>
    </div>
  );
}
