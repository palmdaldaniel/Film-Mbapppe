import { useEffect, useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import styles from "../css/Search.module.css";

const Search = () => {
  const { setFinalSearch, setFilter } = useContext(MovieContext);
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setInputValue(e.target.value); 
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setFinalSearch(search);
  };

  const handleReset = () => {
    setInputValue("");
    setFinalSearch("");
    setFilter({});
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          value={inputValue}
          placeholder="Search for movies or actors"
          onChange={(e) => handleSearch(e)}
        />
      </form>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default Search;
