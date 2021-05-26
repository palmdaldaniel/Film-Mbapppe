import { MovieContext } from "../contexts/MovieContext";
import { useContext, useState, useEffect } from "react";
import MovieCard from '../components/MovieCard'

const AllMovies = () => {

    const [allMovies, setAllMovies] = useState(null);

    const { getAllMovies } = useContext(MovieContext);

    useEffect(()=> {
        const moviesGetting = async () => {
            let response = await getAllMovies()
            setAllMovies(response)
        }
        moviesGetting()
    },[getAllMovies])

    let content = ''

    if (allMovies) {
        content =
            <div className='d-flex flex-wrap justify-content-center'>
                {allMovies.map((movie, i) => (
                    <MovieCard key={i} movie={movie}/>
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