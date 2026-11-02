"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Mail, Download } from "lucide-react";
import { COLORS } from "../lib/theme";
import { projects } from "../lib/projects";

function InteractivePhoto() {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const ref = React.useRef(null);
  const MAX_TILT = 14; // degrees

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({
      rx: (0.5 - py) * MAX_TILT * 2,
      ry: (px - 0.5) * MAX_TILT * 2,
    });
    setGlare({ x: px * 100, y: py * 100, opacity: 0.35 });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 });
    setGlare((g) => ({ ...g, opacity: 0 }));
  };

  return (
    <div style={{ width: "100%", maxWidth: 340, perspective: "900px" }}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "4 / 5",
          overflow: "hidden",
          border: `1px solid ${COLORS.border}`,
          background: COLORS.surfaceAlt,
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(1.03)`,
          transition: "transform 0.15s ease-out",
          willChange: "transform",
        }}
      >
        {/* Photo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/profile.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Glare that follows the cursor */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle 220px at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.9), transparent 60%)`,
            opacity: glare.opacity,
            mixBlendMode: "overlay",
            transition: "opacity 0.2s ease-out",
            pointerEvents: "none",
          }}
        />
        {/* Amber sheen at the edges while tilted */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            boxShadow: `inset 0 0 40px rgba(242,169,59,${glare.opacity * 0.3})`,
            transition: "box-shadow 0.2s ease-out",
            pointerEvents: "none",
          }}
        />
      </div>
      <div
        style={{
          marginTop: 16,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: 12,
          color: COLORS.textMuted,
        }}
      >
        <span>Rand.porto</span>
        <span style={{ color: COLORS.textFaint }}>tilt to explore</span>
      </div>
    </div>
  );
}

function RoleCycler() {
  const roles = [
    "Full-stack developer",
    "Tech enthusiast",
    "Website builder & maintenance",
    "Decision-support systems",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | pausing | deleting

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 45);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 1400);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 800);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 25);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, roleIndex]);

  return (
    <p
      style={{
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        fontSize: 13,
        color: COLORS.accent,
        margin: "0 0 18px",
        minHeight: 18,
      }}
    >
      // {text}
      <span style={{ opacity: 0.6, animation: "blink 1s step-end infinite" }}>▍</span>
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </p>
  );
}

function SectionLabel({ index, children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 28,
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        fontSize: 12,
        letterSpacing: "0.08em",
        color: COLORS.textFaint,
        textTransform: "uppercase",
      }}
    >
      <span style={{ color: COLORS.accent }}>{index}</span>
      <span style={{ flex: "0 0 auto" }}>{children}</span>
      <span style={{ height: 1, flex: 1, background: COLORS.border }} />
    </div>
  );
}

function ProjectCard({ slug, title, thumbnail }) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={`/projects/${slug}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        display: "block",
        aspectRatio: "4 / 3",
        overflow: "hidden",
        border: `1px solid ${hover ? COLORS.accent : COLORS.border}`,
        textDecoration: "none",
        transition: "border-color 0.2s ease",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('${thumbnail}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: hover ? "brightness(0.65)" : "brightness(0.4)",
          transform: hover ? "scale(1.04)" : "scale(1)",
          transition: "filter 0.25s ease, transform 0.25s ease",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(10,11,15,0.9), transparent 60%)",
        }}
      />
      <div style={{ position: "absolute", left: 20, bottom: 18, right: 20 }}>
        <h3 style={{ fontSize: 18, fontWeight: 500, color: COLORS.text, margin: 0 }}>{title}</h3>
      </div>
    </Link>
  );
}

export default function Portfolio() {
  const [navSolid, setNavSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

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
          background: navSolid ? "rgba(10,11,15,0.92)" : "transparent",
          borderBottom: `1px solid ${navSolid ? COLORS.border : "transparent"}`,
          backdropFilter: "blur(6px)",
          transition: "background 0.2s ease, border-color 0.2s ease",
        }}
      >
        <span style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 14, letterSpacing: "0.04em" }}>
          Farand<span style={{ color: COLORS.accent }}>_</span>Portfolio
        </span>
        <div style={{ display: "flex", gap: 28, fontSize: 13, color: COLORS.textMuted }}>
          <Link href="/about" style={{ color: "inherit", textDecoration: "none" }}>
            about
          </Link>
          <button
            onClick={() => scrollTo("projects")}
            style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", fontFamily: "inherit", padding: 0 }}
          >
            projects
          </button>
          <button
            onClick={() => scrollTo("contact")}
            style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", fontFamily: "inherit", padding: 0 }}
          >
            contact
          </button>
        </div>
      </div>

      {/* Hero */}
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "70px 40px 100px",
          display: "flex",
          flexWrap: "wrap",
          gap: 60,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: "1 1 420px", minWidth: 300 }}>
          <RoleCycler />
          <h1 style={{ fontSize: 52, lineHeight: 1.05, fontWeight: 500, margin: 0, letterSpacing: "-0.02em" }}>
            Rand builds systems that <span style={{ color: COLORS.textMuted }}>work — and feel good to use.</span>
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: COLORS.textMuted, marginTop: 22, maxWidth: 480 }}>
            A web developer who loves building things end to end — PHP/MySQL on the backend, Next.js on the front. Recent work includes a thesis-grade AHP/SAW decision engine and n8n workflows that run themselves. I pick up new tools fast, work well in a team, and I'm just as happy shipping a clean UI as I am solving the logic behind it.
          </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 32 }}>
            <Link
              href="/projects"
              style={{
                background: COLORS.accent,
                color: "#1A1204",
                border: "none",
                padding: "12px 22px",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              View projects
            </Link>
            <button
              onClick={() => scrollTo("contact")}
              style={{
                background: "transparent",
                color: COLORS.text,
                border: `1px solid ${COLORS.borderStrong}`,
                padding: "12px 22px",
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              Get in touch
            </button>
            <a
              href="/cv_farand.pdf"
              download="CV-Farand-Arja-Kurniawan.pdf"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "transparent",
                color: COLORS.text,
                border: `1px solid ${COLORS.borderStrong}`,
                padding: "12px 22px",
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              <Download size={16} strokeWidth={1.5} /> Download CV
            </a>
          </div>
        </div>

        <div style={{ flex: "0 1 340px", display: "flex", justifyContent: "center" }}>
          <InteractivePhoto />
        </div>
      </div>

      {/* About */}
      <div id="about" style={{ maxWidth: 1080, margin: "0 auto", padding: "40px 40px 100px" }}>
        <SectionLabel index="01">About</SectionLabel>
        <div style={{ display: "flex", gap: 60, flexWrap: "wrap" }}>
          <p style={{ flex: "1 1 420px", fontSize: 16, lineHeight: 1.8, color: COLORS.textMuted, margin: 0, maxWidth: 520 }}>
            I like getting hands-on with a project from start to finish — understanding what's actually needed, picking up whatever tool gets the job done, and staying close to whoever I'm building for so the end result actually fits. I learn new things fast, communicate early when something needs adjusting, and I'm comfortable working solo or as part of a team, whichever the project calls for.
          </p>
          <div style={{ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: 18 }}>
            {[
              ["Based in", "Bogor, Indonesia"],
              ["Focus", "PHP/MySQL · Next.js · automation"],
              ["Currently", "finishing a thesis on AHP/SAW-based DSS"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", borderBottom: `1px solid ${COLORS.border}`, paddingBottom: 12 }}>
                <span style={{ fontSize: 13, color: COLORS.textFaint, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>{k}</span>
                <span style={{ fontSize: 14, color: COLORS.text, textAlign: "right" }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32, marginTop: 56 }}>
          {[
            { label: "Backend", items: ["PHP", "MySQL", "REST APIs", "Session/role auth"] },
            { label: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "TypeScript"] },
            { label: "Automation & tools", items: ["n8n", "Telegram Bot API", "Google Sheets API", "Claude/OpenRouter API"] },
          ].map((group) => (
            <div key={group.label}>
              <p style={{ fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: COLORS.accentDim, marginBottom: 12 }}>
                {group.label}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {group.items.map((it) => (
                  <span key={it} style={{ fontSize: 14, color: COLORS.textMuted }}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div id="projects" style={{ maxWidth: 1080, margin: "0 auto", padding: "0 40px 100px" }}>
        <SectionLabel index="02">Projects</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {projects.map((p) => (
            <ProjectCard key={p.slug} slug={p.slug} title={p.title} thumbnail={p.thumbnail} />
          ))}
        </div>
      </div>

      {/* Contact */}
      <div id="contact" style={{ maxWidth: 1080, margin: "0 auto", padding: "0 40px 90px" }}>
        <SectionLabel index="03">Contact</SectionLabel>
        <div
          style={{
            border: `1px solid ${COLORS.border}`,
            padding: "48px 40px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 500, margin: 0 }}>Got something worth building?</h2>
            <p style={{ fontSize: 14, color: COLORS.textMuted, marginTop: 8 }}>Open to internships, freelance work, and collaborations.</p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <a
              href="mailto:farandarja50@gmail.com"
              style={{ display: "flex", alignItems: "center", gap: 8, border: `1px solid ${COLORS.borderStrong}`, padding: "11px 18px", color: COLORS.text, textDecoration: "none", fontSize: 14 }}
            >
              <Mail size={16} strokeWidth={1.5} /> Email
            </a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: `1px solid ${COLORS.border}`, padding: "20px 40px", textAlign: "center", fontSize: 12, color: COLORS.textFaint, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>
        built with react · updated 2026
      </div>
    </div>
  );
}