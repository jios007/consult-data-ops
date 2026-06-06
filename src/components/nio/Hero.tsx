import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const stats = [
  { value: '12+', label: 'years in maintenance ops' },
  { value: '40+', label: 'CMMS migrations & cleanups' },
  { value: '1.2M', label: 'asset records reconciled' },
];

const Hero: React.FC = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 md:px-12"
    >
      {/* grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,200,160,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,160,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage:
            'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        }}
      />
      {/* glow */}
      <div className="pointer-events-none absolute right-[-120px] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,200,160,0.12)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-3xl">
        <p
          className="mb-7 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-nio-accent opacity-0 animate-fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="h-px w-6 bg-nio-accent" />
          Maintenance & Operations Data Consulting
        </p>

        <h1
          className="mb-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-nio-heading opacity-0 animate-fade-up sm:text-6xl lg:text-7xl"
          style={{ animationDelay: '0.2s' }}
        >
          Turn messy asset data into <span className="text-nio-accent">decisions you trust</span>.
        </h1>

        <p
          className="mb-10 max-w-2xl text-lg font-light leading-relaxed text-nio-muted opacity-0 animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          I'm an independent IBM Maximo consultant based in Stockholm, Sweden — helping asset-heavy
          organisations across the Nordics clean up CMMS data, automate workflows, and build
          Power BI maintenance reporting that leadership actually uses.
        </p>

        <div
          className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-nio-accent px-7 py-3.5 text-sm font-semibold text-nio-bg transition-transform hover:-translate-y-0.5"
          >
            Start a conversation <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-md border border-nio-line px-7 py-3.5 text-sm font-semibold text-nio-text transition-colors hover:border-nio-accent hover:text-white"
          >
            See what I do
          </a>
          <span className="inline-flex items-center gap-1.5 text-sm text-nio-muted">
            <MapPin className="h-4 w-4 text-nio-accent" /> Stockholm, Sweden
          </span>
        </div>

        <div
          className="mt-16 grid max-w-xl grid-cols-3 gap-8 border-t border-nio-line pt-8 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-extrabold text-nio-heading">{s.value}</div>
              <div className="mt-1 text-xs leading-snug text-nio-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
