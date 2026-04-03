import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft, Github, ExternalLink, Calendar, Code2 } from 'lucide-react'

// Project data (same as above, but we'll keep it here or import)
import { projects } from '../../src/components/sections/Projects'

export const Route = createFileRoute('/projects/$projectId')({
  loader: ({ params }) => {
    const project = projects?.find((p) => p.id === params.projectId)
    if (!project) throw notFound()
    return { project }
  },
  component: ProjectPage,
})

function ProjectPage() {
  const { project } = Route.useLoaderData()

  // Generate image paths (placeholders – replace with actual image URLs)
  const imagePaths = Array.from(
    { length: project.imageCount },
    (_, i) => `/documents/projects/${project.id}/${i + 1}.png`,
  )

  return (
    <div className="min-h-screen bg-[var(--bg-base)] py-12">
      <div className="mx-auto max-w-4xl px-4">
        {/* Back button */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-[var(--sea-ink)] transition-all hover:border-[var(--lagoon)] hover:bg-[var(--lagoon)]/10 hover:shadow-md"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-8 rounded-2xl border border-[var(--line)] bg-gradient-to-br from-[var(--surface)] to-[var(--surface-strong)] p-8 backdrop-blur-sm">
          <h1 className="text-3xl font-bold text-[var(--sea-ink)] md:text-4xl">
            {project.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--chip-bg)] px-4 py-2 text-sm text-[var(--sea-ink)] transition-all hover:border-[var(--lagoon)] hover:bg-[var(--lagoon)]/10"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--chip-bg)] px-4 py-2 text-sm text-[var(--sea-ink)] transition-all hover:border-[var(--lagoon)] hover:bg-[var(--lagoon)]/10"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-[var(--sea-ink)]">
            <Code2 className="h-5 w-5 text-[var(--lagoon)]" />
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-3 py-1 text-sm text-[var(--sea-ink-soft)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm">
          <h2 className="mb-4 text-xl font-semibold text-[var(--sea-ink)]">
            Overview
          </h2>
          <div className="prose prose-[var(--sea-ink-soft)] max-w-none">
            {project.longDescription.split('\n').map((line, idx) => (
              <p key={idx} className="mb-2 text-[var(--sea-ink-soft)]">
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        {project.imageCount > 0 && (
          <div className="mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-sm">
            <h2 className="mb-4 text-xl font-semibold text-[var(--sea-ink)]">
              Preview
            </h2>
            <div className="columns-1 sm:columns-2 gap-6 space-y-14">
              {imagePaths.map((src, idx) => (
                <div
                  key={idx}
                  className="rounded-lg bg-[var(--line)]/20 break-inside-avoid"
                >
                  <img
                    src={src}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className="w-full transition-transform hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://placehold.co/600x400/e2e8f0/475569?text=Preview+Coming+Soon'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
