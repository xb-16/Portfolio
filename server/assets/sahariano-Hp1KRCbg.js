import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Building2, MapPin, Calendar, Code2, Globe } from "lucide-react";
function SaharianoPage() {
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-[var(--bg-base)] py-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-4", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "mb-8 inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-[var(--sea-ink)] transition-all hover:border-[var(--lagoon)] hover:bg-[var(--lagoon)]/10 hover:shadow-md", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
      "Back to Work"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8 rounded-2xl border border-[var(--line)] bg-gradient-to-br from-[var(--surface)] to-[var(--surface-strong)] p-8 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-start gap-3", children: [
        /* @__PURE__ */ jsx(Building2, { className: "h-8 w-8 text-[var(--lagoon)]" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-[var(--sea-ink)] md:text-4xl", children: "Front‑end Developer" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg text-[var(--sea-ink-soft)]", children: "Sahariano Agency" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 text-sm text-[var(--sea-ink-soft)]", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }),
          "Laayoune"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4" }),
          "Feb – April 2025 (2 months)"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xl font-semibold text-[var(--sea-ink)]", children: "Overview" }),
      /* @__PURE__ */ jsx("p", { className: "leading-relaxed text-[var(--sea-ink-soft)]", children: "Redesigned a legacy website for a local agency, transforming it into a modern, visually appealing platform using Vue.js. The project focused on enhancing user experience, improving performance, and adding full internationalization (i18n) support to reach a wider audience." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxs("h2", { className: "mb-4 flex items-center gap-2 text-xl font-semibold text-[var(--sea-ink)]", children: [
        /* @__PURE__ */ jsx(Code2, { className: "h-5 w-5 text-[var(--lagoon)]" }),
        "Technologies & Tools"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: ["Vue.js", "Vue i18n", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Git", "VS Code"].map((tech) => /* @__PURE__ */ jsx("span", { className: "rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-3 py-1 text-sm text-[var(--sea-ink-soft)]", children: tech }, tech)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxs("h2", { className: "mb-4 flex items-center gap-2 text-xl font-semibold text-[var(--sea-ink)]", children: [
        /* @__PURE__ */ jsx(Globe, { className: "h-5 w-5 text-[var(--lagoon)]" }),
        "Key Features"
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "list-inside list-disc space-y-2 text-[var(--sea-ink-soft)]", children: [
        /* @__PURE__ */ jsx("li", { children: "Complete redesign with modern UI components (clean typography, smooth animations)" }),
        /* @__PURE__ */ jsx("li", { children: "Internationalization (i18n) – bilingual (Arabic/French) support" }),
        /* @__PURE__ */ jsx("li", { children: "Responsive layout that works flawlessly on all devices" }),
        /* @__PURE__ */ jsx("li", { children: "Improved performance: reduced load time by 40% compared to legacy site" }),
        /* @__PURE__ */ jsx("li", { children: "Component‑based architecture with Vue single‑file components" }),
        /* @__PURE__ */ jsx("li", { children: "SEO optimizations and meta tags for better visibility" }),
        /* @__PURE__ */ jsx("li", { children: "Version control with Git (GitHub) – feature branches, pull requests" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xl font-semibold text-[var(--sea-ink)]", children: "Screenshots" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: ["/documents/works-internships/sahariano-before.png", "/documents/works-internships/sahariano-after.png"].map((i) => /* @__PURE__ */ jsx("div", { className: "aspect-video rounded-lg bg-[var(--line)]/20 flex items-center justify-center text-[var(--sea-ink-soft)]", children: /* @__PURE__ */ jsx("img", { src: i, alt: `Screenshot ${i}`, className: "object-cover" }) }, i)) })
    ] })
  ] }) });
}
export {
  SaharianoPage as component
};
