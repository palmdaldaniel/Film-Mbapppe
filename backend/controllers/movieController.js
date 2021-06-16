const Movie = require("../models/Movie");

const getAllMovies = async (req, res) => {
  let movies = await Movie.find().exec();
  res.json(movies);
  return;
};

const filterAllMovies = async (req, res) => {
  // year will come in as a string from user input so we need to convert in to a number to mathc schema.
  let yearToNumber = parseInt(req.body.Year);

  //for pagination
  const { page = req.query.page } = req.query //at first rendering page=1, in the result of that function we will get amount of movies that match request. We will use that number to count how many pages we are going to have. and render the amount in the pagination bar 
  const limit = 9 //how many documents that comes back from MongoDB per request

  //url for testing http://localhost:3001/api/v1/movies?actor=morgan&title=spiral
  let querySearch = new RegExp(`${req.query.search ? req.query.search : ""}\\w*`,"gi");

  // All filters are stored in one object
  let filter = {
    $or: [{ Title: querySearch }, { Actors: querySearch }],
    Genre: new RegExp(`${req.body.Genre ? req.body.Genre : ""}\\w*`, "gi"),
    Rated: new RegExp(`${req.body.Rating ? req.body.Rating : ""}\\w*`, "gi"),
    Director: new RegExp(`${req.body.Director ? req.body.Director : ""}\\w*`, "gi"),
    Language: new RegExp(`${req.body.Language ? req.body.Language : ""}\\w*`, "gi"),
    Runtime: new RegExp(`${req.body.Runtime ? req.body.Runtime : ""}\\w*`, "gi"),
    // if there is a query with year include that in the find method otherwise we run 0 to infintiy to make sure we get all movies in db.
    Year: yearToNumber ? yearToNumber : { $gt: 0, $lt: Infinity },
  }

  const amount = await Movie.countDocuments(filter)//amount of movies that match request

  //if the find method dosen't have any arguments, all documents will be return
  let movies = await Movie.find(filter)
    .limit(limit * 1) //for pagination,how many return per one request
    .skip((page - 1) * limit)//for pagination, how many skip if page=2 then skip 9, if page=3 then skip 18
    .exec()

  res.json({ movies, amount }); //returns limited amount of movies and number how many movies that matchas filter
};


const getMovieById = async (req, res) => {
  Movie.findById(req.params.movieid).exec((err, movie) => {
    // Checks for thrown errors from the method itself.
    if (err) {
      res.status(400).json({ error: "Something went wrong" });
      return;
    }

    // If no match is found in the DB.
    if (!movie) {
      res
        .status(404)
        .json({ error: `Movie with id ${req.params.movieid} does not exist` });
      return;
    }

    res.json(movie);
  });
};

module.exports = {
  getAllMovies,
  getMovieById,
  filterAllMovies,
};
