import { createContext, useState, useEffect } from "react"

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const [showings, setShowings] = useState(null);
    const [showing, setShowing] = useState(null); 
    const [filteredSearch, setFilteredSearch] = useState(null); 
    // const [filteredActor, setFilteredActor] = useState(null); 

    useEffect(() => {
        getShowingsByDate('2021-06-13');
        
    }, []);

    const countMovieDocuments = async () => {
        let amountOfDocuments = await fetch(`/api/v1/movies/countDocuments`);
        amountOfDocuments = await amountOfDocuments.json();
        return amountOfDocuments
    }

    const getAllMovies = async (page) => {
        let movies = await fetch(`/api/v1/movies?page=${page}`);
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
    
    const getMovieBySearch = async (search) => {
        let s = await fetch(`/api/v1/movies/?search=${search}`); 
        s = await s.json(); 
        console.log("results of searches", s);
        setFilteredSearch(s); 
        return;  
    }


    const values = {
        getAllMovies,
        getMovieById,
        showings,
        getShowingsById,
        showing, 
        getMovieBySearch,
        filteredSearch, 
    }

    return (
        <MovieContext.Provider value={values}>
            {props.children}
        </MovieContext.Provider>
    )
}
export default MovieContextProvider