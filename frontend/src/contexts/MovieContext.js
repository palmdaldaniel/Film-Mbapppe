import { createContext, useState, useEffect } from "react"

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const [showings, setShowings] = useState(null);
    const [showing, setShowing] = useState(null); 
    const [filteredSearch, setFilteredSearch] = useState(null); 
    const [filter, setFilter] = useState({}); //used in Filtermovie.js
    const [finalSearch, setFinalSearch] = useState("") //used in Search.js
    const [everyMovies, setEveryMovies] = useState(null); 
    

    useEffect(() => {
        getShowingsByDate('2021-06-13');
    }, []);

    useEffect(() => {
        getMovieBySearch(finalSearch)
    }, [filter, finalSearch])

    const countMovieDocuments = async () => {
        let amountOfDocuments = await fetch(`/api/v1/movies/countDocuments`);
        amountOfDocuments = await amountOfDocuments.json();
        return amountOfDocuments
    }

    const getAllMovies = async (page) => {
        let movies = await fetch(`/api/v1/movies?page=${page}`);
        movies = await movies.json();
        setEveryMovies(movies); 
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
    
    const getMovieBySearch = async (finalSearch) => {
        let s = await fetch(`/api/v1/movies/filter/?search=${finalSearch}`, {
            method: "Post", 
            headers: {
                "content-type": "application/json",
                },
            body: JSON.stringify(filter)
        }); 
        s = await s.json(); 
        console.log("results of searches", s);
        setFilteredSearch(s); 
    }


    const values = {
        getAllMovies,
        getMovieById,
        showings,
        getShowingsById,
        showing, 
        getMovieBySearch,
        filteredSearch, 
        countMovieDocuments,
        filter, 
        setFilter, 
        setFinalSearch, 
        setEveryMovies,
        everyMovies
    }

    return (
        <MovieContext.Provider value={values}>
            {props.children}
        </MovieContext.Provider>
    )
}
export default MovieContextProvider