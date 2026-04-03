import { SectionLayout } from "../SectionLayout";

export function Events() {
  return (
    <SectionLayout title="Events & Hackathons">
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-[var(--sea-ink)]">HackTheNorth 2024</h3>
          <p className="text-[var(--sea-ink-soft)]">Built a real‑time collaborative whiteboard – won "Best Use of Cloud".</p>
        </div>
        <div>
          <h3 className="font-semibold text-[var(--sea-ink)]">CTF: CyberStorm</h3>
          <p className="text-[var(--sea-ink-soft)]">Ranked 12th overall in web exploitation and cryptography challenges.</p>
        </div>
        <div>
          <h3 className="font-semibold text-[var(--sea-ink)]">Laracon EU 2023</h3>
          <p className="text-[var(--sea-ink-soft)]">Attended talks on Laravel ecosystem and modern PHP practices.</p>
        </div>
      </div>
    </SectionLayout>
  );
}