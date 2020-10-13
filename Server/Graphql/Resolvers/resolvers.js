const api = require("../../api/api");

module.exports = {
  Query: {
    hello: () => "Hello",
  },
  Mutation: {
    createUser: (_, userData, { res }) => api.createUser(userData, res),
    loginUser: (_, userData, { res }) => api.loginUser(userData, res),
  },
};
