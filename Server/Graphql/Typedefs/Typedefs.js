const { gql } = require("apollo-server-express");

module.exports = gql`
  type Query {
    hello(name: String): String!
  }
`;
