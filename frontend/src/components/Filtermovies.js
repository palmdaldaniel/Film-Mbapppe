import { useEffect, useState, useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import styles from "../css/Filter.module.css";

const Filtermovies = ({ movies }) => {
  const { filter, setFilter, setInputValue, setFinalSearch, setCurrentPage } =
    useContext(MovieContext);
  const [genres, setGenres] = useState([]);
  const [years, setYears] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [runtimes, setRuntimes] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [languages, setLanguages] = useState([]);

  //values needed to set filters back to default in its "select" attribute
  const [genreValue, setGenreValue] = useState("");
  const [yearValue, setYearValue] = useState("");
  const [ratingValue, setRatingValue] = useState("");
  const [runtimeValue, setRuntimeValue] = useState("");
  const [directorValue, setDirectorValue] = useState("");
  const [languageValue, setLanguageValue] = useState("");

  useEffect(() => {
    // fire helperfunctions on pageload
    makeValues(movies);
  }, [movies]);

  //When user leaves page after filtering, all filter fields and filter result reset to default
  useEffect(() => {
    return()=> {
        setInputValue("");
        setFinalSearch("");
        setFilter({});
        setGenreValue("");
        setYearValue("");
        setRatingValue("");
        setRuntimeValue("");
        setDirectorValue("");
        setLanguageValue("");
    }
  }, [])

  const makeValues = (movies) => {
    // create values for label genre
    const genres = [...new Set(movies.map((value) => value.Genre).flat())]
    setGenres(genres.sort());

    //create values for label year
    const years = movies.map((value) => value.Year).sort((a, b) => a - b);
    setYears([...new Set(years)]);

    // create values for label rating
    const ratings = [...new Set(movies.map((value) => value.Rated))]
    setRatings(ratings.sort());

    // create values for runtime
    let runtime = [...new Set(movies.map((value) => parseInt(value.Runtime)))]
    runtime = runtime.filter(time => time).sort((a, b) => a - b);
    setRuntimes(runtime);

    // create values for Director
    const directors = [...new Set(movies.map((value) => value.Director))]
    setDirectors(directors.sort());

    // create values for Language
    const language = [...new Set(movies.map((value) => value.Language))]
    setLanguages(language.sort());
  };

  // collectFiltered is the main function that all handles use in order to create an object from the values of the selected fields
  // console.log(filter);
  const collectFiltered = (e) => {
    setCurrentPage(1)
    let f = {
      ...filter,
      [e.target.name]: e.target.value,
    };
    setFilter(f);
  }

  const handleGenreChange = (e) => {
    setGenreValue(e.target.value);
    collectFiltered(e)
  };

  const handleYearChange = (e) => {
    setYearValue(e.target.value);
    collectFiltered(e)
  };

  const handleRatingChange = (e) => {
    setRatingValue(e.target.value);
    collectFiltered(e)
  };

  const handleRuntimeChange = (e) => {
    setRuntimeValue(e.target.value);
    collectFiltered(e)
  };

  const handleDirectorChange = (e) => {
    setDirectorValue(e.target.value);
    collectFiltered(e)
  };

  const handleLanguageChange = (e) => {
    setLanguageValue(e.target.value);
    collectFiltered(e)
  };

  //When reset is clicked, this handle will put all variables back to its default state
  const handleReset = () => {
    setInputValue("");
    setFinalSearch("");
    setFilter({});
    setGenreValue("");
    setYearValue("");
    setRatingValue("");
    setRuntimeValue("");
    setDirectorValue("");
    setLanguageValue("");
  };

  return (
    <div className={styles.filterContainer}>
      {/* value={genreValue} is used together with reset to set buttons back to its default state */}
      <div className={styles.columnOne}>
        <select value={genreValue} onChange={handleGenreChange} name="Genre" required>
          <option value=""> Genre </option>
          {/* mapping through genres to automate the dropdown options */}
          {genres.map((genre) => (
            <option value={genre} key={genre}>
              {genre}
            </option>
          ))}
        </select>

        <select value={yearValue} onChange={handleYearChange} name="Year" required>
          <option value=""> Year </option>
          {years.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>

        <select value={ratingValue} onChange={handleRatingChange} name="Rating" required>
          <option value=""> Rating </option>
          {ratings.map((rating) => (
            <option value={rating} key={rating}>
              {rating}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.columnTwo}>
        <select value={runtimeValue} onChange={handleRuntimeChange} name="Runtime" required>
          <option value=""> Runtime </option>
          {runtimes.map((runtime) => (
            <option value={runtime} key={runtime}>
              {`${runtime} min`}
            </option>
          ))}
        </select>

        <select value={directorValue} onChange={handleDirectorChange} name="Director" required>
          <option value=""> Director </option>
          {directors.map((director) => (
            <option value={director} key={director}>
              {director}
            </option>
          ))}
        </select>

        <select value={languageValue} onChange={handleLanguageChange} name="Language" required>
          <option value=""> Language </option>
          {languages.map((language) => (
            <option value={language} key={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
      <button className={styles.resetButton} onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Filtermovies;