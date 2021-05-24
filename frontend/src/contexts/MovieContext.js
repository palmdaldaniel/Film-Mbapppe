import { createContext, useState, useEffect } from "react"

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    

    const getAllMovies = async (req, res) => {
        let movies = await fetch(`/api/v1/movies`);
        movies = await movies.json();
        return movies
    }
    


    const values = {
        getAllMovies

    }

    return (
        <MovieContext.Provider value={values}>
            {props.children}
        </MovieContext.Provider>
    )
}
export default MovieContextProvider