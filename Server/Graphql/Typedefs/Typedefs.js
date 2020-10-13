const { gql } = require("apollo-server-express");

module.exports = gql`
  type User {
    userName: String!
    email: String!
    address: String!
    emailVarified: Boolean!
    phoneVarified: Boolean!
    phoneNo: String!
  }
  type Query {
    getCurrentUserData: User
  }
  type Mutation {
    createUser(userName: String!, email: String!, password: String!): String!
    loginUser(email: String!, password: String!): String!
    logOutUser: String!
  }
`;
