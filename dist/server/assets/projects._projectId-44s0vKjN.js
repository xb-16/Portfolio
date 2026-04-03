import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Github, ExternalLink, Code2 } from "lucide-react";
import { R as Route } from "./router-BFJWu7m5.js";
import "react";
import "class-variance-authority";
import "radix-ui";
import "clsx";
import "tailwind-merge";
import "framer-motion";
function ProjectPage() {
  const {
    project
  } = Route.useLoaderData();
  const imagePaths = Array.from({
    length: project.imageCount
  }, (_, i) => `/documents/projects/${project.id}/${i + 1}.png`);
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-[var(--bg-base)] py-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-4", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "mb-8 inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-[var(--sea-ink)] transition-all hover:border-[var(--lagoon)] hover:bg-[var(--lagoon)]/10 hover:shadow-md", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
      "Back to Projects"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8 rounded-2xl border border-[var(--line)] bg-gradient-to-br from-[var(--surface)] to-[var(--surface-strong)] p-8 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-[var(--sea-ink)] md:text-4xl", children: project.title }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-wrap gap-3", children: [
        project.github && /* @__PURE__ */ jsxs("a", { href: project.github, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--chip-bg)] px-4 py-2 text-sm text-[var(--sea-ink)] transition-all hover:border-[var(--lagoon)] hover:bg-[var(--lagoon)]/10", children: [
          /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" }),
          "GitHub"
        ] }),
        project.demo && /* @__PURE__ */ jsxs("a", { href: project.demo, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--chip-bg)] px-4 py-2 text-sm text-[var(--sea-ink)] transition-all hover:border-[var(--lagoon)] hover:bg-[var(--lagoon)]/10", children: [
          /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" }),
          "Live Demo"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxs("h2", { className: "mb-4 flex items-center gap-2 text-xl font-semibold text-[var(--sea-ink)]", children: [
        /* @__PURE__ */ jsx(Code2, { className: "h-5 w-5 text-[var(--lagoon)]" }),
        "Technologies"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: project.tech.map((tech) => /* @__PURE__ */ jsx("span", { className: "rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-3 py-1 text-sm text-[var(--sea-ink-soft)]", children: tech }, tech)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xl font-semibold text-[var(--sea-ink)]", children: "Overview" }),
      /* @__PURE__ */ jsx("div", { className: "prose prose-[var(--sea-ink-soft)] max-w-none", children: project.longDescription.split("\n").map((line, idx) => /* @__PURE__ */ jsx("p", { className: "mb-2 text-[var(--sea-ink-soft)]", children: line }, idx)) })
    ] }),
    project.imageCount > 0 && /* @__PURE__ */ jsxs("div", { className: "mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xl font-semibold text-[var(--sea-ink)]", children: "Preview" }),
      /* @__PURE__ */ jsx("div", { className: "columns-1 sm:columns-2 gap-6 space-y-14", children: imagePaths.map((src, idx) => /* @__PURE__ */ jsx("div", { className: "rounded-lg bg-[var(--line)]/20 break-inside-avoid", children: /* @__PURE__ */ jsx("img", { src, alt: `${project.title} screenshot ${idx + 1}`, className: "w-full transition-transform hover:scale-105", onError: (e) => {
        e.currentTarget.src = "https://placehold.co/600x400/e2e8f0/475569?text=Preview+Coming+Soon";
      } }) }, idx)) })
    ] })
  ] }) });
}
export {
  ProjectPage as component
};
