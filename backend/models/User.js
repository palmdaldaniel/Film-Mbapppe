const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// We need encrypt in order to hash our passwords later on.
const Encrypt = require("../Encrypt");

const userSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true }
});

// Here we add some built-in middleware in mongoose. Specifically we want to injects some code before something is saved to the database. We must have a regular javascript function here because we want acces to "this" object which in our case is the mongo document that was just creatd by Model.create().
userSchema.pre("save", async function (next) {
  this.password = Encrypt.encrypt(this.password);
  return next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
