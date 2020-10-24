const Users = require("./users");
const Storage = require("./storage");

module.exports = {
  createUser: Users.createrUser,
  loginUser: Users.loginUser,
  logOutUser: Users.logOutUser,
  getUserDataById: Users.getUserDataById,
  getCurrentUserData: Users.getCurrentUserData,
  uploadFileFromStream: Storage.uploadFileFromStream,
};
