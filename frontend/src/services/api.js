const API_KEY=import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "http://www.omdbapi.com/";

export const getPopularMovies = async ()=>{
// We search for a broad term (like 'movie') and filter by the current year
    const currentYear = new Date().getFullYear(); 
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=movie&y=${currentYear}`);  
    const data = await response.json()
    return data.Search
}


export const searchMovies = async (query)=>{
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(
        query
    )}`);
    const data = await response.json()
    return data.Search
}