const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");

const port = 3001;
const uri =
  "mongodb+srv://niklas:boolnumlist@cluster0.yffxj.mongodb.net/acl-intro-lektion?retryWrites=true&w=majority";

const userRoutes = require("./routes/userRoutes");
const testRoutes = require("./routes/testRoutes");

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

// Start Server
app.listen(port, (err) => {
  if (err) {
    console.error("The server could not start.");
    console.log(err);
  }
  console.log(`Listening on port ${port}`);
});
