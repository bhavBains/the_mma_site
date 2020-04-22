import React from "react";
import EventsList from "./components/EventsList";
import { Container } from "react-bootstrap";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <EventsList />
      </Container>
    </div>
  );
}

export default App;
