const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get('/whoami', userController.whoami)
router.put("/:userId", userController.editUser) //Edit User
router.post('/login', userController.loginUser)
router.post('/logout', userController.logout) //log out user
router.get('/:userId', userController.getUserById)
router.get('', userController.getAllUsers)
router.post('', userController.createUser)
router.post("/register",userController.register);





module.exports = router;
