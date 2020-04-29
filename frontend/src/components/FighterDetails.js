import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class FighterDetails extends Component {
  render() {
    return (
      <div id="fighter-details">
        <Container>
          <h3 className="heading m-3 p-1">Jon "Bones" Jones</h3>
          <Row>
            <Col className="fighter-image">
              <img
                src="https://images.pexels.com/photos/2605587/pexels-photo-2605587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="fighter"
                className="rounded-circle m-2 p-1 shadow"
                height="200px"
                width="200px"
              />
            </Col>
          </Row>
          <ul className="list-group px-4">
            <li className="list-group-item m-1">
              <Row className="ml-2">
                <Col xs="4">Age</Col>
                <Col className="ml-3">31</Col>
              </Row>
            </li>
            <li className="list-group-item m-1">
              <Row className="ml-2">
                <Col xs="4">weight class</Col>
                <Col className="ml-3">lightweight</Col>
              </Row>
            </li>
            <li className="list-group-item m-1">
              <Row className="ml-2">
                <Col xs="4">weight</Col>
                <Col className="ml-3">205</Col>
              </Row>
            </li>
            <li className="list-group-item m-1">
              <Row className="ml-2">
                <Col xs="4">record</Col>
                <Col className="ml-3">20-1-0</Col>
              </Row>
            </li>
            <li className="list-group-item m-1">
              <Row className="ml-2">
                <Col xs="4">birthdate</Col>
                <Col className="ml-3">apr 20, 1989</Col>
              </Row>
            </li>
            <li className="list-group-item m-1">
              <Row className="ml-2">
                <Col xs="4">hometown</Col>
                <Col className="ml-3">new york</Col>
              </Row>
            </li>
            <li className="list-group-item m-1">
              <Row className="ml-2">
                <Col xs="4">association</Col>
                <Col className="ml-3">jacksons wink</Col>
              </Row>
            </li>
            <li className="list-group-item m-1">
              <Row className="ml-2">
                <Col xs="4">nationality</Col>
                <Col className="ml-3">usa</Col>
              </Row>
            </li>
            <li className="list-group-item m-1">
              <Row className="ml-2">
                <Col xs="4">height</Col>
                <Col className="ml-3">6'4" feets</Col>
              </Row>
            </li>
          </ul>
        </Container>
      </div>
    );
  }
}

export default FighterDetails;
