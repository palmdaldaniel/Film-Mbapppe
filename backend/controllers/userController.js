const User = require("../models/User");
const Encrypt = require("../Encrypt");

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

module.exports = { createUser };
