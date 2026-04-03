import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Building2,
  Code2,
  Globe,
  Mail,
  Smartphone,
  FileText,
  Github,
  ExternalLink,
} from 'lucide-react'

export const Route = createFileRoute('/works-internships/metama')({
  component: MetamaPage,
})

function MetamaPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-base)] py-12">
      <div className="mx-auto max-w-4xl px-4">
        {/* Back button */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-[var(--sea-ink)] transition-all hover:border-[var(--lagoon)] hover:bg-[var(--lagoon)]/10 hover:shadow-md"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Work
        </Link>

        {/* Header */}
        <div className="mb-8 rounded-2xl border border-[var(--line)] bg-gradient-to-br from-[var(--surface)] to-[var(--surface-strong)] p-8 backdrop-blur-sm">
          <div className="mb-4 flex items-start gap-3">
            <Building2 className="h-8 w-8 text-[var(--lagoon)]" />
            <div>
              <h1 className="text-3xl font-bold text-[var(--sea-ink)] md:text-4xl">
                Front‑end Developer
              </h1>
              <p className="mt-2 text-lg text-[var(--sea-ink-soft)]">
                METAMA SARL
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-[var(--sea-ink-soft)]">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Agadir
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              May – June 2023 (1 month)
            </span>
          </div>
        </div>

        {/* Overview */}
        <div className="mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm">
          <h2 className="mb-4 text-xl font-semibold text-[var(--sea-ink)]">
            Overview
          </h2>
          <p className="leading-relaxed text-[var(--sea-ink-soft)]">
            Designed and developed a fully responsive landing page for a store
            selling Arabic products. The project was completed remotely and
            focused on creating a modern, visually appealing online presence
            that drives customer engagement. The site includes a contact form,
            integrated Google Maps, social media links, and a preloader to
            enhance user experience during slow connections.
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-[var(--sea-ink)]">
            <Code2 className="h-5 w-5 text-[var(--lagoon)]" />
            Technologies & Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              'HTML5',
              'CSS3',
              'JavaScript',
              'Bootstrap 5',
              'FontAwesome',
              'Google Fonts',
              'Google Maps API',
              'FormSubmit',
              'VS Code',
              'Git',
              'GitHub Pages',
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

        {/* Key Features */}
        <div className="mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm">
          <h2 className="mb-4 text-xl font-semibold text-[var(--sea-ink)]">
            Key Features
          </h2>
          <ul className="list-inside list-disc space-y-2 text-[var(--sea-ink-soft)]">
            <li>Responsive design (mobile‑first, Bootstrap grid)</li>
            <li>
              Custom preloader with JavaScript (removed after full page load)
            </li>
            <li>Contact form using FormSubmit (no backend required)</li>
            <li>Embedded Google Maps for location visibility</li>
            <li>Social media icons linking to WhatsApp, email, etc.</li>
            <li>Open Graph meta tags for better social sharing</li>
            <li>Hosted on GitHub Pages (custom domain later added)</li>
          </ul>
        </div>

        {/* Challenges & Solutions */}
        <div className="mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm">
          <h2 className="mb-4 text-xl font-semibold text-[var(--sea-ink)]">
            Challenges & Solutions
          </h2>
          <ul className="list-inside list-disc space-y-2 text-[var(--sea-ink-soft)]">
            <li>
              <strong>Remote collaboration:</strong> Used AnyDesk for screen
              sharing and regular video calls with the supervisor.
            </li>
            <li>
              <strong>Performance on slow networks:</strong> Implemented a
              preloader that stays until all resources are loaded, tested using
              Chrome DevTools network throttling.
            </li>
            <li>
              <strong>Color consistency:</strong> Used CSS custom properties
              (variables) to define the color palette, making future changes
              effortless.
            </li>
          </ul>
        </div>

        {/* Gallery (Placeholder) */}
        <div className="mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm">
          <h2 className="mb-4 text-xl font-semibold text-[var(--sea-ink)]">
            Screenshots
          </h2>
          <div>
            {["/documents/works-internships/metama.png"].map((i) => (
              <img key={i} src={i} alt="" className="rounded-2xl" />
            ))}
          </div>
        </div>

        {/* Report & Links */}
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-[var(--sea-ink)]">
            <FileText className="h-5 w-5 text-[var(--lagoon)]" />
            Links
          </h2>
          <div className="flex flex-wrap gap-4"> 
            <a
              href="https://github.com/xb-16/IsmailShop-Landing-page-of-a-Shopping-Store."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--chip-bg)] px-4 py-2 text-[var(--sea-ink)] transition-all hover:border-[var(--lagoon)] hover:bg-[var(--lagoon)]/10"
            >
              <Github className="h-4 w-4" />
              GitHub Repository
            </a>
            <a
              href="https://xb-16.github.io/IsmailShop-Landing-page-of-a-Shopping-Store./"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--chip-bg)] px-4 py-2 text-[var(--sea-ink)] transition-all hover:border-[var(--lagoon)] hover:bg-[var(--lagoon)]/10"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
