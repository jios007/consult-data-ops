import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer id="footer" className="border-t border-nio-line bg-nio-bg px-6 py-14 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <a href="#top" className="font-display text-lg font-extrabold tracking-tight text-white">
            Nordic<span className="text-nio-accent">.</span>ITOps
          </a>
          <p className="mt-4 text-sm leading-relaxed text-nio-muted">
            Independent maintenance & operations data consulting. Helping asset-heavy
            organisations across the Nordics make their data trustworthy.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
          <div>
            <h4 className="font-display text-sm font-bold text-nio-heading">Sections</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#services" className="text-nio-muted hover:text-nio-accent">Services</a></li>
              <li><a href="#approach" className="text-nio-muted hover:text-nio-accent">Approach</a></li>
              <li><a href="#about" className="text-nio-muted hover:text-nio-accent">About</a></li>
              <li><a href="#contact" className="text-nio-muted hover:text-nio-accent">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold text-nio-heading">Expertise</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-nio-muted">Maximo / CMMS</li>
              <li className="text-nio-muted">Power BI</li>
              <li className="text-nio-muted">Python & SQL</li>
              <li className="text-nio-muted">Data migration</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold text-nio-heading">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="mailto:hello@nordicitops.se" className="text-nio-muted hover:text-nio-accent">hello@nordicitops.se</a></li>
              <li><a href="https://www.linkedin.com/company/127313950/" target="_blank" rel="noopener noreferrer" className="text-nio-muted hover:text-nio-accent">LinkedIn</a></li>
              <li className="text-nio-muted">Stockholm, Sweden</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-nio-line pt-6 text-xs text-nio-muted sm:flex-row">
        <span>© {year} Nordic IT Ops. All rights reserved.</span>
        <span>Built in Stockholm.</span>
      </div>
    </footer>
  );
};

export default Footer;
