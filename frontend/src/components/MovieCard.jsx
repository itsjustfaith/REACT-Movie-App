import './MovieCard.css'
import { useMovieContext } from '../contexts/MovieContext'

export default function MovieCard({ movie }) {

    const { addToFavMovies, removeFromFavMovies, isFavMovies } = useMovieContext()
    //gives me access from the Context hook
    //updates changes globally

    const favorite = isFavMovies(movie.imdbID)

    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavMovies(movie.imdbID)
        else addToFavMovies(movie)
    }



    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.Poster} alt={movie.Title} />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active " : ""} `} onClick={onFavoriteClick}>
                        ♥
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.Title}</h3>

                <p>{movie.Year}</p>
            </div>

        </div>
    )
}
