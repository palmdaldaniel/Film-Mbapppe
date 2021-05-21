const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const movieSchema = new Schema({
    title: { type: String, required: true },
    productionCountries:  [{type: String}],
    productionYear:  {type: Number},
    length:  {type: Number},
    genre:  {type: String},
    language:  {type: String},
    director:  {type: String},
    actors:  [{type: String}],
    description:  {type: String},
    images:  [{type: String}],
    youtubeTrailers:  {type: String},
});


const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
