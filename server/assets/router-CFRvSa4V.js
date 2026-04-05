import { createRootRoute, HeadContent, Outlet, Scripts, createFileRoute, lazyRouteComponent, Link, notFound, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Sun, Moon, Monitor, ArrowRight } from "lucide-react";
import { useState, useEffect, createContext, useContext, useRef } from "react";
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useInView, motion } from "framer-motion";
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-[var(--line)] bg-[var(--header-bg)] py-6 text-center text-sm text-[var(--sea-ink-soft)]", children: /* @__PURE__ */ jsxs("p", { children: [
    "© ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " Your Name. Built with TanStack Router & shadcn."
  ] }) });
}
const ThemeContext = createContext(void 0);
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("auto");
  const [resolvedTheme, setResolvedTheme] = useState("light");
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored && ["light", "dark", "auto"].includes(stored)) {
      setTheme(stored);
    }
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = () => {
      const isDark = theme === "dark" || theme === "auto" && media.matches;
      const resolved = isDark ? "dark" : "light";
      setResolvedTheme(resolved);
      root.classList.remove("light", "dark");
      root.classList.add(resolved);
      root.style.colorScheme = resolved;
      if (theme === "auto") {
        root.removeAttribute("data-theme");
      } else {
        root.setAttribute("data-theme", theme);
      }
    };
    applyTheme();
    localStorage.setItem("theme", theme);
    const handler = () => applyTheme();
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [theme]);
  return /* @__PURE__ */ jsx(ThemeContext.Provider, { value: { theme, setTheme, resolvedTheme }, children });
}
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--surface)] p-1 backdrop-blur-sm", children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: theme === "light" ? "default" : "ghost",
        size: "icon",
        onClick: () => setTheme("light"),
        className: "h-8 w-8 rounded-full",
        children: /* @__PURE__ */ jsx(Sun, { className: "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: theme === "dark" ? "default" : "ghost",
        size: "icon",
        onClick: () => setTheme("dark"),
        className: "h-8 w-8 rounded-full",
        children: /* @__PURE__ */ jsx(Moon, { className: "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: theme === "auto" ? "default" : "ghost",
        size: "icon",
        onClick: () => setTheme("auto"),
        className: "h-8 w-8 rounded-full",
        children: /* @__PURE__ */ jsx(Monitor, { className: "h-4 w-4" })
      }
    )
  ] });
}
function Header() {
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] backdrop-blur-md", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-16 w-full max-w-[1080px] items-center justify-between px-4", children: [
    /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-[var(--sea-ink)]", children: "Ahmed ASSARI * xb-16" }),
    /* @__PURE__ */ jsx(ThemeToggle, {})
  ] }) });
}
const appCss = "/Portfolio/assets/styles-DqY8s1YG.css";
const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`;
const Route$7 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Laravel & React Developer Portfolio" }
    ],
    links: [{ rel: "stylesheet", href: appCss }]
  }),
  component: RootDocument
});
function RootDocument() {
  return /* @__PURE__ */ jsxs("html", { lang: "en", suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("script", { dangerouslySetInnerHTML: { __html: THEME_INIT_SCRIPT } }),
      /* @__PURE__ */ jsx(HeadContent, {})
    ] }),
    /* @__PURE__ */ jsx("body", { className: "font-sans antialiased [overflow-wrap:anywhere] selection:bg-[rgba(79,184,178,0.24)]", children: /* @__PURE__ */ jsxs(ThemeProvider, { children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("main", { className: "max-w-[1080px] mx-auto w-full px-4 py-8 md:py-12", children: /* @__PURE__ */ jsx(Outlet, {}) }),
      /* @__PURE__ */ jsx(Footer, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] }) })
  ] });
}
const $$splitComponentImporter$6 = () => import("./index-Byoex9eN.js");
const Route$6 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./sahariano-Hp1KRCbg.js");
const Route$5 = createFileRoute("/works-internships/sahariano")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./metama-Cfau-T0r.js");
const Route$4 = createFileRoute("/works-internships/metama")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./digilux-BEmCAdOw.js");
const Route$3 = createFileRoute("/works-internships/digilux")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
function Cube() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px 0px -100px 0px" });
  const [isHovered, setIsHovered] = useState(false);
  const baseZ = 50;
  const openZ = 80;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative flex items-center justify-center",
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      children: [
        /* @__PURE__ */ jsx("div", { className: "relative h-32 w-32 perspective-midrange", ref, children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "absolute inset-0",
            animate: isInView ? { rotateX: 360, rotateY: 360 } : { rotateX: 0, rotateY: 0 },
            transition: isInView ? { duration: 20, repeat: Infinity, ease: "linear" } : { duration: 0.5, ease: "easeOut" },
            style: { transformStyle: "preserve-3d" },
            children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "absolute inset-0 bg-gradient-to-br from-[var(--lagoon)]/60 to-[var(--lagoon-deep)]/60 opacity-80 blur-sm",
                  style: { transform: `translateZ(${baseZ}px)` },
                  animate: { transform: `translateZ(${isHovered ? openZ : baseZ}px)` },
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "absolute inset-0 border border-[var(--lagoon)]/30 bg-[var(--lagoon)]/10 backdrop-blur-sm",
                  style: { transform: `translateZ(${baseZ}px)` },
                  animate: { transform: `translateZ(${isHovered ? openZ : baseZ}px)` },
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "absolute inset-0 bg-gradient-to-br from-[var(--palm)]/60 to-[var(--lagoon)]/60 opacity-80 blur-sm",
                  style: { transform: `rotateY(180deg) translateZ(${baseZ}px)` },
                  animate: { transform: `rotateY(180deg) translateZ(${isHovered ? openZ : baseZ}px)` },
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "absolute inset-0 border border-[var(--palm)]/30 bg-[var(--palm)]/10 backdrop-blur-sm",
                  style: { transform: `rotateY(180deg) translateZ(${baseZ}px)` },
                  animate: { transform: `rotateY(180deg) translateZ(${isHovered ? openZ : baseZ}px)` },
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "absolute inset-0 bg-gradient-to-br from-[var(--sea-ink)]/60 to-[var(--lagoon)]/60 opacity-80 blur-sm",
                  style: { transform: `rotateY(-90deg) translateZ(${baseZ}px)` },
                  animate: { transform: `rotateY(-90deg) translateZ(${isHovered ? openZ : baseZ}px)` },
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "absolute inset-0 border border-[var(--sea-ink)]/30 bg-[var(--sea-ink)]/10 backdrop-blur-sm",
                  style: { transform: `rotateY(-90deg) translateZ(${baseZ}px)` },
                  animate: { transform: `rotateY(-90deg) translateZ(${isHovered ? openZ : baseZ}px)` },
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "absolute inset-0 bg-gradient-to-br from-[var(--lagoon)]/60 to-[var(--sea-ink)]/60 opacity-80 blur-sm",
                  style: { transform: `rotateY(90deg) translateZ(${baseZ}px)` },
                  animate: { transform: `rotateY(90deg) translateZ(${isHovered ? openZ : baseZ}px)` },
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "absolute inset-0 border border-[var(--lagoon)]/30 bg-[var(--lagoon)]/10 backdrop-blur-sm",
                  style: { transform: `rotateY(90deg) translateZ(${baseZ}px)` },
                  animate: { transform: `rotateY(90deg) translateZ(${isHovered ? openZ : baseZ}px)` },
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "absolute inset-0 bg-gradient-to-br from-[var(--foam)]/60 to-[var(--lagoon)]/60 opacity-80 blur-sm",
                  style: { transform: `rotateX(90deg) translateZ(${baseZ}px)` },
                  animate: { transform: `rotateX(90deg) translateZ(${isHovered ? openZ : baseZ}px)` },
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "absolute inset-0 border border-[var(--foam)]/30 bg-[var(--foam)]/10 backdrop-blur-sm",
                  style: { transform: `rotateX(90deg) translateZ(${baseZ}px)` },
                  animate: { transform: `rotateX(90deg) translateZ(${isHovered ? openZ : baseZ}px)` },
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "absolute inset-0 bg-gradient-to-br from-[var(--sea-ink)]/60 to-[var(--palm)]/60 opacity-80 blur-sm",
                  style: { transform: `rotateX(-90deg) translateZ(${baseZ}px)` },
                  animate: { transform: `rotateX(-90deg) translateZ(${isHovered ? openZ : baseZ}px)` },
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "absolute inset-0 border border-[var(--sea-ink)]/30 bg-[var(--sea-ink)]/10 backdrop-blur-sm",
                  style: { transform: `rotateX(-90deg) translateZ(${baseZ}px)` },
                  animate: { transform: `rotateX(-90deg) translateZ(${isHovered ? openZ : baseZ}px)` },
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 rounded-full bg-[var(--lagoon)]/20 blur-3xl" })
      ]
    }
  );
}
function SectionLayout({
  title,
  children,
  reverse = false,
  stack = false
}) {
  if (stack) {
    return /* @__PURE__ */ jsxs("section", { className: "relative my-20 first:mt-8 last:mb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-[var(--sea-ink)] md:text-5xl", children: title }),
        /* @__PURE__ */ jsx(Cube, {})
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 -z-10 opacity-20",
          style: {
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--sea-ink) 1px, transparent 0)`,
            backgroundSize: "32px 32px"
          }
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs("section", { className: "relative my-20 first:mt-8 last:mb-8", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "grid gap-8 md:grid-cols-2 md:gap-12 items-center",
          reverse && "md:[&>*:first-child]:order-2"
        ),
        children: [
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsx("div", { className: "prose prose-lg prose-[var(--sea-ink)]", children }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col place-items-center gap-18 justify-center", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-[var(--sea-ink)] md:text-5xl", children: title }),
            /* @__PURE__ */ jsx(Cube, {})
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 -z-10 opacity-20",
        style: {
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--sea-ink) 1px, transparent 0)`,
          backgroundSize: "32px 32px"
        }
      }
    )
  ] });
}
const projects = [
  {
    id: "virtual-reality",
    title: "Virtual Reality Landing Page",
    description: "Modern, responsive landing page for a VR product with smooth scroll animations.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    github: "https://github.com/xb-16/VirtualR",
    demo: "https://virtual-r-ahmed.vercel.app/",
    imageCount: 1,
    longDescription: `Built with React and Tailwind CSS, featuring:
- Responsive design using Tailwind utilities
- Interactive animations with Framer Motion (scroll-triggered)
- Modern, lightweight icons from Lucide
- Seamless user experience across all devices`
  },
  {
    id: "real-estate",
    title: "Real Estate Landing Page",
    description: "Responsive real estate landing page showcasing services and properties.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Lucide Icons", "HeroUI"],
    github: "https://github.com/xb-16/real_estate",
    demo: "https://real-estate-ahmed.vercel.app/",
    imageCount: 1,
    longDescription: `A responsive landing page for a real estate business, built with React and Tailwind CSS. Features include:
- Fully responsive design using Tailwind utility classes
- Scroll animations powered by Framer Motion
- HeroUI components for enhanced UI
- Version control with Git and deployment on Vercel`
  },
  {
    id: "digital-agency",
    title: "Digital Agency Platform",
    description: "Full‑stack agency platform with Sanity CMS, 20+ pages, and advanced animations.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "TanStack Query", "TanStack Router", "Sanity"],
    github: "https://github.com/xb-16/DgitialAgencyPlateform",
    demo: "https://dgitial-agency-ahmed.vercel.app/",
    imageCount: 17,
    longDescription: `A comprehensive digital agency website with 20+ dynamic pages, including Home, Services, Projects, Blogs, About, Contact, Testimonials, FAQs, Our Team, Pricing, Career, 404, and Coming Soon. Built with:
- React & Tailwind CSS for modern UI
- Framer Motion for engaging scroll animations
- TanStack Query & Router for data fetching and routing
- Headless CMS (Sanity) for easily managed content
- Performance optimization for fast loading`
  },
  {
    id: "pixels-positions",
    title: "Pixels Positions",
    description: "Interactive portfolio piece (description from GitHub).",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/xb-16/Pixels_Positions",
    demo: null,
    imageCount: 1,
    longDescription: `A creative project showcasing pixel-perfect positioning and interactive elements. Built with React and Tailwind CSS. (More details available on GitHub.)`
  },
  {
    id: "clothes-store-php",
    title: "Clothes Store (PHP)",
    description: "Full‑stack e‑commerce site with custom dashboard, email notifications, and TinyPNG API.",
    tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Blade"],
    github: "https://github.com/xb-16/Clothes-Store-Website",
    demo: "https://xb-16.github.io/Clothes-Store-Website/",
    imageCount: 9,
    longDescription: `A full‑stack e‑commerce platform for clothes, built over two months. Features include:
- Modern responsive design (desktop, tablet, mobile)
- Custom admin dashboard
- Email notifications after purchase (via Resend API)
- Optimized images using TinyPNG API
- Pages: Home, Product, Search, Collections, Shopping Cart, Checkout, Error, Legal (Terms, Cookies, Refund)`
  },
  {
    id: "bios-emulator",
    title: "BIOS Emulator Web Interface",
    description: "Web‑based BIOS emulator interface for educational purposes.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/xb-16/BIOS-Emulator-Web-Interface",
    demo: "https://xb-16.github.io/BIOS-Emulator-Web-Interface/",
    imageCount: 1,
    longDescription: `A web interface that simulates a BIOS environment, built with vanilla HTML, CSS, and JavaScript. Useful for learning BIOS navigation and concepts.`
  },
  {
    id: "clothes-store-laravel-react",
    title: "Clothes Store (Laravel + React)",
    description: "Full‑stack e‑commerce with JWT auth, dashboard, CI/CD, tests, and advanced tooling.",
    tech: [
      "Laravel",
      "React",
      "Tailwind CSS",
      "Sanctum",
      "TanStack Query",
      "TanStack Router",
      "MySQL",
      "Redis",
      "Cypress",
      "PHPUnit",
      "Docker",
      "GitHub Actions",
      "Cloudinary",
      "Sentry",
      "BetterStack",
      "Scramble",
      "Horizon",
      "Telescope",
      "Scout",
      "Algolia"
    ],
    github: "https://github.com/xb-16/Clothes-Store-Boilerplate-Website-Using-React-Laravel",
    demo: null,
    // private repo, no demo
    imageCount: 18,
    longDescription: `A production‑ready e‑commerce platform built with Laravel and React. Key features:
- **Authentication:** JWT via Sanctum with refresh tokens
- **Frontend:** React, Tailwind CSS, Shadcn UI, TanStack Router & Query, React Hook Form
- **Backend:** Laravel with RESTful API, rate limiting, API documentation (Scramble)
- **Testing:** Cypress (E2E), PHPUnit (backend), Larastan & Pint (code quality)
- **Performance:** Skeleton loaders, query caching, queue workers (Horizon), Scout + Algolia search
- **Monitoring:** Sentry (APM), Telescope, BetterStack logging
- **Media:** Cloudinary storage, TinyPNG optimization
- **CI/CD:** GitHub Actions pipeline
- **Dashboard:** Statistics, Products (CRUD), Orders, Collections, Styles, Discounts
- **Email:** Resend for order confirmations and newsletters
- **Code quality:** Prettier, ESLint, Husky, lint-staged, Pint, PHPStan
- **Security:** Gitleaks SAST, CORS, CSP headers`
  }
];
function Projects() {
  return /* @__PURE__ */ jsx(SectionLayout, { title: "Side Projects", reverse: true, children: /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2", children: projects.map((project) => /* @__PURE__ */ jsx(
    Link,
    {
      to: "/projects/$projectId",
      params: { projectId: project.id },
      className: "group block rounded-xl border border-[var(--line)] bg-gradient-to-br from-[var(--surface-strong)] to-[var(--surface)] p-5 transition-all duration-200 hover:scale-[1.02] hover:border-[var(--lagoon)]/50 hover:shadow-lg",
      children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-[var(--sea-ink)] group-hover:text-[var(--lagoon-deep)] transition-colors", children: project.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-[var(--sea-ink-soft)] line-clamp-2", children: project.description }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 flex flex-wrap gap-2", children: [
            project.tech.slice(0, 3).map((tech) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-2 py-0.5 text-xs text-[var(--sea-ink-soft)]",
                children: tech
              },
              tech
            )),
            project.tech.length > 3 && /* @__PURE__ */ jsxs("span", { className: "text-xs text-[var(--sea-ink-soft)]", children: [
              "+",
              project.tech.length - 3
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-4 h-5 w-5 text-[var(--sea-ink-soft)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--lagoon-deep)]" })
      ] })
    },
    project.id
  )) }) });
}
const $$splitComponentImporter$2 = () => import("./projects._projectId-DHb1c3uZ.js");
const Route$2 = createFileRoute("/projects/$projectId")({
  loader: ({
    params
  }) => {
    const project = projects?.find((p) => p.id === params.projectId);
    if (!project) throw notFound();
    return {
      project
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./bts-dsi-DBIT3xHf.js");
const Route$1 = createFileRoute("/education/bts-dsi")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./bachelor-sir-Bxgk9wtl.js");
const Route = createFileRoute("/education/bachelor-sir")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$6.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const WorksInternshipsSaharianoRoute = Route$5.update({
  id: "/works-internships/sahariano",
  path: "/works-internships/sahariano",
  getParentRoute: () => Route$7
});
const WorksInternshipsMetamaRoute = Route$4.update({
  id: "/works-internships/metama",
  path: "/works-internships/metama",
  getParentRoute: () => Route$7
});
const WorksInternshipsDigiluxRoute = Route$3.update({
  id: "/works-internships/digilux",
  path: "/works-internships/digilux",
  getParentRoute: () => Route$7
});
const ProjectsProjectIdRoute = Route$2.update({
  id: "/projects/$projectId",
  path: "/projects/$projectId",
  getParentRoute: () => Route$7
});
const EducationBtsDsiRoute = Route$1.update({
  id: "/education/bts-dsi",
  path: "/education/bts-dsi",
  getParentRoute: () => Route$7
});
const EducationBachelorSirRoute = Route.update({
  id: "/education/bachelor-sir",
  path: "/education/bachelor-sir",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  EducationBachelorSirRoute,
  EducationBtsDsiRoute,
  ProjectsProjectIdRoute,
  WorksInternshipsDigiluxRoute,
  WorksInternshipsMetamaRoute,
  WorksInternshipsSaharianoRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0
  });
  return router2;
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Projects as P,
  Route$2 as R,
  SectionLayout as S,
  router as r
};
