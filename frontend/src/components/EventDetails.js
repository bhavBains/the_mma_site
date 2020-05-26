import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class EventDetails extends Component {
  renderEventDetails() {
    // Need event details data
    // map over main card and undercard array list
    console.log(this.props.data)
    return this.props.data.upcomingEvents.map(({ eventName, id }) => {
      return (
        <li key={id} className="fight-list list-group-item p-2 my-2 shadow">
          <h6 className="sub-heading my-2">Lightweight</h6>
          <div className="fighters w-100 row">
            <div className="col fighters-info">
              <Link to="/fighter">
                <img
                  src="https://images.pexels.com/photos/2605587/pexels-photo-2605587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="fighter"
                  className="rounded-circle my-1 p-1"
                  height="80px"
                  width="80px"
                />
                <h6 className="px-1">{eventName}</h6>
                <h6 className="px-1">18-4-0</h6>
              </Link>
            </div>
            <div className="col fighters-info">
              <img
                src="https://images.pexels.com/photos/2605587/pexels-photo-2605587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="fighter"
                className="rounded-circle my-1 p-1"
                height="80px"
                width="80px"
              />
              <h6 className="px-1">Justin GAETHGE</h6>
              <h6 className="px-1">18-4-0</h6>
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
              <div className="fights">
                <div className="main-card fight-card">
                  <h3 className="heading my-3">MAIN CARD</h3>
                  <ul className="list-group">{this.renderEventDetails()}</ul>
                </div>
                <div className="under-card fight-card">
                  <h3 className="heading my-3">UNDER CARD (test)</h3>
                  <ul className="list-group">{this.renderEventDetails()}</ul>
                </div>
              </div>
            </div>
          </Container>
        </div>
      );
    }
  }
}

const eventDetailsQuery = gql`
  {
    upcomingEvents {
      id
      eventName
      eventLocation
      fighterNameRed
    }
  }
`;

export default graphql(eventDetailsQuery)(EventDetails);
