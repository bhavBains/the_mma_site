import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class EventsList extends Component {
  constructor(props) {
    super(props);

    this._eventCard = React.createRef();
  }

  renderEvents = () => {
    return this.props.data.events.map((event) => {
      return (
        <li className="event-list" key={event.id}>
          <Link to="/details">
            <div
              className="event-card shadow-lg p-3 m-2 mb-4 badge"
              ref={(node) => (this._eventCard = node)}
            >
              <Row style={{ flexDirection: "column" }}>
                <Col className="center m-1">{event.eventTitle}</Col>
                <Col className="center m-1">Lightweight bout</Col>
              </Row>
              <Row>
                <Col className="event-fighter-mini">
                  <div className="fighter-image">
                    <img
                      src="https://images.pexels.com/photos/2605587/pexels-photo-2605587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="fighter"
                      className="rounded-circle m-2 p-1"
                      height="80px"
                      width="80px"
                    />
                  </div>
                  <div className="fighter-info">{event.fighter}</div>
                </Col>
                <Col className="center">VS</Col>
                <Col className="event-fighter-mini">
                  <div className="fighter-image">
                    <img
                      src="https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                      alt="fighter"
                      className="rounded-circle m-2 p-1"
                      height="80px"
                      width="80px"
                    />
                  </div>
                  <div className="fighter-info">info</div>
                </Col>
              </Row>
              <Row className="center m-3">Date/Time</Row>
              <Row className="center m-3">Venue</Row>
            </div>
          </Link>
        </li>
      );
    });
  };

  componentDidUpdate() {
    console.log(this._eventCard);
  }

  render() {
    // On Page Loading
    if (this.props.data.loading) return <h3></h3>; //Place loading image/animations here

    if (!this.props.data.loading) {
      return (
        <div>
          <Container>{this.renderEvents()}</Container>
        </div>
      );
    }
  }
}

const eventsQuery = gql`
  {
    events {
      id
      fighter
      eventTitle
    }
  }
`;

export default graphql(eventsQuery)(EventsList);
