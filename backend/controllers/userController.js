const User = require("../models/User");
const Encrypt = require("../Encrypt");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Check if a user exists with that email
  let userExists = await User.exists({ email: email });

  if (userExists) {
    // Find user in db with findOne
    let user = await User.findOne({ email: email }).exec();
    // hash the password from the users input
    let hashedPassword = Encrypt.encrypt(password);
    // check password from user input agains the db
    if (user.password === hashedPassword) {
      // here will create a session, comes with the taks who am i
      
      // req.session.user = user;
      // req.session.user.password = undefined;

      // set users pw to undefined
      user.password = undefined;
      return res.json({ message: "Login successfull", loggedInUser: user });
    }
    return res.status(401).json({ error: "Wrong email or password" });
  } 
  return res.status(401).json({ error: "Wrong email or password" });

  
};

module.exports = { loginUser };
