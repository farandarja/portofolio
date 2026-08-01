import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, Terminal, Workflow, Layers } from "lucide-react";
import { COLORS } from "../../../lib/theme";
import { projects, getProjectBySlug } from "../../../lib/projects";
import ImageGallery from "./ImageGallery";

const ICONS = { Layers, Terminal, Workflow };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Rand`,
    description: project.detail.summary,
  };
}

export default function ProjectDetailPage({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const Icon = ICONS[project.icon];
  const { detail } = project;

  return (
    <div
      style={{
        background: COLORS.bg,
        color: COLORS.text,
        minHeight: "100vh",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
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
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: 13,
            color: COLORS.textMuted,
            textDecoration: "none",
          }}
        >
          <ArrowLeft size={15} strokeWidth={1.5} /> back
        </Link>
        <span style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 14, letterSpacing: "0.04em" }}>
          rand<span style={{ color: COLORS.accent }}>.</span>dev
        </span>
      </div>

      {/* Header */}
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "60px 40px 30px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
          <div
            style={{
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `1px solid ${COLORS.borderStrong}`,
              color: COLORS.accent,
              flexShrink: 0,
            }}
          >
            {Icon && <Icon size={20} strokeWidth={1.5} />}
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
            {project.tag}
          </span>
        </div>

        <h1 style={{ fontSize: 40, fontWeight: 500, letterSpacing: "-0.02em", margin: 0 }}>{project.title}</h1>
        <p style={{ fontSize: 15, color: COLORS.textMuted, marginTop: 10 }}>{project.role}</p>

        <p style={{ fontSize: 16, lineHeight: 1.8, color: COLORS.textMuted, marginTop: 28 }}>{detail.summary}</p>

        <ImageGallery images={detail.screenshots} />
      </div>

      {/* Features */}
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "10px 40px 0" }}>
        <p style={{ fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: COLORS.accentDim, marginBottom: 16 }}>
          Key features
        </p>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
          {detail.features.map((f, i) => (
            <li
              key={i}
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: COLORS.textMuted,
                paddingLeft: 18,
                position: "relative",
              }}
            >
              <span style={{ position: "absolute", left: 0, color: COLORS.accent }}>–</span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Process (optional) */}
      {detail.process && (
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "40px 40px 0" }}>
          <p style={{ fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: COLORS.accentDim, marginBottom: 16 }}>
            Process notes
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: COLORS.textMuted, margin: 0 }}>{detail.process}</p>
        </div>
      )}

      {/* Tech stack */}
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "40px 40px 0" }}>
        <p style={{ fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: COLORS.accentDim, marginBottom: 16 }}>
          Tech stack
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {detail.techStack.map((s) => (
            <span
              key={s}
              style={{
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: 12,
                color: COLORS.textMuted,
                background: COLORS.surfaceAlt,
                border: `1px solid ${COLORS.border}`,
                padding: "5px 10px",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      {(detail.links?.github || detail.links?.demo) && (
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "44px 40px 0" }}>
          <div style={{ display: "flex", gap: 12 }}>
            {detail.links.github && (
              <a
                href={detail.links.github}
                target="_blank"
                rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 8, border: `1px solid ${COLORS.borderStrong}`, padding: "11px 18px", color: COLORS.text, textDecoration: "none", fontSize: 14 }}
              >
                <Github size={16} strokeWidth={1.5} /> Source
              </a>
            )}
            {detail.links.demo && (
              <a
                href={detail.links.demo}
                target="_blank"
                rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 8, border: `1px solid ${COLORS.borderStrong}`, padding: "11px 18px", color: COLORS.text, textDecoration: "none", fontSize: 14 }}
              >
                <ExternalLink size={16} strokeWidth={1.5} /> Live demo
              </a>
            )}
          </div>
        </div>
      )}

      {/* Other projects nav */}
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "70px 40px 90px" }}>
        <div style={{ borderTop: `1px solid ${COLORS.border}`, paddingTop: 28 }}>
          <p style={{ fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: COLORS.textFaint, marginBottom: 16 }}>
            Other projects
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {projects
              .filter((p) => p.slug !== project.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: COLORS.textMuted,
                    textDecoration: "none",
                    fontSize: 14,
                    padding: "10px 0",
                    borderBottom: `1px solid ${COLORS.border}`,
                  }}
                >
                  {p.title}
                  <ArrowLeft size={14} strokeWidth={1.5} style={{ transform: "rotate(180deg)" }} />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
} 