import { createContext, useState, useEffect } from "react"

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const [showings, setShowings] = useState(null);
    const [showing, setShowing] = useState(null); 
    const [filteredSearch, setFilteredSearch] = useState(null); 
    const [filter, setFilter] = useState({}); //used in Filtermovie.js
    const [finalSearch, setFinalSearch] = useState("") //used in Search.js
    const [everyMovies, setEveryMovies] = useState(null); 
    const [chosenDate, setChosenDate] = useState(new Date()); //format Thu May 27 2021 09:52:34 GMT+0200 (Central European Summer Time)

    //for Price filter
    const [priceOptions, setPriceOptions] = useState(null); // format [100, 150, 200]
    const [chosenPrice, setChosenPrice] = useState(null); //format 100
    const [filteredShowings, setFilteredShowings] = useState(null);
    const [inputValue, setInputValue] = useState("");


    useEffect(() => { // after we got showings, we take price from every showing and save it in the array "allPrices"
        let allPrices = [] // => [200, 150, 100, 100, 200, 200]
        if (showings) {
            showings.forEach((oneShowing) => {
                allPrices.push(oneShowing.price)
            })
            let uniquePriceOpt = [... new Set(allPrices)].sort((a, b) => a - b) //keep only unique values and sort them in falling ordning => [100, 150, 200]
            setPriceOptions(uniquePriceOpt) //after we have looped through all showings, we put unique prices to the state
        }
    }, [showings]);

    useEffect(() => {//if some price was chosen, call function for filtrering 
        filterShowingsByPrice(chosenPrice)
    }, [chosenPrice]);

    const filterShowingsByPrice = (price) => {//filtering by price happens here, on frontend
        if (showings) {
            let filtered = showings.filter(oneShowing => oneShowing.price === price)
            setFilteredShowings(filtered)//put result with filtered showings to the state
        }
    }


    //for converting date to string
    const dateToString = (date) => {
        let stringDate = [
            date.getFullYear(),
            ('0' + (date.getMonth() + 1)).slice(-2), // to delete 0 before 10,11,12. 
            ('0' + date.getDate()).slice(-2)]
            .join('-');
        return stringDate // convert date format to '2021-05-21'
    }

    useEffect(() => {
        setChosenPrice(null)
        getShowingsByDate(dateToString(chosenDate));
    }, [chosenDate]);

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
        let showings = await fetch(`/api/v1/showings/?date=${date}`);
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
        filter, 
        setFilter, 
        setFinalSearch, 
        setEveryMovies,
        everyMovies,
        chosenDate,
        setChosenDate,
        setChosenPrice,
        priceOptions,
        filteredShowings,
        inputValue, 
        setInputValue
    }

    return (
        <MovieContext.Provider value={values}>
            {props.children}
        </MovieContext.Provider>
    )
}
export default MovieContextProvider