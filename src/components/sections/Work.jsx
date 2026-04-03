import { SectionLayout } from '../SectionLayout';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const experiences = [
  {
    id: 'sahariano',
    title: 'Sahariano Agency',
    location: 'Laayoune',
    duration: '2 Months, 2025',
    description:
    'Redesigned legacy website with a modern, elegant UI using Vue.js, enhancing visual appeal and user experience. Integrated i18n for full internationalization support.',
    path: '/works-internships/sahariano',
  },
  {
    id: 'digilux',
    title: 'DIGILUX',
    location: 'Laayoune',
    duration: '2 Months, 2024',
    description:
      'A 2 month-long training period conducted in-person & remotely resulted in the design of a POS System for a Coffee Shop.',
    path: '/works-internships/digilux',
  },
  {
    id: 'metama',
    title: 'METAMA SARL',
    location: 'Agadir',
    duration: '1 Month, 2023',
    description:
      'A month-long training period conducted remotely resulted in the design of a responsive website for a seller of Arabic products, along with preparing a domain for a year.',
    path: '/works-internships/metama',
  },
];

export function Work() {
  return (
    <SectionLayout title="Work & Internships" stack>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <Link
            key={exp.id}
            to={exp.path}
            className="group block rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6 transition-all duration-200 hover:border-[var(--lagoon)]/50 hover:shadow-lg hover:scale-[1.01]"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[var(--sea-ink)] group-hover:text-[var(--lagoon-deep)] transition-colors">
                  {exp.title}
                </h3>
                <div className="mt-2 flex flex-wrap gap-4 text-sm text-[var(--sea-ink-soft)]">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {exp.duration}
                  </span>
                </div>
                <p className="mt-3 text-[var(--sea-ink-soft)] leading-relaxed">
                  {exp.description}
                </p>
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