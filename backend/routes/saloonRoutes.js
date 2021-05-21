const express = require("express");
const router = express.Router();

const saloonController = require("../controllers/saloonController");

router.get("/:saloonId", saloonController.getSaloonById);
router.put("/:saloonId", saloonController.editSaloon);
router.delete("/:saloonId", saloonController.removeSaloon);
router.post("", saloonController.addSaloon);
router.get("", saloonController.getAllSaloons);

module.exports = router;
