import { gql } from "@apollo/client";

export const uploadFile = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      filename
      url
    }
  }
`;
