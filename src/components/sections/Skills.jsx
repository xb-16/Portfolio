import { motion } from "framer-motion";
import { SectionLayout } from "../SectionLayout";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export function Skills() {
  const skills = [
    {
      category: "Web Fundamentals",
      items:
        "HTML, CSS, JavaScript, SEO, Performance Optimization (Core Web Vitals), Indexing, Insights & Analytics, Headless CMS (Sanity), Responsive Design, Accessibility",
    },
    {
      category: "React Ecosystem",
      items:
        "Axios (API Integration), Design Kit (shadcn/ui, Tailwind CSS, Lucide React, Framer Motion), TanStack Router, TanStack Query, React Hook Form, Cypress (E2E testing), Code Quality (ESLint, Prettier, Husky), localization (i18n)",
    },
    {
      category: "Laravel Ecosystem",
      items:
        "Queues & Jobs (Horizon), Debugging & Monitoring (Telescope), Spatie (Role-Permission, Query Builder), Authentication (Sanctum), Scout (Full-text Search), Postman, Code Quality (Pint, Larastan), Scramble (API Documentation), Octane (high-performance apps)",
    },
    {
      category: "Python",
      items: "Multithreading, Tkinter, RPC, Sockets, Machine Learning (numpy)",
    },
    {
      category: "System Design",
      items:
        "API Design, Scaling, Load Balancers, Queues & Workers, Caching Strategies, CDN, APM Tools, Authentication & Authorization, API Gateway, Testing, SDLC",
    },
    {
      category: "Databases",
      items:
        "MySQL (Optimization), PL‑SQL (Transactions, Triggers...), NoSQL (MongoDB, Replication & Sharding)",
    },
    {
      category: "DevOps & Infrastructure",
      items:
        "Docker (containerization), CI/CD (GitHub Actions), Linux (process management, networking, bash scripting), Git (branching strategies, workflows), Deployment & environment management",
    },
    {
      category: "Networks & Security",
      items:
        "OSI Model, TCP/IP Model, Switching, Routing, Web Application Security (CORS, CSP, OWASP basics)",
    },
    {
      category: "AI & ML",
      items:
        "Machine Learning, LLMs, Agentic Coding (Skills, Rules & Workflows), Prompt Engineering, Claude Code",
    },
  ];

  return (
    <SectionLayout title="Skills" stack>
      <motion.div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.category}
            variants={cardVariants}
            className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 hover:shadow-xl hover:shadow-[var(--lagoon)]/5 dark:bg-black/20 dark:border-white/5 dark:hover:bg-black/30"
          >
            {/* Decorative gradient line under title */}
            <div className="relative mb-4">
              <h3 className="text-xl font-semibold text-[var(--sea-ink)] dark:text-white">
                {skill.category}
              </h3>
              <div className="mt-2 h-0.5 w-12 rounded-full bg-gradient-to-r from-[var(--lagoon)] to-transparent transition-all duration-300 group-hover:w-full" />
            </div>

            <p className="text-sm text-justify leading-relaxed text-[var(--sea-ink-soft)] dark:text-white/80">
              {skill.items}
            </p>

            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--lagoon)]/10 via-transparent to-transparent" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionLayout>
  );
}