const { gql } = require("apollo-server-express");

module.exports = gql`
  type File {
    filename: String!
    url: String!
  }
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
    uploadFile(file: Upload!): File!
    createUser(userName: String!, email: String!, password: String!): String!
    loginUser(email: String!, password: String!): String!
    logOutUser: String!
  }
`;
