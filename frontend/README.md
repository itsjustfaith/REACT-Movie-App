# Movie4U

Movie4U is a small React app built with Vite that lets users search for movies and save favorites using the OMDB API.

## Features

- Search movies by title
- Load popular movies automatically on page load
- Add and remove favorite movies
- Persist favorites locally in the browser using `localStorage`
- Navigate between Home and Favorites pages with React Router

## Tech stack

- React 19
- Vite
- React Router DOM
- JavaScript (ES Modules)
- OMDB API for movie data
- CSS modules for component styling

## Setup

1. Install dependencies:

```bash
cd frontend
npm install
```

2. Create a `.env` file inside `frontend/`:

```env
VITE_OMDB_API_KEY=your_omdb_api_key_here
```

3. Run the app in development mode:

```bash
npm run dev
```

4. Open the local URL shown by Vite in your browser.

## Code overview

### `src/App.jsx`

- Wraps the app in `MovieProvider` so favorites state is available across the app
- Renders the `Navbar`
- Defines routes for `/` (Home) and `/favorites`

### `src/contexts/MovieContext.jsx`

- Creates a React context for favorite movies
- Manages `favorites` state with `useState`
- Loads favorites from `localStorage` on first render
- Saves favorites to `localStorage` whenever they change
- Provides helper functions:
  - `addToFavMovies(movie)`
  - `removeFromFavMovies(movieId)`
  - `isFavMovies(movieId)`

### `src/pages/Home.jsx`

- Loads popular movies on mount with `useEffect`
- Stores search input, movie list, loading state, and error state
- Uses `searchMovies` and `getPopularMovies` from `src/services/api.js`
- Renders `MovieCard` components for each movie result

### `src/pages/Favorites.jsx`

- Reads `favorites` from `MovieContext`
- Displays the user's saved favorite movies
- If no favorites exist, shows an empty state message

### `src/components/MovieCard.jsx`

- Displays a movie poster, title, year, and favorite button
- Uses context functions to toggle favorites
- Adds or removes movie objects from favorites state

### `src/components/Navbar.jsx`

- Provides navigation links to Home and Favorites pages
- Uses React Router's `Link` component

### `src/services/api.js`

- Fetches movie data from the OMDB API
- `getPopularMovies()` searches a broad movie query for the current year
- `searchMovies(query)` searches movies by text query

## Useful commands

```bash
npm run dev
npm run build
npm run preview
```
