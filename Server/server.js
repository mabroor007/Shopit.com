const express = require("express");
const GraphQl = require("./Graphql/gqlServer");
const mongoose = require("mongoose");

// App initialization
const app = express();

// Database Connection
mongoose.connect(
  "mongodb://127.0.0.1:27017/shopit",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Database Connected 🚀 ...")
);

// Middleware for GraphQl api
GraphQl.applyMiddleware({ app });

app.listen(3000, () => {
  console.log("Server Up and Running 🚀 on port 3000...");
});
