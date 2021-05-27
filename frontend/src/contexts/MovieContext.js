import { createContext, useState, useEffect } from "react"

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const [showings, setShowings] = useState(null);
    const [showing, setShowing] = useState(null); 
    const [filteredMovie, setFilteredMovie] = useState(null); 
    const [filteredActor, setFilteredActor] = useState(null); 

    useEffect(() => {
        getShowingsByDate('2021-06-13');
        
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
        setShowings(showings)
    }
    const getShowingsById = async (showingId) => {
        let showing = await fetch(`/api/v1/showings/${showingId}`);
        showing = await showing.json();
        // return showing
        setShowing(showing); 
    }
    
    const getMovieByTitle = async (title) => {
        let t = await fetch(`/api/v1/movies/?title=${title}`); 
        t = await t.json(); 
        console.log("title", t);
        setFilteredMovie(t); 
        return;  
    }

    const getMovieByActor = async (actor) => {
        let a = await fetch(`/api/v1/movies/?actor=${actor}`); 
        a = await a.json(); 
        console.log("actor", a);
        return a; 
    }


    const values = {
        getAllMovies,
        getMovieById,
        showings,
        getShowingsById,
        showing, 
        getMovieByTitle,
        filteredMovie, 
        getMovieByActor, 
        filteredActor
    }

    return (
        <MovieContext.Provider value={values}>
            {props.children}
        </MovieContext.Provider>
    )
}
export default MovieContextProvider