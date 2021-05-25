import { useContext, useEffect } from "react";

import MovieInfo from "../components/MovieInfoOnShowingPage"
import { MovieContext } from "../contexts/MovieContext";

const ShowingPage = (props) => {
  const { showingId } = props.match.params;

  const { getShowingsById, getMovieById, showing } = useContext(MovieContext);

  useEffect(() => {
    getShowingsById(showingId);
  }, []);

  console.log(showing);

  return (
    <div>
      <h1>Showing page with movie info</h1>
      <h2>booking and seating chart to follow</h2>
      <MovieInfo showing={showing} />
    </div>
  );
};

export default ShowingPage;
