import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext()


export const useMovieContext = () => useContext(MovieContext)



//MovieProvider --> it will provide states to any of the components 
//that are wrapped inside of it 
//these components will get access to any functions or hooks 


//children --> is a reserved prop when you write a component and 
//children is anything that's inside of the component that you rendered
// eg: APP is the Child for BrowserRouter

export const MovieProvider = ({ children }) => {

    const [favorites, setFavorites] = useState([]);

    //local storage allows us to store things directly inside our browser

    useEffect(() => {
        const storedFavMovies = localStorage.getItem("favorites")
        //key favorites in our local storage to see if any is inside
        // store all our favs movies into a list 
        //then its converted into strings 
        if (storedFavMovies) setFavorites(JSON.parse(storedFavMovies))
        //"JSON.Parse" ---> will turn the strings into an array 
    }, [])


    useEffect(() => {
        //any time the favorites set changes, 
        //we set a key in local storage 
        //we then convert the array into a string
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])


    const addToFavMovies = (movie) => {
        setFavorites(prev => [...prev, movie])
        // take the current prev favs , then add the new movie
    }

    const removeFromFavMovies = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.imdbID !== movieId))
        // take the current prev favs , then remove the new movie 
        //according to the one we want to remocve, and update the favs list

    }


    const isFavMovies = (movieId) => {
        return favorites.some(movie => movie.imdbID === movieId)
        //checks all the movies id 
        //sees if its equal to the moviesid we are looking 
        //if yes it returns true
    }


    const value = {
        favorites, addToFavMovies, removeFromFavMovies, isFavMovies
    }

    // anything inside of value below
    //  can access any of the functions listed in the value above



    return < MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}
