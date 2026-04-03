import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Building2, MapPin, Calendar, Code2, LayoutDashboard } from "lucide-react";
function DigiluxPage() {
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-[var(--bg-base)] py-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-4", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "mb-8 inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-[var(--sea-ink)] transition-all hover:border-[var(--lagoon)] hover:bg-[var(--lagoon)]/10 hover:shadow-md", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
      "Back to Work"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8 rounded-2xl border border-[var(--line)] bg-gradient-to-br from-[var(--surface)] to-[var(--surface-strong)] p-8 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-start gap-3", children: [
        /* @__PURE__ */ jsx(Building2, { className: "h-8 w-8 text-[var(--lagoon)]" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-[var(--sea-ink)] md:text-4xl", children: "Full Stack Web Developer" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg text-[var(--sea-ink-soft)]", children: "DIGILUX" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 text-sm text-[var(--sea-ink-soft)]", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }),
          "Laayoune"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4" }),
          "May – July 2024 (2 months)"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xl font-semibold text-[var(--sea-ink)]", children: "Overview" }),
      /* @__PURE__ */ jsx("p", { className: "leading-relaxed text-[var(--sea-ink-soft)]", children: "Designed and built a full‑stack Point of Sale (POS) system for a coffee shop. The application handles order management, ticket printing, and provides an admin dashboard with sales statistics. It includes role‑based authentication (servers vs. administrators) and works as a Progressive Web App (PWA) to run as a desktop application. The project also involved upgrading the client’s hardware (from Windows XP to Windows 10) to ensure modern software compatibility." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxs("h2", { className: "mb-4 flex items-center gap-2 text-xl font-semibold text-[var(--sea-ink)]", children: [
        /* @__PURE__ */ jsx(Code2, { className: "h-5 w-5 text-[var(--lagoon)]" }),
        "Technologies & Tools"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "AJAX", "Chart.js", "jQuery", "XAMPP", "VS Code", "AnyDesk", "MySQL Workbench", "Git", "GitHub"].map((tech) => /* @__PURE__ */ jsx("span", { className: "rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-3 py-1 text-sm text-[var(--sea-ink-soft)]", children: tech }, tech)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxs("h2", { className: "mb-4 flex items-center gap-2 text-xl font-semibold text-[var(--sea-ink)]", children: [
        /* @__PURE__ */ jsx(LayoutDashboard, { className: "h-5 w-5 text-[var(--lagoon)]" }),
        "Key Features"
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "list-inside list-disc space-y-2 text-[var(--sea-ink-soft)]", children: [
        /* @__PURE__ */ jsx("li", { children: "Role‑based authentication (servers / admins) with session management" }),
        /* @__PURE__ */ jsx("li", { children: "Order catalog with categories, item selection, and table numbers" }),
        /* @__PURE__ */ jsx("li", { children: "Real‑time ticket printing via thermal printer (JavaScript + print API)" }),
        /* @__PURE__ */ jsx("li", { children: "Admin dashboard with sales statistics (Chart.js: line, bar, pie charts)" }),
        /* @__PURE__ */ jsx("li", { children: "Progressive Web App (PWA) features – works offline and installable as desktop app" }),
        /* @__PURE__ */ jsx("li", { children: "Responsive design for tablets and desktops" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xl font-semibold text-[var(--sea-ink)]", children: "Methodologies & Architecture" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-inside list-disc space-y-2 text-[var(--sea-ink-soft)]", children: [
        /* @__PURE__ */ jsx("li", { children: "UML modeling: use case, class, and sequence diagrams" }),
        /* @__PURE__ */ jsx("li", { children: "Database design with MySQL Workbench (normalization, foreign keys)" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xl font-semibold text-[var(--sea-ink)]", children: "Challenges & Solutions" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-inside list-disc space-y-2 text-[var(--sea-ink-soft)]", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Old hardware & OS:" }),
          " Replaced Windows XP with Windows 10, optimized the application to run smoothly on low‑spec machines."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Thermal printer integration:" }),
          " Used JavaScript’s window.print() with custom CSS to format tickets correctly; tested extensively with real hardware remotely."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Real‑time updates:" }),
          " AJAX calls to update order status without page reload, ensuring smooth workflow for waiters."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xl font-semibold text-[var(--sea-ink)]", children: "Screenshots" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4 md:grid-cols-3", children: ["/documents/works-internships/digilux2.png", "/documents/works-internships/digilux1.png", "/documents/works-internships/digilux3.png"].map((i) => /* @__PURE__ */ jsx("img", { src: i, alt: "", className: "rounded-2xl" }, i)) })
    ] })
  ] }) });
}
export {
  DigiluxPage as component
};
