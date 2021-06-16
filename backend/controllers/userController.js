const User = require("../models/User");
const Encrypt = require("../Encrypt");
const utils = require("../core/utilities");

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
const createUser = async (req, res) => {
  // destructure req.body object
  const { email, password } = req.body;

  // check if password is strong
  const passwordIsStrong = utils.passwordValidator(password);

  // check if email is valid
  const validateEmail = utils.emailValidator(email);

  let userExists = await User.exists({ email: email });

  if (userExists) {
    return res
      .status(400)
      .json({ error: "A user with that email already exists" });
  }

  else if (!validateEmail) {
    res.status(404).json({ failed: "Email is not valid" });
    return;

  } else if (!passwordIsStrong) {
    res.status(404).json({ failed: "Password is not valid" });
    return;

  } else {
    let user = await User.create(req.body);
    user.password = undefined;
    req.session.user = user;
    res.json(user);
  };

};


// Edit User
const editUser = async (req, res) => {
  let user;
  let name = req.body.name;
  let password = req.body.password;
  if (password) {
    password = Encrypt.encrypt(password);
    user = await User.findByIdAndUpdate(req.params.userId, { password: password }, { new: true }).exec();
    user.password = undefined;
  }
  if (name) {
    user = await User.findByIdAndUpdate(req.params.userId, { name: name }, { new: true }).exec();
  }

  req.session.user = user;
  res.send(user);
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
      return res.json(user);
    }
    return res.status(401).json({ error: "Wrong email or password" });
  }
  return res.status(401).json({ error: "Wrong email or password" });

};

// log out
const logout = (req, res) => {
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
  createUser,
  loginUser,
  whoami,
  getAllUsers,
  getUserById
}

