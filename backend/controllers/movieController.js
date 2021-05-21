const Movie = require("../models/Movie");

const getAllMovies = async (req, res) => {
    let movies = await Movie.find().exec()
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

