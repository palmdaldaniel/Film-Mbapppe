const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");

const port = 3001;
const uri =
  "mongodb+srv://kyd:1234@cluster0.qpr92.mongodb.net/MoviesApp?retryWrites=true&w=majority";

const userRoutes = require("./routes/userRoutes");
const testRoutes = require("./routes/testRoutes");
const saloonRoutes = require("./routes/saloonRoutes");
const movieRoutes = require("./routes/movieRoutes");
const showingRoutes = require("./routes/showingRoutes")

// Server Setup
const app = express();

app.use(express.json());

// Session Setup
app.use(
  session({
    secret: "The Phantom Menace", 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: "auto" },
  })
);

// Mongo DB Atlas Setup
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((err) => {
    console.log(err);
  });

// Routes setup
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/saloons", saloonRoutes);
app.use("/api/v1/movies", movieRoutes);
app.use("/api/v1/showings", showingRoutes);

// Start Server
app.listen(port, (err) => {
  if (err) {
    console.error("The server could not start.");
    console.log(err);
  }
  console.log(`Listening on port ${port}`);
});
