const express = require("express");
const router = express.Router();

const saloonController = require("../controllers/testController");

router.get("/:saloonId", saloonController.getSaloonById);
router.delete("/:saloonId", saloonController.removeSaloon);
router.post("", saloonController.addSaloon);
router.get("", saloonController.getAllSaloons);

module.exports = router;
