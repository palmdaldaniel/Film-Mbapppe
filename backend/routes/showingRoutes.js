const express = require("express");
const router = express.Router();

const showingController = require("../controllers/showingController");

router.get("/:showingId", showingController.getShowingById);
router.get("", showingController.getShowingByDate);
router.post("", showingController.createShowing);

module.exports = router;