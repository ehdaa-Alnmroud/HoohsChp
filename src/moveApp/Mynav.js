import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Mynav.css";

function Mynav() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" src="./img/logo.png" alt="logo"></img>{" "}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="meauto" href="#home">
              <Link to="/">FREE MOVIES</Link>
            </Nav.Link>
            <Nav.Link className="meauto" href="#features">
              Features
            </Nav.Link>
            <Nav.Link className="meauto" href="#pricing">
              DOWNLOAD
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Mynav;
