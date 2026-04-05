import { Download } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  const handleDownloadResume = () => {
    window.open('/Ahmed ASSARI Resume.pdf', '_blank');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1080px] items-center justify-between px-4">
        <span className="text-xl font-bold text-[var(--sea-ink)]">xb-16</span>
        <div className="flex items-center gap-3">
          <button
            onClick={handleDownloadResume}
            className="flex items-center gap-2 rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-4 py-1.5 text-sm font-medium text-[var(--sea-ink-soft)] transition-all hover:scale-105 hover:border-[var(--lagoon)] hover:bg-[var(--lagoon)]/10 hover:text-[var(--lagoon-deep)]"
            aria-label="Download Resume"
          >
            <Download className="h-4 w-4" />
            <span>My Resume</span>
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}