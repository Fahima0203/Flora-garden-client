// import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Nbar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWFiNYv5ZEIQL4pg8mE3NIyPYZbthEMU0mqw&usqp=CAU"} style={{ width: "70px", borderRadius: "30px", height:"60px", marginRight: "25px" }} alt="" />
        <Navbar.Brand href="/">Flora Garden</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/PlantsDisplay">Plants</Nav.Link>

            <NavDropdown title="Add Plants" id="basic-nav-dropdown">

              <NavDropdown.Item href="/Login">Add Plants </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/SignUp">
                SignUp
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>

          {/* <form className="d-flex" action="https://www.google.com/search">
            <Form.Control
              type="search"
              name="q"
              id="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <button class="btn btn-primary" variant="outline-success">Search</button>
          </form> */}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nbar;