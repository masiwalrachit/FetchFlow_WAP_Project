# 🎬 Movie Finder

A responsive movie discovery web app powered by the OMDB API — search, filter, sort, and explore thousands of movies and series in real time.

---

## 🔗 Live Demo

**Visit the live site:** https://masiwalrachit.github.io/FetchFlow_WAP_Project/

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [License](#-license)

---

## 🧭 Overview

**Movie Finder** is a front-end web application that integrates with the [OMDB API](https://www.omdbapi.com/) to fetch and display real-time movie data. Users can search for titles, filter by year or type, sort results, and save favorites — all driven by JavaScript's array higher-order functions.

---

## 🚀 Features

| Feature | Description |
|---|---|
| 🔍 **Search** | Search movies and series by keyword using the OMDB API |
| 🎯 **Filter by Year** | Narrow results down to a specific release year |
| 🎭 **Filter by Type** | Toggle between Movies, Series, and Episodes |
| 🔃 **Sort** | Sort by Title (A-Z, Z-A), Year (Newest/Oldest), or Rating |
| ❤️ **Favorites** | Save favorite movies (persisted in localStorage) |
| 🌙 **Dark/Light Mode** | Toggle between light and dark themes |
| ⏳ **Loading Indicator** | Visual feedback while API data is being fetched |

> All search, filter, and sort operations are implemented using **Array Higher-Order Functions** (`filter`, `sort`, `map`, `find`, `some`) — no `for`/`while` loops.

---

## 🛠 Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Responsive layout and theming
- **Vanilla JavaScript (ES6+)** — Logic, DOM manipulation, API calls
- **OMDB API** — Movie data source
- **Fetch API** — Asynchronous HTTP requests
- **GitHub Pages** — Deployment

---

## ⚡ Getting Started

### Prerequisites

- A modern browser (Chrome, Firefox, Edge)
- No build tools or dependencies required

### Run locally

1. Clone the repository
2. Open `index.html` in your browser — or use a local server:

```bash
# Using VS Code Live Server
# Right-click index.html → Open with Live Server

# Or using Python
python -m http.server 5500
```

3. Visit `http://localhost:5500`

### Deploy to GitHub Pages

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

The site is automatically deployed via GitHub Actions to: https://masiwalrachit.github.io/FetchFlow_WAP_Project/

---

## 📁 Project Structure

```
movie-finder/
│
├── index.html          # Main HTML entry point
├── style.css           # Styles including dark mode
├── omdb.js             # API fetch logic + higher-order functions
└── README.md
```

---

## 📄 License

This project was built for educational purposes.

---

<p align="center">Made with ☕ and JavaScript</p>