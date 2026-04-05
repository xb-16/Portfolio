import { SectionLayout } from '../SectionLayout';
import { MapPin, Calendar, GraduationCap, ArrowUpRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const educations = [
  {
    id: 'bachelor-sir',
    title: 'Bachelor - Sécurité Informatique et Réseaux (SIR)',
    institution: 'EST Guelmim',
    location: 'Guelmim',
    period: '2025 – 2026',
    description:
      'Relevant coursework: Cryptography, Advanced Linux, Security, BigData, Docker, Python, AI-ML, Bash Scripting, Advanced Networks',
    path: '/education/bachelor-sir',
    gradient: 'from-[var(--lagoon)]/10 to-[var(--palm)]/10',
  },
  {
    id: 'bts-dsi',
    title: 'BTS - Développement des Systèmes Informatiques (DSI)',
    institution: 'Lycée Lissane Eddine Ben El Khatib',
    location: 'Laayoune',
    period: '2022 – 2024',
    description:
      'Relevant coursework: Web Development, C, OOP, MySQL, Basics Networking, Computer Architecture, Linux',
    path: '/education/bts-dsi',
    gradient: 'from-[var(--palm)]/10 to-[var(--lagoon-deep)]/10',
  },
  {
    id: 'baccalaureat',
    title: 'Baccalauréat - Sciences Physiques',
    institution: 'Lycée 14 Août',
    location: 'Laayoune',
    period: '2021 – 2022',
    description: null,
    path: '',
    gradient: 'from-[var(--lagoon-deep)]/10 to-[var(--sea-ink)]/10',
  },
  {
    id: 'founder-academy',
    title: 'Founder Academy – ALX Ventures',
    institution: 'ALX Africa',
    location: 'Remote',
    period: '2025 (2 months)',
    description:
      'Intensive entrepreneurship bootcamp covering Lean Canvas, MVP development, pitch deck creation, and startup launch strategies.',
    path: '/education/founder-academy',
    gradient: 'from-[var(--lagoon)]/10 to-[var(--lagoon-deep)]/10',
  },
];

export function Education() {
  return (
    <SectionLayout title="Education" reverse stack>
      <div className="relative space-y-8">
        {/* Vertical timeline line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-[var(--lagoon)] via-[var(--palm)] to-transparent md:left-1/2 md:-translate-x-1/2" />

        {educations.map((edu, index) => (
          <div key={edu.id} className="relative">
            {edu.path ? (
              <Link
                to={edu.path}
                className={`relative flex flex-col gap-4 md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 h-3 w-3 rounded-full bg-[var(--lagoon)] ring-4 ring-[var(--bg-base)] md:left-1/2 md:-translate-x-1/2" />

                <div className="flex-1 md:w-1/2">
                  <div
                    className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${edu.gradient} p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[var(--lagoon)]/20`}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--lagoon)] to-[var(--palm)] opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                    <div className="mb-3 inline-flex items-center gap-1 rounded-full bg-[var(--chip-bg)] px-3 py-1 text-xs font-medium text-[var(--lagoon-deep)]">
                      <Calendar className="h-3 w-3" />
                      {edu.period}
                    </div>
                    <div className="flex items-start gap-2">
                      <GraduationCap className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--lagoon)]" />
                      <div>
                        <h3 className="text-xl font-bold text-[var(--sea-ink)] group-hover:text-[var(--lagoon-deep)] transition-colors">
                          {edu.title}
                        </h3>
                        <p className="text-sm text-[var(--sea-ink-soft)]">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-sm text-[var(--sea-ink-soft)]">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                    {edu.description && (
                      <p className="mt-4 text-[var(--sea-ink-soft)] leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[var(--lagoon-deep)] transition-all hover:gap-2">
                      View details
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </Link>
            ) : (
              <div
                className={`relative flex flex-col gap-4 md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 top-6 h-3 w-3 rounded-full bg-[var(--lagoon)] ring-4 ring-[var(--bg-base)] md:left-1/2 md:-translate-x-1/2" />
                <div className="flex-1 md:w-1/2">
                  <div
                    className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${edu.gradient} p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[var(--lagoon)]/20`}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--lagoon)] to-[var(--palm)] opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                    <div className="mb-3 inline-flex items-center gap-1 rounded-full bg-[var(--chip-bg)] px-3 py-1 text-xs font-medium text-[var(--lagoon-deep)]">
                      <Calendar className="h-3 w-3" />
                      {edu.period}
                    </div>
                    <div className="flex items-start gap-2">
                      <GraduationCap className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--lagoon)]" />
                      <div>
                        <h3 className="text-xl font-bold text-[var(--sea-ink)] group-hover:text-[var(--lagoon-deep)] transition-colors">
                          {edu.title}
                        </h3>
                        <p className="text-sm text-[var(--sea-ink-soft)]">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-sm text-[var(--sea-ink-soft)]">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                    {edu.description && (
                      <p className="mt-4 text-[var(--sea-ink-soft)] leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                    <div className="mt-6 text-sm text-[var(--sea-ink-soft)]">Completed</div>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}