const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema/schema");

// Initiate app
const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true,
  })
);

// Production Build for deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

// CORS Middleware
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "http://localhost:3000/",
    "https://themmasite.herokuapp.com/"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

module.exports = app;
