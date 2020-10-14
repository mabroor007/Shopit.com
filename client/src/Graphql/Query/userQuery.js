import { gql } from "@apollo/client";

export const getCurrentUserDataQuery = gql`
  query {
    getCurrentUserData {
      userName
      email
    }
  }
`;
