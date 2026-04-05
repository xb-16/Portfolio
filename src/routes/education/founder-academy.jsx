import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ArrowLeft,
  Calendar,
  MapPin,
  GraduationCap,
  FileText,
  Target,
  Rocket,
  Award,
  ExternalLink,
} from 'lucide-react'

export const Route = createFileRoute('/education/founder-academy')({
  component: FounderAcademyPage,
})

function FounderAcademyPage() {
const sprints = [
  {
    title: 'Sprint 1: Think',
    items: [
      'Entrepreneurial Mindset',
      'Start With WHY',
      'Grand Challenges & Opportunities',
      'Co-Founders & Teams',
      'Market Positioning',
      'Business Model',
      'Deliverable 1 - Lean Canvas Model',
    ],
    goBeyond: [
      'Self-Discovery & Strengths',
      'Systems Thinking',
      'Founder Case Studies',
      'Cognitive Biases',
      'Team Culture at Scale',
      'Industry Trends',
    ],
  },
  {
    title: 'Sprint 2: Build',
    items: [
      'Product Roadmap',
      'Tech Stack Selection',
      'MVP Development',
      'AI Prototyping',
      'Building Your Product',
      'Deliverable 2 - Landing Page or MVP',
    ],
    goBeyond: [
      'Prototyping & Wireframing',
      'Agile Development',
      'AI & Automation',
      'Product Iteration',
      'Scaling Systems',
      'Market Adaptation',
    ],
  },
  {
    title: 'Sprint 3: Launch',
    items: [
      'Online Presence',
      'Marketing Channels',
      'Branding',
      'Launch Plan',
      'SOP Basics',
      'Pitch Deck Creation',
      'Investor Pitching',
      'Deliverable 3 - Pitch Deck',
    ],
    goBeyond: [
      'Acquisition Strategies',
      'Data & Analytics',
      'Scaling Presence',
    ],
  },
]
  return (
    <div className="min-h-screen bg-[var(--bg-base)] py-12">
      <div className="mx-auto max-w-4xl px-4">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-[var(--sea-ink)] transition-all hover:border-[var(--lagoon)] hover:bg-[var(--lagoon)]/10 hover:shadow-md"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        {/* Header */}
        <div className="mb-8 rounded-2xl border border-[var(--line)] bg-gradient-to-br from-[var(--surface)] to-[var(--surface-strong)] p-8 backdrop-blur-sm">
          <div className="mb-4 flex items-start gap-3">
            <GraduationCap className="h-8 w-8 text-[var(--lagoon)]" />
            <div>
              <h1 className="text-3xl font-bold text-[var(--sea-ink)] md:text-4xl">
                Founder Academy – ALX Ventures
              </h1>
              <p className="mt-2 text-lg text-[var(--sea-ink-soft)]">
                ALX Africa (Remote)
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-[var(--sea-ink-soft)]">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Remote
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />2 months, 2025
            </span>
          </div>
          <a
            href="https://savanna.alxafrica.com/certificates/RmBxFnPySs"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--chip-bg)] px-4 py-2 text-sm text-[var(--sea-ink)] transition-all hover:border-[var(--lagoon)] hover:bg-[var(--lagoon)]/10"
          >
            <Award className="h-4 w-4" />
            View Certificate
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Overview */}
        <div className="mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-[var(--sea-ink)]">
            <Target className="h-5 w-5 text-[var(--lagoon)]" />
            Program Overview
          </h2>
          <p className="text-[var(--sea-ink-soft)] leading-relaxed">
            An intensive 2‑month entrepreneurship bootcamp that guided me
            through the entire startup lifecycle: from ideation and business
            modeling to MVP development and investor pitching. I learned to
            think like a founder, build a product, and launch it to the market.
          </p>
        </div>

        {/* Sprints */}
        {sprints.map((sprint, idx) => (
          <div
            key={idx}
            className="mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm"
          >
            <h3 className="mb-4 text-xl font-semibold text-[var(--sea-ink)]">
              {sprint.title}
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="mb-2 text-sm font-medium text-[var(--lagoon-deep)]">
                  Core Curriculum
                </h4>
                <ul className="list-inside list-disc space-y-1 text-sm text-[var(--sea-ink-soft)]">
                  {sprint.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-medium text-[var(--lagoon-deep)]">
                  Go Beyond
                </h4>
                <ul className="list-inside list-disc space-y-1 text-sm text-[var(--sea-ink-soft)]">
                  {sprint.goBeyond.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        {/* Deliverables */}
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-[var(--sea-ink)]">
            <Rocket className="h-5 w-5 text-[var(--lagoon)]" />
            Key Deliverables
          </h2>
          <ul className="list-inside list-disc space-y-1 text-[var(--sea-ink-soft)]">
            <li>Lean Canvas Model (Business Model)</li>
            <li>Landing Page or Minimum Viable Product (MVP)</li>
            <li>Pitch Deck</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
