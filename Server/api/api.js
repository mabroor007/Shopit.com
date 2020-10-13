const Users = require("./users");

module.exports = {
  createUser: Users.createrUser,
  loginUser: Users.loginUser,
  logOutUser: Users.logOutUser,
  getUserDataById: Users.getUserDataById,
  getCurrentUserData: Users.getCurrentUserData,
};
