import React, { Component } from "react";
import eventsQuery from "../queries/Events";
import { graphql } from "react-apollo";
import { Row, Col } from "react-bootstrap";

class EventsList extends Component {
  render() {
    return (
      <div>
        {/* event card div, will be list of these */}
        <div className="event-card">
          <Row className="">
            <div className="d-flex justify-content-center color-text">
              Heavyweight Bout
            </div>
          </Row>
          <Row>
            <Col>
              <div>
                <img />
              </div>
              <div>name</div>
              <div>Record</div>
            </Col>
            <Col>VS</Col>
            <Col>
              <div>
                <img />
              </div>
              <div>name</div>
              <div>Record</div>
            </Col>
          </Row>
          <Row>
            <div>Date and Time</div>
          </Row>
          <Row>
            <div>Venue</div>
          </Row>
        </div>
      </div>
    );
  }
}

export default graphql(eventsQuery)(EventsList);
