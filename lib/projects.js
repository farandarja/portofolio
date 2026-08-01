export const projects = [
  {
    slug: "spk-pemilihan-jurusan",
    icon: "Layers",
    tag: "thesis",
    thumbnail: "/projects/spk.png",
    title: "SPK Pemilihan Jurusan",
    role: "Decision-support system · PHP, MySQL",
    points: [
      "Two independent ranking engines, AHP and SAW, run in parallel rather than combined into one score",
      "Guru BK admin portal plus a student-facing portal, each with scoped access",
      "Comparison view showing where the two methods agree — and where they don't",
    ],
    stack: ["PHP", "MySQL", "AHP", "SAW", "Chart.js"],
    detail: {
      summary:
        "A web-based decision support system built for an undergraduate thesis, helping high school students get a data-backed recommendation for which major to pursue. Instead of blending two scoring methods into one number, the system runs Analytical Hierarchy Process (AHP) and Simple Additive Weighting (SAW) as fully independent pipelines — each with its own weighting logic and its own ranking output — so the two methods can be compared side by side rather than hidden inside a single blended score.",
      features: [
        "Pairwise comparison matrices per criterion for AHP, with automatic consistency ratio (CR) checking",
        "Separate weighting table (saw_bobot) so SAW's criteria weights are managed independently from AHP's",
        "Admin (Guru BK) dashboard for managing criteria, weights, and student data",
        "Student portal for submitting assessment answers and viewing recommended majors",
        "A dedicated comparison page (hasil.php) showing AHP vs SAW rankings side by side",
        "Chart.js visualizations of score breakdowns per criterion",
      ],
      process:
        "Development included full UML documentation — 10 activity diagrams and 10 sequence diagrams, use case diagrams and scenarios — alongside a black-box testing document with live test results and a full manual book for end users.",
      techStack: ["PHP (vanilla)", "MySQL", "JavaScript", "Chart.js", "XAMPP"],
      screenshots: [
        "/projects/spk1.png",
        "/projects/spk2.png",
        "/projects/spk3.png",
        "/projects/spk4.png",
        "/projects/spk5.png",
        "/projects/spk6.png",
        "/projects/spk7.png",
      ],
      links: {
        github: "",
        demo: "",
      },
    },
  },
  {
    slug: "ai-financial-tracker",
    icon: "Terminal",
    tag: "automation",
    thumbnail: "/projects/finance.png",
    title: "AI Financial Tracker",
    role: "Telegram bot · n8n, Google Sheets, Claude API",
    points: [
      "Parses free-text Telegram messages into structured income/expense entries",
      "Flags budget-limit breaches and tracks month-to-month carry-over balance automatically",
      "Built entirely as an n8n workflow, debugged down to race conditions and field-mapping issues",
    ],
    stack: ["n8n", "Telegram API", "Sheets API", "Claude"],
    detail: {
      summary:
        "A personal finance tracker that lives inside Telegram. Instead of filling out a form, you just text it what you spent — 'beli kopi 25rb' or 'gaji masuk 5jt' — and an LLM call parses that free text into a structured transaction, which then gets logged straight into Google Sheets.",
      features: [
        "Natural-language transaction parsing via the Claude API through OpenRouter",
        "Automatic categorization of income vs. expense entries",
        "Budget-limit alerts when spending in a category crosses a threshold",
        "Monthly carry-over balance calculated automatically instead of resetting to zero",
        "Google Sheets used as the database, so the data stays fully inspectable and exportable",
      ],
      process:
        "Most of the real engineering work here was in debugging the workflow itself — resolving race conditions between concurrent Telegram messages, fixing field-naming mismatches between the parsing step and the sheet-writing step, and handling sheet-operation resets so failed writes wouldn't corrupt existing data.",
      techStack: ["n8n", "Telegram Bot API", "Google Sheets API", "Claude API (via OpenRouter)"],
      screenshots: [
        "/projects/ai1.png",
        "/projects/ai2.png",
        "/projects/ai3.png"
      ],
      links: {
        github: "",
        demo: "",
      },
    },
  },
  {
    slug: "sirkus-waterplay",
    icon: "Workflow",
    tag: "web",
    thumbnail: "/projects/sirkus.png",
    title: "Sirkus Waterplay",
    role: "Marketing site · Next.js, Tailwind, TypeScript",
    points: [
      "Circus-themed redesign for an indoor waterpark brand",
      "Custom SVG wave dividers and a playful, high-contrast color system",
      "Shipped as a drop-in package for direct deployment",
    ],
    stack: ["Next.js", "Tailwind", "TypeScript"],
    detail: {
      summary:
        "A marketing website for Sirkus Waterplay, an indoor waterpark in Jatiasih, Bekasi. The brief called for a circus aesthetic, so the site leans into hot pink, sky blue, and yellow/orange, paired with rounded, playful typography to match a family-oriented, high-energy brand.",
      features: [
        "Full visual restyle around a circus theme — color palette, typography, and imagery",
        "Custom SVG wave dividers between sections instead of hard edges",
        "Fredoka One for display headings paired with Nunito for body text",
        "Placeholder mascot area reserved for future brand illustration",
        "Built as a static, deploy-anywhere Next.js site",
      ],
      techStack: ["Next.js", "Tailwind CSS", "shadcn/ui", "TypeScript"],
      screenshots: [
        "/projects/sirkus1.png",
        "/projects/sirkus2.png",
        "/projects/sirkus3.png",
        "/projects/sirkus4.png"
      ],
      links: {
        github: "",
        demo: "",
      },
    },
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}