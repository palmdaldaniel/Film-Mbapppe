const passwordValidator = (password) => {
  let passwordIsValid;
  // (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
  // (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
  // (?=.*[0-9])	The string must contain at least 1 numeric character
  // (?=.*[!@#$%^&*])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
  // (?=.{4,})	The string must be 4 characters or longer
  const strongPasword = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{4,})"
  );

  passwordIsValid = strongPasword.test(password);

  // returns either true or falls depending on if meets the requerirement.
  return passwordIsValid;
};

const emailValidator = (email) => {
  const emaiIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  return emaiIsValid;
};

const createSeatingMap = (rows) => {
  let seatingMap = [];
  let currentSeatnumber = 1;

  for (let i = 0; i < rows.length; i++) {
    let row = [];

    // make a loop for every row create a seat object
    for (let k = 0; k < rows[i]; k++) {
      let seat = {
        row: i + 1,
        seatNumber: currentSeatnumber,
      };
      currentSeatnumber = currentSeatnumber + 1;
      row.push(seat);
    }
    seatingMap.push(row);
  }

  return seatingMap
};

module.exports = {
  passwordValidator,
  emailValidator,
  createSeatingMap
};
