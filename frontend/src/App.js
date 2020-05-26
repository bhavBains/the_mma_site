import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import React from "react";
import { Switch, Route } from "react-router-dom";

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
      <Switch>
        <Route exact path="/" component={EventsList} />
        <Route path="/details" component={EventDetails} />
        <Route path="/fighter" component={FighterDetails} />
      </Switch>
    </div>
  );
}

export default App;
