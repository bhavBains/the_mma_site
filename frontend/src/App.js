import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Import all components here
import Header from "./components/Header";
import EventsList from "./components/EventsList";
import EventDetails from "./components/EventDetails";
import FighterDetails from "./components/FighterDetails";
import VideoBackground from "./components/VideoBackground";
import DarkMode from "./components/ActivateDarkMode";

function App() {
  return (
    <div className="App">
      <Header />
      <DarkMode />
      <VideoBackground />
      <BrowserRouter>
        <Route exact path="/" component={EventsList} />
        <Route exact path="/details" component={EventDetails} />
        <Route path="/fighter" component={FighterDetails} />
      </BrowserRouter>
    </div>
  );
}

export default App;
