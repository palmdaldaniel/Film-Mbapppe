import { MovieContext } from "../contexts/MovieContext";
import { useContext, useState, useEffect } from "react";
import MovieCard from '../components/MovieCard'
import PaginationComponent from '../components/Pagination'


const AllMovies = () => {
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

    let content = ''

    let values = {
        activPage: currentPage,
        pageTotal: pageTotal,
        setCurrentPage
    }

    if (allMovies) {
        content =
            <div>
                <div className='d-flex flex-wrap justify-content-center'>
                    {allMovies.map((movie, i) => (
                        <MovieCard key={i} movie={movie} />
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