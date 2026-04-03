import { Link } from '@tanstack/react-router';
import { SectionLayout } from '../SectionLayout';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

export const projects = [
  {
    id: 'virtual-reality',
    title: 'Virtual Reality Landing Page',
    description:
      'Modern, responsive landing page for a VR product with smooth scroll animations.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    github: 'https://github.com/xb-16/VirtualR',
    demo: 'https://virtual-r-ahmed.vercel.app/',
    imageCount: 1,
    longDescription: `Built with React and Tailwind CSS, featuring:
- Responsive design using Tailwind utilities
- Interactive animations with Framer Motion (scroll-triggered)
- Modern, lightweight icons from Lucide
- Seamless user experience across all devices`,
  },
  {
    id: 'real-estate',
    title: 'Real Estate Landing Page',
    description:
      'Responsive real estate landing page showcasing services and properties.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons', 'HeroUI'],
    github: 'https://github.com/xb-16/real_estate',
    demo: 'https://real-estate-ahmed.vercel.app/',
    imageCount: 1,
    longDescription: `A responsive landing page for a real estate business, built with React and Tailwind CSS. Features include:
- Fully responsive design using Tailwind utility classes
- Scroll animations powered by Framer Motion
- HeroUI components for enhanced UI
- Version control with Git and deployment on Vercel`,
  },
  {
    id: 'digital-agency',
    title: 'Digital Agency Platform',
    description:
      'Full‑stack agency platform with Sanity CMS, 20+ pages, and advanced animations.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'TanStack Query', 'TanStack Router', 'Sanity'],
    github: 'https://github.com/xb-16/DgitialAgencyPlateform',
    demo: 'https://dgitial-agency-ahmed.vercel.app/',
    imageCount: 17,
    longDescription: `A comprehensive digital agency website with 20+ dynamic pages, including Home, Services, Projects, Blogs, About, Contact, Testimonials, FAQs, Our Team, Pricing, Career, 404, and Coming Soon. Built with:
- React & Tailwind CSS for modern UI
- Framer Motion for engaging scroll animations
- TanStack Query & Router for data fetching and routing
- Headless CMS (Sanity) for easily managed content
- Performance optimization for fast loading`,
  },
  {
    id: 'pixels-positions',
    title: 'Pixels Positions',
    description:
      'Interactive portfolio piece (description from GitHub).',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/xb-16/Pixels_Positions',
    demo: null,
    imageCount: 1,
    longDescription: `A creative project showcasing pixel-perfect positioning and interactive elements. Built with React and Tailwind CSS. (More details available on GitHub.)`,
  },
  {
    id: 'clothes-store-php',
    title: 'Clothes Store (PHP)',
    description:
      'Full‑stack e‑commerce site with custom dashboard, email notifications, and TinyPNG API.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Blade'],
    github: 'https://github.com/xb-16/Clothes-Store-Website',
    demo: 'https://xb-16.github.io/Clothes-Store-Website/',
    imageCount: 9,
    longDescription: `A full‑stack e‑commerce platform for clothes, built over two months. Features include:
- Modern responsive design (desktop, tablet, mobile)
- Custom admin dashboard
- Email notifications after purchase (via Resend API)
- Optimized images using TinyPNG API
- Pages: Home, Product, Search, Collections, Shopping Cart, Checkout, Error, Legal (Terms, Cookies, Refund)`,
  },
  {
    id: 'bios-emulator',
    title: 'BIOS Emulator Web Interface',
    description:
      'Web‑based BIOS emulator interface for educational purposes.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/xb-16/BIOS-Emulator-Web-Interface',
    demo: 'https://xb-16.github.io/BIOS-Emulator-Web-Interface/',
    imageCount: 1,
    longDescription: `A web interface that simulates a BIOS environment, built with vanilla HTML, CSS, and JavaScript. Useful for learning BIOS navigation and concepts.`,
  },
  {
    id: 'clothes-store-laravel-react',
    title: 'Clothes Store (Laravel + React)',
    description:
      'Full‑stack e‑commerce with JWT auth, dashboard, CI/CD, tests, and advanced tooling.',
    tech: [
      'Laravel', 'React', 'Tailwind CSS', 'Sanctum', 'TanStack Query',
      'TanStack Router', 'MySQL', 'Redis', 'Cypress', 'PHPUnit',
      'Docker', 'GitHub Actions', 'Cloudinary', 'Sentry', 'BetterStack',
      'Scramble', 'Horizon', 'Telescope', 'Scout', 'Algolia',
    ],
    github: 'https://github.com/xb-16/Clothes-Store-Boilerplate-Website-Using-React-Laravel',
    demo: null, // private repo, no demo
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
- **Security:** Gitleaks SAST, CORS, CSP headers`,
  },
];

export function Projects() {
  return (
    <SectionLayout title="Side Projects" reverse>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.id}
            to="/projects/$projectId"
            params={{ projectId: project.id }}
            className="group block rounded-xl border border-[var(--line)] bg-gradient-to-br from-[var(--surface-strong)] to-[var(--surface)] p-5 transition-all duration-200 hover:scale-[1.02] hover:border-[var(--lagoon)]/50 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[var(--sea-ink)] group-hover:text-[var(--lagoon-deep)] transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--sea-ink-soft)] line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-2 py-0.5 text-xs text-[var(--sea-ink-soft)]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs text-[var(--sea-ink-soft)]">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
              <ArrowRight className="ml-4 h-5 w-5 text-[var(--sea-ink-soft)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--lagoon-deep)]" />
            </div>
          </Link>
        ))}
      </div>
    </SectionLayout>
  );
}