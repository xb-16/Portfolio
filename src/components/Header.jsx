import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1080px] items-center justify-between px-4">
        <span className="text-xl font-bold text-[var(--sea-ink)]">Ahmed ASSARI * xb-16</span>
        <ThemeToggle />
      </div>
    </header>
  );
}