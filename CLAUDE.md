# CLAUDE.md — consult-data-ops

## Project Overview
Marketing and portfolio website for **Nordic IT Ops** — an independent maintenance & operations data consulting business based in Stockholm, Sweden. Owner: Jivan Osman.

Live at: **https://nordicitops.se**
GitHub: **https://github.com/jios007/consult-data-ops**
Deployed on: **Vercel** (auto-deploys on push to master)

---

## Tech Stack
- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** with custom `nio-*` color tokens
- **shadcn/ui** component library
- **React Router** for page routing
- **Formspree** for contact form (`https://formspree.io/f/mkobbjbw`)

---

## Key Directories
```
src/
  components/nio/     — main site sections (Navbar, Hero, Services, Approach, About, Contact, Footer)
  pages/              — Index, Blog, BlogPost, NotFound
  data/posts.ts       — all blog articles (add new ones here)
  App.tsx             — routes
public/
  sitemap.xml         — update when adding blog posts
  robots.txt          — allows all crawlers including GPTBot, ClaudeBot
```

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
2. Add a new object to the `posts` array at the top (newest first):
```ts
{
  slug: 'your-article-slug',
  title: 'Your Article Title',
  excerpt: 'One paragraph summary shown on the blog list page.',
  date: 'June 7, 2026',
  readTime: 8,         // estimated minutes
  tag: 'Maximo',       // shown as badge: Maximo | Power BI | SQL | Python | Excel | AI | CMMS | Automation | Migration
  content: `           // HTML string
    <h2>Section heading</h2>
    <p>Paragraph text.</p>
    <ul><li>List item</li></ul>
    <pre><code>code block</code></pre>
  `,
}
```
3. Add the URL to `public/sitemap.xml`
4. Push to GitHub — Vercel auto-deploys
5. Resubmit sitemap in Google Search Console

---

## Deployment
- Push to `master` branch → Vercel auto-deploys in ~1 minute
- No manual deploy steps needed
- Environment variables set in Vercel dashboard (none currently active)

---

## Contact Form
- Uses **Formspree** endpoint: `https://formspree.io/f/mkobbjbw`
- Sends to: `hello@nordicitops.se`
- Located in: `src/components/nio/Contact.tsx`
- Fields: Name, Organisation, Email, Message

---

## SEO
- Meta title targets: *"Maximo Consultant Sweden | CMMS & Power BI Reporting"*
- Keywords: Maximo consultant Sweden, CMMS consultant Stockholm, IBM Maximo consultant, Power BI maintenance reporting
- Structured data (JSON-LD) in `index.html`
- Google Search Console: verified and sitemap submitted
- AI crawlers (GPTBot, ClaudeBot, Google-Extended) explicitly allowed in `robots.txt`

---

## Do Not
- Push to any git remote other than `origin` (jios007/consult-data-ops)
- Add anything related to Alstom or any specific client
- Hardcode API keys or credentials in source files
- Use the wide Syne display font (`font-display`) for blog headings — it overflows on mobile
