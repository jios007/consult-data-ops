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
    slug: 'how-to-use-ai-in-maintenance-operations',
    title: 'How to Use AI in Maintenance & Operations — A Practical Guide',
    excerpt: 'AI is not just for tech companies. Asset-heavy organisations can use it today to predict failures, automate reporting, and get answers from their CMMS data faster than ever.',
    date: 'June 7, 2026',
    readTime: 9,
    tag: 'AI',
    content: `
<h2>AI in maintenance — what is actually useful right now</h2>
<p>There is a lot of noise about AI. Most of it is either overblown or aimed at organisations with data science teams and clean data. This article is for maintenance managers, operations engineers, and IT leaders who want to know what AI can do for them <em>today</em>, with the data and tools they already have.</p>
<p>The honest answer is: quite a lot — if you start in the right place.</p>

<h2>1. Predictive maintenance with AI</h2>
<p>This is the most talked-about use case, and it is real — but it requires good historical data. Specifically, you need:</p>
<ul>
  <li>Work order history with actual failure codes and dates</li>
  <li>Asset condition readings (vibration, temperature, oil analysis)</li>
  <li>At least 2–3 years of consistent records</li>
</ul>
<p>If your CMMS data is clean, you can train a simple machine learning model to predict which assets are likely to fail in the next 30–90 days. Tools like <strong>Azure Machine Learning</strong> or even <strong>Python with scikit-learn</strong> can do this without a data science team — but only if the underlying data is reliable.</p>
<p>If your data is not clean yet, start there first. Predictive maintenance on bad data produces confidently wrong predictions.</p>

<h2>2. AI-assisted work order classification</h2>
<p>One of the most practical AI applications I see in Maximo environments is automatic work order classification. Technicians write free-text descriptions — "pump making noise", "valve leaking", "light not working" — and AI can automatically assign the correct failure code, work type, and asset category.</p>
<p>This can be done using a simple text classification model trained on your historical work orders. The result: consistent data entry without requiring technicians to navigate dropdown menus they rarely use correctly.</p>
<p>Tools: Python + OpenAI API, or Azure Cognitive Services.</p>

<h2>3. Chat with your CMMS data</h2>
<p>This is the newest and most accessible AI use case. Instead of writing SQL queries or navigating Maximo reports, you ask questions in plain language:</p>
<ul>
  <li><em>"Which assets had the most corrective work orders last quarter?"</em></li>
  <li><em>"What is our average time to close a critical work order?"</em></li>
  <li><em>"Show me all PM work orders that were completed late in the last 6 months."</em></li>
</ul>
<p>Tools like <strong>Power BI Copilot</strong>, <strong>ChatGPT with data analysis</strong>, or a custom Claude-powered dashboard can answer these questions from your exported data. No SQL knowledge required.</p>

<h2>4. Automated reporting and summaries</h2>
<p>AI can generate weekly maintenance summaries automatically — pulling data from your CMMS, identifying anomalies, and writing a plain-language report for management. This saves 2–4 hours per week for whoever currently does this manually.</p>
<p>A simple Python script using the Claude or OpenAI API can do this with your existing Power BI exports or SQL query results.</p>

<h2>Where to start</h2>
<p>My recommendation for most maintenance organisations:</p>
<ol>
  <li>Clean up your CMMS data first — AI amplifies what is already there, good or bad</li>
  <li>Start with Power BI Copilot — it requires no setup and works immediately with your existing reports</li>
  <li>Pilot automated work order classification on one asset class or site</li>
  <li>Build predictive models once you have 2+ years of clean data</li>
</ol>
<p>The organisations getting the most value from AI in maintenance are not the ones with the biggest budgets — they are the ones with the cleanest data and the clearest questions.</p>
<hr/>
<p>If you want to explore what AI could do for your maintenance data specifically, <a href="/#contact">get in touch</a>. I help organisations across the Nordics go from messy CMMS data to actionable AI insights.</p>
    `,
  },
  {
    slug: 'how-to-create-custom-views-power-bi',
    title: 'How to Create Custom Views in Power BI for Maintenance Reporting',
    excerpt: 'Power BI is powerful out of the box — but the real value comes from custom views tailored to your maintenance KPIs. Here is how to build them properly.',
    date: 'June 7, 2026',
    readTime: 7,
    tag: 'Power BI',
    content: `
<h2>Why custom views matter in maintenance reporting</h2>
<p>A default Power BI report shows data. A well-designed custom view tells a story. For maintenance teams, the difference is between a dashboard nobody opens and one that drives the weekly team meeting.</p>
<p>Custom views let you surface exactly the KPIs that matter to your operation — PM compliance, backlog age, MTBF, cost per asset — without making the reader hunt through pages of generic charts.</p>

<h2>Step 1: Define your audience and questions</h2>
<p>Before opening Power BI Desktop, answer these questions:</p>
<ul>
  <li>Who will use this view? (Maintenance manager, technician, finance, CEO?)</li>
  <li>What decision will they make with it?</li>
  <li>What is the one number they need to see first?</li>
</ul>
<p>A maintenance manager needs backlog and PM compliance. A CEO needs cost and availability. A technician needs their open work orders. Build one view per audience — not one view for everyone.</p>

<h2>Step 2: Connect to your data source</h2>
<p>In Power BI Desktop: <strong>Home → Get Data</strong>. Common sources for maintenance data:</p>
<ul>
  <li><strong>Excel / CSV</strong> — for Maximo exports or manual data</li>
  <li><strong>SQL Server / Oracle</strong> — direct connection to your CMMS database</li>
  <li><strong>SharePoint</strong> — for shared maintenance logs</li>
  <li><strong>OData / REST API</strong> — for live Maximo integration</li>
</ul>
<p>For Maximo specifically, the cleanest approach is a scheduled SQL export to a staging database, then connecting Power BI to that. Direct CMMS connections can slow down your production system.</p>

<h2>Step 3: Build your data model</h2>
<p>Power BI works best with a star schema — one fact table (work orders) connected to dimension tables (assets, locations, work types, dates). Create relationships in the <strong>Model view</strong>.</p>
<p>Key tables for a maintenance report:</p>
<ul>
  <li><strong>WORKORDER</strong> — your central fact table</li>
  <li><strong>ASSET</strong> — asset hierarchy and attributes</li>
  <li><strong>LOCATIONS</strong> — functional locations</li>
  <li><strong>LABTRANS</strong> — labour transactions (actual hours)</li>
  <li><strong>DimDate</strong> — a date table (create this in DAX)</li>
</ul>

<h2>Step 4: Write key DAX measures</h2>
<p>Custom views need custom calculations. Here are the essential DAX measures for maintenance:</p>
<pre><code>-- PM Compliance Rate
PM Compliance % =
DIVIDE(
    CALCULATE(COUNTROWS(WORKORDER), WORKORDER[WORKTYPE] = "PM", WORKORDER[STATUS] = "COMP"),
    CALCULATE(COUNTROWS(WORKORDER), WORKORDER[WORKTYPE] = "PM")
)

-- Average Days to Close
Avg Days to Close =
AVERAGEX(
    FILTER(WORKORDER, WORKORDER[STATUS] = "CLOSE"),
    DATEDIFF(WORKORDER[REPORTDATE], WORKORDER[CLOSEDATE], DAY)
)

-- Backlog Count
Open Backlog =
CALCULATE(COUNTROWS(WORKORDER), WORKORDER[STATUS] IN {"WAPPR","APPR","INPRG","WMATL"})</code></pre>

<h2>Step 5: Design the visual layout</h2>
<p>For a maintenance manager view, use this structure:</p>
<ul>
  <li><strong>Top row</strong> — 3–4 KPI cards: PM Compliance %, Open Backlog, Avg Days to Close, Critical WOs</li>
  <li><strong>Middle left</strong> — Backlog trend over time (line chart)</li>
  <li><strong>Middle right</strong> — Work orders by type (donut or bar)</li>
  <li><strong>Bottom</strong> — Table of overdue work orders with asset, description, and days open</li>
</ul>
<p>Use conditional formatting to highlight problems in red — late PMs, high backlog, critical assets overdue.</p>

<h2>Step 6: Publish and schedule refresh</h2>
<p>Publish to Power BI Service, set up a <strong>scheduled refresh</strong> (daily is usually enough for maintenance data), and share the report link with your team. Pin the key view to a Dashboard for the management homepage.</p>
<hr/>
<p>Need help building a Power BI maintenance report for your organisation? <a href="/#contact">Get in touch</a> — I build these for asset-heavy organisations across the Nordics.</p>
    `,
  },
  {
    slug: 'how-to-write-advanced-sql-for-maintenance-data',
    title: 'How to Write Advanced SQL for Maintenance Data Analysis',
    excerpt: 'SQL is the most powerful tool for interrogating CMMS data. Master these advanced techniques and you can answer any maintenance question directly from your database — no reporting tool required.',
    date: 'June 7, 2026',
    readTime: 10,
    tag: 'SQL',
    content: `
<h2>Why SQL matters for maintenance data</h2>
<p>Every CMMS — Maximo, SAP PM, Infor EAM — stores its data in a relational database. SQL is the language of that database. If you can write SQL, you can answer any question about your maintenance data, build custom exports, and feed any reporting tool you want.</p>
<p>This guide assumes you know basic SELECT statements. We will go straight to the techniques that are actually useful for maintenance data analysis.</p>

<h2>1. Window functions — your most powerful tool</h2>
<p>Window functions let you calculate running totals, rankings, and comparisons without collapsing your result set. Essential for maintenance analysis.</p>
<pre><code>-- Rank assets by number of corrective work orders (most problematic first)
SELECT
    assetnum,
    description,
    COUNT(*) as wo_count,
    RANK() OVER (ORDER BY COUNT(*) DESC) as failure_rank
FROM workorder
WHERE worktype = 'CM'
AND reportdate >= DATEADD(year, -1, GETDATE())
GROUP BY assetnum, description
ORDER BY failure_rank;</code></pre>

<pre><code>-- Running total of labour hours by month
SELECT
    FORMAT(actualstart, 'yyyy-MM') as month,
    SUM(regularhrs) as monthly_hours,
    SUM(SUM(regularhrs)) OVER (ORDER BY FORMAT(actualstart, 'yyyy-MM')) as running_total
FROM labtrans
GROUP BY FORMAT(actualstart, 'yyyy-MM')
ORDER BY month;</code></pre>

<h2>2. CTEs — write readable, maintainable queries</h2>
<p>Common Table Expressions (CTEs) let you break complex queries into named steps. Essential when working with Maximo's many joined tables.</p>
<pre><code>-- PM compliance by site for last 12 months
WITH scheduled_pms AS (
    SELECT siteid, COUNT(*) as total_pms
    FROM workorder
    WHERE worktype = 'PM'
    AND schedstart BETWEEN DATEADD(year,-1,GETDATE()) AND GETDATE()
    GROUP BY siteid
),
completed_pms AS (
    SELECT siteid, COUNT(*) as completed
    FROM workorder
    WHERE worktype = 'PM'
    AND status = 'COMP'
    AND schedstart BETWEEN DATEADD(year,-1,GETDATE()) AND GETDATE()
    GROUP BY siteid
)
SELECT
    s.siteid,
    s.total_pms,
    c.completed,
    ROUND(100.0 * c.completed / s.total_pms, 1) as compliance_pct
FROM scheduled_pms s
LEFT JOIN completed_pms c ON s.siteid = c.siteid
ORDER BY compliance_pct;</code></pre>

<h2>3. Date calculations for maintenance KPIs</h2>
<p>Time-based analysis is at the core of maintenance reporting. Key patterns:</p>
<pre><code>-- Average time to close corrective work orders (days)
SELECT
    siteid,
    AVG(DATEDIFF(day, reportdate, closedate)) as avg_days_to_close,
    MAX(DATEDIFF(day, reportdate, closedate)) as max_days_to_close
FROM workorder
WHERE status = 'CLOSE'
AND worktype = 'CM'
AND closedate IS NOT NULL
GROUP BY siteid;

-- Work orders open more than 30 days
SELECT
    wonum, description, assetnum, reportdate,
    DATEDIFF(day, reportdate, GETDATE()) as days_open
FROM workorder
WHERE status IN ('WAPPR','APPR','INPRG','WMATL')
AND DATEDIFF(day, reportdate, GETDATE()) > 30
ORDER BY days_open DESC;</code></pre>

<h2>4. PIVOT — turn rows into columns for reporting</h2>
<p>Useful when you need to compare work types side by side per site or asset class.</p>
<pre><code>-- Work order count by type and site
SELECT siteid, [PM], [CM], [EM], [MOD]
FROM (
    SELECT siteid, worktype
    FROM workorder
    WHERE reportdate >= DATEADD(year,-1,GETDATE())
) src
PIVOT (
    COUNT(worktype)
    FOR worktype IN ([PM],[CM],[EM],[MOD])
) pvt
ORDER BY siteid;</code></pre>

<h2>5. Identifying bad data with SQL</h2>
<p>SQL is the fastest way to find data quality problems in your CMMS:</p>
<pre><code>-- Work orders with no asset or location
SELECT wonum, description, status, reportdate
FROM workorder
WHERE assetnum IS NULL AND location IS NULL
AND status NOT IN ('CAN','CLOSE')
ORDER BY reportdate DESC;

-- Duplicate work order descriptions (possible duplicates)
SELECT description, COUNT(*) as count, MIN(wonum) as first_wo
FROM workorder
WHERE status NOT IN ('CAN','CLOSE')
GROUP BY description
HAVING COUNT(*) > 3
ORDER BY count DESC;

-- Labour transactions with no matching work order
SELECT lt.transid, lt.wonum, lt.laborcode, lt.regularhrs
FROM labtrans lt
LEFT JOIN workorder wo ON lt.wonum = wo.wonum
WHERE wo.wonum IS NULL;</code></pre>

<h2>Building a maintenance data query library</h2>
<p>Save your most-used queries in a shared folder or a simple internal wiki. Over time, you build a library that any engineer on your team can run — no SQL knowledge required for the end user, just the analyst who maintains the library.</p>
<p>The queries above are starting points. Every CMMS has slightly different schema — Maximo uses <code>WORKORDER</code>, SAP PM uses <code>AUFK</code>, Infor uses <code>WOBASE</code>. The logic is the same; the table names differ.</p>
<hr/>
<p>Need custom SQL queries built for your CMMS or help setting up a maintenance data warehouse? <a href="/#contact">Get in touch</a> — this is exactly what I do for organisations across the Nordics.</p>
    `,
  },
  {
    slug: 'advanced-excel-vba-for-maintenance-teams',
    title: 'Advanced Excel VBA: Build Custom Tools Your Team Will Actually Use',
    excerpt: 'VBA turns Excel from a spreadsheet into a custom application. Learn how to build automated maintenance tools — work order trackers, report generators, and data validators — tailored exactly to your company.',
    date: 'June 7, 2026',
    readTime: 9,
    tag: 'Excel',
    content: `
<h2>Why VBA is still relevant in 2026</h2>
<p>Every year someone declares Excel dead. Every year, maintenance teams across the world keep running their operations on it. VBA — Visual Basic for Applications — is the programming language built into Excel that turns static spreadsheets into interactive tools. For companies that live in Excel, VBA is the fastest way to automate repetitive work without buying new software.</p>
<p>This guide covers the VBA patterns that are actually useful in maintenance and operations environments — not generic tutorials, but the specific techniques you need to build tools your team will use every day.</p>

<h2>Setting up the VBA editor</h2>
<p>Press <strong>Alt + F11</strong> in Excel to open the VBA editor. If you do not see the Developer tab in the ribbon, go to <strong>File → Options → Customize Ribbon</strong> and enable it.</p>
<p>Your code lives in <strong>Modules</strong> (for reusable functions), <strong>Sheets</strong> (for sheet-specific events), or <strong>ThisWorkbook</strong> (for workbook-level events like Open and Close).</p>

<h2>Pattern 1: Auto-populate a work order tracker</h2>
<p>This macro reads a new work order entry form and adds it to a master log sheet — the most common maintenance VBA use case.</p>
<pre><code>Sub AddWorkOrder()
    Dim wsForm As Worksheet
    Dim wsLog As Worksheet
    Dim nextRow As Long

    wsForm = ThisWorkbook.Sheets("Entry Form")
    wsLog = ThisWorkbook.Sheets("WO Log")

    ' Validate required fields
    If wsForm.Range("B2").Value = "" Then
        MsgBox "Asset number is required.", vbExclamation
        Exit Sub
    End If

    ' Find next empty row in log
    nextRow = wsLog.Cells(wsLog.Rows.Count, 1).End(xlUp).Row + 1

    ' Copy values from form to log
    wsLog.Cells(nextRow, 1).Value = nextRow - 1          ' WO Number
    wsLog.Cells(nextRow, 2).Value = wsForm.Range("B2").Value  ' Asset
    wsLog.Cells(nextRow, 3).Value = wsForm.Range("B3").Value  ' Description
    wsLog.Cells(nextRow, 4).Value = wsForm.Range("B4").Value  ' Work Type
    wsLog.Cells(nextRow, 5).Value = Now()                 ' Timestamp
    wsLog.Cells(nextRow, 6).Value = "OPEN"               ' Status

    ' Clear form for next entry
    wsForm.Range("B2:B4").ClearContents

    MsgBox "Work order added successfully.", vbInformation
End Sub</code></pre>

<h2>Pattern 2: Conditional formatting via VBA</h2>
<p>Apply dynamic colour coding based on business rules — for example, highlight overdue work orders in red automatically when the file opens.</p>
<pre><code>Sub HighlightOverdue()
    Dim ws As Worksheet
    Dim lastRow As Long
    Dim i As Long

    ws = ThisWorkbook.Sheets("WO Log")
    lastRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row

    For i = 2 To lastRow
        Dim daysOpen As Long
        daysOpen = DateDiff("d", ws.Cells(i, 5).Value, Now())

        If ws.Cells(i, 6).Value = "OPEN" And daysOpen > 30 Then
            ws.Rows(i).Interior.Color = RGB(255, 200, 200) ' Red
        ElseIf ws.Cells(i, 6).Value = "OPEN" And daysOpen > 14 Then
            ws.Rows(i).Interior.Color = RGB(255, 235, 180) ' Amber
        Else
            ws.Rows(i).Interior.ColorIndex = xlNone
        End If
    Next i
End Sub</code></pre>

<h2>Pattern 3: Generate a PDF report with one click</h2>
<p>This is one of the most requested VBA tools — a button that produces a formatted PDF report from your data, named automatically with today's date.</p>
<pre><code>Sub ExportMonthlyReport()
    Dim ws As Worksheet
    Dim fileName As String

    ws = ThisWorkbook.Sheets("Monthly Report")
    fileName = "C:\Reports\Maintenance_Report_" & Format(Now(), "YYYY-MM") & ".pdf"

    ws.ExportAsFixedFormat _
        Type:=xlTypePDF, _
        FileName:=fileName, _
        Quality:=xlQualityStandard, _
        OpenAfterPublish:=True

    MsgBox "Report saved to: " & fileName, vbInformation
End Sub</code></pre>

<h2>Pattern 4: Import and merge data from multiple files</h2>
<p>Open every Excel file in a folder and copy data into a master sheet — useful for consolidating site reports.</p>
<pre><code>Sub MergeAllFiles()
    Dim folderPath As String
    Dim fileName As String
    Dim wbSource As Workbook
    Dim wsMaster As Worksheet
    Dim wsSource As Worksheet
    Dim lastRow As Long

    folderPath = "C:\SiteReports\"
    wsMaster = ThisWorkbook.Sheets("Master")
    wsMaster.Cells.ClearContents

    fileName = Dir(folderPath & "*.xlsx")

    Do While fileName <> ""
        Set wbSource = Workbooks.Open(folderPath & fileName)
        wsSource = wbSource.Sheets(1)

        lastRow = wsMaster.Cells(wsMaster.Rows.Count, 1).End(xlUp).Row + 1
        wsSource.UsedRange.Copy wsMaster.Cells(lastRow, 1)

        wbSource.Close SaveChanges:=False
        fileName = Dir()
    Loop

    MsgBox "All files merged.", vbInformation
End Sub</code></pre>

<h2>Making VBA tools company-specific</h2>
<p>The power of VBA is customisation. To adapt these patterns to your company:</p>
<ul>
  <li>Replace sheet names and column references to match your actual Excel structure</li>
  <li>Add dropdown lists (<strong>Data Validation</strong>) for work types, sites, and asset categories — then read those values in VBA</li>
  <li>Store configuration in a hidden "Settings" sheet (file paths, email addresses, thresholds) so non-technical users can update them without touching code</li>
  <li>Protect your VBA code with a password (<strong>Tools → VBA Project Properties → Protection</strong>) so users cannot accidentally break it</li>
</ul>
<p>A well-built VBA tool looks and feels like a custom application — users click buttons, fill forms, and get reports. They never need to see a line of code.</p>
<hr/>
<p>Need a custom Excel tool built for your maintenance team? <a href="/#contact">Get in touch</a> — I build these for organisations across the Nordics who want automation without new software.</p>
    `,
  },
  {
    slug: 'python-for-maintenance-data-merge-search-automate',
    title: 'Python for Maintenance Teams: Merge Files, Search Data, and Automate Scripts',
    excerpt: 'Python is the most practical tool for anyone working with maintenance data at scale. Learn how to merge Excel files, search large datasets, and build automated scripts — no programming background needed to get started.',
    date: 'June 7, 2026',
    readTime: 11,
    tag: 'Python',
    content: `
<h2>Why Python beats manual work every time</h2>
<p>If you spend more than 30 minutes a week copying data between files, running the same report, or searching through spreadsheets — Python can do it in seconds. And unlike VBA, Python works across any file type: Excel, CSV, PDF, databases, APIs, and more.</p>
<p>This guide is written for maintenance professionals and data analysts who want practical results, not a computer science degree.</p>

<h2>Setup: install what you need</h2>
<pre><code>pip install pandas openpyxl glob2</code></pre>
<p>That is all you need for everything in this article. <strong>pandas</strong> handles data, <strong>openpyxl</strong> reads and writes Excel files, and <strong>glob</strong> finds files by pattern.</p>

<h2>1. Merge multiple Excel files into one</h2>
<p>The most common request I get: "We have 12 monthly reports, one per site. Can you combine them?"</p>
<pre><code>import pandas as pd
import glob
import os

# Find all Excel files in a folder
folder = r"C:\\SiteReports\\"
all_files = glob.glob(folder + "*.xlsx")

# Read and combine
dfs = []
for file in all_files:
    df = pd.read_excel(file)
    df["source_file"] = os.path.basename(file)  # Track which file each row came from
    dfs.append(df)

combined = pd.concat(dfs, ignore_index=True)

# Save to a single file
combined.to_excel(r"C:\\SiteReports\\combined.xlsx", index=False)
print(f"Merged {len(all_files)} files — {len(combined)} rows total")</code></pre>
<p>This handles hundreds of files in seconds. The <code>source_file</code> column tells you exactly where each row came from.</p>

<h2>2. Search and filter large datasets</h2>
<p>Searching through a 50,000-row work order export in Excel is slow and unreliable. Python does it instantly.</p>
<pre><code>import pandas as pd

# Load your work order export
df = pd.read_excel(r"C:\\Data\\workorders.xlsx")

# Search by keyword in description
keyword = "pump"
results = df[df["DESCRIPTION"].str.contains(keyword, case=False, na=False)]
print(f"Found {len(results)} work orders mentioning '{keyword}'")

# Filter by multiple conditions
overdue = df[
    (df["STATUS"].isin(["WAPPR", "INPRG", "WMATL"])) &
    (pd.to_datetime(df["REPORTDATE"]) < pd.Timestamp.now() - pd.Timedelta(days=30))
]
print(f"{len(overdue)} work orders open more than 30 days")

# Save filtered results
overdue.to_excel(r"C:\\Data\\overdue_workorders.xlsx", index=False)</code></pre>

<h2>3. Clean and standardise data</h2>
<p>Real CMMS exports are messy — inconsistent capitalisation, trailing spaces, blank rows. Python cleans them in bulk.</p>
<pre><code>import pandas as pd

df = pd.read_excel(r"C:\\Data\\assets.xlsx")

# Remove blank rows
df.dropna(how="all", inplace=True)

# Standardise text columns — strip spaces, uppercase
for col in ["ASSETNUM", "SITEID", "WORKTYPE"]:
    df[col] = df[col].astype(str).str.strip().str.upper()

# Fill missing descriptions
df["DESCRIPTION"].fillna("No description", inplace=True)

# Remove duplicate asset numbers
df.drop_duplicates(subset=["ASSETNUM"], keep="first", inplace=True)

print(f"Clean dataset: {len(df)} records")
df.to_excel(r"C:\\Data\\assets_clean.xlsx", index=False)</code></pre>

<h2>4. Automated weekly report script</h2>
<p>Schedule this to run every Monday morning — it reads your latest data export and produces a formatted summary Excel file automatically.</p>
<pre><code>import pandas as pd
from datetime import datetime

def generate_weekly_report(input_file, output_folder):
    df = pd.read_excel(input_file)
    df["REPORTDATE"] = pd.to_datetime(df["REPORTDATE"])

    today = pd.Timestamp.now()
    last_week = today - pd.Timedelta(days=7)

    # Summary statistics
    summary = {
        "Total Open WOs": len(df[df["STATUS"].isin(["WAPPR","INPRG","WMATL"])]),
        "New WOs This Week": len(df[df["REPORTDATE"] >= last_week]),
        "Overdue (30+ days)": len(df[
            (df["STATUS"].isin(["WAPPR","INPRG","WMATL"])) &
            (df["REPORTDATE"] < today - pd.Timedelta(days=30))
        ]),
        "PM Compliance %": round(
            100 * len(df[(df["WORKTYPE"]=="PM") & (df["STATUS"]=="COMP")]) /
            max(len(df[df["WORKTYPE"]=="PM"]), 1), 1
        ),
    }

    summary_df = pd.DataFrame(list(summary.items()), columns=["Metric", "Value"])

    output_file = f"{output_folder}\\Weekly_Report_{today.strftime('%Y-%m-%d')}.xlsx"
    summary_df.to_excel(output_file, index=False)
    print(f"Report saved: {output_file}")
    return summary

generate_weekly_report(
    r"C:\\Data\\workorders.xlsx",
    r"C:\\Reports"
)</code></pre>

<h2>5. Schedule scripts to run automatically</h2>
<p>On Windows, use <strong>Task Scheduler</strong> to run your Python script automatically:</p>
<ol>
  <li>Open Task Scheduler → Create Basic Task</li>
  <li>Set trigger: Daily or Weekly</li>
  <li>Action: Start a program → browse to <code>python.exe</code></li>
  <li>Add arguments: the full path to your script, e.g. <code>C:\\Scripts\\weekly_report.py</code></li>
</ol>
<p>Your report now runs automatically, with no manual intervention. The file appears in your output folder every Monday morning.</p>

<h2>Making scripts company-specific</h2>
<p>Put all configurable values at the top of your script as variables:</p>
<pre><code># ---- CONFIGURATION ---- #
INPUT_FILE = r"C:\\Data\\workorders.xlsx"
OUTPUT_FOLDER = r"C:\\Reports"
OVERDUE_THRESHOLD_DAYS = 30
CRITICAL_SITES = ["SITE01", "SITE02", "SITE03"]
# ----------------------- #</code></pre>
<p>This way, a non-programmer can open the file, change the folder path or site list, and the script adapts without touching the logic.</p>
<hr/>
<p>Need a Python script built for your specific maintenance data workflow? <a href="/#contact">Get in touch</a> — I build and maintain automation scripts for organisations across the Nordics.</p>
    `,
  },
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
  <li><strong>Genuinely completed, never closed</strong> — verify actual hours and move to COMP or CLOSE</li>
  <li><strong>Cancelled in practice, never cancelled in system</strong> — move to CAN with a brief note</li>
  <li><strong>Duplicate records</strong> — pick the canonical record, link labour to it, cancel the others</li>
  <li><strong>Orphaned records (no asset, no location)</strong> — match to an asset using description; if impossible, cancel with a clear note</li>
</ul>
<p>Do not bulk-delete. Always cancel with an explanation. Audit trails matter for maintenance compliance.</p>

<h2>Step 3: Fix classification and asset links</h2>
<p>Work order classification drives your reliability reporting. If 40% of corrective work orders are classified as preventive maintenance, your PM compliance looks better than it is — and your backlog looks smaller.</p>
<p>Priority fixes:</p>
<ul>
  <li>Align work type codes to your actual work taxonomy</li>
  <li>Ensure every work order has a valid asset or functional location</li>
  <li>Check that failure codes are used consistently</li>
</ul>
<p>In Maximo, use the <strong>Work Order Tracking</strong> application with saved queries to find and batch-update records. For large volumes, a Python script using the Maximo REST API is faster and safer than manual updates.</p>

<h2>Step 4: Set up prevention, not just cleanup</h2>
<p>A one-time cleanup without process changes will revert within 18 months. The fixes that stick are structural:</p>
<ul>
  <li><strong>Required fields</strong> — make asset, location, and work type mandatory at WO creation</li>
  <li><strong>Status escalation rules</strong> — auto-flag work orders stuck in INPRG for more than 30 days</li>
  <li><strong>Closing conditions</strong> — require actual hours before a WO can move to COMP</li>
  <li><strong>Weekly backlog review</strong> — a 15-minute team habit beats any system rule</li>
</ul>

<h2>Step 5: Measure the improvement</h2>
<p>Rerun the same counts from Step 1. Typical results after a structured cleanup:</p>
<ul>
  <li>30–60% reduction in open work order backlog</li>
  <li>Asset coverage rising from 60–70% to 95%+</li>
  <li>PM compliance figures that actually reflect reality</li>
</ul>
<hr/>
<p>If your Maximo data is in this state, you are not alone. Most organisations I work with in the Nordics have some version of this problem. A structured cleanup typically takes weeks, not months, and the impact on reporting quality is immediate.</p>
<p>If you want to talk through your specific situation, <a href="/#contact">get in touch</a>. The first conversation is free.</p>
    `,
  },
];
