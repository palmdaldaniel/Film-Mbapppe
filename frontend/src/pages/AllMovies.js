import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MovieContext } from "../contexts/MovieContext";
import Search from "../components/Search";
import MovieCard from "../components/MovieCard";
import Filtermovies2 from "../components/Filtermovies2";
import NotFound from "../components/Notfound";

const AllMovies = () => {
    const history = useHistory();
    const { filteredSearch, everyMovies, getMovieBySearch } = useContext(MovieContext);

    useEffect(() => {
        getMovieBySearch(); 
    }, [])

    //This redirects to the movie info about the movie that is clicked
    const handleClick = (movie) => {
        history.push(`/movie-info/${movie._id}`);
    };

    let content = "";

    if (filteredSearch) {
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
        )
    } else {
        content = <div>Loading...</div>;
    }

    return (
        <>
            <div className="container mt-5">
                {/* everyMovies is a list of all movies that is being used here to make filter options list all genres, years, directors */}

                {/* {everyMovies && <Filtermovies movies={everyMovies} />} */}
                <Filtermovies2 />
                <Search />
                {content}
            </div>
        </>
    );
};

export default AllMovies;