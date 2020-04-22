import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import * as serviceWorker from "./serviceWorker";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { Route, HashRouter } from "react-router-dom";

import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

import App from "./App";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:5000/graphql",
});

const client = new ApolloClient({
  cache,
  link,
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Route path="/" component={App}></Route>
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
