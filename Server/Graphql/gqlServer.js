const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./Typedefs/Typedefs");
const resolvers = require("./Resolvers/resolvers");
const { verify } = require("jsonwebtoken");
const api = require("../api/api");

// GraphQl server
module.exports = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: true,
  playground: true,
  context: async ({ req, res }) => {
    let userData;
    try {
      // token check
      let token = req.cookies._user;
      userData = verify(token, process.env.JWT_SECTRET);
      const user = await api.getUserDataById(userData.uid);
      if (user) return { user: { ...user, password: null }, req, res };
    } catch {}
    return { user: null, req, res };
  },
});
