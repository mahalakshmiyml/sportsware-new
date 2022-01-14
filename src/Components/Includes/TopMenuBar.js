import React from "react";
import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../images/logo/logo.png"

const TopMenuBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image src={Logo} alt="" className="img-fluid" />
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
                <NavDropdown.Item as={Link} to="/men">
                  Men
                </NavDropdown.Item>
                <NavDropdown.Divider />
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
                <NavDropdown title="Women" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/women">
                  Women
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/women/hoodies">Hoodies</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/women/pants">Pants</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/women/shorts">Shorts</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/women/t-shirts">T-Shirts</NavDropdown.Item>
                <NavDropdown.Divider />
                </NavDropdown>
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
