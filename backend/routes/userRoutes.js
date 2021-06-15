const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get('/whoami', userController.whoami)
router.put("/:userId", userController.editUser) //Edit User
router.post('/login', userController.loginUser)
router.get('/logout', userController.logout) //log out user
router.get('/:userId', userController.getUserById)
router.get('', userController.getAllUsers)
router.post("/register", userController.createUser);

module.exports = router;
