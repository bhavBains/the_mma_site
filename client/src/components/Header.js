import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar fixed="top" className="justify-content-center header">
          <Navbar.Brand className="text-color" href="#">
            The MMA Site
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default Header;
