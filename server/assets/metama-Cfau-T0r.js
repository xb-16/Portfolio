import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Building2, MapPin, Calendar, Code2, FileText, Github, ExternalLink } from "lucide-react";
function MetamaPage() {
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
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg text-[var(--sea-ink-soft)]", children: "METAMA SARL" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 text-sm text-[var(--sea-ink-soft)]", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }),
          "Agadir"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4" }),
          "May – June 2023 (1 month)"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xl font-semibold text-[var(--sea-ink)]", children: "Overview" }),
      /* @__PURE__ */ jsx("p", { className: "leading-relaxed text-[var(--sea-ink-soft)]", children: "Designed and developed a fully responsive landing page for a store selling Arabic products. The project was completed remotely and focused on creating a modern, visually appealing online presence that drives customer engagement. The site includes a contact form, integrated Google Maps, social media links, and a preloader to enhance user experience during slow connections." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxs("h2", { className: "mb-4 flex items-center gap-2 text-xl font-semibold text-[var(--sea-ink)]", children: [
        /* @__PURE__ */ jsx(Code2, { className: "h-5 w-5 text-[var(--lagoon)]" }),
        "Technologies & Tools"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "FontAwesome", "Google Fonts", "Google Maps API", "FormSubmit", "VS Code", "Git", "GitHub Pages"].map((tech) => /* @__PURE__ */ jsx("span", { className: "rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-3 py-1 text-sm text-[var(--sea-ink-soft)]", children: tech }, tech)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xl font-semibold text-[var(--sea-ink)]", children: "Key Features" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-inside list-disc space-y-2 text-[var(--sea-ink-soft)]", children: [
        /* @__PURE__ */ jsx("li", { children: "Responsive design (mobile‑first, Bootstrap grid)" }),
        /* @__PURE__ */ jsx("li", { children: "Custom preloader with JavaScript (removed after full page load)" }),
        /* @__PURE__ */ jsx("li", { children: "Contact form using FormSubmit (no backend required)" }),
        /* @__PURE__ */ jsx("li", { children: "Embedded Google Maps for location visibility" }),
        /* @__PURE__ */ jsx("li", { children: "Social media icons linking to WhatsApp, email, etc." }),
        /* @__PURE__ */ jsx("li", { children: "Open Graph meta tags for better social sharing" }),
        /* @__PURE__ */ jsx("li", { children: "Hosted on GitHub Pages (custom domain later added)" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xl font-semibold text-[var(--sea-ink)]", children: "Challenges & Solutions" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-inside list-disc space-y-2 text-[var(--sea-ink-soft)]", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Remote collaboration:" }),
          " Used AnyDesk for screen sharing and regular video calls with the supervisor."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Performance on slow networks:" }),
          " Implemented a preloader that stays until all resources are loaded, tested using Chrome DevTools network throttling."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Color consistency:" }),
          " Used CSS custom properties (variables) to define the color palette, making future changes effortless."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-xl font-semibold text-[var(--sea-ink)]", children: "Screenshots" }),
      /* @__PURE__ */ jsx("div", { children: ["/documents/works-internships/metama.png"].map((i) => /* @__PURE__ */ jsx("img", { src: i, alt: "", className: "rounded-2xl" }, i)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxs("h2", { className: "mb-4 flex items-center gap-2 text-xl font-semibold text-[var(--sea-ink)]", children: [
        /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-[var(--lagoon)]" }),
        "Links"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxs("a", { href: "https://github.com/xb-16/IsmailShop-Landing-page-of-a-Shopping-Store.", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--chip-bg)] px-4 py-2 text-[var(--sea-ink)] transition-all hover:border-[var(--lagoon)] hover:bg-[var(--lagoon)]/10", children: [
          /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" }),
          "GitHub Repository"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "https://xb-16.github.io/IsmailShop-Landing-page-of-a-Shopping-Store./", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--chip-bg)] px-4 py-2 text-[var(--sea-ink)] transition-all hover:border-[var(--lagoon)] hover:bg-[var(--lagoon)]/10", children: [
          /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" }),
          "Live Demo"
        ] })
      ] })
    ] })
  ] }) });
}
export {
  MetamaPage as component
};
