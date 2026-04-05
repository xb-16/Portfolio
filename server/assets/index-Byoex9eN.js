import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { S as SectionLayout, P as Projects } from "./router-CFRvSa4V.js";
import { GraduationCap, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import "class-variance-authority";
import "radix-ui";
import "clsx";
import "tailwind-merge";
const platforms = [
  {
    name: "GitHub",
    url: "https://github.com/xb-16",
    username: "xb-16",
    icon: /* @__PURE__ */ jsx(
      "img",
      {
        src: "/github.svg",
        alt: "GitHub",
        className: "h-8 w-8"
      }
    ),
    fetch: async (username) => {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      return {
        repos: data.public_repos,
        followers: data.followers,
        joined: new Date(data.created_at).getFullYear()
      };
    }
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/xbhackermrc",
    icon: /* @__PURE__ */ jsx(
      "img",
      {
        src: "/hackerrank.svg",
        alt: "HackerRank",
        className: "h-8 w-8 scale-150"
      }
    ),
    staticData: {
      badges: "5",
      certificates: 5,
      joined: "2020"
    }
  },
  {
    name: "Dev.to",
    url: "https://dev.to/xb16",
    icon: /* @__PURE__ */ jsx(
      "img",
      {
        src: "/dev.to.png",
        alt: "Dev.to",
        className: "h-8 w-8 scale-110"
      }
    ),
    staticData: {
      articles: 8,
      followers: 48,
      joined: "2024"
    }
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/24086384",
    username: "24086384",
    icon: /* @__PURE__ */ jsx(
      "img",
      {
        src: "/Stack Overflow.svg",
        alt: "Stack Overflow",
        className: "h-8 w-8"
      }
    ),
    fetch: async (userId) => {
      const res = await fetch(`https://api.stackexchange.com/2.3/users/${userId}?site=stackoverflow`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      const user = data.items[0];
      return {
        reputation: user.reputation,
        badges: user.badge_counts.bronze,
        joined: new Date(user.creation_date * 1e3).getFullYear()
      };
    }
  },
  {
    name: "CodePen",
    url: "https://codepen.io/Un_Kown",
    icon: /* @__PURE__ */ jsx(
      "img",
      {
        src: "/codepen.svg",
        alt: "CodePen",
        className: "h-8 w-8 scale-150 object-fit"
      }
    ),
    staticData: {
      designs: 15,
      loves: 40,
      joined: "2020"
    }
  }
];
function PlatformCard({ platform, data, loading, error }) {
  return /* @__PURE__ */ jsx(
    motion.a,
    {
      href: platform.url,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "group relative block rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-xl dark:bg-black/20 dark:border-white/5 dark:hover:bg-black/30",
      whileHover: { y: -4 },
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-4 rounded-full bg-gradient-to-br from-[var(--lagoon)]/20 to-transparent p-3", children: platform.icon }),
        /* @__PURE__ */ jsx("h3", { className: "mb-2 text-lg font-semibold text-[var(--sea-ink)] dark:text-white", children: platform.name }),
        loading ? /* @__PURE__ */ jsx("div", { className: "mt-2 h-12 w-12 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" }) : error ? /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: "Failed to load" }) : /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-[var(--sea-ink-soft)] dark:text-white/80", children: /* @__PURE__ */ jsx("div", { className: "space-y-1", children: Object.entries(data).map(([key, value]) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-8", children: [
          /* @__PURE__ */ jsxs("span", { className: "capitalize", children: [
            key,
            ":"
          ] }),
          /* @__PURE__ */ jsx("span", { className: "font-mono font-semibold", children: value })
        ] }, key)) }) })
      ] })
    }
  );
}
function Hero() {
  const [platformData, setPlatformData] = useState({});
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      const results = {};
      const errs = {};
      await Promise.all(
        platforms.map(async (p) => {
          if (p.staticData) {
            results[p.name] = p.staticData;
          } else if (p.fetch) {
            try {
              const data = await p.fetch(p.username);
              results[p.name] = data;
            } catch {
              errs[p.name] = true;
            }
          }
        })
      );
      setPlatformData(results);
      setErrors(errs);
      setLoading(false);
    };
    fetchAll();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "grid items-center gap-12 md:grid-cols-2 md:gap-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold text-[var(--sea-ink)] md:text-7xl", children: "Laravel & React Developer" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-[var(--sea-ink-soft)]", children: "I craft full‑stack web applications with a passion for clean UI and robust backends." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2", children: platforms.map((p) => /* @__PURE__ */ jsx(
      PlatformCard,
      {
        platform: p,
        data: platformData[p.name],
        loading: loading && !platformData[p.name],
        error: errors[p.name]
      },
      p.name
    )) })
  ] });
}
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};
function Skills() {
  const skills = [
    {
      category: "Web Fundamentals",
      items: "HTML, CSS, JavaScript, SEO, Performance Optimization (Core Web Vitals), Indexing, Insights & Analytics, Headless CMS (Sanity), Responsive Design, Accessibility"
    },
    {
      category: "React Ecosystem",
      items: "Axios (API Integration), Design Kit (shadcn/ui, Tailwind CSS, Lucide React, Framer Motion), TanStack Router, TanStack Query, React Hook Form, Cypress (E2E testing), Code Quality (ESLint, Prettier, Husky), localization (i18n)"
    },
    {
      category: "Laravel Ecosystem",
      items: "Queues & Jobs (Horizon), Debugging & Monitoring (Telescope), Spatie (Role-Permission, Query Builder), Authentication (Sanctum), Scout (Full-text Search), Postman, Code Quality (Pint, Larastan), Scramble (API Documentation), Octane (high-performance apps)"
    },
    {
      category: "Python",
      items: "Multithreading, Tkinter, RPC, Sockets, Machine Learning (numpy)"
    },
    {
      category: "System Design",
      items: "API Design, Scaling, Load Balancers, Queues & Workers, Caching Strategies, CDN, APM Tools, Authentication & Authorization, API Gateway, Testing, SDLC"
    },
    {
      category: "Databases",
      items: "MySQL (Optimization), PL‑SQL (Transactions, Triggers...), NoSQL (MongoDB, Replication & Sharding)"
    },
    {
      category: "DevOps & Infrastructure",
      items: "Docker (containerization), CI/CD (GitHub Actions), Linux (process management, networking, bash scripting), Git (branching strategies, workflows), Deployment & environment management"
    },
    {
      category: "Networks & Security",
      items: "OSI Model, TCP/IP Model, Switching, Routing, Web Application Security (CORS, CSP, OWASP basics)"
    },
    {
      category: "AI & ML",
      items: "Machine Learning, LLMs, Agentic Coding (Skills, Rules & Workflows), Prompt Engineering, Claude Code"
    }
  ];
  return /* @__PURE__ */ jsx(SectionLayout, { title: "Skills", stack: true, children: /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",
      variants: containerVariants,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "-50px" },
      children: skills.map((skill) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          variants: cardVariants,
          className: "group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 hover:shadow-xl hover:shadow-[var(--lagoon)]/5 dark:bg-black/20 dark:border-white/5 dark:hover:bg-black/30",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative mb-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-[var(--sea-ink)] dark:text-white", children: skill.category }),
              /* @__PURE__ */ jsx("div", { className: "mt-2 h-0.5 w-12 rounded-full bg-gradient-to-r from-[var(--lagoon)] to-transparent transition-all duration-300 group-hover:w-full" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-justify leading-relaxed text-[var(--sea-ink-soft)] dark:text-white/80", children: skill.items }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--lagoon)]/10 via-transparent to-transparent" }) })
          ]
        },
        skill.category
      ))
    }
  ) });
}
const educations = [
  {
    id: "bachelor-sir",
    title: "Bachelor - Sécurité Informatique et Réseaux (SIR)",
    institution: "EST Guelmim",
    location: "Guelmim",
    period: "2025 – 2026",
    description: "Relevant coursework: Cryptography, Advanced Linux, Security, BigData, Docker, Python, AI-ML, Bash Scripting, Advanced Networks",
    path: "/education/bachelor-sir"
  },
  {
    id: "bts-dsi",
    title: "BTS - Développement des Systèmes Informatiques (DSI)",
    institution: "Lycée Lissane Eddine Ben El Khatib",
    location: "Laayoune",
    period: "2022 – 2024",
    description: "Relevant coursework: Web Development, C, OOP, MySQL, Basics Networking, Computer Architecture, Linux",
    path: "/education/bts-dsi"
  },
  {
    id: "baccalaureat",
    title: "Baccalauréat - Sciences Physiques",
    institution: "Lycée 14 Août",
    location: "Laayoune",
    period: "2021 – 2022",
    description: null,
    path: ""
  }
];
function Education() {
  return /* @__PURE__ */ jsx(SectionLayout, { title: "Education", reverse: true, children: /* @__PURE__ */ jsx("div", { className: "space-y-6", children: educations.map((edu) => /* @__PURE__ */ jsx(
    Link,
    {
      to: edu.path,
      className: "group block rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm transition-all duration-200 hover:border-[var(--lagoon)]/50 hover:shadow-lg hover:scale-[1.01]",
      children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(GraduationCap, { className: "mt-1 h-5 w-5 text-[var(--lagoon)] flex-shrink-0" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-[var(--sea-ink)] group-hover:text-[var(--lagoon-deep)] transition-colors", children: edu.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-[var(--sea-ink-soft)]", children: edu.institution })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 flex flex-wrap gap-4 text-sm text-[var(--sea-ink-soft)]", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }),
              edu.location
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4" }),
              edu.period
            ] })
          ] }),
          edu.description && /* @__PURE__ */ jsx("p", { className: "mt-3 text-[var(--sea-ink-soft)] leading-relaxed", children: edu.description })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "ml-4 flex items-center", children: /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--sea-ink-soft)] transition-all group-hover:border-[var(--lagoon)] group-hover:bg-[var(--lagoon)]/10 group-hover:text-[var(--lagoon-deep)]", children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" }) }) })
      ] })
    },
    edu.id
  )) }) });
}
const experiences = [
  {
    id: "sahariano",
    title: "Sahariano Agency",
    location: "Laayoune",
    duration: "2 Months, 2025",
    description: "Redesigned legacy website with a modern, elegant UI using Vue.js, enhancing visual appeal and user experience. Integrated i18n for full internationalization support.",
    path: "/works-internships/sahariano"
  },
  {
    id: "digilux",
    title: "DIGILUX",
    location: "Laayoune",
    duration: "2 Months, 2024",
    description: "A 2 month-long training period conducted in-person & remotely resulted in the design of a POS System for a Coffee Shop.",
    path: "/works-internships/digilux"
  },
  {
    id: "metama",
    title: "METAMA SARL",
    location: "Agadir",
    duration: "1 Month, 2023",
    description: "A month-long training period conducted remotely resulted in the design of a responsive website for a seller of Arabic products, along with preparing a domain for a year.",
    path: "/works-internships/metama"
  }
];
function Work() {
  return /* @__PURE__ */ jsx(SectionLayout, { title: "Work & Internships", stack: true, children: /* @__PURE__ */ jsx("div", { className: "space-y-6", children: experiences.map((exp) => /* @__PURE__ */ jsx(
    Link,
    {
      to: exp.path,
      className: "group block rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6 transition-all duration-200 hover:border-[var(--lagoon)]/50 hover:shadow-lg hover:scale-[1.01]",
      children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-[var(--sea-ink)] group-hover:text-[var(--lagoon-deep)] transition-colors", children: exp.title }),
          /* @__PURE__ */ jsxs("div", { className: "mt-2 flex flex-wrap gap-4 text-sm text-[var(--sea-ink-soft)]", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }),
              exp.location
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4" }),
              exp.duration
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-[var(--sea-ink-soft)] leading-relaxed", children: exp.description })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "ml-4 flex items-center", children: /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--sea-ink-soft)] transition-all group-hover:border-[var(--lagoon)] group-hover:bg-[var(--lagoon)]/10 group-hover:text-[var(--lagoon-deep)]", children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" }) }) })
      ] })
    },
    exp.id
  )) }) });
}
function Events() {
  return /* @__PURE__ */ jsx(SectionLayout, { title: "Events & Hackathons", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold text-[var(--sea-ink)]", children: "HackTheNorth 2024" }),
      /* @__PURE__ */ jsx("p", { className: "text-[var(--sea-ink-soft)]", children: 'Built a real‑time collaborative whiteboard – won "Best Use of Cloud".' })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold text-[var(--sea-ink)]", children: "CTF: CyberStorm" }),
      /* @__PURE__ */ jsx("p", { className: "text-[var(--sea-ink-soft)]", children: "Ranked 12th overall in web exploitation and cryptography challenges." })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold text-[var(--sea-ink)]", children: "Laracon EU 2023" }),
      /* @__PURE__ */ jsx("p", { className: "text-[var(--sea-ink-soft)]", children: "Attended talks on Laravel ecosystem and modern PHP practices." })
    ] })
  ] }) });
}
function Home() {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8 md:space-y-16", children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Skills, {}),
    /* @__PURE__ */ jsx(Education, {}),
    /* @__PURE__ */ jsx(Work, {}),
    /* @__PURE__ */ jsx(Projects, {}),
    /* @__PURE__ */ jsx(Events, {})
  ] });
}
export {
  Home as component
};
