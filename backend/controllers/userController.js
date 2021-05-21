const User = require("../models/User");
const Encrypt = require("../Encrypt");

const createUser = async (req, res) => {

    let user = await User.create(req.body);

    console.log(req.body);
    user.password = undefined;

    res.json(user);


}


module.exports = {createUser};
