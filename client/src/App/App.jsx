import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { loginUser, uploadFile } from "../Graphql/Mutation/mutation";
import { getCurrentUserDataQuery } from "../Graphql/Query/query";

const App = () => {
  // Hooks
  let [login, { data }] = useMutation(loginUser);
  const Query = useQuery(getCurrentUserDataQuery);
  const [fileUpload] = useMutation(uploadFile, {
    onCompleted: (data) => console.log(data),
  });

  // Methods
  const handelFileUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      fileUpload({ variables: { file } });
    }
  };

  return (
    <div>
      <h1>Helllo first component</h1>
      <p>{JSON.stringify(data)}</p>
      <p>{JSON.stringify(Query.data)}</p>
      <button
        onClick={() => {
          console.log("Called");
          login({
            variables: {
              email: "amabroor007@gmail.com",
              password: "81c328cc777",
            },
          });
        }}
      >
        login
      </button>
      <hr style={{ color: "orange" }} />
      <input type="file" onChange={handelFileUpload} />
    </div>
  );
};

export default App;
