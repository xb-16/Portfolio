import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Building2,
  Code2,
  Database,
  LayoutDashboard,
  Printer,
  FileText,
  ExternalLink,
} from 'lucide-react'

export const Route = createFileRoute('/works-internships/digilux')({
  component: DigiluxPage,
})

function DigiluxPage() {
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
                Full Stack Web Developer
              </h1>
              <p className="mt-2 text-lg text-[var(--sea-ink-soft)]">DIGILUX</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-[var(--sea-ink-soft)]">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Laayoune
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              May – July 2024 (2 months)
            </span>
          </div>
        </div>

        <div className="mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm">
          <h2 className="mb-4 text-xl font-semibold text-[var(--sea-ink)]">
            Overview
          </h2>
          <p className="leading-relaxed text-[var(--sea-ink-soft)]">
            Designed and built a full‑stack Point of Sale (POS) system for a
            coffee shop. The application handles order management, ticket
            printing, and provides an admin dashboard with sales statistics. It
            includes role‑based authentication (servers vs. administrators) and
            works as a Progressive Web App (PWA) to run as a desktop
            application. The project also involved upgrading the client’s
            hardware (from Windows XP to Windows 10) to ensure modern software
            compatibility.
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-[var(--sea-ink)]">
            <Code2 className="h-5 w-5 text-[var(--lagoon)]" />
            Technologies & Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              'PHP',
              'MySQL',
              'JavaScript',
              'HTML5',
              'CSS3',
              'AJAX',
              'Chart.js',
              'jQuery',
              'XAMPP',
              'VS Code',
              'AnyDesk',
              'MySQL Workbench',
              'Git',
              'GitHub',
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
            <LayoutDashboard className="h-5 w-5 text-[var(--lagoon)]" />
            Key Features
          </h2>
          <ul className="list-inside list-disc space-y-2 text-[var(--sea-ink-soft)]">
            <li>
              Role‑based authentication (servers / admins) with session
              management
            </li>
            <li>
              Order catalog with categories, item selection, and table numbers
            </li>
            <li>
              Real‑time ticket printing via thermal printer (JavaScript + print
              API)
            </li>
            <li>
              Admin dashboard with sales statistics (Chart.js: line, bar, pie
              charts)
            </li>
            <li>
              Progressive Web App (PWA) features – works offline and installable
              as desktop app
            </li>
            <li>Responsive design for tablets and desktops</li>
          </ul>
        </div>

        <div className="mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm">
          <h2 className="mb-4 text-xl font-semibold text-[var(--sea-ink)]">
            Methodologies & Architecture
          </h2>
          <ul className="list-inside list-disc space-y-2 text-[var(--sea-ink-soft)]">
            <li>UML modeling: use case, class, and sequence diagrams</li>
            <li>
              Database design with MySQL Workbench (normalization, foreign keys)
            </li>
          </ul>
        </div>

        <div className="mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm">
          <h2 className="mb-4 text-xl font-semibold text-[var(--sea-ink)]">
            Challenges & Solutions
          </h2>
          <ul className="list-inside list-disc space-y-2 text-[var(--sea-ink-soft)]">
            <li>
              <strong>Old hardware & OS:</strong> Replaced Windows XP with
              Windows 10, optimized the application to run smoothly on low‑spec
              machines.
            </li>
            <li>
              <strong>Thermal printer integration:</strong> Used JavaScript’s
              window.print() with custom CSS to format tickets correctly; tested
              extensively with real hardware remotely.
            </li>
            <li>
              <strong>Real‑time updates:</strong> AJAX calls to update order
              status without page reload, ensuring smooth workflow for waiters.
            </li>
          </ul>
        </div>

        <div className="mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm">
          <h2 className="mb-4 text-xl font-semibold text-[var(--sea-ink)]">
            Screenshots
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {["/documents/works-internships/digilux2.png", "/documents/works-internships/digilux1.png", "/documents/works-internships/digilux3.png"].map((i) => (
              <img key={i} src={i} alt="" className="rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
