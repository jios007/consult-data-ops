export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  tag: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: 'how-to-clean-up-maximo-work-orders',
    title: 'How to Clean Up Maximo Work Orders (Without Breaking Everything)',
    excerpt: 'Most Maximo systems accumulate thousands of orphaned, duplicated, or incorrectly classified work orders over time. Here is a practical, step-by-step approach to cleaning them up safely.',
    date: 'June 7, 2026',
    readTime: 8,
    tag: 'Maximo',
    content: `
<h2>Why work order data gets messy</h2>
<p>In most organisations running IBM Maximo, work order data degrades gradually. Nobody sets out to create a mess — it happens through years of staff turnover, inconsistent training, rushed data entry, and system migrations where validation rules were switched off "temporarily."</p>
<p>The result is a CMMS full of work orders that are: never closed, wrongly classified, missing asset associations, duplicated across departments, or simply abandoned mid-process. When this data feeds your KPIs, your KPIs are wrong. And when your KPIs are wrong, your decisions are wrong.</p>
<p>Here is how to fix it — systematically, without disrupting live operations.</p>

<h2>Step 1: Audit before you touch anything</h2>
<p>The most common mistake is jumping straight to bulk updates. Before changing a single record, build a clear picture of what you have.</p>
<p>Run SQL queries against your Maximo database (or use report builder) to count:</p>
<ul>
  <li>Work orders by status — how many are stuck in WAPPR, INPRG, or WMATL for more than 90 days?</li>
  <li>Work orders with no asset or location — these cannot be reliably reported on</li>
  <li>Work orders with no assigned labour or actual hours — likely abandoned</li>
  <li>Duplicate WO numbers or descriptions across sites</li>
</ul>
<p>Export this to Excel. You need a baseline before cleanup so you can measure improvement.</p>

<h2>Step 2: Classify your problem work orders</h2>
<p>Not all messy work orders are equal. Group them into categories:</p>
<ul>
  <li><strong>Genuinely completed, never closed</strong> — these need actual hours verified and status moved to COMP or CLOSE</li>
  <li><strong>Cancelled in practice, never cancelled in system</strong> — these need a CAN status and a brief note explaining why</li>
  <li><strong>Duplicate records</strong> — pick the canonical record, link labour to it, and cancel the others</li>
  <li><strong>Orphaned records (no asset, no location)</strong> — try to match to an asset using description or originating request; if impossible, cancel with a clear note</li>
</ul>
<p>Do not bulk-delete. Always cancel with an explanation. Audit trails matter for maintenance compliance.</p>

<h2>Step 3: Fix classification and asset links</h2>
<p>Work order classification drives your reliability reporting. If 40% of corrective work orders are classified as preventive maintenance, your PM compliance looks better than it is — and your backlog looks smaller.</p>
<p>Priority fixes:</p>
<ul>
  <li>Align work type codes to your actual work taxonomy</li>
  <li>Ensure every work order has a valid asset or functional location</li>
  <li>Check that failure codes are used consistently (or implement them if they are not)</li>
</ul>
<p>In Maximo, you can use the <strong>Work Order Tracking</strong> application with saved queries to find and batch-update records. For large volumes, Maximo's Integration Framework or a Python script using the REST API is faster and safer than manual updates.</p>

<h2>Step 4: Set up prevention, not just cleanup</h2>
<p>A one-time cleanup without process changes will revert within 18 months. The fixes that stick are structural:</p>
<ul>
  <li><strong>Required fields</strong> — make asset, location, and work type mandatory at WO creation</li>
  <li><strong>Status escalation rules</strong> — auto-flag work orders that stay in INPRG for more than 30 days</li>
  <li><strong>Closing conditions</strong> — require actual hours before a WO can move to COMP</li>
  <li><strong>Weekly backlog review</strong> — a 15-minute team habit beats any system rule</li>
</ul>

<h2>Step 5: Measure the improvement</h2>
<p>Go back to your baseline from Step 1. After cleanup, rerun the same counts. Typical results I see after a structured cleanup engagement:</p>
<ul>
  <li>30–60% reduction in open work order backlog</li>
  <li>Asset coverage rising from 60–70% to 95%+</li>
  <li>PM compliance figures that actually reflect reality</li>
</ul>
<p>These numbers matter not just for reporting — they affect spare parts planning, labour forecasting, and ultimately the cost of running your assets.</p>

<hr/>

<p>If your Maximo data is in this state, you are not alone. Most organisations I work with in the Nordics have some version of this problem. The good news is that a structured cleanup — even on large datasets — typically takes weeks, not months, and the impact on reporting quality is immediate.</p>
<p>If you want to talk through your specific situation, <a href="/#contact">get in touch</a>. The first conversation is free.</p>
    `,
  },
];
