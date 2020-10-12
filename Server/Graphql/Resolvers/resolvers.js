const api = require("../../api/api");

module.exports = {
  Query: {
    hello: () => "Hello world",
  },
  Mutation: {
    createUser: (_, userData, { res }) => api.createUser(userData, res),
  },
};
