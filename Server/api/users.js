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
      res.cookie("_user", token, { httpOnly: true });
      return "User created successfully.";
    }
  } catch (error) {
    if (error.message.includes("E11000"))
      return "Account with this email already exists";
    return `Error:${error.message}`;
  }
};

exports.loginUser = async ({ email, password }, res) => {
  try {
    const user = await Users.findOne({ email });
    if (user && user.password === password) {
      const token = sign({ uid: user._id }, process.env.JWT_SECTRET, {
        expiresIn: "7d",
      });
      res.cookie("_user", token, { httpOnly: true });
      return "User login successfull.";
    } else return "Invalid Credentials!";
  } catch (error) {
    return `Error:${error.message}`;
  }
};
