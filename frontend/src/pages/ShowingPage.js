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
      <MovieInfo showing={showing} />
    </div>
  );
};

export default ShowingPage;
