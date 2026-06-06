import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'About', href: '#about' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b px-6 py-4 backdrop-blur-md transition-colors md:px-12 ${
        scrolled ? 'border-nio-line bg-nio-bg/90' : 'border-transparent bg-nio-bg/60'
      }`}
    >
      <a href="#top" className="font-display text-lg font-extrabold tracking-tight text-white">
        Nordic<span className="text-nio-accent">.</span>ITOps
      </a>

      <ul className="hidden items-center gap-9 md:flex">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-sm font-medium tracking-wide text-nio-muted transition-colors hover:text-white"
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="rounded-md border border-nio-accent px-5 py-2 text-sm font-medium text-nio-accent transition-colors hover:bg-nio-accent hover:text-nio-bg"
          >
            Get in touch
          </a>
        </li>
      </ul>

      <button
        className="text-nio-muted md:hidden"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full flex flex-col gap-1 border-b border-nio-line bg-nio-bg px-6 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-sm font-medium text-nio-muted hover:bg-nio-card hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-md bg-nio-accent px-3 py-3 text-center text-sm font-semibold text-nio-bg"
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
