const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./Typedefs/Typedefs");
const resolvers = require("./Resolvers/resolvers");
const { verify } = require("jsonwebtoken");

// GraphQl server
module.exports = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: true,
  playground: true,
  context: ({ req, res }) => {
    let userData;
    try {
      // token check
      let token = req.cookies._user;
      userData = verify(token, process.env.JWT_SECTRET);
    } catch {}
    // setting userData inside context
    return { userData, req, res };
  },
});
