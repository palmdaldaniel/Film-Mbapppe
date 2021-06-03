import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { MovieContext } from "../contexts/MovieContext";
import Search from "../components/Search";
import MovieCard from "../components/MovieCard";
import Filtermovies from "../components/Filtermovies";
import NotFound from "../components/Notfound";
import Arrow from "../components/ScrollToTop"

const AllMovies = () => {
    const history = useHistory();
    const { filteredSearch, everyMovies } = useContext(MovieContext);

    //This redirects to the movie info about the movie that is clicked
    const handleClick = (movie) => {
        history.push(`/movie-info/${movie._id}`);
    };

    let content = "";

    if (everyMovies) {
        content = ( 
        (<div>
            {filteredSearch.length === 0 ? <NotFound /> :
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

    return (
        <>
        <div className="container mt-5">
            {/* everyMovies is a list of all movies that is being used here to make filter options list all genres, years, directors */}
            {everyMovies && <Filtermovies movies={everyMovies} />}
            <Search />
            {content}
            {filteredSearch.length > 3 ? <Arrow /> : ""}
        </div>
        </>
    );
};

export default AllMovies;