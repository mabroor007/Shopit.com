import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { loginUser } from "../Graphql/Mutation/mutation";
import { getCurrentUserDataQuery } from "../Graphql/Query/query";

const App = () => {
  let [login, { data }] = useMutation(loginUser);
  const Query = useQuery(getCurrentUserDataQuery);

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
    </div>
  );
};

export default App;
