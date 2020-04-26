import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Import all components here
import Header from "./components/Header";
import EventsList from "./components/EventsList";
import EventDetails from "./components/EventDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Route exact path="/" component={EventsList} />
        <Route exact path="/details" component={EventDetails} />
      </BrowserRouter>
    </div>
  );
}

export default App;
