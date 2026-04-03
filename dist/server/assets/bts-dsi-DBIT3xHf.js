import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, GraduationCap, MapPin, Calendar, Code } from "lucide-react";
function BTSDSIPage() {
  const modules = ["Web Development (HTML/CSS/JS, PHP)", "Algorithms & Data Structures", "C Programming", "Object-Oriented Programming (Java)", "MySQL (SQL, PL/SQL)", "Visual Basic (VB.NET)", "Advanced Java (Swing, JDBC)", "UML & Design Patterns", "Basics of Networking", "Computer Architecture", "Linux Fundamentals", "Assembleur x86", "Ordonnancement des Processus (FIFO, LIFO, Round Robin, SJF)"];
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-[var(--bg-base)] py-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-4", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "mb-8 inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-[var(--sea-ink)] transition-all hover:border-[var(--lagoon)] hover:bg-[var(--lagoon)]/10 hover:shadow-md", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
      "Back to Education"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-[var(--line)] bg-gradient-to-br from-[var(--surface)] to-[var(--surface-strong)] p-8 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-start gap-3", children: [
        /* @__PURE__ */ jsx(GraduationCap, { className: "h-8 w-8 text-[var(--lagoon)]" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-[var(--sea-ink)] md:text-4xl", children: "BTS – Développement des Systèmes Informatiques (DSI)" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-[var(--sea-ink-soft)]", children: "Lycée Lissane Eddine Ben El Khatib, Laayoune" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 text-sm text-[var(--sea-ink-soft)]", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }),
          "Laayoune"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4" }),
          "2022 – 2024"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Code, { className: "h-5 w-5 text-[var(--lagoon)]" }),
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-[var(--sea-ink)]", children: "Coursework" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-2 md:grid-cols-2", children: modules.map((mod, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-[var(--sea-ink-soft)]", children: [
        /* @__PURE__ */ jsx("span", { className: "mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--lagoon)]" }),
        /* @__PURE__ */ jsx("span", { children: mod })
      ] }, idx)) })
    ] })
  ] }) });
}
export {
  BTSDSIPage as component
};
