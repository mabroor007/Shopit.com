const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./Typedefs/Typedefs");
const resolvers = require("./Resolvers/resolvers");

// GraphQl server
module.exports = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});
