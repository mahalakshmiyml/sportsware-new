import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopMenuBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Sportsware
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <NavDropdown title="Men" id="collasible-nav-dropdown">
            <Nav.Link as={Link} to="/men">
              Men
            </Nav.Link>
                <NavDropdown.Item as={Link} to="/men/hoodies">Hoodies</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/men/pants">Pants</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/men/polo">Polo</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/men/shorts">Shorts</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/men/t-shirts">T-Shirts</NavDropdown.Item>
                <NavDropdown.Divider />
                </NavDropdown>
            <Nav.Link as={Link} to="/women">
              Women
            </Nav.Link>
            <Nav.Link as={Link} to="/kids">
              Customization
            </Nav.Link>
            <Nav.Link as={Link} to="/customization">
              Customization
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopMenuBar;
