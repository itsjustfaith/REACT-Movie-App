import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import './Home.css'
import { searchMovies, getPopularMovies } from "../services/api"



export default function Home() {

    const [searchQuery, setSearchQuery] = useState("")
    //will store the text in the input field


    const [movies, setMovies] = useState([]);
    //store movies in a state , so anytime we update the movies list
    // it re-renders

    const [error, setError] = useState(null)
    //to store any errors so we can handle them

    const [loading, setLoading] = useState(true)
    //one to store the data in a loading state
    //we set to true because it loads automatically
    //after it will turn to false in useEffect so it stops loading


    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err) // to see errors in console and fix them 
                setError("Failed to load movies...")
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])
    //[x]--> if function/state x changes it will run the useEffect functions again

    //render movies dynamically
    //{ id: 1, title: "John Wick", release_date: "2020" },
    //{ id: 2, title: "Keeping up with the Kardashians", release_date: "2007" },
    //{ id: 3, title: "Annie", release_date: "2010" },
    //{ id: 4, title: "Terminator", release_date: "1999" },



    const handleSearch = async (e) => {
        //to remove default of <button> changes of clearing 
        //what is in the search input we can use e.preventDefault
        e.preventDefault();

        //makes sure user is searching and its not empty string
        if (!searchQuery.trim())
            return
        if (loading) return // this wont allow user to search again 
        //if th euser is already searching for something

        setLoading(true)

        try {

            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search movie..")
        }
        finally {
            setLoading(false)
        };
        setSearchQuery("")
    }


    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    //onChange updates the setSearchQuery state
                    type="text"
                    placeholder="Search for a movie"
                    className="search-input" />
                <button type="submit" className="search-button">Search</button>
            </form>


            {error && <div className="error-message">{error} </div>}


            {loading ? (<div className="loading"> Loading....</div>
            ) : (
                <div className="movies-grid">

                    {movies?.map((movie) => (
                        //"?" is used for optional chaining to make sure .map is called for only an array
                        //use state only if beginnning of the movie title
                        //begins with the search text
                        // Convert both to lowercase to ignore casing
                        // movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) &&
                        <MovieCard movie={movie} key={movie.imdbID} />))}
                </div>
            )}

        </div>
    )
}
