import { SectionLayout } from '../SectionLayout';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';
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
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp) => (
          <Link
            key={exp.id}
            to={exp.path}
            className="group relative rounded-xl border border-[var(--line)] bg-white/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--lagoon)]/30 hover:shadow-lg hover:shadow-[var(--lagoon)]/5 dark:bg-black/20"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-xl font-semibold text-[var(--sea-ink)] group-hover:text-[var(--lagoon-deep)] transition-colors">
                {exp.title}
              </h3>
              
              <div className="mt-2 flex flex-wrap gap-3 text-sm text-[var(--sea-ink-soft)]">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {exp.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {exp.duration}
                </span>
              </div>
              
              <p className="mt-3 text-[var(--sea-ink-soft)] leading-relaxed line-clamp-3">
                {exp.description}
              </p>
              
              <div className="mt-4 flex justify-end">
                <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--lagoon-deep)] opacity-0 transition-all group-hover:opacity-100 group-hover:gap-2">
                  Details <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </SectionLayout>
  );
}