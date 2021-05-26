import { useContext, useEffect } from "react";

import MovieInfo from "../components/MovieInfo";
import { MovieContext } from "../contexts/MovieContext";

const ShowingPage = (props) => {
  const { showingId } = props.match.params;

  const { getShowingsById, showing } = useContext(MovieContext);

  useEffect(() => {
    getShowingsById(showingId);
  }, []);

  return (
    <div>
      <MovieInfo showing={showing} />
    </div>
  );
};

export default ShowingPage;
