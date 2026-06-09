import './Favorites.css'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

export default function Favorites() {

    const { favorites } = useMovieContext();

    if (favorites) {
        return (
            <div className='favorites'>
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                    {favorites?.map((movie) => (
                        //"?" is used for optional chaining to make sure .map is called for only an array



                        //use state only if beginnning of the movie title
                        //begins with the search text
                        // Convert both to lowercase to ignore casing
                        // movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) &&
                        <MovieCard movie={movie} key={movie.imdbID} />))}
                </div>
            </div>
        );
    }
    return (
        <>
            <title>Favorites</title>

            <div className='favorites-empty'>
                <h2>No Favorites Movies Yet </h2>
                <p> Start adding movies to your favorites and they will appear here</p>
            </div>
        </>
    )
}
