const Movie = require("../models/Movie");

const getAllMovies = async (req, res) => {

  //first we check if the query object has any content. If not we send back all users
  if (Object.keys(req.query).length === 0) {
    let movies = await Movie.find().exec()
    res.json(movies)
    return
  }

  //url for testing http://localhost:3001/api/v1/movies?title=cruella
  let queryTitle = new RegExp(`^${req.query.title ? req.query.title : ''}\\w*`, 'gi') 
  

  //if the find method dosen't have any arguments, all documents will be return
  let movies = await Movie.find({ Title: queryTitle}).exec()

  if (movies.length === 0) {
    res.send('No movies matched the filter')
  }
  res.json(movies)
}


const getMovieById = async (req, res) => { //for testing movie id 60a7866ff38ee6481eebbe35
  console.log(`req.params`, req.params)
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
}


module.exports = {
  getAllMovies,
  getMovieById
};

