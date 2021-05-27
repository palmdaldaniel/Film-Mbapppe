import { MovieContext } from "../contexts/MovieContext";
import { useContext, useState, useEffect } from "react";
import MovieCard from '../components/MovieCard'
import PaginationComponent from '../components/Pagination'


import { useHistory } from "react-router-dom";
const AllMovies = () => {
    const { getAllMovies, countMovieDocuments } = useContext(MovieContext);
    const history = useHistory();

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
    useEffect(() => {
        const moviesGetting = async () => {
            let response = await getAllMovies()
            setAllMovies(response)
        }
        moviesGetting()
    }, [getAllMovies])

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
            <div className='d-flex flex-wrap justify-content-center'>
                {allMovies.map((movie, i) => (
                    <div onClick={()=>handleClick(movie)}>
                        <MovieCard key={i} movie={movie} />
                    </div>
                ))}
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