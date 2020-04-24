import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import React from "react";

// Import all components here
import Header from "./components/Header";
import EventsList from "./components/EventsList";

function App() {
  return (
    <div className="App">
      <Header />
      <EventsList />
    </div>
  );
}

export default App;
