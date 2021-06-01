import MovieInfo from "../components/MovieInfo";
import { MovieContext } from "../contexts/MovieContext";
import { useContext, useState, useEffect } from "react";

const MovieInfoPage = (props) => {
  const { movieId } = props.match.params;
  const { getMovieById } = useContext(MovieContext);
  const [fetchedMovie, setFetchedMovie] = useState(null)

  useEffect(() => {

    const movieGetting = async () => {
      let result = await getMovieById(movieId)
      setFetchedMovie(result)
    }
    movieGetting()
  }, [movieId, getMovieById]);

  return (
    <div>
      <MovieInfo movie={fetchedMovie} />
    </div>
  );
};

export default MovieInfoPage;
