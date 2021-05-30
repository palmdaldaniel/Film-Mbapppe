const User = require("../models/User");
const Encrypt = require("../Encrypt");

const getAllUsers = async (req, res) => {
  let users = await User.find().exec();
  res.json(users);
};

const getUserById = async (req, res) => {
  // with callback and exec()
  User.findById(req.params.userId).exec((err, user) => {
    if (err) {
      res.status(400).json({ error: "Something went wrong" });
      return;
    }

    if (!user) {
      res
        .status(404)
        .json({ error: `User with id ${req.params.userId} does not exist` });
      return;
    }

    user.password = undefined;

    res.json(user);
  });
};

//create user

{/*
  
  const createUser = async (req, res) => {
  // destructure req.body object
  const { email } = req.body;

  let userExists = await User.exists({ email: email });

  if (userExists) {
    return res
      .status(400)
      .json({ error: "An user with that email already exists" });
  }

  let user = await User.create(req.body);
  user.password = undefined;
  res.json(user);
};
*/}

const register = async (req, res) => {
  //if user exists
  let userExists = await User.exists({ email: req.body.email });
  if (userExists) return res.status(400).json({ error: "User with that email already exists." });

  //Encrypt passw
  req.body.password = encrypt(req.body.password);

  //Create user
  let newUser = await User.create(req.body);
  newUser.password = undefined;
  return res.status(200).json({ message: "Created new user!", user: newUser });
}


// Edit User
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

      req.session.user = user;
      req.session.user.password = undefined;

      // set users pw to undefined
      user.password = undefined;
      return res.json({ message: "Login successfull", loggedInUser: user });
    }
    return res.status(401).json({ error: "Wrong email or password" });
  }
  return res.status(401).json({ error: "Wrong email or password" });

};

// log out
const logout = (req, res) => {
  console.log(
    "Logged out:",
    req.session.user.name,
  );
  delete req.session.user;
  res.json({ success: "Logged out successfully" });
};

const whoami = async (req, res) => {
  // in postman res.json will say null if no user is logged in
  return res.json(req.session.user || null);
}



module.exports = {
  logout,
  editUser,
  //createUser,
  loginUser,
  whoami,
  getAllUsers,
  getUserById,
  register,
  newUser
  
}
