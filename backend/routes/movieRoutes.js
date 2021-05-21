const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movieController");


router.get('', movieController.getAllMovies)
router.get('/:movieid', movieController.getMovieById)

module.exports = router;