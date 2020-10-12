const Users = require("../Database/Models/userModel");
const { sign } = require("jsonwebtoken");

exports.createrUser = async ({ userName, email, password }, res) => {
  try {
    const user = new Users({
      userName,
      email,
      emailVarified: false,
      address: "empty",
      password,
      phoneNo: "empty",
      phoneVarified: false,
    });
    const addedUser = await user.save();
    if (addedUser) {
      const token = sign({ uid: addedUser._id }, process.env.JWT_SECTRET, {
        expiresIn: "7d",
      });
      res.cookie("jwt", token);
      return "User created successfully.";
    }
  } catch (error) {
    if (error.message.includes("E11000"))
      return "Account with this email already exists";
    return `Error${error.message}`;
  }
};
