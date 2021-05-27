import { useEffect, useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import styles from "../css/Search.module.css";

const Search = () => {
  const {
    getAllMovies,
    getMovieByTitle,
    filteredMovie,
    getMovieByActor,
    filteredActor,
  } = useContext(MovieContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllMovies();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    getMovieByTitle(search);
    getMovieByActor(search);
  };

  // console.log("filteredMovie", filteredMovie);
  // console.log("filteredActor", filteredActor);

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search for movies or actors"
          onChange={(e) => handleSearch(e)}
        />
      </form>
    </div>
  );
};

export default Search;
