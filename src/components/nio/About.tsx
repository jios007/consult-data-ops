import React from 'react';
import { Check } from 'lucide-react';

const skills = [
  'IBM Maximo administration & configuration',
  'CMMS data modelling & cleanup',
  'Power BI & DAX reporting',
  'Python automation & ETL',
  'SQL & data reconciliation',
  'Maintenance KPI design',
];

const About: React.FC = () => {
  return (
    <section id="about" className="relative px-6 py-28 md:px-12">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-nio-accent">
            <span className="h-px w-6 bg-nio-accent" /> About
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-nio-heading sm:text-4xl">
            Hi, I'm the person you'd actually be working with
          </h2>
          <div className="mt-6 space-y-4 text-base font-light leading-relaxed text-nio-muted">
            <p>
              I've spent over a decade inside maintenance and operations teams — first as the person
              wrestling with the CMMS, later as the one rebuilding it. I know what bad asset data
              costs you, because I've lived with it.
            </p>
            <p>
              Today I work independently with asset-heavy organisations across the Nordics: utilities,
              transport, manufacturing and infrastructure. Small enough to care about the details,
              experienced enough to know which ones matter.
            </p>
            <p>
              No big-consultancy overhead. You get my hands on your data and a clear path to owning
              it yourself.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-nio-accent px-7 py-3.5 text-sm font-semibold text-nio-bg transition-transform hover:-translate-y-0.5"
          >
            Let's talk about your data
          </a>
        </div>

        <div className="rounded-2xl border border-nio-line bg-nio-card p-8">
          <h3 className="font-display text-lg font-bold text-nio-heading">Core toolkit</h3>
          <ul className="mt-6 space-y-4">
            {skills.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-nio-accent/15 text-nio-accent">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-sm text-nio-text">{s}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-2 border-t border-nio-line pt-6">
            {['Maximo', 'Power BI', 'Python', 'SQL', 'Azure', 'Excel'].map((t) => (
              <span
                key={t}
                className="rounded-md bg-nio-surface px-3 py-1.5 font-mono text-xs text-nio-accent"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
