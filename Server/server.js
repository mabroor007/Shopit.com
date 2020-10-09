const express = require("express");
const GraphQl = require("./Graphql/gqlServer");

// App initialization
const app = express();

// Middleware
GraphQl.applyMiddleware({ app });

app.listen(3000, () => {
  console.log("Server Up and Running on port 3000...");
});
