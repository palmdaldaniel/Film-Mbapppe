const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get('/whoami', userController.whoami)


router.post('', userController.createUser)
router.put("/:userId", userController.editUser); //Edit User



module.exports = router;
