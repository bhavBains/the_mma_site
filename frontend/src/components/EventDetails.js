import React, { Component } from "react";
import { Container } from "react-bootstrap";

class EventDetails extends Component {
  render() {
    return (
      <div className="event-details">
        <Container>
          <div className="details-card p-1 rounded-lg border border-4">
            <h2 className="heading my-3">UFC 250</h2>
            <h6 className="sub-heading my-1">VENUE: T-MOBILE ARENA</h6>
            <h6 className="sub-heading my-1">SAT MARCH 7</h6>

            <div className="my-3"></div>

            <h3 className="heading my-3">MAIN CARD</h3>

            <ul className="list-group my-2 w-100">
              <li className="list-group-item p-2 my-2 fight-list shadow">
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
                    <h6 className="heading">CONOR MCGREGOR</h6>
                    <h6 className="heading">18-4-0</h6>
                  </div>
                  <div>
                    <img
                      src="https://images.pexels.com/photos/2605587/pexels-photo-2605587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="fighter"
                      className="rounded-circle m-2 p-1"
                      height="80px"
                      width="80px"
                    />
                    <h6 className="heading">JUSTIN GAETHGE</h6>
                    <h6 className="heading">18-4-0</h6>
                  </div>
                </div>
              </li>
              <li className="list-group-item p-2 my-2 fight-list">second</li>
              <li className="list-group-item p-2 my-2 fight-list"></li>
              <li className="list-group-item p-2 my-2 fight-list"></li>
              <li className="list-group-item p-2 my-2 fight-list"></li>
            </ul>
          </div>
        </Container>
      </div>
    );
  }
}

export default EventDetails;
