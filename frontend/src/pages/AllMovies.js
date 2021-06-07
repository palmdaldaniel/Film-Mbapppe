import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { MovieContext } from "../contexts/MovieContext";
import Search from "../components/Search";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import NotFound from "../components/Notfound";
import Pagination from '../components/Pagination'
import Filtermovies from '../components/Filtermovies'

const AllMovies = () => {
    const history = useHistory();
    const { filteredSearch, everyMovies, pageTotal, currentPage, setCurrentPage  } = useContext(MovieContext);


    useEffect(() => {
        if(filteredSearch && filteredSearch.length > 0) {
            console.log(`filteredSearch`, filteredSearch)
            
        }
    }, [filteredSearch])
    
    //This redirects to the movie info about the movie that is clicked
    const handleClick = (movie) => {
        history.push(`/movie-info/${movie._id}`);
    };

    let content = "";

    if (filteredSearch) {
        content = (
            (<div>
                
                    <div className="d-flex flex-wrap justify-content-center">
                        {/* here we take the results of filtered/searched movies and render them out to home page */}
                        {filteredSearch && filteredSearch.map((movie, i) => (
                            <div key={i} onClick={() => handleClick(movie)}>
                                <MovieCard key={i} movie={movie} />
                            </div>
                        ))}
                    </div>
                
            </div>)
        )
    } else {
        content = <div>Loading...</div>;
    }

    let paginationsValue = {
        activPage: currentPage,
        pageTotal: pageTotal,
        setCurrentPage: setCurrentPage
    }

    return (
        <>
            <div className="container mt-5">
                {/* everyMovies is a list of all movies that is being used here to make filter options list all genres, years, directors */}
                {everyMovies && <Filtermovies movies={everyMovies} />}
                <Search />
                {filteredSearch && filteredSearch.length > 0 ? (content) : <NotFound />}
            <Pagination values={paginationsValue}/>
        </div>
        </>
    );
};

export default AllMovies;