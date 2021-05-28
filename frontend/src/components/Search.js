import { useEffect, useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import styles from "../css/Search.module.css";

const Search = () => {
  const { setFinalSearch } = useContext(MovieContext);
  const [search, setSearch] = useState("")

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setFinalSearch(search)
  };

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
