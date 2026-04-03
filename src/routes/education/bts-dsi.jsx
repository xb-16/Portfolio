import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ArrowLeft,
  GraduationCap,
  Calendar,
  MapPin,
  Code,
  Database,
  Network,
} from 'lucide-react'

export const Route = createFileRoute('/education/bts-dsi')({
  component: BTSDSIPage,
})

function BTSDSIPage() {
  const modules = [
    'Web Development (HTML/CSS/JS, PHP)',
    'Algorithms & Data Structures',
    'C Programming',
    'Object-Oriented Programming (Java)',
    'MySQL (SQL, PL/SQL)',
    'Visual Basic (VB.NET)',
    'Advanced Java (Swing, JDBC)',
    'UML & Design Patterns',
    'Basics of Networking',
    'Computer Architecture',
    'Linux Fundamentals',
    'Assembleur x86',
    'Ordonnancement des Processus (FIFO, LIFO, Round Robin, SJF)',
  ]

  return (
    <div className="min-h-screen bg-[var(--bg-base)] py-12">
      <div className="mx-auto max-w-4xl px-4">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-[var(--sea-ink)] transition-all hover:border-[var(--lagoon)] hover:bg-[var(--lagoon)]/10 hover:shadow-md"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Education
        </Link>

        <div className="rounded-2xl border border-[var(--line)] bg-gradient-to-br from-[var(--surface)] to-[var(--surface-strong)] p-8 backdrop-blur-sm">
          <div className="mb-4 flex items-start gap-3">
            <GraduationCap className="h-8 w-8 text-[var(--lagoon)]" />
            <div>
              <h1 className="text-3xl font-bold text-[var(--sea-ink)] md:text-4xl">
                BTS – Développement des Systèmes Informatiques (DSI)
              </h1>
              <p className="mt-2 text-[var(--sea-ink-soft)]">
                Lycée Lissane Eddine Ben El Khatib, Laayoune
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
              2022 – 2024
            </span>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm">
          <div className="mb-4 flex items-center gap-2">
            <Code className="h-5 w-5 text-[var(--lagoon)]" />
            <h2 className="text-xl font-semibold text-[var(--sea-ink)]">
              Coursework
            </h2>
          </div>
          <div className="grid gap-2 md:grid-cols-2">
            {modules.map((mod, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-[var(--sea-ink-soft)]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--lagoon)]" />
                <span>{mod}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
