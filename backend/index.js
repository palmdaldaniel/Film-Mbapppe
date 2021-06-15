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
const bookingRoutes = require("./routes/bookingRoutes");
const showingRoutes = require("./routes/showingRoutes");

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
    // console.log("MongoDB Connected...");
  })
  .catch((err) => {
    // console.log(err);
  });

  // ACL setup, we add our middleware before our routehandlers.
app.use((req, res, next) => {
  let isAdmin = req.session.user && req.session.user.role === "ADMIN"
  let errorMsg = {
    error:
      "You need a logged in user with the correct role in order to request all available users",
  }
 
  let reqPath = req.path.endsWith("/") ? req.path.replace(/\/$/, "") : req.path;

  if (reqPath === "/api/v1/users" && req.method === "GET") { //Protection for the route with getAllUsers
    if (isAdmin) {
      return next();
    } else {
      return res.status(403).json(errorMsg);
    }
  } else if (reqPath.includes("user-bookings") && req.method === "GET") {//Protection for the route with getBookingsByUserId
    if (isAdmin || req.session.user._id === req.query.userId) {
      return next();
    } else {
      return res.status(403).json(errorMsg);
    }
  }

  // next passes the request along to the next middleware or routehandler.
  next();
});

// Routes setup
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/saloons", saloonRoutes);
app.use("/api/v1/movies", movieRoutes);
app.use("/api/v1/bookings", bookingRoutes);
app.use("/api/v1/showings", showingRoutes);

// Start Server
app.listen(port, (err) => {
  if (err) {
    // console.error("The server could not start.");
    // console.log(err);
  }
  // console.log(`Listening on port ${port}`);
});
