import Link from "next/link";
import { ArrowLeft, Terminal, Workflow, Layers, ArrowUpRight } from "lucide-react";
import { COLORS } from "../../lib/theme";
import { projects } from "../../lib/projects";

const ICONS = { Layers, Terminal, Workflow };

function ProjectCard({ slug, icon: Icon, title, role, stack, points, tag }) {
  return (
    <Link
      href={`/projects/${slug}`}
      style={{
        border: `1px solid ${COLORS.border}`,
        background: COLORS.surface,
        padding: "28px 26px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div
          style={{
            width: 38,
            height: 38,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `1px solid ${COLORS.borderStrong}`,
            color: COLORS.accent,
          }}
        >
          <Icon size={18} strokeWidth={1.5} />
        </div>
        <span
          style={{
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: 11,
            color: COLORS.textFaint,
            border: `1px solid ${COLORS.border}`,
            padding: "3px 8px",
          }}
        >
          {tag}
        </span>
      </div>

      <div>
        <h3 style={{ fontSize: 18, fontWeight: 500, color: COLORS.text, margin: 0 }}>{title}</h3>
        <p style={{ fontSize: 13, color: COLORS.textMuted, margin: "4px 0 0" }}>{role}</p>
      </div>

      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
        {points.map((p, i) => (
          <li key={i} style={{ fontSize: 13.5, lineHeight: 1.6, color: COLORS.textMuted, paddingLeft: 14, position: "relative" }}>
            <span style={{ position: "absolute", left: 0, color: COLORS.accentDim }}>–</span>
            {p}
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto", paddingTop: 4 }}>
        {stack.map((s) => (
          <span key={s} style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 11, color: COLORS.textFaint, background: COLORS.surfaceAlt, padding: "3px 8px" }}>
            {s}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: COLORS.textFaint }}>
        View project detail <ArrowUpRight size={14} strokeWidth={1.5} />
      </div>
    </Link>
  );
}

export default function ProjectsPage() {
  return (
    <div style={{ background: COLORS.bg, color: COLORS.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
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

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "60px 40px 100px" }}>
        <h1 style={{ fontSize: 34, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 40px" }}>All projects</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {projects.map((p) => (
            <ProjectCard key={p.slug} slug={p.slug} icon={ICONS[p.icon]} tag={p.tag} title={p.title} role={p.role} points={p.points} stack={p.stack} />
          ))}
        </div>
      </div>
    </div>
  );
}
