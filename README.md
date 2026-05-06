# SAFe Knowledge Base

A comprehensive, structured knowledge base covering the **Scaled Agile Framework (SAFe®)**, built from the official SAFe knowledge base content. All content is stored as Markdown files for easy editing, and navigated through a modern web interface.

## 📁 Structure

```
Safe-Knowledge-/
├── content/                  # All knowledge base articles (Markdown)
│   ├── overview/             # SAFe introduction, Big Picture, configurations, history
│   ├── mindset/              # Lean-Agile Mindset, Core Values, Leadership
│   ├── principles/           # All 10 SAFe Principles
│   ├── roles/                # All SAFe roles (team, program, portfolio)
│   ├── events/               # All SAFe events and ceremonies
│   ├── artifacts/            # SAFe artifacts (backlogs, boards, objectives)
│   ├── competencies/         # 7 Core Competencies of Business Agility
│   └── devops/               # DevOps and Continuous Delivery Pipeline
│
└── website/                  # The navigation website
    ├── index.html            # Main single-page app
    ├── css/style.css         # Styles (light + dark mode)
    ├── js/app.js             # Navigation, search, markdown rendering
    └── serve.py              # Local Python server (recommended)
```

## 🚀 Running the Website

### Option 1: Python (Recommended)
```bash
cd website
python3 serve.py
# Open http://localhost:8080
```

### Option 2: Node.js (http-server)
```bash
npm install -g http-server
cd website
http-server -p 8080 --cors
# Open http://localhost:8080
```

### Option 3: VS Code Live Server
Install the "Live Server" extension in VS Code, then right-click `website/index.html` and choose "Open with Live Server".

> **Note:** You must use a local server. Opening `index.html` directly as a `file://` URL will fail due to browser CORS restrictions when loading Markdown files.

## ✏️ Editing Content

All articles are standard Markdown files in the `/content/` directory. To edit:

1. Open any `.md` file in your editor
2. Edit using standard Markdown
3. Refresh the browser to see changes instantly

### Adding a New Article

1. Create a new `.md` file in the appropriate `/content/` subdirectory
2. Open `website/js/app.js`
3. Add an entry to the `CONTENT_INDEX` array:

```javascript
{
  id: "category/my-new-article",
  title: "My New Article Title",
  category: "Category Name",
  icon: "📄",
  file: "../content/category/my-new-article.md"
}
```

4. Save and refresh — the article appears in the sidebar automatically.

## 📚 Content Included

| Section | Articles |
|---------|---------|
| **Overview** | What is SAFe?, Big Picture, Configurations, History |
| **Mindset & Values** | Lean-Agile Mindset, Core Values, Leadership |
| **SAFe Principles** | All 10 principles with detailed explanations |
| **Roles** | RTE, PM, PO, SM, Architect, Business Owners, Epic Owner, LPM |
| **Events & Ceremonies** | PI Planning, System Demo, I&A, ART Sync, Sprint ceremonies |
| **Artifacts** | PI Objectives, Program Backlog, Program Board, Portfolio Backlog |
| **Core Competencies** | Business Agility, Team Agility, Agile Product Delivery |
| **DevOps & CDP** | DevOps Overview, Continuous Delivery Pipeline |

## 🌐 Website Features

- Sidebar navigation with collapsible categories
- Full-text search across all articles
- Dark / Light mode toggle
- Mobile responsive layout
- URL-based routing (`?article=events/pi-planning`)
- Markdown rendering (no build step required)
- Breadcrumb navigation

---

*SAFe® is a registered trademark of Scaled Agile, Inc. This knowledge base is for educational purposes.*
