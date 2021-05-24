const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const showingSchema = new Schema({
  
  // saloon: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Saloon",
  //   required: true
  // },
  saloon: {
    type: Number, 
    require: true
  },
  film: {
    type: Schema.Types.ObjectId,
    ref: "Movie",
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }, 
  price: {
    type: Number, 
    required: true
  }
});


const Showing = mongoose.model("Showing", showingSchema);

module.exports = Showing;
