const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movieController");

router.get('/:movieid', movieController.getMovieById)
router.post("/filter", movieController.filterAllMovies)
router.get('', movieController.getAllMovies)

module.exports = router;