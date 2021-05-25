import { useContext, useEffect } from "react";

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
      <p>booking and seating chart to follow</p>
    </div>
  );
};

export default ShowingPage;
