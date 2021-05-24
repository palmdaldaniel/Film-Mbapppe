import { createContext, useState, useEffect } from "react"

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const [showings, setShowing] = useState(null);

    useEffect(() => {
        getShowingsByDate('2021-06-13')
        
    }, []);

    const getAllMovies = async () => {
        let movies = await fetch(`/api/v1/movies`);
        movies = await movies.json();
        return movies
    }
    
    const getMovieById = async (movieId) => {
        let movie = await fetch(`/api/v1/movies/${movieId}`);
        movie = await movie.json();
        return movie
    }

    const getShowingsByDate = async (date) => {
        let showings = await fetch(`/api/v1/showings/?date=${date}`); //required date format 2021-06-13
        showings = await showings.json();
        setShowing(showings)
    }
    const getShowingsById = async (showingId) => {
        let showing = await fetch(`/api/v1/showings/${showingId}`);
        showing = await showing.json();
        return showing
    }
    


    const values = {
        getAllMovies,
        getMovieById,
        showings,
        getShowingsById
    }

    return (
        <MovieContext.Provider value={values}>
            {props.children}
        </MovieContext.Provider>
    )
}
export default MovieContextProvider