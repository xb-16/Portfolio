import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft, GraduationCap, Calendar, MapPin, BookOpen, Laptop, Shield, Cloud } from 'lucide-react';

export const Route = createFileRoute('/education/bachelor-sir')({
  component: BachelorSIRPage,
});

function BachelorSIRPage() {
  const modules = {
    firstSemester: [
      'Big Data with NoSQL',
      'Python',
      'Administration des Systèmes et Réseaux',
      'IA pour la Sécurité Informatique',
      'Mathématique pour la Cryptographie',
      'Sécurité Informatique',
      'Entrepreneuriat',
    ],
    secondSemester: [
      'Cryptologie Informatique',
      'Sécurité de Cloud Computing & IoT',
      'Sécurité des Systèmes et Réseaux',
      'MultiThreading et Programmation Réseaux sous Python',
    ],
  };

  return (
    <div className="min-h-screen bg-[var(--bg-base)] py-12">
      <div className="mx-auto max-w-4xl px-4">
        {/* Back button */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-[var(--sea-ink)] transition-all hover:border-[var(--lagoon)] hover:bg-[var(--lagoon)]/10 hover:shadow-md"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Education
        </Link>

        {/* Header */}
        <div className="mb-8 rounded-2xl border border-[var(--line)] bg-gradient-to-br from-[var(--surface)] to-[var(--surface-strong)] p-8 backdrop-blur-sm">
          <div className="mb-4 flex items-start gap-3">
            <GraduationCap className="h-8 w-8 text-[var(--lagoon)]" />
            <div>
              <h1 className=" text-3xl font-bold text-[var(--sea-ink)] md:text-4xl">
                Bachelor – Sécurité Informatique et Réseaux (SIR)
              </h1>
              <p className="mt-2 text-[var(--sea-ink-soft)]">EST Guelmim</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-[var(--sea-ink-soft)]">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Guelmim
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              2025 – 2026
            </span>
          </div>
        </div>

        {/* Curriculum */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* First Semester */}
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-[var(--lagoon)]" />
              <h2 className="text-xl font-semibold text-[var(--sea-ink)]">First Semester</h2>
            </div>
            <ul className="space-y-2">
              {modules.firstSemester.map((mod, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[var(--sea-ink-soft)]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--lagoon)]" />
                  <span>{mod}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Second Semester */}
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-[var(--lagoon)]" />
              <h2 className="text-xl font-semibold text-[var(--sea-ink)]">Second Semester</h2>
            </div>
            <ul className="space-y-2">
              {modules.secondSemester.map((mod, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[var(--sea-ink-soft)]">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--lagoon)]" />
                  <span>{mod}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}