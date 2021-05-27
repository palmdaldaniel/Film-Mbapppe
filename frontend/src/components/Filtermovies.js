import { useEffect, useState } from "react";

const Filtermovies = ({ movies }) => {
  const [labels, setLabels] = useState([]);
  console.log(labels);

  const [genres, setGenres] = useState([]);
  const [years, setYears] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [runtimes, setRuntimes] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [languages, setLanguages] = useState([]);
  console.log(languages);

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

  /*  const makeValuesForGenres = (movies) => {
    const values = movies.map((value) => value.Genre).flat();
    const unique = [...new Set(values)];
    setGenres(unique);
  }; */

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

  return (
    <div className="FilterContainer">
      <select name="Genre" required>
        <option value=""> Genre </option>
        {genres.map((genre) => (
          <option value={genre} key={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filtermovies;
