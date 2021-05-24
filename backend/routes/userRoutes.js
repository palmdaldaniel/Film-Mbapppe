const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");


router.put("/:userId", userController.editUser); //Edit User
router.post('/login', userController.loginUser)
router.post('', userController.createUser)


module.exports = router;
