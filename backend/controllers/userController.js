const User = require("../models/User");
const Encrypt = require("../Encrypt");


const editUser = async (req, res) => {
    let user;

    User.findById(req.params.userId).exec(async (err, result) => {

      // checks for errors
      if (err) {
        res.status(400).json({ error: "Something went wrong" });
        return;
      }
  
      // in case no matching are found in the DB.
      if (!result) {
        res
          .status(404)
          .json({ error: `User with id ${req.params.userId} does not exist` });
        return;
      }
  
      user = result;
      console.log("User: ", user);
      Object.assign(user, req.body);
      console.log("Updated user: ", user);
  
      // save it back in the DB .
      await user.save();
    });
  
    res.send("Ok");
  }



// log out
const logout = (req, res) => {
    console.log(
      "Logged out:",
      req.session.user.Name,
    );
    delete req.session.user;
    res.json({ success: "Logged out successfully" });
  };


module.exports = {logout};
