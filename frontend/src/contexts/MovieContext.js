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

    //for pagination
    const [pageTotal, setPageTotal] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)

    const countPageTotal = async (amountOfDoc) => {
        let pageTotal = Math.ceil(amountOfDoc / 9) //9 because we dont want more than 9 cards on the page
        setPageTotal(pageTotal)
    }


    useEffect(() => {
        getAllMovies();
        // eslint-disable-next-line
    }, []);

    useEffect(() => { // after we got showings, we take price from every showing and save it in the array "allPrices"
        let allPrices = [] // => [200, 150, 100, 100, 200, 200]
        if (showings) {
            showings.forEach((oneShowing) => {
                allPrices.push(oneShowing.price)
            })
            let uniquePriceOpt = [...new Set(allPrices)].sort((a, b) => a - b) //keep only unique values and sort them in falling ordning => [100, 150, 200]
            setPriceOptions(uniquePriceOpt) //after we have looped through all showings, we put unique prices to the state
        }
        // eslint-disable-next-line
    }, [showings]);

    useEffect(() => {//if some price was chosen, call function for filtrering 
        filterShowingsByPrice(chosenPrice)
        // eslint-disable-next-line
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

    // when search field and filter buttons are clicked (filter from filtermovies.js) and (finalSearch from Search.js), we fire getMovieBySearch function and injecting an argument as req.query
    useEffect(() => {
        getMovieBySearch(finalSearch, currentPage)
        // eslint-disable-next-line
    }, [filter, finalSearch, currentPage])

    const getAllMovies = async () => {
        let movies = await fetch(`/api/v1/movies`);
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
    
    const getMovieBySearch = async (finalSearch, page) => {
        console.log(`page`, page)
        let s = await fetch(`/api/v1/movies/filter/?search=${finalSearch}&page=${page}`, {
            method: "Post", 
            headers: {
                "content-type": "application/json",
                },
            body: JSON.stringify(filter)
        }); 
        s = await s.json(); 
        console.log(`s`, s)
        setFilteredSearch(s.movies); 
        console.log(`s.amount`, s.amount)
        countPageTotal(s.amount)

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
        setInputValue,
        pageTotal,
        currentPage,
        setCurrentPage
    }

    return (
        <MovieContext.Provider value={values}>
            {props.children}
        </MovieContext.Provider>
    )
}
export default MovieContextProvider