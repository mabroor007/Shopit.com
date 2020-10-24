const api = require("../../api/api");

module.exports = {
  Query: {
    getCurrentUserData: (_, __, { user }) => api.getCurrentUserData(user),
  },
  Mutation: {
    uploadFile: (_, { file }) => api.uploadFileFromStream(file),
    createUser: (_, userData, { res }) => api.createUser(userData, res),
    loginUser: (_, userData, { res }) => api.loginUser(userData, res),
    logOutUser: (_, __, { res }) => api.logOutUser(res),
  },
};
