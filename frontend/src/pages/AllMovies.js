import { MovieContext } from "../contexts/MovieContext";
import { useContext } from "react";
import Search from "../components/Search";
import MovieCard from "../components/MovieCard";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Filtermovies from "../components/Filtermovies";
import NotFound from "../components/Notfound";
import Pagination from '../components/Pagination'

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

    if (everyMovies) {
        content = ( 
        (<div>
            {filteredSearch && filteredSearch.length === 0 ? <NotFound /> :
            <div className="d-flex flex-wrap justify-content-center">
            {/* here we take the results of filtered/searched movies and render them out to home page */}
            {filteredSearch && filteredSearch.map((movie, i) => (
                <div key={i} onClick={() => handleClick(movie)}>
                <MovieCard key={i} movie={movie} />
                </div>
            ))}
            </div>
            }
        </div>)
        

        )} else {
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

            {content}
            <Pagination values={paginationsValue}/>
        </div>
        </>
    );
};

export default AllMovies;