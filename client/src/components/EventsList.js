import React, { Component } from "react";
import eventsQuery from "../queries/Events";
import { graphql } from "react-apollo";
import Header from "./Header.js";

class EventsList extends Component {
  render() {
    return (
      <div>
        <Header />
        <h4>I am events list</h4>
      </div>
    );
  }
}

export default graphql(eventsQuery)(EventsList);
