const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    Title: { type: String, required: true },
    Year: { type: Number, required: true },
    Rated: { type: String, required: true },
    Runtime: { type: String, required: true },
    Genre: { type: Array, required: true },
    Director: { type: String, required: true },
    Actors: { type: Array, required: true },
    Plot: { type: String, required: true },
    Language: { type: String, required: true },
    Poster: { type: String, required: true },
    Trailer: { type: String, required: true }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
