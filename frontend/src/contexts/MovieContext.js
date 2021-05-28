import { createContext, useState, useEffect } from "react"

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const [showings, setShowings] = useState(null);
    const [showing, setShowing] = useState(null); 
    const [chosenDate, setChosenDate] = useState(new Date()); //format Thu May 27 2021 09:52:34 GMT+0200 (Central European Summer Time)

    const dateToString = (date) => {
        let stringDate = [
            date.getFullYear(),
            ('0' + (date.getMonth() + 1)).slice(-2), // to delete 0 before 10,11,12. 
            ('0' + date.getDate()).slice(-2)]
            .join('-');
        return stringDate // convert date format to '2021-05-21'
    }

    useEffect(() => {
        getShowingsByDate(dateToString(chosenDate));
    }, [chosenDate]);

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
    


    const values = {
        getAllMovies,
        getMovieById,
        showings,
        getShowingsById,
        showing,
        chosenDate,
        setChosenDate,
        countMovieDocuments
    }

    return (
        <MovieContext.Provider value={values}>
            {props.children}
        </MovieContext.Provider>
    )
}
export default MovieContextProvider