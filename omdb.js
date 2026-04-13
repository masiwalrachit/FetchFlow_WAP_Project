const API_KEY = '46c6fcc8';
const BASE_URL = 'https://www.omdbapi.com/';

let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

async function fetchMovieByIdOrTitle({ id, title, type, year, plot = 'short' }) {
    if (!id && !title) {
        throw new Error('At least one of id or title is required');
    }

    const params = new URLSearchParams({
        apikey: API_KEY,
        r: 'json',
        plot
    });

    if (id) params.append('i', id);
    if (title) params.append('t', title);
    if (type) params.append('type', type);
    if (year) params.append('y', year);

    const response = await fetch(`${BASE_URL}?${params.toString()}`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}

async function fetchMoviesBySearch({ query, type, year, page = 1 }) {
    if (!query) {
        throw new Error('Search query is required');
    }

    const params = new URLSearchParams({
        apikey: API_KEY,
        s: query,
        r: 'json',
        page
    });

    if (type) params.append('type', type);
    if (year) params.append('y', year);

    const response = await fetch(`${BASE_URL}?${params.toString()}`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}

function filterMovies(movies, criteria) {
    return movies.filter(movie => {
        const matchesType = !criteria.type || movie.Type === criteria.type;
        const matchesYear = !criteria.year || (movie.Year && movie.Year.startsWith(criteria.year));
        return matchesType && matchesYear;
    });
}

function sortMovies(movies, sortBy) {
    return [...movies].sort((a, b) => {
        if (sortBy === 'title-asc') return a.Title.localeCompare(b.Title);
        if (sortBy === 'title-desc') return b.Title.localeCompare(a.Title);
        if (sortBy === 'year-desc') return (b.Year || '').localeCompare(a.Year || '');
        if (sortBy === 'year-asc') return (a.Year || '').localeCompare(b.Year || '');
        if (sortBy === 'rating-desc') {
            const ratingA = parseFloat(a.imdbRating) || 0;
            const ratingB = parseFloat(b.imdbRating) || 0;
            return ratingB - ratingA;
        }
        return 0;
    });
}

function searchMovies(movies, query) {
    if (!query) return movies;
    const lowerQuery = query.toLowerCase();
    return movies.filter(movie => 
        movie.Title.toLowerCase().includes(lowerQuery)
    );
}

function toggleFavorite(movie) {
    const exists = favorites.find(f => f.imdbID === movie.imdbID);
    if (exists) {
        favorites = favorites.filter(f => f.imdbID !== movie.imdbID);
    } else {
        favorites.push(movie);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function isFavorite(movieId) {
    return favorites.some(f => f.imdbID === movieId);
}

function getFavorites() {
    return favorites;
}