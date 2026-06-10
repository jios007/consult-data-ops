# CLAUDE.md — consult-data-ops

## Project Overview
Marketing and portfolio website for **Nordic IT Ops** — an independent maintenance & operations data consulting business based in Stockholm, Sweden. Owner: Jivan Osman.

Live at: **https://nordicitops.se** and **https://www.nordicitops.se**
GitHub: **https://github.com/jios007/consult-data-ops**
Deployed on: **Vercel** (auto-deploys on push to master)
LinkedIn: **https://www.linkedin.com/company/127313950/**

---

## Tech Stack
- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** with custom `nio-*` color tokens
- **shadcn/ui** component library
- **React Router** for page routing
- **Formspree** for contact form (`https://formspree.io/f/mkobbjbw`)
- **@tailwindcss/typography** for blog article prose styling

---

## Key Directories
```
src/
  components/nio/     — main site sections (Navbar, Hero, Services, Approach, About, Contact, Footer)
  pages/              — Index, Blog, BlogPost, NotFound
  data/posts.ts       — all blog articles (add new ones here, newest first)
  App.tsx             — routes
public/
  sitemap.xml         — update when adding blog posts
  robots.txt          — allows all crawlers including GPTBot, ClaudeBot
index.html            — meta tags, SEO title, structured data (JSON-LD)
vercel.json           — single rewrite rule for SPA routing
```

---

## Routes
| Path | Page |
|------|------|
| `/` | Main landing page |
| `/blog` | Blog listing |
| `/blog/:slug` | Individual article |
| `*` | 404 NotFound |

---

## Custom Colors (Tailwind)
| Token | Value | Usage |
|-------|-------|-------|
| `nio-bg` | `#05080f` | Page background |
| `nio-surface` | `#0b1120` | Section backgrounds |
| `nio-card` | `#0f1929` | Card backgrounds |
| `nio-line` | `#1a2a40` | Borders |
| `nio-accent` | `#00c8a0` | Green accent, CTAs |
| `nio-text` | `#cdd8e8` | Body text |
| `nio-muted` | `#6b859e` | Muted/secondary text |
| `nio-heading` | `#eef2f8` | Headings |

---

## Adding a Blog Article
1. Open `src/data/posts.ts`
2. Add a new object to the **top** of the `posts` array (newest first):
```ts
{
  slug: 'your-article-slug',
  title: 'Your Article Title',
  excerpt: 'One paragraph summary shown on the blog list page.',
  date: 'June 7, 2026',
  readTime: 8,
  tag: 'Maximo',   // Maximo | Power BI | SQL | Python | Excel | AI | CMMS | Automation | Migration
  content: `
    <h2>Section heading</h2>
    <p>Paragraph text.</p>
    <ul><li>List item</li></ul>
    <pre><code>code block</code></pre>
    <hr/>
    <p>End with CTA: <a href="/#contact">Get in touch</a></p>
  `,
}
```
3. Add the URL to `public/sitemap.xml`
4. `git add . && git commit -m "feat: add [topic] article" && git push`
5. Resubmit sitemap in Google Search Console

---

## Current Blog Articles (11 total)
| Slug | Tag |
|------|-----|
| `custom-power-bi-views-vs-native-better-fit-for-your-organisation` | Power BI |
| `kpi-dashboard-for-maintenance-teams` | Power BI |
| `data-migration-best-practices-cmms` | Migration |
| `how-to-automate-maintenance-workflows` | Automation |
| `what-is-cmms-and-how-it-helps` | CMMS |
| `how-to-use-ai-in-maintenance-operations` | AI |
| `how-to-create-custom-views-power-bi` | Power BI |
| `how-to-write-advanced-sql-for-maintenance-data` | SQL |
| `advanced-excel-vba-for-maintenance-teams` | Excel |
| `python-for-maintenance-data-merge-search-automate` | Python |
| `how-to-clean-up-maximo-work-orders` | Maximo |

---

## Deployment
- Push to `master` → Vercel auto-deploys in ~1 minute
- No manual deploy steps needed
- `vercel.json` has a single rewrite rule: all routes → `/index.html`
- Environment variables: none currently active in Vercel dashboard

---

## Contact Form
- Uses **Formspree**: `https://formspree.io/f/mkobbjbw`
- Sends to: `hello@nordicitops.se`
- File: `src/components/nio/Contact.tsx`
- Fields: Name, Organisation (placeholder: "Company AB"), Email, Message

---

## Email & DNS
- Email forwarding: **ImprovMX** (mx1/mx2.improvmx.com)
- Sending: **Mailjet** (SPF + DKIM configured)
- Domain registrar: **One.com**
- DNS A record: `216.198.79.1` (Vercel)
- DNS CNAME: `www` → `d252329108e99e53.vercel-dns-017.com`

---

## SEO
- Page title: *"Maximo Consultant Sweden | CMMS & Power BI Reporting — Nordic IT Ops"*
- Target keywords: Maximo consultant Sweden, CMMS consultant Stockholm, IBM Maximo consultant, Power BI maintenance reporting, Power BI custom views, Power BI expert Sweden
- Structured data (JSON-LD) in `index.html`
- Google Search Console: verified, sitemap submitted
- Google Business Profile: set up under "Nordic IT Ops", Stockholm
- AI crawlers explicitly allowed: GPTBot, ClaudeBot, Google-Extended

---

## Do Not
- Push to any git remote other than `origin` (jios007/consult-data-ops)
- Add anything related to Alstom or any specific client employer
- Hardcode API keys or credentials in source files
- Use `font-display` (Syne) for blog headings — overflows on mobile
- Change `vercel.json` routing without testing — caused white screen previously
