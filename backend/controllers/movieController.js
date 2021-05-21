const Movie = require("../models/Movie");

const getAllMovies = async (req, res) => {
    let movies = await Movie.find().exec()
    res.json(movies)
}



module.exports = {
    getAllMovies
};

