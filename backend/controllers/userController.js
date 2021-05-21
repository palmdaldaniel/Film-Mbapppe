const User = require("../models/User");
const Encrypt = require("../Encrypt");

// log out
const logout = (req, res) => {
    console.log(
      "Logged out:",
      req.session.user.firstName,
      req.session.user.lastName
    );
    delete req.session.user;
    res.json({ success: "Logged out successfully" });
  };


module.exports = {logout};
