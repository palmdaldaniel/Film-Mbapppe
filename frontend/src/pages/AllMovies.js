import { MovieContext } from "../contexts/MovieContext";
import { useContext, useState, useEffect } from "react";
import MovieCard from '../components/MovieCard'
import PaginationComponent from '../components/Pagination'
import { useHistory } from "react-router-dom";
import Filtermovies from "../components/Filtermovies";

const AllMovies = () => {
    const history = useHistory();
    const { getAllMovies, countMovieDocuments } = useContext(MovieContext);

    const [allMovies, setAllMovies] = useState(null);

    const moviesGetting = async () => {
        let response = await getAllMovies(currentPage)
        setAllMovies(response)
    }

    //for pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [pageTotal, setPageTotal] = useState(null)

    const countPageTotal = async () => {
        let response = await countMovieDocuments()
        let pageTotal = Math.ceil(response / 9)
        setPageTotal(pageTotal)
    }

    useEffect(() => {
        moviesGetting()
        countPageTotal()
    }, [getAllMovies, currentPage, countMovieDocuments])

    const handleClick = (movie) => {
        history.push(`/movie-info/${movie._id}`);
    };

    let content = ''
    
    let values = {
        activPage: currentPage,
        pageTotal: pageTotal,
        setCurrentPage
    }


    if (allMovies) {
        content =
            <div>
                <Filtermovies movies={allMovies} />
                <div className='d-flex flex-wrap justify-content-center'>
                    {allMovies.map((movie, i) => (
                        <div onClick={() => handleClick(movie)}>
                            <MovieCard key={i} movie={movie} />
                        </div>
                    ))}
                </div>
                <PaginationComponent values={values} />
            </div>
    }
    else {
        content = <div>Loading...</div>
    }

    return (
        <div className='container mt-5' >
            {content}
        </div>
    );
};

export default AllMovies;

