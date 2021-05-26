import { MovieContext } from "../contexts/MovieContext";
import { useContext, useState, useEffect } from "react";
import MovieCard from '../components/MovieCard'
import PaginationComponent from '../components/Pagination'


const AllMovies = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const [allMovies, setAllMovies] = useState(null);

    const { getAllMovies } = useContext(MovieContext);

    useEffect(()=> {
        const moviesGetting = async () => {
            let response = await getAllMovies(currentPage)
            setAllMovies(response)
        }
        moviesGetting()
    },[getAllMovies, currentPage])

    let content = ''

    let values = {
        activPage: currentPage,
        pageTotal: 10,
        setCurrentPage
    }

    if (allMovies) {
        content =
            <div>
                <div className='d-flex flex-wrap justify-content-center'>
                    {allMovies.map((movie, i) => (
                        <MovieCard key={i} movie={movie}/>
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