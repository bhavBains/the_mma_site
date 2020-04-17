const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema/schema");
// Initiate app
const app = express();

module.exports = app;

app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true,
  })
);
