import { Cube } from './Cube';
import { cn } from '../lib/utils';

export function SectionLayout({
  title,
  children,
  reverse = false,
  stack = false,
}) {
  if (stack) {
    return (
      <section className="relative my-20 first:mt-8 last:mb-8">
        {/* Title and cube row */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-4xl font-bold text-[var(--sea-ink)] md:text-5xl">
            {title}
          </h2>
          <Cube />
        </div>

        {/* Content row */}
        <div className="space-y-4">{children}</div>

        {/* Decorative background */}
        <div
          className="absolute inset-0 -z-10 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--sea-ink) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </section>
    );
  }

  // Default side-by-side layout
  return (
    <section className="relative my-20 first:mt-8 last:mb-8">
      <div
        className={cn(
          'grid gap-8 md:grid-cols-2 md:gap-12 items-center',
          reverse && 'md:[&>*:first-child]:order-2'
        )}
      >
        <div className="space-y-4">
          <div className="prose prose-lg prose-[var(--sea-ink)]">{children}</div>
        </div>
        <div className="flex flex-col place-items-center gap-18 justify-center">
          <h2 className="text-4xl font-bold text-[var(--sea-ink)] md:text-5xl">
            {title}
          </h2>
          <Cube />
        </div>
      </div>
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--sea-ink) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
    </section>
  );
}