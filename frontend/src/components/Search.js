import { useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import styles from "../css/Search.module.css";

const Search = () => {
  const { setFinalSearch, inputValue, setInputValue } = useContext(MovieContext);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    //retrieve what the user is typing in and turning it into a variable
    setSearch(e.target.value);
    //setInputValue is used together with reset to change value back to default state
    setInputValue(e.target.value); 
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    //when submit is clicked, search variable is sent as finalSearch in MovieContext to be used with getMovieBySearch function
    setFinalSearch(search);
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
    </div>
  );
};

export default Search;
