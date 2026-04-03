import { SectionLayout } from '../SectionLayout';
import { ArrowRight, MapPin, Calendar, GraduationCap } from 'lucide-react';
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
  },
  {
    id: 'baccalaureat',
    title: 'Baccalauréat - Sciences Physiques',
    institution: 'Lycée 14 Août',
    location: 'Laayoune',
    period: '2021 – 2022',
    description: null,
    path: '',
  },
];

export function Education() {
  return (
    <SectionLayout title="Education" reverse>
      <div className="space-y-6">
        {educations.map((edu) => (
          <Link
            key={edu.id}
            to={edu.path}
            className="group block rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm transition-all duration-200 hover:border-[var(--lagoon)]/50 hover:shadow-lg hover:scale-[1.01]"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-start gap-2">
                  <GraduationCap className="mt-1 h-5 w-5 text-[var(--lagoon)] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--sea-ink)] group-hover:text-[var(--lagoon-deep)] transition-colors">
                      {edu.title}
                    </h3>
                    <p className="text-sm text-[var(--sea-ink-soft)]">{edu.institution}</p>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-4 text-sm text-[var(--sea-ink-soft)]">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {edu.period}
                  </span>
                </div>

                {edu.description && (
                  <p className="mt-3 text-[var(--sea-ink-soft)] leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>

              <div className="ml-4 flex items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--sea-ink-soft)] transition-all group-hover:border-[var(--lagoon)] group-hover:bg-[var(--lagoon)]/10 group-hover:text-[var(--lagoon-deep)]">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </SectionLayout>
  );
}