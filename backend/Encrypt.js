const crypto = require("crypto");

module.exports = class Encrypt {
  // Sha 256-encryption with the build in Node.js module crypto.
  static encrypt(password) {
    return (
      crypto
        // Creates and returns a Hmac object that uses the given algorithm and key (salt). sha stands for Secure Hash Algorithm.
        .createHmac("sha256", "Attack of the Clones")
        .update(password) // Hashes the password
        .digest("hex") // The encoding type
    );
  }
};
