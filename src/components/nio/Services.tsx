import React from 'react';
import { Database, Workflow, BarChart3, Search, GitMerge, Code2 } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'CMMS data cleanup',
    desc: 'Deduplicate, standardise and enrich asset hierarchies, job plans and PM records in Maximo or your existing CMMS — so your data finally reflects reality.',
    tags: ['Maximo', 'Asset hierarchy', 'Data quality'],
  },
  {
    icon: Workflow,
    title: 'Workflow automation',
    desc: 'Replace manual spreadsheet handoffs with automated pipelines: scheduled imports, validation rules, notifications and integrations between systems.',
    tags: ['Python', 'APIs', 'Scheduling'],
  },
  {
    icon: BarChart3,
    title: 'Operational reporting',
    desc: 'Power BI dashboards that surface backlog, compliance, MTBF and cost trends — built for the people who make decisions, not just the analysts.',
    tags: ['Power BI', 'KPIs', 'DAX'],
  },
  {
    icon: Search,
    title: 'Data discovery & audit',
    desc: 'A clear-eyed assessment of where your maintenance data lives, what it can and can\'t tell you today, and the highest-leverage fixes to make first.',
    tags: ['Audit', 'Mapping', 'Strategy'],
  },
  {
    icon: GitMerge,
    title: 'System migration support',
    desc: 'Plan and execute migrations between maintenance platforms with reconciled records, mapping documentation and validation you can defend.',
    tags: ['Migration', 'ETL', 'Validation'],
  },
  {
    icon: Code2,
    title: 'Custom tooling',
    desc: 'Lightweight internal tools and scripts that fit your exact process — bulk editors, report generators, data-entry guards and more.',
    tags: ['Python', 'Scripts', 'Internal tools'],
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="relative px-6 py-28 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-nio-accent">
            <span className="h-px w-6 bg-nio-accent" /> What I do
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-nio-heading sm:text-4xl">
            Focused consulting for asset-heavy operations
          </h2>
          <p className="mt-4 text-lg font-light text-nio-muted">
            No bloated retainers, no army of juniors. Just hands-on work with the systems and data
            that keep your maintenance organisation running.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group rounded-xl border border-nio-line bg-nio-card p-7 transition-colors hover:border-nio-accent/60"
              >
                <span className="mb-5 inline-grid h-12 w-12 place-items-center rounded-lg bg-nio-accent/10 text-nio-accent transition-colors group-hover:bg-nio-accent group-hover:text-nio-bg">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-xl font-bold text-nio-heading">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-nio-muted">{s.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-nio-line px-3 py-1 text-xs text-nio-text"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
