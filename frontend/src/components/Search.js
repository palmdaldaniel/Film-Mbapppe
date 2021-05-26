import { useEffect, useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import styles from "../css/Search.module.css";

const Search = () => {
  const { getAllMovies } = useContext(MovieContext);
  useEffect(() => {
    getAllMovies();
  }, []);

  const handleSearch = (e) => {
    console.log(e.target.value);
  }

  return (
    <div>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search for movies or actors"
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
};

export default Search;
