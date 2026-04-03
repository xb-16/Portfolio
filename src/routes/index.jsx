import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '../components/Hero';
import { Skills } from '../components/sections/Skills';
import { Education } from '../components/sections/Education';
import { Work } from '../components/sections/Work';
import { Projects } from '../components/sections/Projects';
import { Events } from '../components/sections/Events';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div className="space-y-8 md:space-y-16">
      <Hero />
      <Skills />
      <Education />
      <Work />
      <Projects />
      <Events />
    </div>
  );
}