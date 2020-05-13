import React, { Component } from "react";
import { Container } from "react-bootstrap";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class EventDetails extends Component {
  renderEventDetails() {
    // Need event details data
    // map over main card and undercard array list
    return this.props.data.events.map(({ fighter, id }) => {
      return (
        <li key={id} className="list-group-item p-2 my-2 fight-list shadow">
          <h6 className="sub-heading my-2">Lightweight</h6>
          <div className="fighters-info w-100">
            <div>
              <img
                src="https://images.pexels.com/photos/2605587/pexels-photo-2605587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="fighter"
                className="rounded-circle m-2 p-1"
                height="80px"
                width="80px"
              />
              <h6 className="">{fighter}</h6>
              <h6 className="">18-4-0</h6>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2605587/pexels-photo-2605587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="fighter"
                className="rounded-circle m-2 p-1"
                height="80px"
                width="80px"
              />
              <h6 className="">JUSTIN GAETHGE</h6>
              <h6 className="">18-4-0</h6>
            </div>
          </div>
        </li>
      );
    });
  }

  render() {
    // On Page Loading
    if (this.props.data.loading) return <h3></h3>; //Place loading image/animations here

    if (!this.props.data.loading) {
      // Bring data in from this.props.data
      return (
        <div className="event-details">
          <Container>
            <div className="details-card p-1 ">
              <h2 className="heading my-1">UFC 250</h2>
              <h6 className="sub-heading mb-1">VENUE: T-MOBILE ARENA</h6>
              <h6 className="sub-heading mb-1">SAT MARCH 7</h6>

              <h3 className="heading my-3">MAIN CARD</h3>

              <ul className="list-group w-100">{this.renderEventDetails()}</ul>
              <h3 className="heading my-3">UnderCARD</h3>

              <ul className="list-group w-100">{this.renderEventDetails()}</ul>
            </div>
          </Container>
        </div>
      );
    }
  }
}

const eventDetailsQuery = gql`
  {
    events {
      id
      fighter
      eventTitle
    }
  }
`;

export default graphql(eventDetailsQuery)(EventDetails);
