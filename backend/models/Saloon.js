const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saloonSchema = new Schema({
    name: { type: String, required: true },
    seats: { type: Number },
    seatsPerRow: [{ type: Number }],
});

const Saloon = mongoose.model("Saloon", saloonSchema);

module.exports = Saloon;
