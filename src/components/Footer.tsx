export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--header-bg)] py-6 text-center text-sm text-[var(--sea-ink-soft)]">
      <p>© {new Date().getFullYear()} Your Name. Built with TanStack Router & shadcn.</p>
    </footer>
  );
}