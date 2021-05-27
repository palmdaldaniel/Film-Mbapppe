import { useEffect, useState } from "react";


const Filtermovies = ({ movies }) => {
  const [labels, setLabels] = useState([]);
  const [genres, setGenres] = useState([]);
  const [years, setYears] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [runtimes, setRuntimes] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [filter, setFilter] = useState([])
  console.log(filter);
  

  useEffect(() => {
    // fire helperfunctions on pageload
    makeLabels(movies);
    makeValues(movies);
  }, []);

  // create labels from the movie object keys, this might not be nessary
  const makeLabels = (movies) => {
    let labels = Object.keys(movies[0]);
    let values = ["_id", "Poster", "Trailer", "Plot", "Actors", "Title", "__v"];

    // take out the labels we don't want to filter on. Will use it to create select fields in return statement
    labels = labels.filter((label) => !values.includes(label));
    setLabels(labels);
  };

  const makeValues = (movies) => {
    // create values for label genre
    setGenres([...new Set(movies.map((value) => value.Genre).flat())]);

    //create values for label year
    const years = movies.map((value) => value.Year).sort((a, b) => a - b);
    setYears([...new Set(years)]);

    // create values for label rating
    setRatings([...new Set(movies.map((value) => value.Rated))]);

    // create values for runtime
    setRuntimes([...new Set(movies.map((value) => value.Runtime))]);

    // create values for Director
    setDirectors([...new Set(movies.map((value) => value.Director))]);

    // create values for Language
    setLanguages([...new Set(movies.map((value) => value.Language))]);
  };


  // create an object from the values of the selectfields. 
  const handleChange = (e) => {

    console.log(e.target.value, e.target.name);
    let f = {
      ...filter,
      [e.target.name]: e.target.value
    }

    setFilter(f)
  }

  return (
    <div className="FilterContainer">
      <select onChange={handleChange} name='Genre' required>
        <option value=""> Genre </option>
        {genres.map((genre) => (
          <option value={genre} key={genre}>
            {genre}
          </option>
        ))}
      </select>
      <select onChange={handleChange} name="Year" required>
        <option value=""> Year </option>
        {years.map((year) => (
          <option value={year} key={year}>
            {year}
          </option>
        ))}
      </select>
      <select onChange={handleChange} name="Rating" required>
        <option value=""> Rating </option>
        {ratings.map((rating) => (
          <option value={rating} key={rating}>
            {rating}
          </option>
        ))}
      </select>
      <select onChange={handleChange} name="Runtime" required>
        <option value=""> Runtime </option>
        {runtimes.map((runtime) => (
          <option value={runtime} key={runtime}>
            {runtime}
          </option>
        ))}
      </select>
      <select onChange={handleChange} name="Director" required>
        <option value=""> Director </option>
        {directors.map((director) => (
          <option value={director} key={director}>
            {director}
          </option>
        ))}
      </select>
      <select onChange={handleChange} name="Language" required>
        <option value=""> Language </option>
        {languages.map((language) => (
          <option value={language} key={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filtermovies;
