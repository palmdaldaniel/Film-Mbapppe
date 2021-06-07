import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { MovieContext } from "../contexts/MovieContext";
import Search from "../components/Search";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import NotFound from "../components/Notfound";
import Pagination from '../components/Pagination'
import Filtermovies from '../components/Filtermovies'
import ArrowToTop from "../components/ScrollToTop.jsx"

const AllMovies = () => {
    const history = useHistory();
    const { filteredSearch, everyMovies, pageTotal, currentPage, setCurrentPage  } = useContext(MovieContext);
    
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
                {everyMovies && <Filtermovies movies={everyMovies} />}
                <Search />
                {filteredSearch && filteredSearch.length > 0 ? (content) : <NotFound />}
                {filteredSearch && filteredSearch.length > 3 ? <ArrowToTop /> : ""}
            <Pagination values={paginationsValue}/>
        </div>
        </>
    );
};

export default AllMovies;