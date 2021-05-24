const mongoose = require("mongoose");
const Showing = require("./models/Showing");

const uri =
  "mongodb+srv://kyd:1234@cluster0.qpr92.mongodb.net/MoviesApp?retryWrites=true&w=majority";

// const mockData = require("./mockData.json");
const mockScreeningData = require("./mockScreeningData.json");

console.log(mockScreeningData);

// Database connection
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDb connected...");
    mockDataFunc();
  })
  .catch((err) => {
    console.log(err);
  });

async function mockDataFunc() {
  console.log("Data is being stored ... ");
  await Showing.create(mockScreeningData);
  console.log("Insertion completed.");
  console.log("Shutting down");
  mongoose.connection.close();
}
