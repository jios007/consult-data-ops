import React from 'react';

const steps = [
  {
    n: '01',
    title: 'Understand',
    desc: 'We start with a short audit of your systems, data and the decisions you wish you could make. No fixing before we agree on what actually matters.',
  },
  {
    n: '02',
    title: 'Stabilise',
    desc: 'Clean the records, fix the hierarchies and put validation in place so the same problems stop creeping back in week after week.',
  },
  {
    n: '03',
    title: 'Automate',
    desc: 'Remove the manual steps that eat your team\'s time — imports, checks, reports — with pipelines that run quietly in the background.',
  },
  {
    n: '04',
    title: 'Hand over',
    desc: 'You get documentation, dashboards and tooling your team can own. The goal is to make myself unnecessary, not indispensable.',
  },
];

const Approach: React.FC = () => {
  return (
    <section id="approach" className="relative border-y border-nio-line bg-nio-surface px-6 py-28 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-nio-accent">
            <span className="h-px w-6 bg-nio-accent" /> How I work
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-nio-heading sm:text-4xl">
            A pragmatic, four-step engagement
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-nio-line bg-nio-line sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="bg-nio-card p-8">
              <div className="font-display text-4xl font-extrabold text-nio-accent/30">{s.n}</div>
              <h3 className="mt-4 font-display text-xl font-bold text-nio-heading">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-nio-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
