import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class EventsList extends Component {
  render() {
    return (
      <Container>
        <div className="event-card mx-auto shadow-lg p-3 m-4 badge">
          <Row style={{ flexDirection: "column" }}>
            <Col className="center m-1">UFC 250</Col>
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
              <div className="fighter-info">info</div>
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
      </Container>
    );
  }
}

export default EventsList;
