import { useEffect, useState, useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import styles from "../css/Filter.module.css";

const FIltermovies2 = () => {
  const { filter, setFilter, setInputValue, setFinalSearch, everyMovies, getAllMovies } =
    useContext(MovieContext);


    const collectFiltered = (e) => {
      let f = {
        ...filter,
        [e.target.name]: e.target.value,
      };
      setFilter(f);
    }
  
    const handleGenreChange = (e) => {
      // setGenreValue(e.target.value);
      collectFiltered(e)
    };

    const handleReset = () => {
      setInputValue("");
      setFinalSearch("");
      setFilter({});
      // setGenreValue("");
    };

  return (
    <div className={styles.filterContainer}>
    {/* value={genreValue} is used together with reset to set buttons back to its default state */}
    <div className={styles.columnOne}>
     <select onChange={handleGenreChange} name="Genre" required>
      <option value=""> Genre </option>
      {/* mapping through genres to automate the dropdown options */}
      
        <option value="comedy" > comedy </option>
        <option value="action" > action </option>
        <option value="family" > family </option>
      
    </select>

    </div>
    <button className={styles.resetButton} onClick={handleReset}>Reset</button>
    </div>
  );
}
 
export default FIltermovies2;