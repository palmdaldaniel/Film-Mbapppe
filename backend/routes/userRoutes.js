const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");


router.put("/:userId", userController.editUser); //Edit User

module.exports = router;
