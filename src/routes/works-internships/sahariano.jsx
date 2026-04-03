import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Building2,
  Code2,
  Globe,
  Languages,
  ExternalLink,
  FileText,
} from 'lucide-react'

export const Route = createFileRoute('/works-internships/sahariano')({
  component: SaharianoPage,
})

function SaharianoPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-base)] py-12">
      <div className="mx-auto max-w-4xl px-4">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-[var(--sea-ink)] transition-all hover:border-[var(--lagoon)] hover:bg-[var(--lagoon)]/10 hover:shadow-md"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Work
        </Link>

        <div className="mb-8 rounded-2xl border border-[var(--line)] bg-gradient-to-br from-[var(--surface)] to-[var(--surface-strong)] p-8 backdrop-blur-sm">
          <div className="mb-4 flex items-start gap-3">
            <Building2 className="h-8 w-8 text-[var(--lagoon)]" />
            <div>
              <h1 className="text-3xl font-bold text-[var(--sea-ink)] md:text-4xl">
                Front‑end Developer
              </h1>
              <p className="mt-2 text-lg text-[var(--sea-ink-soft)]">
                Sahariano Agency
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-[var(--sea-ink-soft)]">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Laayoune
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              Feb – April 2025 (2 months)
            </span>
          </div>
        </div>

        <div className="mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm">
          <h2 className="mb-4 text-xl font-semibold text-[var(--sea-ink)]">
            Overview
          </h2>
          <p className="leading-relaxed text-[var(--sea-ink-soft)]">
            Redesigned a legacy website for a local agency, transforming it into
            a modern, visually appealing platform using Vue.js. The project
            focused on enhancing user experience, improving performance, and
            adding full internationalization (i18n) support to reach a wider
            audience.
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-[var(--sea-ink)]">
            <Code2 className="h-5 w-5 text-[var(--lagoon)]" />
            Technologies & Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              'Vue.js',
              'Vue i18n',
              'JavaScript (ES6+)',
              'HTML5',
              'CSS3',
              'Tailwind CSS',
              'Git',
              'VS Code',
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-3 py-1 text-sm text-[var(--sea-ink-soft)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-[var(--sea-ink)]">
            <Globe className="h-5 w-5 text-[var(--lagoon)]" />
            Key Features
          </h2>
          <ul className="list-inside list-disc space-y-2 text-[var(--sea-ink-soft)]">
            <li>
              Complete redesign with modern UI components (clean typography,
              smooth animations)
            </li>
            <li>
              Internationalization (i18n) – bilingual (Arabic/French) support
            </li>
            <li>Responsive layout that works flawlessly on all devices</li>
            <li>
              Improved performance: reduced load time by 40% compared to legacy
              site
            </li>
            <li>
              Component‑based architecture with Vue single‑file components
            </li>
            <li>SEO optimizations and meta tags for better visibility</li>
            <li>
              Version control with Git (GitHub) – feature branches, pull
              requests
            </li>
          </ul>
        </div>

        <div className="mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm">
          <h2 className="mb-4 text-xl font-semibold text-[var(--sea-ink)]">
            Screenshots
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              '/documents/works-internships/sahariano-before.png',
              '/documents/works-internships/sahariano-after.png',
            ].map((i) => (
              <div
                key={i}
                className="aspect-video rounded-lg bg-[var(--line)]/20 flex items-center justify-center text-[var(--sea-ink-soft)]"
              >
                <img src={i} alt={`Screenshot ${i}`} className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
