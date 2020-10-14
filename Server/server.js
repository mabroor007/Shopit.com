const express = require("express");
const GraphQl = require("./Graphql/gqlServer");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

// Configuration
dotenv.config();

// App initialization
const app = express();

// Database Connection
mongoose.connect(
  process.env.MONGOURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Database Connected 🚀 ...")
);

// Cookie Parser Middleware
app.use(cookieParser());

// Middleware for GraphQl api
GraphQl.applyMiddleware({ app });

app.listen(4000, () => {
  console.log("Server Up and Running 🚀 on port 4000...");
});
