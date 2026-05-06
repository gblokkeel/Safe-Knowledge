# SAFe Knowledge Base

A comprehensive, structured knowledge base covering the **Scaled Agile Framework (SAFe®)**, built from the official SAFe content. All articles are stored as Markdown files and rendered through a modern single-page web app — installable as a PWA on iPhone, iPad, and Android.

## Live Site

**https://gblokkeel.github.io/Safe-Knowledge/docs/**

## Repository Structure

```
Safe-Knowledge-/
└── docs/                         # Everything served by GitHub Pages
    ├── index.html                # Single-page app shell
    ├── manifest.json             # PWA manifest
    ├── sw.js                     # Service Worker (offline support)
    ├── serve.py                  # Local Python dev server
    ├── css/
    │   └── style.css             # Styles — light + dark mode
    ├── js/
    │   └── app.js                # Navigation, search, Markdown rendering
    ├── icons/                    # PWA icons & iOS splash screens
    └── content/                  # All knowledge base articles (Markdown)
        ├── overview/             # SAFe introduction, Big Picture, configurations
        ├── mindset/              # Lean-Agile Mindset, Core Values, Leadership
        ├── principles/           # All 10 SAFe Principles
        ├── roles/                # All SAFe roles (team, program, portfolio)
        ├── events/               # All SAFe events and ceremonies
        ├── artifacts/            # SAFe artifacts (backlogs, boards, objectives)
        ├── competencies/         # 7 Core Competencies of Business Agility
        └── devops/               # DevOps and Continuous Delivery Pipeline
```

## Running Locally

```bash
cd docs
python3 serve.py
# Open http://localhost:8080
```

Or with Node.js:

```bash
npm install -g http-server
http-server docs -p 8080 --cors
# Open http://localhost:8080
```

> **Note:** You must use a local server — opening `index.html` directly as a `file://` URL will fail due to CORS restrictions when fetching Markdown files.

## Editing Content

All articles are standard Markdown files under `docs/content/`. To edit:

1. Open any `.md` file and edit with standard Markdown
2. Refresh the browser to see changes instantly

### Adding a New Article

1. Create a new `.md` file in the appropriate `docs/content/<category>/` subdirectory
2. Open `docs/js/app.js` and add an entry to the `CONTENT_INDEX` array:

```javascript
{
  id: "category/my-new-article",
  title: "My New Article Title",
  category: "Category Name",
  icon: "📄",
  file: "content/category/my-new-article.md"
}
```

3. Save and refresh — the article appears in the sidebar automatically.

## Content

| Section | Articles |
|---------|----------|
| **Overview** | What is SAFe?, Big Picture, Configurations, History |
| **Mindset & Values** | Lean-Agile Mindset, Core Values, Leadership |
| **SAFe Principles** | All 10 principles with detailed explanations |
| **Roles** | RTE, PM, PO, SM, Architect, Business Owners, Epic Owner, LPM |
| **Events & Ceremonies** | PI Planning, System Demo, I&A, ART Sync, Sprint ceremonies |
| **Artifacts** | PI Objectives, Program Backlog, Program Board, Epics → Features → Stories |
| **Core Competencies** | Business Agility, Team Agility, Agile Product Delivery |
| **DevOps & CDP** | DevOps Overview, Continuous Delivery Pipeline |

## Features

- Sidebar navigation with collapsible categories
- Full-text search across all articles
- Dark / Light mode toggle
- Mobile-responsive layout
- URL-based routing (`?article=events/pi-planning`)
- Logo click returns to home page
- Browser back/forward navigation
- Offline-capable PWA — installable on iOS & Android
- iOS splash screens and home screen icons

---

*SAFe® is a registered trademark of Scaled Agile, Inc. This knowledge base is for educational purposes.*
