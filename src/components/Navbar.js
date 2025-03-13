import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";

function AppNavbar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Social.ruilin.moe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div className="d-flex align-items-center">
              <Image
                src="https://lh3.googleusercontent.com/a/ACg8ocKLZZ_V0k39_Ty5JTQOOtvoGqiApBUBmL1_RJuVijV-eriLXbgd=s96-c" 
                width="40"
                height="40"
              />
            </div>
            <Nav.Link href="#">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
