const API_KEY = '46c6fcc8';
const BASE_URL = 'https://www.omdbapi.com/';

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

// fetchMovieByIdOrTitle({ id: 'tt1285016' })
// fetchMovieByIdOrTitle({ title: 'Inception', plot: 'full' })
// fetchMoviesBySearch({ query: 'Batman', page: 2 })