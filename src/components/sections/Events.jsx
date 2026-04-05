import { SectionLayout } from '../SectionLayout';
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
const events = [
  {
    id: 'hackathon-pediatric-health',
    title: 'Pediatric Health Hackathon by FMPL',
    date: '2024 June',
    location: 'Laayoune',
    description:
      'Collaborated in a hackathon focused on pediatric health solutions. Built a prototype that addresses early diagnosis of childhood diseases using AI.',
    url: 'https://dev.to/xb16/my-first-hackathon-experience-pediatric-health-by-fmpl-438p',
    isDevto: true,
  },
  {
    id: 'ctf-competition',
    title: 'My First CTF Competition Experience',
    date: '2024 August',
    location: 'Laayoune',
    description:
      'Participated in a Capture The Flag competition, solving challenges in web exploitation, cryptography, and reverse engineering. Gained hands-on experience in offensive security techniques.',
    url: 'https://dev.to/xb16/my-first-ctf-competition-experience-2l00',
    isDevto: true,
  },
  {
    id: 'cybersecurity-conference',
    title: 'Conférence sur la Cybersécurité',
    date: '2025 October',
    location: 'Casablanca',
    description:
      'Attended a cybersecurity conference organized by LCI Education. Explored topics like cloud security, ethical hacking, and the latest trends in cyber defense.',
    url: 'https://hem.lcieducation.com/fr/nouvelles-et-evenements/evenements/conference-sur-la-cybersecurite',
    isDevto: false,
  },
];

export function Events() {
  return (
    <SectionLayout title="Events & Hackathons" stack>
      <div className="relative space-y-8">
        {/* Vertical timeline line (hidden on mobile, visible on md+) */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-[var(--lagoon)] via-[var(--palm)] to-transparent md:left-1/2 md:-translate-x-1/2" />

        {events.map((event, index) => (
          <Link to={event.url} target="_blank" rel="noopener noreferrer" key={event.id}>
            <div
              key={event.id}
              className={`relative flex flex-col gap-4 md:flex-row ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 top-6 h-3 w-3 rounded-full bg-[var(--lagoon)] ring-4 ring-[var(--bg-base)] md:left-1/2 md:-translate-x-1/2" />

            {/* Content card */}
            <div className="flex-1 md:w-1/2">
              <div
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${event.gradient} p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[var(--lagoon)]/20`}
              >
                {/* Animated border on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--lagoon)] to-[var(--palm)] opacity-0 transition-opacity duration-300 group-hover:opacity-20" />

                {/* Date chip */}
                <div className="mb-3 inline-flex items-center gap-1 rounded-full bg-[var(--chip-bg)] px-3 py-1 text-xs font-medium text-[var(--lagoon-deep)]">
                  <Calendar className="h-3 w-3" />
                  {event.date}
                </div>

                <h3 className="text-xl font-bold text-[var(--sea-ink)] group-hover:text-[var(--lagoon-deep)] transition-colors">
                  {event.title}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-[var(--sea-ink-soft)]">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>

                <p className="mt-4 text-[var(--sea-ink-soft)] leading-relaxed">
                  {event.description}
                </p>

                <a
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[var(--lagoon-deep)] transition-all hover:gap-2"
                >
                  Read full story
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Empty spacer for alternating layout (keeps timeline centered) */}
            <div className="hidden md:block md:w-1/2" />
          </div>
          </Link>
        ))}
      </div>
    </SectionLayout>
  );
}