import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, GraduationCap, MapPin, Calendar, BookOpen, Shield } from "lucide-react";
function BachelorSIRPage() {
  const modules = {
    firstSemester: ["Big Data with NoSQL", "Python", "Administration des Systèmes et Réseaux", "IA pour la Sécurité Informatique", "Mathématique pour la Cryptographie", "Sécurité Informatique", "Entrepreneuriat"],
    secondSemester: ["Cryptologie Informatique", "Sécurité de Cloud Computing & IoT", "Sécurité des Systèmes et Réseaux", "MultiThreading et Programmation Réseaux sous Python"]
  };
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-[var(--bg-base)] py-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-4", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "mb-8 inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-[var(--sea-ink)] transition-all hover:border-[var(--lagoon)] hover:bg-[var(--lagoon)]/10 hover:shadow-md", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
      "Back to Education"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8 rounded-2xl border border-[var(--line)] bg-gradient-to-br from-[var(--surface)] to-[var(--surface-strong)] p-8 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-start gap-3", children: [
        /* @__PURE__ */ jsx(GraduationCap, { className: "h-8 w-8 text-[var(--lagoon)]" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: " text-3xl font-bold text-[var(--sea-ink)] md:text-4xl", children: "Bachelor – Sécurité Informatique et Réseaux (SIR)" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-[var(--sea-ink-soft)]", children: "EST Guelmim" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 text-sm text-[var(--sea-ink-soft)]", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }),
          "Guelmim"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4" }),
          "2025 – 2026"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(BookOpen, { className: "h-5 w-5 text-[var(--lagoon)]" }),
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-[var(--sea-ink)]", children: "First Semester" })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: modules.firstSemester.map((mod, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-[var(--sea-ink-soft)]", children: [
          /* @__PURE__ */ jsx("span", { className: "mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--lagoon)]" }),
          /* @__PURE__ */ jsx("span", { children: mod })
        ] }, idx)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-[var(--lagoon)]" }),
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-[var(--sea-ink)]", children: "Second Semester" })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: modules.secondSemester.map((mod, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-[var(--sea-ink-soft)]", children: [
          /* @__PURE__ */ jsx("span", { className: "mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--lagoon)]" }),
          /* @__PURE__ */ jsx("span", { children: mod })
        ] }, idx)) })
      ] })
    ] })
  ] }) });
}
export {
  BachelorSIRPage as component
};
