# 🎬 FetchFlow

> A responsive movie discovery web app powered by the OMDB API — search, filter, sort, and explore thousands of movies and series in real time.
---

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [API Reference](#-api-reference)
- [Milestones](#-milestones)
- [Screenshots](#-screenshots)
- [License](#-license)

---

## 🧭 Overview

**FetchFlow** is a front-end web application built as part of a JavaScript project assignment. It integrates with the [OMDB API](https://www.omdbapi.com/) to fetch and display real-time movie data. Users can search for titles, filter by year or type, and sort results — all driven by JavaScript's array higher-order functions.

---

## 🚀 Features

| Feature | Description |
|---|---|
| 🔍 **Search** | Search movies and series by keyword using the OMDB API |
| 🎯 **Filter by Year** | Narrow results down to a specific release year |
| 🎭 **Filter by Type** | Toggle between Movies, Series, and Episodes |
| 🔃 **Sort A–Z** | Sort results alphabetically by title |
| ⭐ **Sort by Rating** | Arrange results by IMDb rating (high to low) |
| 🌙 **Dark Mode** | Toggle between light and dark themes |
| ⏳ **Loading Indicator** | Visual feedback while API data is being fetched |

> All search, filter, and sort operations are implemented using **Array Higher-Order Functions** (`filter`, `sort`, `map`) — no `for`/`while` loops.
---

## 🛠 Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Responsive layout and theming
- **Vanilla JavaScript (ES6+)** — Logic, DOM manipulation, API calls
- **OMDB API** — Movie data source
- **Fetch API** — Asynchronous HTTP requests

---

## ⚡ Getting Started

### Prerequisites

- A free OMDB API key → [Get one here](https://www.omdbapi.com/apikey.aspx)
- A modern browser (Chrome, Firefox, Edge)
- No build tools or dependencies required

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/your-username/fetchflow.git
   cd fetchflow
```

2. **Add your API key**

   Open `js/api.js` (or wherever your API config lives) and replace the placeholder:
```javascript
   const API_KEY = "your_api_key_here";
```

3. **Run the app**

   Open `index.html` directly in your browser — or use a local server:
```bash
   # Using VS Code Live Server (recommended)
   # Right-click index.html → Open with Live Server

   # Or using Python
   python -m http.server 5500
```

4. Visit `http://localhost:5500` in your browser.

---

## 📁 Project Structure
```
fetchflow/
│
├── index.html          # Main HTML entry point
├── css/
│   └── style.css       # All styles including dark mode
├── js/
│   ├── api.js          # API fetch logic
│   ├── render.js       # DOM rendering functions
│   ├── filters.js      # Filter, sort, search (HOFs)
│   └── main.js         # App initialization & event listeners
└── README.md
```

---

## 🔌 API Reference

This project uses the **[OMDB API](https://www.omdbapi.com/)**.

**Base URL:**
```
https://www.omdbapi.com/?apikey=YOUR_KEY
```

**Example Request:**
```
GET https://www.omdbapi.com/?s=batman&type=movie&y=2022&apikey=YOUR_KEY
```

**Key Parameters:**

| Parameter | Description |
|---|---|
| `s` | Search keyword |
| `type` | `movie`, `series`, or `episode` |
| `y` | Release year |
| `apikey` | Your API key |

---

## 📅 Milestones

| Milestone | Description | Deadline |
|---|---|---|
| ✅ M1 — Setup | Project idea, API selection, GitHub repo, README | 23rd March |
| 🔄 M2 — API Integration | Fetch & display data, loading states, responsiveness | 1st April |
| ⬜ M3 — Core Features | Search, filter, sort, dark mode (using HOFs) | 8th April |
| ⬜ M4 — Final Submission | Cleanup, deployment, updated docs | 10th April |

---

## 📸 Screenshots

> *(Add screenshots here once the UI is built)*

---

## 📄 License

This project was built for educational purposes as part of a JavaScript course assignment.

---

<p align="center">Made with ☕ and JavaScript</p>