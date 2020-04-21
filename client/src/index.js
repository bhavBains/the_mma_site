import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { Route, HashRouter } from "react-router-dom";

import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

import App from "./App";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://127.0.0.1:5000/graphql",
});

const client = new ApolloClient({
  cache,
  link,
});

// const client = new ApolloClient({
//   // // It will refetch data, rerender the component if data is modified. No need to rerender manually
//   // dataIdFromObject: (o) => o.id,
//   link: new createHttpLink({
//     uri: "/graphql",
//     // credentials: "same-origin",
//   }),
// });

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
