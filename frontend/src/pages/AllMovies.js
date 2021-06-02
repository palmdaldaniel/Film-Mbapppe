import { MovieContext } from "../contexts/MovieContext";
import { useContext, useEffect } from "react";
import Search from "../components/Search";
import MovieCard from "../components/MovieCard";
import { useHistory } from "react-router-dom";
import Filtermovies from "../components/Filtermovies";
import Notfound from "../components/Notfound";


const AllMovies = () => {
    const history = useHistory();
    const { getAllMovies, filteredSearch, everyMovies } = useContext(MovieContext);

    useEffect(() => {
        getAllMovies();
    }, []); 

    const handleClick = (movie) => {
        history.push(`/movie-info/${movie._id}`);
    };

    let content = "";

    if (everyMovies) {
        
        content = ( 

  
               
        (<div>
            <div className="d-flex flex-wrap justify-content-center">
            {filteredSearch && filteredSearch.map((movie, i) => (
                <div key={i} onClick={() => handleClick(movie)}>
                <MovieCard key={i} movie={movie} />
                </div>
            ))}
        
            </div>
        </div>)
        

        )} else {
        content = <div>Loading...</div>;
    }

    return (
        <>
        <div className="container mt-5">
            {everyMovies && <Filtermovies movies={everyMovies} />}
            <Search />
            {content} 
   
            {AllMovies.length === 0 ? <Notfound/> : AllMovies.map((movie)=> 
            (<MovieCard key={movie._id} movie={movie} />
            ))}
            
        </div>
        </>
    );
};

export default AllMovies;