const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get('/whoami', userController.whoami)



router.put("/:userId", userController.editUser); //Edit User
router.post('/login', userController.loginUser)
router.post('', userController.createUser)



module.exports = router;
