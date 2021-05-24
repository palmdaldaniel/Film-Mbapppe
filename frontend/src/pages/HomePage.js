import { MovieContext } from "../contexts/MovieContext";
import { useContext, useState, useEffect } from "react";


const HomePage = () => {
    const [movies, setMovies] = useState(null);
    const { getAllMovies } = useContext(MovieContext);

    useEffect(() => {
        getAllMovies()
            .then(result => {
                setMovies(result)
            })
            .catch(err => console.log(`Some error here`, err))
    }, getAllMovies)

    useEffect(() => {

    }, [movies])

    let content = ''

    if (movies) {
        content =
            <div >
                <h2>These Movie's titles are here for testing purpose</h2>
                {movies.map((movie, i) => (
                    <p key={i}>
                        {movie.Title}

                    </p>
                ))}
            </div>


    } else {
        content = <div>Loading...</div>
    }

    return (
        <div className="container">
            <h1>Home page</h1>
            {content}
        </div>
    );
};

export default HomePage;