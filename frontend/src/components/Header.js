import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar sticky="top" className="justify-content-center header">
          <Navbar.Brand className="text-color" href="/">
            <h3>THE MMA SITE</h3>
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default Header;
